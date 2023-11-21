import { IconButton, useColorModeValue } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

// ScrollTopButtonProps defines the props for the ScrollTopButton component
interface ScrollTopButtonProps {
    showScroll: boolean; // showScroll determines whether the button should be visible
    scrollTop: () => void; // scrollTop is a function that scrolls the page to the top
}

// ScrollTopButton is a button that scrolls the page to the top when clicked
// It is only visible when the showScroll prop is true
const ScrollTopButton: React.FC<ScrollTopButtonProps> = ({ showScroll, scrollTop }) => {
    const bgColor = useColorModeValue("light.primary", "dark.primary");
<<<<<<< HEAD
    const color = useColorModeValue("light.secondary", "dark.secondary");
=======
    const color = useColorModeValue("light.foreground", "dark.foreground");
>>>>>>> 6c1e9099b3971c6da8319114023078658a2a9058
    const borderColor = useColorModeValue("light.secondary", "dark.secondary");

    return (
        showScroll ?
            <IconButton
                onClick={scrollTop}
                position="fixed"
                bottom="5vh"
                right="5vh"
                bgColor={bgColor}
                color={color}
                borderColor={borderColor}
                borderWidth={5}
                size="lg"
                icon={<ChevronUpIcon />}
                isRound
                aria-label="Scroll Up"
            /> : null
    );
};

export default ScrollTopButton;