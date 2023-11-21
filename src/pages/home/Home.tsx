// Import necessary dependencies
import { useState, useEffect } from 'react';
import { Grid, useBreakpointValue, Container, Card, CardBody, Box } from "@chakra-ui/react";
import UserSection from "../../components/user/UserSection";
import RepoSection from "../../components/repo/RepoSection";
import { checkUserExists } from '../../services/githubServices';
import LoadingSpinner from '../../components/common/LoadingSpinner';

// Define the props for the Home component
type HomeProps = {
    username: string;
};

// Home is the main component that displays the user section and the repository section
const Home: React.FC<HomeProps> = ({ username }) => {
    // Define state variables for user existence and loading status
    const [userExists, setUserExists] = useState(false);
    const [loading, setLoading] = useState(false);

    // Define a breakpoint for wide screens
    const isWideScreen = useBreakpointValue({ base: false, md: true }) || false;

    // Use an effect to fetch user data when the username changes
    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            const exists = await checkUserExists(username);
            setUserExists(exists);
            setLoading(false);
        };

        if (username) {
            fetchUser();
        }
    }, [username]);

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
            // If the data is loading, display a loading spinner
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
                    // If the user exists and the data is loaded, display the user section and the repository section
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