import { useState, useEffect } from 'react';
import { checkUserExists } from '../services/githubServices';

export const useGithubUser = (username: string) => {
  const [userExists, setUserExists] = useState(false);
  const [loading, setLoading] = useState(false);

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

  return { userExists, loading };
};