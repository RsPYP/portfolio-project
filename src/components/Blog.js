// src/components/Blog.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Blog = () => {
  return (
    <Box my={4}>
      <Typography variant="h4" component="h2" gutterBottom>
        Blog
      </Typography>
      <Typography variant="body1">
        技術的な記事や思考の共有を書きます。
      </Typography>
    </Box>
  );
};

export default Blog;
