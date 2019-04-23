import React, { Component } from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'
// StripeProviderはStripeを初期化し、公開可能なキーを渡す
class App extends Component {
  render() {
    return (
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_API_KEY_PUBLIC}>
        <div className="example">
          <h1>Stripe Elements</h1>
          {/* ElementsにはinjectStripeでラップしたコンポーネントが含まれている必要がある */}
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    )
  }
}

export default App
