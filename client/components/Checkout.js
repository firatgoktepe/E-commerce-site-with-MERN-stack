import StripeCheckout from 'react-stripe-checkout';

const stripe_publishable = require('stripe')(config.get('StripePublishableKey'));
const STRIPE_PUBLISHABLE = stripe_publishable;

const onToken = (user,checkout) => token => 
    checkout(user, token.id);

const Checkout = ({ amount, user, checkout }) => 
    <StripeCheckout
      amount={amount}
      token={onToken(user,checkout)}
      currency='TRY'
      stripeKey={STRIPE_PUBLISHABLE}
/>

export default Checkout;