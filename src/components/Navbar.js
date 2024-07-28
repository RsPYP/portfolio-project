// src/components/Navbar.js
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
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#1976d2", // Primary blue color
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <List>
                  {["Home", "Projects", "Blog", "Contact"].map((text) => (
                    <ListItem button key={text}>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <>
              <Typography variant="h6" className={classes.title}>
                My Portfolio
              </Typography>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Projects</Button>
              <Button color="inherit">Blog</Button>
              <Button color="inherit">Contact</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
