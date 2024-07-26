// src/components/Projects.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Projects = () => {
  return (
    <Box my={4}>
      <Typography variant="h4" component="h2" gutterBottom>
        Projects
      </Typography>
      <Typography variant="body1">
        プロジェクトの詳細な説明、使用技術、成果物のリンクを書きます。
      </Typography>
    </Box>
  );
};

export default Projects;
