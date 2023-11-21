import { Box, GridItem, useColorModeValue } from "@chakra-ui/react";
import UserGrid from "./UserGrid";
import { UserSectionProps } from "./types";

// UserSection component
const UserSection: React.FC<UserSectionProps> = ({ username, isWideScreen }) => {
    // Determine background color based on color mode
    const bgColor = useColorModeValue("light.primary", "dark.primary");

    return (
        <GridItem padding={3} height={isWideScreen ? "250px" : undefined}>
            <Box textAlign="left" backgroundColor={bgColor} borderRadius="lg" boxShadow="2xl">
                {/* Display user information */}
                <UserGrid username={username} />
            </Box>
        </GridItem>
    );
};

export default UserSection;