import { Box, Text, VStack, Code, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";

const Home = () => {
    const isWideScreen = useBreakpointValue({ base: false, md: true });

    return (
        <Box textAlign="center" fontSize="xl">
            <Grid
                minH="100vh"
                p={3}
                templateColumns={isWideScreen ? "30% 70%" : "100%"}
                templateRows={isWideScreen ? "auto" : "minmax(120px, auto) 1fr"}
                gap={6}
            >
                {!isWideScreen && (
                    <GridItem bg="tomato" borderRadius="md">
                        <VStack spacing={8}>
                            <Text>User Profile Info</Text>
                            {/* Add more user profile info here */}
                        </VStack>
                    </GridItem>
                )}
                {isWideScreen && (
                    <GridItem bg="tomato" borderRadius="md">
                        <VStack spacing={8}>
                            <Text>User Profile Info</Text>
                            {/* Add more user profile info here */}
                        </VStack>
                    </GridItem>
                )}
                <GridItem bg="papayawhip" borderRadius="md">
                    <VStack spacing={8}>
                        <Text>User Repositories</Text>
                        {/* Add list of user repositories here */}
                    </VStack>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Home;