// UserHeader.tsx

import React from 'react';
import { GridItem, Heading, Text } from "@chakra-ui/react";
import { UserHeaderProps } from "./types";

// UserHeader component
const UserHeader: React.FC<UserHeaderProps> = ({ login, linkColor, fontSize = "xl" }: UserHeaderProps) => (
    <GridItem>
        {/* Display user's login name with link color */}
        <Heading color={linkColor} as="h2" size={fontSize}>{login}</Heading>
        {/* Display text 'Go to profile' with link color */}
        <Text fontSize="sm" color={linkColor}>Go to profile</Text>
    </GridItem>
);

export default UserHeader;