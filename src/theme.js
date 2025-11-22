import { createSystem, defaultConfig } from "@chakra-ui/react";

const theme = createSystem(defaultConfig, {
  tokens: {
    colors: {
      accent: { value: "#bb00ff" },
      accentGlow: { value: "rgba(187, 0, 255, 0.6)" },
      panel: { value: "rgba(255,255,255,0.04)" },
      surface: { value: "#0e0d10" },
      textMain: { value: "#d8d8d8" },
      textSub: { value: "#9b9b9b" }
    },

    fonts: {
      heading: { value: "'Inter', sans-serif" },
      body: { value: "'JetBrains Mono', monospace" }
    },

    shadows: {
      glow: { value: "0 0 16px rgba(187,0,255,0.6)" }
    }
  },

  globalCss: {
    ":root": {
      backgroundColor: "{colors.surface}",
      color: "{colors.textMain}",
      cursor: "none"
    },
    "*": {
      cursor: "none !important"
    }
  }
});

export default theme;
