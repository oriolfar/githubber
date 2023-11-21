
import { Input, InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { SearchInputProps } from "./types";

// SearchInput component
const SearchInput: React.FC<SearchInputProps> = ({ searchText, setSearchText, handleSearch, inputBg, placeholderColor, buttonColor }) => (
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
);

export default SearchInput;