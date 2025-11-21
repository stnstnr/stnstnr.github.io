import { createSystem, defaultConfig } from "@chakra-ui/react";

const theme = createSystem(
  defaultConfig,
  {
    tokens: {
      colors: {
        accent: { value: "#bb00ff" }, // electric violet
      },
      fonts: {
        heading: { value: "'Inter', sans-serif" },
        body: { value: "'JetBrains Mono', monospace" },
      },
    },

    globalCss: {
      ":root": {
        backgroundColor: "#0e0d10",
        color: "gray.200",
        cursor: "none" // hide system cursor for custom cursor
      },

      "*": {
        cursor: "none !important" // ensures default cursor is fully replaced
      }
    }
  }
);

export default theme;
