// LanguageSelect.tsx
import { Select, Text, useColorModeValue } from "@chakra-ui/react";
import { LanguageSelectProps } from "./types";

// LanguageSelect component allows the user to select a programming language to filter repositories
const LanguageSelect: React.FC<LanguageSelectProps> = ({ selectedLanguage, setSelectedLanguage, languages }) => {
    // Use Chakra UI's useColorModeValue to support light/dark mode
    const bgColor = useColorModeValue("light.primary", "dark.primary");
    const textColor = useColorModeValue("light.secondary", "dark.secondary");

    return (
        <>
            {/* Label for the select dropdown */}
            <Text paddingBottom="1" fontSize="sm">Coding Language</Text>
            {/* Select dropdown for choosing a language */}
            {/* When a language is selected, setSelectedLanguage is called with the selected language */}
            <Select backgroundColor={bgColor} color={textColor} value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
                {/* Map over the languages array and render an option for each language */}
                {languages.map((language) => (
                    <option key={language} value={language}>
                        {language}
                    </option>
                ))}
            </Select>
        </>
    );
};

export default LanguageSelect;