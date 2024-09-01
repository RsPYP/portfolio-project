import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          hirata mizuki portfolio-project
        </Typography>
        <Button color="inherit" component={Link} to="/">
          home
        </Button>
        <Button color="inherit" component={Link} to="/skills">
          skills
        </Button>
        <Button color="inherit" component={Link} to="/portfolio">
          portfolio
        </Button>
        <Button color="inherit" component={Link} to="/social">
          social
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
