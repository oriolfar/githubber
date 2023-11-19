import { Box, Text, VStack, Grid, GridItem, useBreakpointValue, Container } from "@chakra-ui/react";
import RepoList from "../../components/repo/RepoList";
import UserInfo from "../../components/user/UserInfo";

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
                    <GridItem>
                        <VStack spacing={1}>
                            <Box textAlign="left">
                                <UserInfo username={username} />
                            </Box>
                        </VStack>
                    </GridItem>
                )}
                {isWideScreen && (
                    <GridItem padding={3} height="250px">
                        <VStack spacing={1}>
                            <Box textAlign="left" backgroundColor="red">
                                <UserInfo username={username} />
                            </Box>
                        </VStack>
                    </GridItem>
                )}
                <GridItem bg="green" borderRadius="md" padding={3}>
                    <VStack spacing={1}>
                        <Box textAlign="left">
                            <RepoList username={username} />
                        </Box>
                    </VStack>
                </GridItem>
            </Grid>
        </Container >
    );
};

export default Home;