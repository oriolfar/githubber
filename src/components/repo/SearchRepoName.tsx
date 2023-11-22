// SearchRepoName.tsx
import { Input, useColorModeValue } from "@chakra-ui/react";

// SearchRepoNameProps interface represents the props for the SearchRepoName component
interface SearchRepoNameProps {
    filter: string; // Current filter value
    setFilter: (filter: string) => void; // Function to update the filter value
}

// SearchRepoName is a component that allows the user to search for repositories by name
const SearchRepoName: React.FC<SearchRepoNameProps> = ({ filter, setFilter }) => {
    // Use Chakra UI's useColorModeValue to support light/dark mode
    const placeholderColor = useColorModeValue("light.contrast", "dark.background");
    const textColor = useColorModeValue("light.secondary", "dark.secondary");

    return (
        // Input field for entering the repository name to search for
        // When the input value changes, setFilter is called with the new value
        <Input
            placeholder="Search repositories"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            _placeholder={{ color: placeholderColor }}
            color={textColor}
        />
    );
};

export default SearchRepoName;