import React from "react";
import { Typography, Avatar, Box } from "@mui/material";

const Profile = () => {
  return (
    <Box id="profile" my={4} textAlign="center">
      <Avatar
        alt="Your Name"
        src="profile-picture.jpg"
        sx={{ width: 150, height: 150, margin: "auto" }}
      />
      <Typography variant="h4" gutterBottom>
        Your Name
      </Typography>
      <Typography variant="body1">
        ITコンサルタントである私は、技術的な課題の解決を通じて企業の成長をサポートしています。スキルセットには、React,
        Node.js, Python, データ分析などが含まれます。
      </Typography>
    </Box>
  );
};

export default Profile;
