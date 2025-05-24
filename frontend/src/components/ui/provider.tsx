"use client"

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#A6A498" },
        secondary: { value: "#1B1A16"},
        "accent-i": { value: "#D7D6D1" },
        "accent-ii": { value: "#3A3426" },
        "accent-iii": { value: "#D9D9D9" },
      },
    },
  },
})

const system = createSystem(defaultConfig, config)

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
