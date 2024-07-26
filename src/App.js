// src/App.js
import React from "react";
import { Container, AppBar, Toolbar, Typography } from "@mui/material";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My Portfolio</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Profile />
        <Projects />
        <Blog />
        <Contact />
      </Container>
    </div>
  );
}

export default App;
