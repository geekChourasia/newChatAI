import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: { main: "#075e54" },
      secondary: { main: "#ff9800" },
      background: { default: mode === "dark" ? "#121212" : "#f5f5f5" },
      text: { primary: mode === "dark" ? "#ffffff" : "#333" },
    },
    typography: {
      fontFamily: "Arial, sans-serif",
    },
  });
