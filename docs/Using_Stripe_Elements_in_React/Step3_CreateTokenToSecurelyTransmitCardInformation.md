# [Step 3: Create a token to securely transmit card information](https://stripe.com/docs/recipes/elements-react#create-token)
この時点で、アプリケーションはカード入力フォームを表示できます。次のステップでは、CheckoutFormコンポーネントの送信メソッドに機能を追加して、[購入]ボタンをクリックしてカード情報をトークン化してサーバーに送信します。

```javascript
async submit(ev) {
  let {token} = await this.props.stripe.createToken({name: "Name"});
  let response = await fetch("/charge", {
    method: "POST",
    headers: {"Content-Type": "text/plain"},
    body: token.id
  });

  if (response.ok) console.log("Purchase Complete!")
}
```

`submit` メソッドで、ストライププロップで `createToken` を呼び出してカード情報をトークン化します。前の手順で `injectStripe` を使用しているため、ストライププロップはコンポーネント内で使用できます。

次に、トークンをサーバーに送信してください。この例では、ブラウザの [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) を使用してPOSTリクエストの本文にトークンIDを送信する方法を示します。しかし、あなたのために働く任意のアプローチを使用できます。

アプリケーションでは、請求が完了したことを顧客に知らせる必要があります。 CheckoutForm.jsファイルで、コンポーネントの `state` にプロパティを追加し、それが使用されて購入が完了したときに条件付きでメッセージが `render` されるようにします。

```javascript
constructor(props) {
  super(props)
  this.state = { complete: false }
  this.submit = this.submit.bind(this)
}

...

async submit(ev) {
  ...

  if (response.ok) this.setState({ complete: true })
}

render() {
  if (this.state.complete) return <h1>Purchase Complete</h1>

  return (
    <div className="checkout">
      <p>Would you like to complete the purchase?</p>
      <CardElement />
      <button onClick={this.submit}>Send</button>
    </div>
  );
}
```

実際のアプリケーションでは、失敗した場合にサーバーからエラーメッセージを伝播してブラウザに表示することもできます。
