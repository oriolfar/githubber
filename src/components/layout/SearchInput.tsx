import { Input, InputGroup, InputRightElement, IconButton, useColorModeValue } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { SearchInputProps } from "./types";

const SearchInput = ({ onSearch }: SearchInputProps) => {
    // State for search text
    const [searchText, setSearchText] = useState("");

    // Color mode values
    const inputBg = useColorModeValue("light.contrast", "dark.background");
    const placeholderColor = useColorModeValue("light.gray", "dark.gray");
    const buttonColor = useColorModeValue("light.primary", "dark.primary");

    // Function to handle search
    const handleSearch = () => {
        onSearch(searchText);
    };

    return (
        <InputGroup>
            {/* Search input field */}
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
            {/* Search button */}
            <InputRightElement>
                <IconButton
                    aria-label="Search"
                    icon={<SearchIcon />}
                    onClick={handleSearch}
                    colorScheme={buttonColor}
                />
            </InputRightElement>
        </InputGroup>
    );
};

export default SearchInput;