import { Image, Avatar, Grid, GridItem, Heading, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import UserCard from "./UserInfo";
import { getUserInfo } from "../../services/githubServices";
import { User } from "./types";

interface UserInfoProps {
    username: string;
}

// UserInfo is a component that displays the user information
const UserGrid: React.FC<UserInfoProps> = ({ username }) => {
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
            <GridItem rowSpan={2} colSpan={6} paddingTop="10px" paddingInlineStart="5px">
                <Link href={user.html_url} isExternal>
                    <Grid templateColumns="2fr 6fr" gap={4} justifyContent="end" alignItems="center">
                        <GridItem>
                            <Avatar size="lg" overflow="hidden" border="1px">
                                <Image src={user.avatar_url} alt={user.login} boxSize="100%" objectFit="cover" />
                            </Avatar>
                        </GridItem>
                        <GridItem>
                            <Heading as="h2" size="xl">{user.login}</Heading>
                        </GridItem>
                    </Grid>
                </Link>
            </GridItem>
            <GridItem rowSpan={1} colSpan={6}>
                <UserCard user={user} />
            </GridItem>
        </Grid >
    );
};

export default UserGrid;