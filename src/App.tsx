// App.tsx
import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme/theme"
import Navbar from "./components/layout/Navbar"
import Routes from "./routes/Routes"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Navbar />
    <Routes />
  </ChakraProvider>
)