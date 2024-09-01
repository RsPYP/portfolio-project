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

function Skills() {
  return (
    <Container>
      <Section>
        <Typography variant="h4" gutterBottom>
          技術スタック（Skills）
        </Typography>
        <Box mb={2}>
          <Typography variant="body1">
            使用できるプログラミング言語、フレームワーク、ツールなどの技術スキルをリストアップ
            スキルレベルや経験年数を記載
          </Typography>
        </Box>
      </Section>
      <Section>
        <Typography variant="h4" gutterBottom>
          証明書や認定（Certifications）
        </Typography>
        <Box mb={2}>
          <Typography variant="body1">なし</Typography>
        </Box>
      </Section>
    </Container>
  );
}

export default Skills;
