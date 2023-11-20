import { Box, GridItem, useColorModeValue } from "@chakra-ui/react";
import RepoList from "../../components/repo/RepoList";

interface RepoSectionProps {
    username: string;
    isWideScreen: boolean;
}

// RepoSection is a component that displays the repository list
const RepoSection: React.FC<RepoSectionProps> = ({ username, isWideScreen }) => {
    const bgColor = useColorModeValue("light.primary", "dark.primary");

    return (
        <GridItem padding={3} height={isWideScreen ? "250px" : undefined}>
            <Box textAlign="left" backgroundColor={bgColor} borderRadius="lg">
                <RepoList username={username} />
            </Box>
        </GridItem>
    );
};

export default RepoSection;