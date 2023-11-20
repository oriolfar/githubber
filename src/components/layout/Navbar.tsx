import { Text, Grid, GridItem, Input, InputGroup, InputRightElement, IconButton, useColorModeValue } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../common/ColorModeSwitcher";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Navbar = ({ username, onUsernameChange, onSearch }: any) => {
    const [searchText, setSearchText] = useState(username);
    const inputBg = useColorModeValue("light.contrast", "dark.background");
    const placeholderColor = useColorModeValue("light.gray", "dark.gray");
    const buttonColor = useColorModeValue("light.primary", "dark.primary");
    const textColor = useColorModeValue("light.primary", "dark.primary");
    const navBg = useColorModeValue("light.secondary", "dark.secondary");

    const handleSearch = () => {
        // console.log('This is the search text: ', searchText);
        onUsernameChange(searchText);
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
                <InputGroup>
                    <Input
                        variant={"filled" as any}
                        placeholder="Type a username"
                        bg={inputBg}
                        borderColor="transparent"
                        _placeholder={{ color: placeholderColor }}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                        _focus={{ borderColor: buttonColor }}
                    />
                    <InputRightElement>
                        <IconButton
                            aria-label="Search"
                            icon={<SearchIcon />}
                            onClick={handleSearch}
                            colorScheme={buttonColor} />
                    </InputRightElement>
                </InputGroup>
            </GridItem>
            <GridItem display="flex" justifyContent="flex-end" alignItems="center">
                <ColorModeSwitcher />
            </GridItem>
        </Grid>
    );
};

export default Navbar;