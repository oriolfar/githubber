import { Text, Image, Grid, GridItem, Circle, Heading, Card, CardBody } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getUserInfo } from "../../services/githubServices";


interface UserInfoProps {
    username: string;
}

interface User {
    avatar_url: string;
    login: string;
    name: string;
    location: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
}

const UserInfo: React.FC<UserInfoProps> = ({ username }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getUserInfo(username)
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [username]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return null;
    }

    return (
        <Grid templateRows="2fr 6fr" templateColumns="repeat(6, 1fr)" gap={4} padding={2}>
            <GridItem rowSpan={1} colSpan={1} alignSelf="end">
                <Circle size="60px" overflow="hidden">
                    <Image src={user.avatar_url} alt={user.login} boxSize="100%" objectFit="cover" />
                </Circle>
            </GridItem>
            <GridItem rowSpan={1} colSpan={5} alignSelf="end">
                <Heading as="h2" size="xl">{user.login}</Heading>
            </GridItem>
            <GridItem rowSpan={1} colSpan={6}>
                <Card>
                    <CardBody>
                        <Text fontSize="xl">Name: {user.name}</Text>
                        <Text fontSize="xl">Location: {user.location}</Text>
                        <Text fontSize="xl">Bio: {user.bio}</Text>
                        <Text fontSize="xl">Public Repos: {user.public_repos}</Text>
                        <Text fontSize="xl">Followers: {user.followers}</Text>
                        <Text fontSize="xl">Following: {user.following}</Text>
                    </CardBody>
                </Card>
            </GridItem>
        </Grid>
    );
};

export default UserInfo;