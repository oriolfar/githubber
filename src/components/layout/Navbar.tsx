// Import necessary components, hooks, and functions from Chakra UI
import { Box, Grid, GridItem, useColorModeValue, useMediaQuery, useBreakpointValue, Text } from "@chakra-ui/react";

// Import custom components
import { ColorModeSwitcher } from "../common/ColorModeSwitcher";
import SearchInput from "./SearchInput";
import Logo from './Logo';

// Import types
import { NavbarProps } from './types';

// Navbar component
const Navbar = ({ onSearch }: NavbarProps) => {
    // Use color mode values for text and background colors
    const textColor = useColorModeValue("light.primary", "dark.primary");
    const navBg = useColorModeValue("light.secondary", "dark.secondary");

    const gridTemplateColumns = useBreakpointValue({ base: "6fr 2fr", sm: "6fr 2fr", md: "1fr 3fr 1fr" });
    const gridTemplateRows = useBreakpointValue({ base: "2fr 1fr", sm: "2fr 1fr", md: "1fr", });

    // Use media query to check if screen width is less than 530px
    const [isSmallScreen] = useMediaQuery("(max-width: 767px)");

    if (!isSmallScreen) {
        console.log("large screen")
        // Grid container for Navbar large devices
        return (
            <Grid
                position="sticky"
                top={0}
                zIndex={1}
                bg={navBg}
                p={4}
                color={textColor}
                templateColumns={gridTemplateColumns}
                templateRows={gridTemplateRows}
                alignItems="center"
                shadow="2xl"
            >
                <GridItem
                    colSpan={1}
                    rowSpan={1}
                    display="flex"
                    justifyContent={{ base: "center", sm: "flex-start", md: "flex-start" }}
                    alignItems="center"
                >
                    <Logo />
                </GridItem>
                <GridItem
                    colSpan={1}
                    rowSpan={3}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <SearchInput onSearch={onSearch} />
                </GridItem>
                <GridItem
                    colSpan={1}
                    rowSpan={1}
                    display="flex"
                    justifyContent={{ base: "center", sm: "flex-end", md: "flex-end" }}
                    alignItems="center"
                >
                    <ColorModeSwitcher />
                </GridItem>
            </Grid>
        );
    } else {
        console.log("small screen")
        // Grid container for Navbar small devices
        return (
            <Grid
                templateColumns={gridTemplateColumns}
                templateRows={gridTemplateRows}
                position="sticky"
                top={0}
                zIndex={1}
                bg={navBg}
                p={4}
                color={textColor}
                alignItems="center"
                shadow="2xl"
                width="100%"
            >
                <GridItem
                    colSpan={6}
                    display="flex"
                    rowSpan={1}
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Logo />
                </GridItem>
                <GridItem
                    colSpan={2}
                    rowSpan={1}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <ColorModeSwitcher />
                </GridItem>
                <GridItem
                    colSpan={8}
                    rowSpan={1}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <SearchInput onSearch={onSearch} />
                </GridItem>
            </Grid>
        )
    };
};

export default Navbar;