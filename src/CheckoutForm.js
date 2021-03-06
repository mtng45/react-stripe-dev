import React, {Component} from 'react'
import { CardElement, injectStripe　} from 'react-stripe-elements'

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = { complete: false }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(ev) {
    // デフォルトのフォーム送信をここで行わせたくないため、ページが更新されます。
    ev.preventDefault()
    // ストライププロップで createToken を呼び出してカード情報をトークン化
    let { token } = await this.props.stripe.createToken({ name: 'Name' })
    let response = await fetch('/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: token.id
    })
    if (response.ok) this.setState({ complete: true })
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>
    return (
      <div className='checkout'>
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.handleSubmit}>Send</button>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm)
