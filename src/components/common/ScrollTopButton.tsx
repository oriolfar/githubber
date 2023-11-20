import { Button } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

// ScrollTopButtonProps defines the props for the ScrollTopButton component
interface ScrollTopButtonProps {
    showScroll: boolean; // showScroll determines whether the button should be visible
    scrollTop: () => void; // scrollTop is a function that scrolls the page to the top
}

// ScrollTopButton is a button that scrolls the page to the top when clicked
// It is only visible when the showScroll prop is true
const ScrollTopButton: React.FC<ScrollTopButtonProps> = ({ showScroll, scrollTop }) => (
    showScroll ?
        <Button onClick={scrollTop} position="fixed" bottom="5vh" right="5vh" colorScheme="teal" size="sm" leftIcon={<ChevronUpIcon />}>
            Scroll Up
        </Button> : null
);

export default ScrollTopButton;