// src/App.js
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Primary blue color
    },
    secondary: {
      main: "#1565c0", // Darker shade of blue for secondary elements
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      {/* 他のコンポーネントを追加 */}
    </ThemeProvider>
  );
}

export default App;
