// Import necessary dependencies
import { useState, useEffect } from 'react';
import { checkUserExists } from '../services/githubServices';

// useGithubUser is a custom hook that checks if a GitHub user exists
// It takes a GitHub username as a parameter and returns a boolean indicating if the user exists and a loading state
export const useGithubUser = (username: string) => {
  // Initialize state variables
  const [userExists, setUserExists] = useState(false);
  const [loading, setLoading] = useState(false);

  // Check if the user exists when the username changes
  useEffect(() => {
    const fetchUser = async () => {
      setUserExists(false);
      if (username) {
        setLoading(true);
        const exists = await checkUserExists(username);
        setUserExists(exists);
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  // Return the user existence state and loading state
  return { userExists, loading };
};