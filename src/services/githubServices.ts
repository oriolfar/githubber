import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

interface GithubError extends Error {
    response?: {
        status: number;
    };
}

export const getRepos = async (username: string) => {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`, {
        headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
    });
    return response.data;
};

export const getUserInfo = async (username: string) => {
    try {
        const response = await axios.get(`${GITHUB_API_URL}/users/${username}`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        });
        return response.data;
    } catch (error) {
        const githubError = error as GithubError;
        if (githubError.response && githubError.response.status === 404) {
            console.error('User not found'); // Log the error
            return null;
        } else {
            console.error('An error occurred while fetching the user'); // Log the error
            throw error;
        }
    }
};

export const checkUserExists = async (username: string) => {
    const UserInfo = await getUserInfo(username);
    return UserInfo !== null;
};