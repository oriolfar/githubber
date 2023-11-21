import { Text, Grid, GridItem, Input, InputGroup, InputRightElement, IconButton, useColorModeValue } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../common/ColorModeSwitcher";
import SearchInput from "./SearchInput";
import { useState } from "react";

const Navbar = ({ onSearch }: any) => {
    const [searchText, setSearchText] = useState("");
    const inputBg = useColorModeValue("light.contrast", "dark.background");
    const placeholderColor = useColorModeValue("light.gray", "dark.gray");
    const buttonColor = useColorModeValue("light.primary", "dark.primary");
    const textColor = useColorModeValue("light.primary", "dark.primary");
    const navBg = useColorModeValue("light.secondary", "dark.secondary");

    const handleSearch = () => {
        onSearch(searchText);
    };

    return (
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
            <GridItem display="flex" alignItems="center">
                <Text fontSize="xl" fontFamily="heading" fontWeight="bold">github-repos</Text>
            </GridItem>
            <GridItem display="flex" justifyContent="center" alignItems="center">
                {/* Use the SearchInput component */}
                <SearchInput
                    searchText={searchText}
                    setSearchText={setSearchText}
                    handleSearch={handleSearch}
                    inputBg={inputBg}
                    placeholderColor={placeholderColor}
                    buttonColor={buttonColor}
                />
            </GridItem>
            <GridItem display="flex" justifyContent="flex-end" alignItems="center">
                <ColorModeSwitcher />
            </GridItem>
        </Grid>
    );
};

export default Navbar;