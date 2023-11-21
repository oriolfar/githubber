// UserInfo.tsx
import { Card, CardBody, Text } from "@chakra-ui/react";
import { UserCardProps } from "./types";

// UserInfo component
const UserInfo: React.FC<UserCardProps> = ({ user }) => (
    <Card>
        <CardBody>
            {/* Display user details */}
            <Text fontSize="xl">Name: {user.name}</Text>
            <Text fontSize="xl">Location: {user.location}</Text>
            <Text fontSize="xl">Bio: {user.bio}</Text>
            <Text fontSize="xl">Public Repos: {user.public_repos}</Text>
            <Text fontSize="xl">Followers: {user.followers}</Text>
            <Text fontSize="xl">Following: {user.following}</Text>
        </CardBody>
    </Card>
);

export default UserInfo;