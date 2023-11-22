// Import necessary dependencies
import { useBreakpointValue } from "@chakra-ui/react";
import PromptUsername from "./PromptUsername";
import LoadingUser from "./LoadingUser";
import UserNotFound from "./UserNotFound";
import UserContent from "./UserContent";
import { HomeProps } from './types';

// Home is the main component that displays the user section and the repository section
const Home: React.FC<HomeProps> = ({ username, userExists, loading }) => {
    // Define a breakpoint for wide screens
    const isWideScreen = useBreakpointValue({ base: false, md: true }) || false;

    // Render different components based on the state
    // If no username is provided, prompt the user to enter a username
    // If the username is provided and the user is loading, display a loading message
    // If the user does not exist, display an error message
    // If the user exists, display the user section and the repository section
    return !username ? <PromptUsername /> :
        loading ? <LoadingUser /> :
            !userExists ? <UserNotFound /> :
                <UserContent username={username} isWideScreen={isWideScreen} />;
}

export default Home;