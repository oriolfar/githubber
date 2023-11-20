import React, { useEffect, useState } from 'react';
import { getRepos, checkUserExists } from '../../services/githubServices';
import { Box, Spinner, Alert, AlertIcon, VStack } from "@chakra-ui/react";
import RepoCard from './RepoCard';
import ScrollTopButton from '../common/ScrollTopButton';
import useScrollTop from '../../hooks/useScrollTop';
import { ApiRepository, RepositoryListProps, Repository } from './types';

// RepoList component fetches and displays a list of repositories for a given username
const RepoList: React.FC<RepositoryListProps> = ({ username }) => {
    // State for storing the fetched repositories
    const [repositories, setRepositories] = useState<Repository[]>([]);
    // State for tracking loading status
    const [loading, setLoading] = useState(false);
    // State for storing any error messages
    const [error, setError] = useState<string | null>(null);
    // Custom hook for handling scroll to top functionality
    const { showScroll, scrollTop } = useScrollTop();

    // Effect hook for fetching repositories when the username changes
    useEffect(() => {
        const fetchRepos = async () => {
            if (username) {
                setLoading(true);
                setError(null);
                try {
                    // Check if the user exists
                    const exists = await checkUserExists(username);
                    if (exists) {
                        // Fetch the repositories
                        const repos: ApiRepository[] = await getRepos(username);
                        // Map the fetched repositories to the Repository interface
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

    // Render different UI based on the state
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

    // Render the list of repositories
    return (
        <Box>
            <VStack spacing={4} align="stretch">
                {repositories.map((repo) => (
                    <RepoCard key={repo.id} repo={repo} />
                ))}
            </VStack>
            <ScrollTopButton showScroll={showScroll} scrollTop={scrollTop} />
        </Box>
    );
};

export default RepoList;