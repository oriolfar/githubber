// Import necessary dependencies
import { useEffect, useState } from "react";
import { getUserInfo } from "../services/githubServices";
import { User } from "../components/user/types";

// useFetchUser is a custom hook that fetches user information from the GitHub API
// It takes a GitHub username as a parameter and returns the user data, a loading state, and an error state
const useFetchUser = (username: string) => {
    // Initialize state variables
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch user data when the username changes
    useEffect(() => {
        setLoading(true);
        getUserInfo(username)
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, [username]);

    // Return the user data, loading state, and error state
    return { user, loading, error };
};

export default useFetchUser;