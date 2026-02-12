import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          400: { value: "#646cff" },
          500: { value: "#535bf2" },
        },
        surface: { value: "#ffffff" },
        content: { value: "#242424" },
      },
      fonts: {
        body: { value: "system-ui, Avenir, Helvetica, Arial, sans-serif" },
        heading: { value: "system-ui, Avenir, Helvetica, Arial, sans-serif" },
      },
      radii: {
        md: { value: "8px" },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          value: {
            _light: "{colors.surface}",
            _dark: "#1a1a1a",
          },
        },
        fg: {
          value: {
            _light: "{colors.content}",
            _dark: "#e0e0e0",
          },
        },
        primary: {
          value: {
            _light: "{colors.brand.400}",
            _dark: "{colors.brand.500}",
          },
        },
      },
    },
  },

  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      fontFamily: "body",
      lineHeight: "1.5",
      textRendering: "optimizeLegibility",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },

    body: {
      bg: "bg",
      color: "fg",
      minHeight: "100vh",
    },

    a: {
      fontWeight: "500",
      textDecoration: "none",
      color: "primary",
    },

    "a:hover": {
      color: "brand.500",
    },
  },

  preflight: true,
});

export const system = createSystem(defaultConfig, config);
