import React from "react";
import { Container, CssBaseline, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
        <Box my={4}>
          <Profile />
          <Projects />
          <Blog />
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
