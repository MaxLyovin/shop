import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { StripeProviderProps } from './StripeProvider.types';

const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`);

export const StripeProvider = ({ children }: StripeProviderProps) => {
  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error('missing STRIPE_PUBLISHABLE_KEY');
  }

  return <Elements stripe={stripePromise}>{children}</Elements>;
};
