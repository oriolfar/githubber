// App.tsx
import React, { useState } from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme/theme"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/home/Home"

export const App = () => {
  const [username, setUsername] = useState('');
  const [submittedUsername, setSubmittedUsername] = useState('');

  const handleUsernameChange = (newUsername: string) => {
    setUsername(newUsername);
  };

  const handleSearch = () => {
    setSubmittedUsername(username);
  };

  return (
    <ChakraProvider theme={theme} cssVarsRoot=":root">
      <Navbar username={username} onUsernameChange={handleUsernameChange} onSearch={handleSearch} />
      <Home username={submittedUsername} />
    </ChakraProvider>
  );
};