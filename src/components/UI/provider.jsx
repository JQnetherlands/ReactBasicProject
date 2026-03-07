"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./theme";
import { ThemeProvider } from "next-themes";

export function Provider({ children }) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute={"class"} disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
