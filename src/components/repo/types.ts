// ApiRepository interface represents the structure of a repository object as returned by the API
export interface ApiRepository {
    id: number;
    name: string;
    language: string;
    stargazers_count: number; // Number of stars for the repository
}

// RepositoryListProps interface represents the props for a component that displays a list of repositories
export interface RepositoryListProps {
    repositories: Repository[]; // Array of repositories to be displayed
}

// Repository interface represents the structure of a repository object in the application
export interface Repository {
    id: number;
    name: string;
    language: string;
    stars: number; // Number of stars for the repository
    html_url: string; // URL to the repository
}

// RepoSectionProps interface represents the props for the RepoSection component
export interface RepoSectionProps {
    username: string; // GitHub username whose repositories are to be displayed
    isWideScreen: boolean; // Boolean indicating if the screen is wide
}

// RepoCardProps interface represents the props for a component that displays a single repository
export interface RepoCardProps {
    repo: Repository; // Repository to be displayed
}

// LanguageSelectProps interface represents the props for a component that allows selecting a language to filter repositories
export interface LanguageSelectProps {
    selectedLanguage: string; // Currently selected language
    setSelectedLanguage: (language: string) => void; // Function to set the selected language
    languages: string[]; // Array of available languages
}