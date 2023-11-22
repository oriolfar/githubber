// Import necessary dependencies
import { Card, Box } from "@chakra-ui/react";
import LoadingSpinner from '../../components/common/LoadingSpinner';

// LoadingUser is a functional component that displays a loading spinner
// It's used when the user data is being fetched from the GitHub API
const LoadingUser: React.FC = () => (
    <Card maxW="md" mx="auto" mt={5} bg="transparent" border="none" boxShadow="none">
        <Box display="flex" alignItems="center" justifyContent="center">
            <LoadingSpinner />
        </Box>
    </Card>
);

export default LoadingUser;