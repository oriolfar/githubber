// components/layout/types.ts

export interface SearchInputProps {
    searchText: string;
    setSearchText: (text: string) => void;
    handleSearch: () => void;
    inputBg: string;
    placeholderColor: string;
    buttonColor: string;
}