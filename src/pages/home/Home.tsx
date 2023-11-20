import { Grid, useBreakpointValue, Container, Card, CardBody } from "@chakra-ui/react";
import UserSection from "../../components/user/UserSection";
import RepoSection from "../../components/repo/RepoSection";

type HomeProps = {
    username: string;
};

// Home is the main component that displays the user section and the repository section
const Home: React.FC<HomeProps> = ({ username }) => {
    const isWideScreen = useBreakpointValue({ base: false, md: true }) || false;

    if (!username) {
        return (
            <Card maxW="md" mx="auto" mt={5}>
                <CardBody>
                    Please enter a GitHub username
                </CardBody>
            </Card>
        );
    }

    return (
        <Container maxW="container.xl" padding={8} overflow="hidden">
            <Grid
                minH="100vh"
                p={0}
                templateColumns={isWideScreen ? "30% 70%" : "100%"}
                templateRows={isWideScreen ? "auto" : "minmax(120px, auto) 1fr"}
                gap={5}
                boxSizing="border-box"
            >
                <UserSection username={username} isWideScreen={isWideScreen} />
                <RepoSection username={username} isWideScreen={isWideScreen} />
            </Grid>
        </Container >
    );
};

export default Home;