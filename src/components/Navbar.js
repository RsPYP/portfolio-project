import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>
          <Button color="inherit" href="#profile">
            Profile
          </Button>
          <Button color="inherit" href="#projects">
            Projects
          </Button>
          <Button color="inherit" href="#blog">
            Blog
          </Button>
          <Button color="inherit" href="#contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button component="a" href="#profile" onClick={toggleDrawer}>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="#projects"
            onClick={toggleDrawer}
          >
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button component="a" href="#blog" onClick={toggleDrawer}>
            <ListItemText primary="Blog" />
          </ListItem>
          <ListItem button component="a" href="#contact" onClick={toggleDrawer}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Navbar;
