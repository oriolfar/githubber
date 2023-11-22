import React from 'react';
import { Flex, Text, Card } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { RepoCardProps } from './types';

// RepoCard is a component that displays a single repository
// It shows the repository name, language, and star count
const RepoCard: React.FC<RepoCardProps> = ({ repo }) => (
    <Card key={repo.id} p={5} shadow="md">
        {/* Display the repository name */}
        <Text fontSize="xl">{repo.name}</Text>
        <Flex mt={2} alignItems="center" justify="space-between">
            {/* Display the repository language, or a default message if not specified */}
            <Text flex={1}>{repo.language || 'Not specific language found'}</Text>
            {/* Display the repository star count, with a star icon */}
            <Flex alignItems="center">
                <StarIcon color="yellow.500" />
                <Text ml={1}>{repo.stars}</Text>
            </Flex>
        </Flex>
    </Card>
);

export default RepoCard;