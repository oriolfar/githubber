import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config : ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const theme = extendTheme({
  colors: {
    light: {
      primary: "#2C859B",
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
  fonts: {
    heading: "Arial, sans-serif",
    body: "Arial, sans-serif",
  },
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
  config,
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        color: props.colorMode === "dark" ? "dark.foreground" : "light.foreground",
        bg: props.colorMode === "dark" ? "dark.background" : "light.background",
      },
    }),
  },
})

export default theme