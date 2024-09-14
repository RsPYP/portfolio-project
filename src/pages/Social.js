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
          技術ブログ
        </Typography>

        <Box>
          <Typography variant="h6" gutterBottom>
            Zenn
          </Typography>
          <Box component="ul" pl={2}>
            <li>
              <a
                href="https://zenn.dev/mhirata"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://zenn.dev/mhirata
              </a>
            </li>
          </Box>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            SHIFT Group 技術ブログで掲載した記事:
          </Typography>
          <Box component="ul" pl={2}>
            <li>
              <a
                href="https://note.shiftinc.jp/n/n26daf5a434b5"
                target="_blank"
                rel="noopener noreferrer"
              >
                【Node.js】ライブラリを使用してコマンドラインツールを作成してみた
              </a>
            </li>
          </Box>
          <Box>
            <Typography variant="body1">
              noteで「SHIFT_平田」タグの検索をすると一括で閲覧できます。
            </Typography>
          </Box>
        </Box>
      </Section>

      <Section>
        <Typography variant="h4" gutterBottom>
          読んだ技術書
        </Typography>
        <Box>
          <Box component="ul" pl={2}>
            <li>
              <a
                href="https://amzn.asia/d/2bCAz7b"
                target="_blank"
                rel="noopener noreferrer"
              >
                これからはじめるVue.js 3実践入門
              </a>
            </li>
          </Box>
          <Typography variant="body1">読んだ内容をここに記述</Typography>
        </Box>
      </Section>
    </Container>
  );
}

export default Social;
