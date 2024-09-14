## ウェブサイトのリンク

https://rspyp.github.io/portfolio-project/

## リンクの更新手順

1. プロジェクトのコードをローカルで編集（develop branch）
2. 変更を Git にコミット

```
git add .
git commit -m "Update content or fix issue"
git push origin develop
```

3. リモートで確認後に MargeRequest

4. ビルドとデプロイ
   アプリケーションをビルドし gh-pages ブランチにデプロイする

```
npm run deploy
```

このコマンドで変更内容をビルドし gh-pages ブランチにアップロード

## GitHub Pages での確認

デプロイが完了したら GitHub リポジトリの「Settings」タブの「Pages」セクションで GitHub Pages の URL から反映されているか確認する。

## 作業中のブラウザ確認方法

`npm start`で開発モードのアプリを起動し
[http://localhost:3000](http://localhost:3000) でブラウザを開いて確認する
