"use server"
import Stripe from "stripe"
import { SubscriptionPlans } from "@/app/(main)/dashboard/billing/types"

export const createUserCheckoutSession = async ({
  user,
  mode,
  product,
}: {
  user: { id: string; email: string; stripeCustomerId?: string }
  mode: Stripe.Checkout.SessionCreateParams.Mode
  product: { priceId: string; subscriptionPlan: SubscriptionPlans }
}): Promise<string | null> => {
  // To Do -> Put the success payment page
  const returnUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode,
    client_reference_id: user.id,
    ...(user.stripeCustomerId ? { customer: user!.stripeCustomerId } : { customer_email: user.email }),
    billing_address_collection: "required",
    tax_id_collection: {
      enabled: true,
    },
    automatic_tax: {
      enabled: true,
    },
    line_items: [
      {
        price: product.priceId,
        quantity: 1,
      },
    ],
    metadata: {
      subscription_plan: product.subscriptionPlan,
    },
    success_url: returnUrl + "?success=true",
    cancel_url: returnUrl,
  })

  return session.url
}

export const createUserBillingPortal = async (user: { stripeCustomerId?: string }): Promise<string | null> => {
  // To Do -> Put the success payment page
  const returnUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

  const billing = await stripe.billingPortal.sessions.create({
    customer: user!.stripeCustomerId as string,
    return_url: returnUrl,
  })

  return billing.url
}
