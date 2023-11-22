// Import necessary dependencies
import { extendTheme, ThemeConfig } from "@chakra-ui/react"

// Define the initial color mode and system color mode
const config : ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

// Extend the default theme
const theme = extendTheme({
  // Define the colors for light and dark modes
  colors: {
    light: {
      primary: "#385380",
      secondary: "#FF8C42",
      background: "#F0F9FF",
      foreground: "#263959",
      contrast: "#ffb687",
      gray: "#0f1929",
    },
    dark: {
      primary: "#FF8C42",
      secondary: "#0f1929",
      background: "#263959",
      foreground: "#FF8C42",
      contrast: "#FF8C42",
      gray: "#F0F9FF",
    },
  },
  // Define the fonts for heading and body text
  fonts: {
    heading: "Arial, sans-serif",
    body: "Arial, sans-serif",
  },
  // Define the base style for buttons
  components: {
    Button: {
      baseStyle: {
        colorScheme: "primary",
        variant: "ghost",
        _hover: {
          bg: "secondary",
          color: "white",
        },
      },
    },
  },
  // Apply the color mode configuration
  config,
  // Define global styles
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        color: props.colorMode === "dark" ? "dark.foreground" : "light.foreground",
        bg: props.colorMode === "dark" ? "dark.background" : "light.background",
      },
    }),
  },
})

export default theme;