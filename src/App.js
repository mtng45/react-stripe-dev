import React, { Component } from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'
// StripeProviderはStripeを初期化し、公開可能なキーを渡す
class App extends Component {
  render() {
    return (
      <StripeProvider apiKey="pk_test_WkhaW9iXFx1nOjUaATA4pb4z002ei40toD">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
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
