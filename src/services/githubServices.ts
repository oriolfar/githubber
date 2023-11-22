import axios, { AxiosError } from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

export const checkUserExists = async (username: string) => {
    try {
        await axios.get(`${GITHUB_API_URL}/users/${username}`, {
        headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
    });
        return true;
    } catch (error) {
        const axiosError = error as AxiosError;
        if (axiosError.response && axiosError.response.status === 404) {
            return false;
        } else {
            throw error;
        }
    }
};

export const getRepos = async (username: string) => {
    const userExists = await checkUserExists(username);
    if (!userExists) {
        console.error('User not found'); // Log the error
        return null;
    }

    try {
        const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('An error occurred while fetching the repos'); // Log the error
        throw error;
    }
};

export const getUserInfo = async (username: string) => {
    const userExists = await checkUserExists(username);
    if (!userExists) {
        console.error('User not found'); // Log the error
        return null;
    }

    try {
        const response = await axios.get(`${GITHUB_API_URL}/users/${username}`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('An error occurred while fetching the user'); // Log the error
        throw error;
    }
};