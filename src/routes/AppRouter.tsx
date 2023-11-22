import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Home from '../pages/home/Home';
import { useGithubUser } from '../hooks/useGithubUser';
import { Text } from '@chakra-ui/react';

const AppRouter = () => {
    const [submittedUsername, setSubmittedUsername] = useState('');

    const handleSearch = (searchText: string) => {
        setSubmittedUsername(searchText);
    };

    const { userExists, loading } = useGithubUser(submittedUsername);

    return (
        <Router>
            <Navbar onSearch={handleSearch} />
            <Routes>
                <Route path="/" element={<Home username={submittedUsername} userExists={userExists} loading={loading} />} />
                {/* Add more routes as needed */}
                {/* <Route path="/page1" element={<Text>Page 1 </Text>} />
                <Route path="/page2" element={<Text>Page 2 </Text>} />
                <Route path="/page3" element={<Text>Page 3 </Text>} /> */}
            </Routes>
        </Router>
    );
};

export default AppRouter;