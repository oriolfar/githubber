// useFetchUser.ts
import { useEffect, useState } from "react";
import { getUserInfo } from "../services/githubServices";
import { User } from "../components/user/types";

const useFetchUser = (username: string) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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

    return { user, loading, error };
};

export default useFetchUser;