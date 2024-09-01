import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Social from "./pages/Social";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // メインの青色
    },
    secondary: {
      main: "#ff4081", // アクセントカラー
    },
    background: {
      default: "#f4f6f8",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/social" element={<Social />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
