import StripeCheckout from 'react-stripe-checkout';

const STRIPE_PUBLISHABLE = 'pk_test_********************';

const onToken = (user,checkout) => token => 
    checkout(user, token.id);

const Checkout = ({ amount, user, checkout }) => 
    <StripeCheckout
      amount={amount*100}
      token={onToken(user,checkout)}
      currency='INR'
      stripeKey={STRIPE_PUBLISHABLE}
/>

export default Checkout;