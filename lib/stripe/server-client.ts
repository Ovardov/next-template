'use server'
import Stripe from 'stripe'

export const getStripeClient = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  return stripe;
}
