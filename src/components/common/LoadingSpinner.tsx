import { useColorModeValue } from "@chakra-ui/react";
import { Spinner, Card, CardBody } from "@chakra-ui/react";

// ...

const LoadingSpinner = () => {
    const color = useColorModeValue("light.background", "dark.primary");
    const emptyColor = useColorModeValue("light.secondary", "dark.background");

    return (
        <div>
            <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor={emptyColor}
                color={color}
                size="xl"
                label="Loading data"
            />
        </div>
    );
};

export default LoadingSpinner;