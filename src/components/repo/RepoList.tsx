import React from 'react';
import { Box, VStack } from "@chakra-ui/react";
import RepoCard from './RepoCard';
import ScrollTopButton from '../common/ScrollTopButton';
import useScrollTop from '../../hooks/useScrollTop';
import { Repository, RepositoryListProps } from './types';

// RepoList component displays a list of repositories
// It also includes a scroll to top button that appears when the user scrolls down
const RepoList: React.FC<RepositoryListProps> = ({ repositories }) => {
    // Custom hook for handling scroll to top functionality
    // showScroll is a boolean that indicates whether the scroll to top button should be shown
    // scrollTop is a function that scrolls the page to the top when called
    const { showScroll, scrollTop } = useScrollTop();

    console.log("RepoList.tsx: RepoList: repositories: ", repositories);

    // Render the list of repositories
    return (
        <Box padding="10px">
            <VStack spacing={4} align="stretch">
                {/* Map over the repositories array and render a RepoCard for each repository */}
                {repositories.map((repo: Repository) => (
                    <RepoCard key={repo.id} repo={repo} />
                ))}
            </VStack>
            {/* Scroll to top button, which is shown based on the state from useScrollTop */}
            <ScrollTopButton showScroll={showScroll} scrollTop={scrollTop} />
        </Box>
    );
};

export default RepoList;