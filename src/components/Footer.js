import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box py={4} textAlign="center">
      <Typography variant="body2">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="https://github.com/RsPYP" color="inherit">
          GitHub
        </Link>
        {" | "}
        <Link href="https://twitter.com/yourhandle" color="inherit">
          Twitter
        </Link>
        {" | "}
        <Link href="mailto:youremail@example.com" color="inherit">
          Contact
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
