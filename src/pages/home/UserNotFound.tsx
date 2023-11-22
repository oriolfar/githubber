// Import necessary dependencies
import { Card, CardBody, Box } from "@chakra-ui/react";

// UserNotFound is a functional component that displays a message when the user is not found
// It's used when the provided GitHub username does not exist
const UserNotFound: React.FC = () => (
    <Card maxW="md" mx="auto" mt={5}>
        <CardBody>
            <Box display="flex" alignItems="center" justifyContent="center">
                User not found, please enter a valid GitHub user
            </Box>
        </CardBody>
    </Card>
);

export default UserNotFound;