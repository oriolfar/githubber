import React from 'react';
import { Box, VStack } from "@chakra-ui/react";
import RepoCard from './RepoCard';
import ScrollTopButton from '../common/ScrollTopButton';
import useScrollTop from '../../hooks/useScrollTop';
import { Repository, RepositoryListProps } from './types';

// RepoList component displays a list of repositories
const RepoList: React.FC<RepositoryListProps> = ({ repositories: repositories }) => {
    // Custom hook for handling scroll to top functionality
    const { showScroll, scrollTop } = useScrollTop();

    // Render the list of repositories
    return (
        <Box padding="10px">
            <VStack spacing={4} align="stretch">
                {repositories.map((repo: Repository) => (
                    <RepoCard key={repo.id} repo={repo} />
                ))}
            </VStack>
            <ScrollTopButton showScroll={showScroll} scrollTop={scrollTop} />
        </Box>
    );
};

export default RepoList;