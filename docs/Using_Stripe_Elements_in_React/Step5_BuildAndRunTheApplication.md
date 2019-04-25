# [Step 5: Build and run the application](https://stripe.com/docs/recipes/elements-react#run-application)
Node.jsサーバーを実行するには、次のコマンドを使用します。

```
node server.js
```
create-react-appテンプレートには組み込みのwebpack devサーバーが含まれており、これを使用してフロントエンドコードを構築および実行できます。 Expressサーバーは別のNode.jsインスタンスで実行されるため、[Expressサーバーをプロキシ](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development)するようにwebpack devサーバーを構成する必要があります。 Expressアプリケーションを実行しているホストとポートを使用して、create-react-appによって生成された `package.json` ファイルに `proxy` オプションを追加します。

```
"proxy": "http://localhost:9000"
```

次に、create-reactアプリのwebpack devサーバーを起動します。

```
yarn start
```

webpack devサーバーが起動すると、自動的にWebブラウザを開いてアプリケーションをロードします。クレジットカードの入力フォームと購入ボタンが表示されます。[テストカード](https://stripe.com/docs/testing)を使用してフォームに記入し、ボタンをクリックすると、サーバーは新しい請求を作成するはずです。

react-stripe-elementsライブラリの詳細については、[GitHubのドキュメント](https://github.com/stripe/react-stripe-elements/blob/master/README.md)を参照してください。プロジェクトのGitHubレポジトリには、ライブラリの他の機能を示す[いくつかの例](https://github.com/stripe/react-stripe-elements/tree/master/demo)もあります。
