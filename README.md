ウェブサイトの更新手順

https://rspyp.github.io/portfolio-project/

ローカルでの変更

プロジェクトのコードをローカルで編集します。例えば、React コンポーネントの修正、スタイルの更新、コンテンツの追加などを行います。
変更をコミット

変更が完了したら、変更内容を Git にコミットします。以下のコマンドを使用します。

sh
コードをコピーする
git add .
git commit -m "Update content or fix issue"
変更をリモートリポジトリにプッシュ

コミットした変更を GitHub のリポジトリにプッシュします。

sh
コードをコピーする
git push origin main
※ main ブランチはプロジェクトによって異なる場合があります。適切なブランチ名を使用してください。

ビルドとデプロイ

プッシュ後、GitHub Actions や手動でのスクリプトを使ってアプリケーションをビルドし、gh-pages ブランチにデプロイします。手動でデプロイする場合は、以下のコマンドを実行します。

sh
コードをコピーする
npm run deploy
このコマンドは、変更内容をビルドし、gh-pages ブランチにアップロードします。

GitHub Pages での確認

デプロイが完了したら、GitHub リポジトリの「Settings」タブの「Pages」セクションで、GitHub Pages の URL を確認します。
ウェブブラウザで URL にアクセスし、変更が反映されているか確認します。

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
