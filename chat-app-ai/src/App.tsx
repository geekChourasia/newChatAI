import React, { useState, useMemo } from "react";
import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline, IconButton, Box } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import ChatWindow from "../src/components/ChatWindow";
import { store } from "./redux/store";
import { getTheme } from "./components/theme";


const ThemeToggle: React.FC<{ mode: "light" | "dark"; toggleTheme: () => void }> = ({ mode, toggleTheme }) => (
  <Box
    sx={{
      position: "absolute",
      top: 16,
      right: 16,
      zIndex: 10, 
    }}
  >
    <IconButton onClick={toggleTheme} color="inherit">
      {mode === "light" ? <Brightness4 /> : <Brightness7 />}
    </IconButton>
  </Box>
);


const App: React.FC = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  // Theme Toggle Function
  const toggleTheme = () => setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  // Memoized Theme
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ThemeToggle mode={mode} toggleTheme={toggleTheme} />
        <ChatWindow />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
