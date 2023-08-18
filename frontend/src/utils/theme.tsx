import { createTheme } from "lib/component-library";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "##324EED",
    },
    secondary: {
      main: "#E187EB",
    },
  },
  spacing: [
    2, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 640, 768,
  ],
});
