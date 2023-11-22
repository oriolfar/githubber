// useRepositories.ts
import { useEffect, useState } from 'react';
import { getRepos } from '../services/githubServices';
import { Repository } from '../components/repo/types';
import { ApiRepos } from './types';

const useRepositories = (username: string, filter: string, selectedLanguage: string) => {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        if (username) {
            getRepos(username).then((repos: ApiRepos[]) => {
                const newRepos = repos.map(repo => ({
                    ...repo,
                    language: repo.language || "Unknown",
                    stars: repo.stargazers_count,
                }));
                setRepositories(newRepos);
            });
        }
    }, [username]);

    const filteredRepos = repositories.filter(repo =>
        repo.name.toLowerCase().includes(filter.toLowerCase()) &&
        (selectedLanguage === "Any" || repo.language === selectedLanguage)
    );

    const languages = ["Any", ...Array.from(new Set(repositories.map((repo) => repo.language).filter(Boolean)))];

    return { filteredRepos, languages };
};

export default useRepositories;