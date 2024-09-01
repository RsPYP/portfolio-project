import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// スタイル付きのコンテナ
const Container = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "2rem",
  padding: "2rem",
});

const Section = styled(Box)({
  flex: 1,
});

function Portfolio() {
  return (
    <Container>
      {" "}
      <Section>
        <Typography variant="h4" gutterBottom>
          作品集（Portfolio）
        </Typography>
        <Box mb={2}>
          <Typography variant="body1">
            これまでに手掛けたプロジェクトや作品を掲載します。
            プロジェクトごとに説明、使用した技術、得られた成果などを詳しく記載します。
            プロジェクトのリンクやデモサイトもあると良いです。
          </Typography>
        </Box>
      </Section>
    </Container>
  );
}

export default Portfolio;
