import { Grid, GridItem, Link, useMediaQuery } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import UserCard from "./UserInfo";
import { UserInfoProps } from "./types";
import useFetchUser from "../../hooks/useFetchUser";
import UserAvatar from "./UserAvatar";
import UserHeader from "./UserHeader";

// UserGrid component that displays user's GitHub profile and detailed info
const UserGrid: React.FC<UserInfoProps> = ({ username }) => {
    // Fetch user data
    const { user, loading } = useFetchUser(username);
    // Determine color mode
    const linkColor = useColorModeValue("light.secondary", "dark.secondary");
    // Check if the screen size is small
    const [isSmallScreen] = useMediaQuery("(max-width: 820px)");

    console.log("UserGrid.tsx: isSmallScreen: ", isSmallScreen);

    // Loading state
    if (loading) {
        return <div>Loading...</div>;
    }

    // If no user data, return null
    if (!user) {
        return null;
    }

    // Grid layout for user's GitHub profile and detailed info
    return (
        <Grid templateRows="2fr 6fr" templateColumns="repeat(6, 1fr)" gap={4} padding={2}>
            {/* Grid item for user's GitHub profile */}
            <GridItem
                rowSpan={2}
                colSpan={6}
                paddingTop="10px"
                paddingInlineStart="5px"
                overflow="hidden"
            >
                {/* Link to user's GitHub profile */}
                <Link href={user.html_url} isExternal _hover={{ textDecoration: 'none' }}>
                    {/* Grid layout for user's avatar and header */}
                    <Grid templateColumns="2fr 6fr" gap={4} justifyContent="end" alignItems="center">
                        {/* User's avatar */}
                        <UserAvatar src={user.avatar_url} alt={user.login} size={isSmallScreen ? "md" : "lg"} />
                        {/* User's header */}
                        <UserHeader login={user.login} linkColor={linkColor} fontSize={isSmallScreen ? "md" : "lg"} />
                    </Grid>
                </Link>
            </GridItem>
            {/* Grid item for user's detailed info */}
            <GridItem rowSpan={1} colSpan={6}>
                <UserCard user={user} />
            </GridItem>
        </Grid >
    );
};

export default UserGrid;