// useRepositories.ts
import { useEffect, useState } from 'react';
import { getRepos } from '../services/githubServices';
import { Repository } from '../components/repo/types';
import { ApiRepos } from './types';

// useRepositories is a custom hook that fetches repositories for a given username
// It also filters the repositories by name and language
const useRepositories = (username: string, filter: string, selectedLanguage: string) => {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [loading, setLoading] = useState<boolean>(false); // Add this line

    useEffect(() => {
        if (username) {
            setLoading(true); // Set loading to true before fetching data
            getRepos(username).then((repos: ApiRepos[]) => {
                const newRepos = repos.map(repo => ({
                    ...repo,
                    language: repo.language || "Unknown",
                    stars: repo.stargazers_count,
                }));
                setRepositories(newRepos);
                setLoading(false); // Set loading to false after fetching data
            });
        }
    }, [username]);

    // Filter repositories by name and language
    const filteredRepos = repositories.filter(repo =>
        repo.name.toLowerCase().includes(filter.toLowerCase()) &&
        (selectedLanguage === "Any" || repo.language === selectedLanguage)
    );

    // Get a list of all unique languages used in the repositories
    const languages = ["Any", ...Array.from(new Set(repositories.map((repo) => repo.language).filter(Boolean)))];

    // Return the filtered repositories, list of languages, and loading state
    return { filteredRepos, languages, loading };
};

export default useRepositories;