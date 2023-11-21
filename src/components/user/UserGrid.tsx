// UserGrid.tsx
import { Grid, GridItem, Link } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import UserCard from "./UserInfo";
import { UserInfoProps } from "./types";
import useFetchUser from "../../hooks/useFetchUser";
import UserAvatar from "./UserAvatar";
import UserHeader from "./UserHeader";

// UserGrid component
const UserGrid: React.FC<UserInfoProps> = ({ username }) => {
    // Fetch user data and determine color mode
    const { user, loading } = useFetchUser(username);
    const linkColor = useColorModeValue("light.secondary", "dark.secondary");

    // Loading state
    if (loading) {
        return <div>Loading...</div>;
    }

    // If no user data, return null
    if (!user) {
        return null;
    }

    return (
        <Grid templateRows="2fr 6fr" templateColumns="repeat(6, 1fr)" gap={4} padding={2}>
            <GridItem rowSpan={2} colSpan={6} paddingTop="10px" paddingInlineStart="5px">
                {/* Link to user's GitHub profile */}
                <Link href={user.html_url} isExternal _hover={{ textDecoration: 'none' }}>
                    <Grid templateColumns="2fr 6fr" gap={4} justifyContent="end" alignItems="center">
                        {/* User's avatar and header */}
                        <UserAvatar src={user.avatar_url} alt={user.login} />
                        <UserHeader login={user.login} linkColor={linkColor} />
                    </Grid>
                </Link>
            </GridItem>
            {/* User's detailed info */}
            <GridItem rowSpan={1} colSpan={6}>
                <UserCard user={user} />
            </GridItem>
        </Grid >
    );
};

export default UserGrid;