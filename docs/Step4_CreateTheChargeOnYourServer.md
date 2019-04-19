# [Step 4: Create the charge on your server](https://stripe.com/docs/recipes/elements-react#create-charge)
サーバーに請求を作成するには、POST要求を受信し、本文からトークンを抽出して請求を作成するエンドポイントを作成します。次のコードは、Node.jsアプリケーションのExpressフレームワークでこれを実現する方法を示しています。

```
yarn add express body-parser stripe
```
次に、server.jsという名前の新しいファイルを作成し、次のコードを追加します。

```javascript
const app = require('express')()
const stripe = require('stripe')('sk_test_xYAPema1r9QDjVElzOvv0dPG00iDgzTRqa')

app.use(require('body-parser').text())
```

これにより、Expressインスタンスがセットアップされ、Stripeクライアントライブラリが初期化され、秘密鍵が渡されます。ボディパーサーミドルウェアがあり、POSTリクエストボディからペイロードを取得できます。次に、請求に対するPOSTリクエストハンドラーを追加します。

```javascript
// server.js
app.post('/charge', async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: 2000,
      currency: 'usd',
      description: 'An example charge',
      source: req.body
    })
    res.json({ status })
  } catch (err) {
    res.status(500).end()
  }
})
```
ハンドラーはrequest bodyからトークンを抽出し、それを使用して希望の金額と通貨で請求を作成します。この場合は2ドルの請求です。請求が失敗して例外がスローされた場合は、500エラーを返します。もっと特殊なエラー処理を追加したいと思うかもしれません。

最後に、サーバーに希望のポート番号をlistenさせます。

```javascript
  app.listen(9000, () => console.log('Listening on port 9000'))
```