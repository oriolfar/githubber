// Import necessary dependencies
import { Grid, useBreakpointValue, Container, Card, CardBody, Box } from "@chakra-ui/react";
import UserSection from "../../components/user/UserSection";
import RepoSection from "../../components/repo/RepoSection";
import LoadingSpinner from '../../components/common/LoadingSpinner';

// Define the props for the Home component
type HomeProps = {
    username: string;
    userExists: boolean;
    loading: boolean;
};

// Home is the main component that displays the user section and the repository section
const Home: React.FC<HomeProps> = ({ username, userExists, loading }) => {
    // Define a breakpoint for wide screens
    const isWideScreen = useBreakpointValue({ base: false, md: true }) || false;

    // Render different components based on the state
    return (
        // If no username is provided, prompt the user to enter a username
        !username ? (
            <Card maxW="md" mx="auto" mt={5} >
                <CardBody>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        Please enter a GitHub username
                    </Box>
                </CardBody>
            </Card>
        ) :
            // If the username is provided and the user is loading, display a loading message
            loading ? (
                <Card maxW="md" mx="auto" mt={5} bg="transparent" border="none" boxShadow="none">
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <LoadingSpinner />
                    </Box>
                </Card>
            ) :
                // If the user does not exist, display an error message
                !userExists ? (
                    <Card maxW="md" mx="auto" mt={5}>
                        <CardBody>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                User not found, please enter a valid GitHub user
                            </Box>
                        </CardBody>
                    </Card>
                ) :
                    // If the user exists, display the user section and the repository section
                    (
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
                    )
    );
}

export default Home;