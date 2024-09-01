import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
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

function Home() {
  return (
    <Container>
      <Section>
        <Typography variant="h4" gutterBottom>
          自己紹介
        </Typography>
        <Typography variant="body1" paragraph>
          名前や職業、専門分野、キャリアの背景、スキルセット、興味のある分野などを紹介します。
          簡単な経歴やこれまでの業績、目指している目標を記載します。
        </Typography>

        <Typography variant="h4" gutterBottom>
          コンタクト情報
        </Typography>
        <Typography variant="body1" paragraph>
          連絡を取るための方法を明記します（メールアドレス、LinkedIn、GitHub、Twitterなど）。
          可能であれば、問い合わせフォームを設置すると良いです。
        </Typography>
      </Section>

      <Section>
        <Typography variant="h4" gutterBottom>
          履歴書
        </Typography>
        <Typography variant="body1" paragraph>
          詳細な職歴や学歴、スキルを記載したPDF形式の履歴書をダウンロードできるようにします。
          更新が簡単なリンクとして配置するのも有効です。
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="/path/to/resume.pdf"
          target="_blank"
        >
          履歴書をダウンロード
        </Button>
      </Section>
    </Container>
  );
}

export default Home;
