import StripeCheckout from 'react-stripe-checkout';

const STRIPE_PUBLISHABLE = 'pk_test_********************';

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