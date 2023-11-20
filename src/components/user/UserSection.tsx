import { Box, GridItem, useColorModeValue } from "@chakra-ui/react";
import UserGrid from "./UserGrid";

interface UserSectionProps {
    username: string;
    isWideScreen: boolean;
}

// UserGrid is a component that displays the user information
const UserSection: React.FC<UserSectionProps> = ({ username, isWideScreen }) => {
    const bgColor = useColorModeValue("light.primary", "dark.primary");

    return (
        <GridItem padding={3} height={isWideScreen ? "250px" : undefined}>
            <Box textAlign="left" backgroundColor={bgColor} borderRadius="lg" boxShadow="2xl">
                <UserGrid username={username} />
            </Box>
        </GridItem>
    );
};

export default UserSection;