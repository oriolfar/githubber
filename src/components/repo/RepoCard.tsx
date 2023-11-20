import React from 'react';
import { Flex, Text, Card } from "@chakra-ui/react";
import { Repository } from './types';
import { StarIcon } from "@chakra-ui/icons";

// RepoCardProps defines the props for the RepoCard component
interface RepoCardProps {
    repo: Repository; // repo is the repository to be displayed
}

// RepoCard is a component that displays a single repository
// It shows the repository name, language, and star count
const RepoCard: React.FC<RepoCardProps> = ({ repo }) => (
    <Card key={repo.id} p={5} shadow="md">
        <Text fontSize="xl">{repo.name}</Text>
        <Flex mt={2} alignItems="center" justify="space-between">
            <Text flex={1}>{repo.language || 'Not specific language found'}</Text>
            <Flex alignItems="center">
                <StarIcon color="yellow.500" />
                <Text ml={1}>{repo.stars}</Text>
            </Flex>
        </Flex>
    </Card>
);

export default RepoCard;