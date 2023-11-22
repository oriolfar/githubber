import axios, { AxiosError } from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

// This function checks if a GitHub user exists by making a GET request to the GitHub API
export const checkUserExists = async (username: string) => {
    try {
        // Make a GET request to the GitHub API
        await axios.get(`${GITHUB_API_URL}/users/${username}`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        });
        // If the request is successful, the user exists
        return true;
    } catch (error) {
        const axiosError = error as AxiosError;
        // If the response status is 404, the user does not exist
        if (axiosError.response && axiosError.response.status === 404) {
            return false;
        } else {
            // If the response status is not 404, rethrow the error
            throw error;
        }
    }
};

// This function fetches the repositories of a GitHub user
export const getRepos = async (username: string) => {
    // First, check if the user exists
    const userExists = await checkUserExists(username);
    if (!userExists) {
        console.error('User not found');
        return null;
    }

    try {
        // Make a GET request to the GitHub API to fetch the user's repositories
        const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        });
        // Return the data from the response
        return response.data;
    } catch (error) {
        console.error('An error occurred while fetching the repos');
        throw error;
    }
};

// This function fetches the information of a GitHub user
export const getUserInfo = async (username: string) => {
    // First, check if the user exists
    const userExists = await checkUserExists(username);
    if (!userExists) {
        console.error('User not found');
        return null;
    }

    try {
        // Make a GET request to the GitHub API to fetch the user's information
        const response = await axios.get(`${GITHUB_API_URL}/users/${username}`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        });
        // Return the data from the response
        return response.data;
    } catch (error) {
        console.error('An error occurred while fetching the user');
        throw error;
    }
};