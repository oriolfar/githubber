import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config : ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const theme = extendTheme({
  colors: {
    light: {
      primary: "#444F80",
      secondary: "#CE4C79",
      background: "##ffb5cf",
      foreground: "#12043a",
      contrast: "#C8619C",
      gray: "#808080",
    },
    dark: {
      primary: "#C8619C",
      secondary: "#1A0655",
      background: "#12043a",
      foreground: "#444F80",
      contrast: "#CE4C79",
      gray: "#808080",
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