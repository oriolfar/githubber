// UserContent.tsx
import { Grid, Container } from "@chakra-ui/react";
import UserSection from "../../components/user/UserSection";
import RepoSection from "../../components/repo/RepoSection";
import { UserContentProps } from './types';

// UserContent is a functional component that displays the user section and the repository section
// It's used when a valid GitHub username is provided
const UserContent: React.FC<UserContentProps> = ({ username, isWideScreen }) => (
    <Container maxW="container.xl" padding={8} overflow="hidden">
        <Grid
            minH="100vh"
            p={0}
            templateColumns={isWideScreen ? "3fr 7fr" : "10fr"}
            templateRows={isWideScreen ? "auto" : "minmax(120px, auto) 1fr"}
            gap={5}
            boxSizing="border-box"
        >
            <UserSection username={username} isWideScreen={isWideScreen} />
            <RepoSection username={username} isWideScreen={isWideScreen} />
        </Grid>
    </Container>
);

export default UserContent;