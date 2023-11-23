import React from 'react';
import { Flex, Text, Card, Link } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { RepoCardProps } from './types';

const RepoCard: React.FC<RepoCardProps> = ({ repo }) => (
    console.log("RepoCard.tsx: RepoCard: repo: ", repo),
    <Card key={repo.id} p={5} shadow="md">
        {/* Display the repository name with the first letter capitalized */}
        <Link href={repo.html_url} isExternal>
            <Text fontSize="xl">
                {repo.name.charAt(0).toUpperCase() + repo.name.slice(1)}
            </Text>
        </Link>
        <Flex mt={2} alignItems="center" justify="space-between">
            {/* Display the repository language, or a default message if not specified */}
            <Text flex={1}>{repo.language || 'Not specific language found'}</Text>
            {/* Display the repository star count, with a star icon */}
            <Flex alignItems="center">
                <StarIcon marginBottom="0.5" color="yellow.500" />
                <Text ml={1}>{repo.stars}</Text>
            </Flex>
        </Flex>
    </Card>
);

export default RepoCard;