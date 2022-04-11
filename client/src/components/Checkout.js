import StripeCheckout from 'react-stripe-checkout';

const STRIPE_PUBLISHABLE = 'pk_test_51KhyrKK2H6S6sNeveqok5TUlrU0P9Vf5IyzQaoLDSxuKeIwd5kCpNfQIaDjI6hjyrWCi0u4NBbvuPTmZ23x9p3ZR00J9raiine';

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