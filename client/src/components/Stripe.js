import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'

class Stripe extends Component {
    render() {
        return (
            <StripeCheckout 
            // amount in cents
            amount={500}
            // token recieved from stripe
            token={token => console.log(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            />
        );
    }
}

export default Stripe;