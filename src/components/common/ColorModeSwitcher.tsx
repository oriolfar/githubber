import * as React from "react"
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

// ColorModeSwitcher component
export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  // Hook to toggle color mode
  const { toggleColorMode } = useColorMode()
  // Determine text and icon based on color mode
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  // Determine hover color and background based on color mode
  const hoverColor = useColorModeValue("light.secondary", "dark.secondary")
  const hoverBg = useColorModeValue("light.primary", "dark.primary")

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      // Display icon based on color mode
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      borderRadius="full"
      // Apply hover styles based on color mode
      _hover={{ color: hoverColor, bg: hoverBg }}
      {...props}
    />
  )
}