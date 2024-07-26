// src/components/Contact.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box my={4}>
      <Typography variant="h4" component="h2" gutterBottom>
        Contact
      </Typography>
      <Typography variant="body1">連絡先情報やSNSリンクを書きます。</Typography>
    </Box>
  );
};

export default Contact;
