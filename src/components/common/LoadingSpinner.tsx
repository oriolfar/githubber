import { useColorModeValue, Spinner } from "@chakra-ui/react";

// LoadingSpinner component
const LoadingSpinner = () => {
    // Determine spinner colors based on color mode
    const color = useColorModeValue("light.background", "dark.primary");
    const emptyColor = useColorModeValue("light.secondary", "dark.background");

    return (
        <div>
            {/* Display spinner with color mode specific colors */}
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