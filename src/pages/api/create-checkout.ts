import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

type CreateCheckoutBodyRequest = {
  products: Array<{
    price_id: string;
    quantity: number;
  }>
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405)
  }

  const body = req.body as CreateCheckoutBodyRequest

  if (!body.products || body.products.length <= 0) {
    return res.status(400).json({ error: 'Products field are empty!' })
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}` 
  const cancelUrl = `${process.env.NEXT_URL}/` 

  const lineItems = body.products.map(product => ({
    price: product.price_id,
    quantity: product.quantity
  }))

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: lineItems,
  })

  return res.status(201).json({
    checkout_url: checkoutSession.url,
  })
}