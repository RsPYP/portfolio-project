// src/components/Profile.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Profile = () => {
  return (
    <Box my={4}>
      <Typography variant="h4" component="h2" gutterBottom>
        Profile
      </Typography>
      <Typography variant="body1">
        経歴、スキルセット、自己紹介を書きます。
      </Typography>
    </Box>
  );
};

export default Profile;
