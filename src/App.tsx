import React, { useState } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme/theme"
import Navbar from "./components/layout/Navbar"
import Home from "./pages/home/Home"

export const App = () => {
  const [submittedUsername, setSubmittedUsername] = useState('');

  const handleSearch = (searchText: string) => {
    setSubmittedUsername(searchText);
  };

  return (
    <ChakraProvider theme={theme} cssVarsRoot=":root">
      <Navbar onSearch={handleSearch} />
      <Home username={submittedUsername} />
    </ChakraProvider>
  );
};