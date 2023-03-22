import type { NextApiHandler } from 'next';

const stripeWebhook: NextApiHandler = async (req, res) => {
  switch (req.body.type) {
    case 'checkout.session.completed':
      console.log(req.body);
      return;
  }

  res.status(204).end();
};

export default stripeWebhook;
