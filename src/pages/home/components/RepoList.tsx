import React, { useEffect, useState, useCallback } from 'react';
import githubService from '../../../services/githubServices';
import { Box, Spinner, Alert, AlertIcon, VStack, Text, Button, useColorModeValue, Flex } from "@chakra-ui/react";
import { ChevronUpIcon, StarIcon } from "@chakra-ui/icons";


interface ApiRepository {
    id: number;
    name: string;
    language: string;
    stargazers_count: number;
}

interface RepositoryListProps {
    username: string;
}

interface Repository {
    id: number;
    name: string;
    language: string;
    stars: number;
}

const RepoList: React.FC<RepositoryListProps> = ({ username }) => {

    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = useCallback(() => {
        if (!showScroll && window.scrollY > 400) {
            setShowScroll(true);
        } else if (showScroll && window.scrollY <= 400) {
            setShowScroll(false);
        }
    }, [showScroll]);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [checkScrollTop]);
    useEffect(() => {
        const fetchRepos = async () => {
            if (username) {
                setLoading(true);
                setError(null);
                try {
                    const exists = await githubService.checkUserExists(username);
                    if (exists) {
                        const repos: ApiRepository[] = await githubService.getRepos(username);
                        const mappedRepos = repos.map((repo: ApiRepository) => ({
                            id: repo.id,
                            name: repo.name,
                            language: repo.language,
                            stars: repo.stargazers_count,
                        }));
                        setRepositories(mappedRepos);
                        setError(null);
                    } else {
                        setError('User not found');
                    }
                } catch (error) {
                    setError('Error fetching repositories');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchRepos();
    }, [username]);

    if (!username) {
        return <Box>Please enter a username to search for repositories</Box>;
    }

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return (
            <Alert status="error">
                <AlertIcon />
                {error}
            </Alert>
        );
    }
    return (
        <Box>
            <VStack spacing={4} align="stretch">
                {repositories.map((repo) => (
                    <Box key={repo.id} p={5} shadow="md" borderWidth="1px">
                        <Text fontSize="xl">{repo.name}</Text>
                        <Flex mt={2} alignItems="center" justify="space-between">
                            <Text flex={1}>{repo.language || 'Not specific language found'}</Text>
                            <Flex alignItems="center">
                                <StarIcon color="yellow.500" />
                                <Text ml={1}>{repo.stars}</Text>
                            </Flex>
                        </Flex>
                    </Box>
                ))}
            </VStack>
            {showScroll &&
                <Button onClick={scrollTop} position="fixed" bottom="5vh" right="5vh" colorScheme="teal" size="sm" leftIcon={<ChevronUpIcon />}>
                    Scroll Up
                </Button>
            }
        </Box>
    );
};

export default RepoList;