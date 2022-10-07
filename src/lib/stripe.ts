import Stripe from 'stripe'
import { Config } from 'use-shopping-cart/core'

export const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
export const stripePrivateKey = process.env.STRIPE_PRIVATE_KEY

export const providerConfig: Config = {
  mode: 'payment',
  cartMode: 'client-only',
  successUrl: `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
  cancelUrl: `${process.env.NEXT_URL}/`,
  currency: 'BRL',
  stripe: stripePublicKey,
  allowedCountries: ['BR'],
}

export const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY, {
  apiVersion: '2022-08-01',
  appInfo: {
    name: 'Ignite Shop'
  },
})