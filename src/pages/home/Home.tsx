import { Box, Text, VStack, Grid, GridItem, useBreakpointValue, Container } from "@chakra-ui/react";
import RepoList from "./components/RepoList";

type HomeProps = {
    username: string;
};

const Home = ({ username }: HomeProps) => {
    const isWideScreen = useBreakpointValue({ base: false, md: true });

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
                {!isWideScreen && (
                    <GridItem bg="tomato" borderRadius="md">
                        <VStack spacing={0}>
                            <Text>User Profile Info</Text>
                            {/* Add more user profile info here */}
                        </VStack>
                    </GridItem>
                )}
                {isWideScreen && (
                    <GridItem bg="tomato" borderRadius="md" padding={3} height="250px">
                        <VStack spacing={1}>
                            <Text>User Profile Info</Text>
                            {/* Add more user profile info here */}
                        </VStack>
                    </GridItem>
                )}
                <GridItem bg="green" borderRadius="md" padding={3}>
                    <VStack spacing={1}>
                        <Box textAlign="left">
                            <RepoList username={username} />
                        </Box>
                        {/* Add list of user repositories here */}
                    </VStack>
                </GridItem>
            </Grid>
        </Container >
    );
};

export default Home;