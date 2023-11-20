import React, { useEffect, useState } from 'react';
import { GridItem, Grid, useColorModeValue, Input } from "@chakra-ui/react";
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
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        if (username) {
            getRepos(username).then((repos) => {
                setRepositories(repos);
            });
        }
    }, [username]);

    const filteredRepos = repositories.filter(repo =>
        repo.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <Grid padding={3} templateRows="auto 1fr">
            <GridItem textAlign="left" backgroundColor={bgColor} borderRadius="lg" boxShadow="2xl" marginBottom={4}>
                <Input
                    placeholder="Search repositories"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </GridItem>
            <GridItem textAlign="left" backgroundColor={bgColor} borderRadius="lg" boxShadow="2xl">
                <RepoList repositories={filteredRepos} />
            </GridItem>
        </Grid>
    );
};

export default RepoSection;