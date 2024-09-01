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

function Social() {
  return (
    <Container>
      <Section>
        <Typography variant="h4" gutterBottom>
          ブログや記事
        </Typography>
        <Box mb={2}>
          <Typography variant="body1">
            技術的な知識を深めたり、専門分野に関する考えを共有するためのブログや記事を掲載します。
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">
            自分の考え方や専門知識をアピールする場として有効です。
          </Typography>
        </Box>
      </Section>

      <Section>
        <Typography variant="h4" gutterBottom>
          読んだ技術書
        </Typography>
        <Box mb={2}>
          <Typography variant="body1">
            ここに読んだ技術書のリストを表示します。
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1">
            リストの各項目には、タイトルや著者、読んだ感想を簡単に記載することができます。
          </Typography>
        </Box>
      </Section>
    </Container>
  );
}

export default Social;
