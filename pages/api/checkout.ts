import type { NextApiHandler } from 'next';
import Stripe from 'stripe';

type Data = {
  name: string;
};

const checkoutHander: NextApiHandler = async (req, res) => {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    res.status(500).json({ message: 'missing STRIPE_SECRET_KEY' });
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const stripe = new Stripe(stripeKey, { apiVersion: '2022-11-15' });
  const stripeCheckoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    locale: 'pl',
    payment_method_types: ['p24', 'blik', 'card'],
    success_url: 'http://localhost:3000/successPayment?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'http://localhost:3000/cancellPayment',
    line_items: req.body,
  });

  res.status(201).json({ session: stripeCheckoutSession });
};

export default checkoutHander;
