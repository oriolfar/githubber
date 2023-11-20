export interface ApiRepository {
    id: number;
    name: string;
    language: string;
    stargazers_count: number;
}

export interface RepositoryListProps {
    username: string;
}

export interface Repository {
    id: number;
    name: string;
    language: string;
    stars: number;
}