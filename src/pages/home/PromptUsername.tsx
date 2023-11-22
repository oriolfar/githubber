// Import necessary dependencies
import { Card, CardBody, Box } from "@chakra-ui/react";

// PromptUsername is a functional component that prompts the user to enter a GitHub username
// It's used when no username is provided
const PromptUsername: React.FC = () => (
    <Card maxW="md" mx="auto" mt={5}>
        <CardBody>
            <Box display="flex" alignItems="center" justifyContent="center">
                Please enter a GitHub username
            </Box>
        </CardBody>
    </Card>
);

export default PromptUsername;