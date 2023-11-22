import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme/theme"
import AppRouter from "./routes/AppRouter"

export const App = () => {
  return (
    <ChakraProvider theme={theme} cssVarsRoot=":root">
      <AppRouter />
    </ChakraProvider>
  );
};