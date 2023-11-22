// Import necessary components and hooks from Chakra UI
import { Text, Grid, GridItem, useColorModeValue } from "@chakra-ui/react";

// Import custom components
import { ColorModeSwitcher } from "../common/ColorModeSwitcher";
import SearchInput from "./SearchInput";
import Logo from "./Logo";

// Import types
import { NavbarProps } from './types';

// Navbar component
const Navbar = ({ onSearch }: NavbarProps) => {
    // Use color mode values for text and background colors
    const textColor = useColorModeValue("light.primary", "dark.primary");
    const navBg = useColorModeValue("light.secondary", "dark.secondary");

    return (
        // Grid container for Navbar
        <Grid
            position="sticky"
            top={0}
            zIndex={1}
            bg={navBg}
            p={4}
            color={textColor}
            templateColumns="25% 50% 25%"
            alignItems="center"
            shadow="2xl"
        >
            {/* Logo section */}
            <GridItem display="flex" alignItems="center">
                <Logo />
            </GridItem>

            {/* Search input section */}
            <GridItem display="flex" justifyContent="center" alignItems="center">
                <SearchInput onSearch={onSearch} />
            </GridItem>

            {/* Color mode switcher section */}
            <GridItem display="flex" justifyContent="flex-end" alignItems="center">
                <ColorModeSwitcher />
            </GridItem>
        </Grid>
    );
};

export default Navbar;