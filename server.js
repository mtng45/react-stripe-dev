require('dotenv').config()
const app = require('express')()
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_API_KEY_SECRET)

app.use(require('body-parser').text())
// 請求に対するPOSTリクエストハンドラー
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
//サーバーに希望のポート番号をlisten
app.listen(9000, () => console.log('Listening on port 9000'))