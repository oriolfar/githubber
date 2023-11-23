import React, { useState } from 'react';
import { Text, Grid, GridItem, useColorModeValue, Spinner } from "@chakra-ui/react";
import RepoList from "../../components/repo/RepoList";
import SearchRepoName from './SearchRepoName';
import LanguageSelect from './LanguageSelect';
import useRepositories from '../../hooks/useRepositories';
import { RepoSectionProps } from './types';

// RepoSection component displays a list of repositories for a given username
// It allows filtering repositories by name and language
const RepoSection: React.FC<RepoSectionProps> = ({ username, isWideScreen }) => {
    // Use Chakra UI's useColorModeValue to support light/dark mode
    const bgColor = useColorModeValue("light.primary", "dark.primary");

    // State for the repository name filter and selected language
    const [filter, setFilter] = useState<string>("");
    const [selectedLanguage, setSelectedLanguage] = useState<string>("Any");

    // Use custom hook to fetch and filter repositories
    // Now also returns a loading state
    const { filteredRepos, languages, loading } = useRepositories(username, filter, selectedLanguage);

    console.log("RepoSection.tsx: RepoSection: filteredRepos: ", filteredRepos);

    return (
        <Grid padding={3} templateRows="auto auto 1fr">
            {/* Search bar to filter repositories by name */}
            <GridItem textAlign="left" backgroundColor={bgColor} borderRadius="lg" boxShadow="2xl" marginBottom={4}>
                <SearchRepoName filter={filter} setFilter={setFilter} />
            </GridItem>

            {/* Dropdown to select a language to filter repositories */}
            <GridItem textAlign="left" borderRadius="lg" boxShadow="2xl" marginBottom={4}>
                <LanguageSelect selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} languages={languages} />
            </GridItem>

            {/* List of filtered repositories */}
            <GridItem textAlign="left" minH="0" overflow="auto">
                {
                    loading
                        ? <Spinner />
                        : filteredRepos.length > 0
                            ? <RepoList repositories={filteredRepos} bgColor={bgColor} />
                            : <Text>No repositories to show</Text>
                }
            </GridItem>
        </Grid >
    );
};

export default RepoSection;