import React, { useEffect, useState } from 'react';
import { Grid, GridItem, Input, Select, useColorModeValue, Text } from "@chakra-ui/react";
import RepoList from "../../components/repo/RepoList";
import { getRepos } from '../../services/githubServices';
import { Repository } from '../../components/repo/types';

interface RepoSectionProps {
    username: string;
    isWideScreen: boolean;
}

// RepoSection is a component that displays the repository list
const RepoSection: React.FC<RepoSectionProps> = ({ username, isWideScreen }) => {
    const bgColor = useColorModeValue("light.primary", "dark.primary");

    const [filter, setFilter] = useState<string>("");
    const [selectedLanguage, setSelectedLanguage] = useState<string>("Any");
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        if (username) {
            getRepos(username).then((repos) => {
                setRepositories(repos);
            });
        }
    }, [username]);

    const filteredRepos = repositories.filter(repo =>
        repo.name.toLowerCase().includes(filter.toLowerCase()) &&
        (selectedLanguage === "Any" || repo.language === selectedLanguage)
    );

    const languages = ["Any", ...Array.from(new Set(repositories.map((repo) => repo.language).filter(Boolean)))];

    return (
        <Grid padding={3} templateRows="auto auto 1fr">
            <GridItem textAlign="left" backgroundColor={bgColor} borderRadius="lg" boxShadow="2xl" marginBottom={4}>
                <Input
                    placeholder="Search repositories"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </GridItem>
            <GridItem textAlign="left" borderRadius="lg" boxShadow="2xl" marginBottom={4}>
                <Text>Coding Language</Text>
                <Select backgroundColor={bgColor} value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
                    {languages.map((language) => (
                        <option key={language} value={language}>
                            {language}
                        </option>
                    ))}
                </Select>
            </GridItem>
            <GridItem textAlign="left" backgroundColor={bgColor} borderRadius="lg" boxShadow="2xl">
                <RepoList repositories={filteredRepos} />
            </GridItem>
        </Grid>
    );
};

export default RepoSection;