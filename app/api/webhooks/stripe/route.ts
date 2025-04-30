import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import {
  handleSubscriptionCreated,
  handleSubscriptionUpdated,
  handleSubscriptionDeleted,
} from "@/app/api/webhooks/stripe/actions"

export const POST = async (req: NextRequest) => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

    const body = await req.text()
    const signature = req.headers.get("stripe-signature") || ""

    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    const data = event.data
    const eventType = event.type

    switch (eventType) {
      // When the user checks out a plan for the first time.
      case "checkout.session.completed": {
        const session = data.object as Stripe.Checkout.Session
        await handleSubscriptionCreated(session)
        break
      }
      case "customer.subscription.updated": {
        const subscription = data.object as Stripe.Subscription
        const previousAttributes = data.previous_attributes as Stripe.Subscription | null

        // Update the subscription plan when the user upgrades his plan.
        await handleSubscriptionUpdated(subscription, previousAttributes, stripe)
        break
      }
      case "customer.subscription.deleted": {
        const subscription = data.object as Stripe.Subscription

        // When the user cancels his subscription and the billing period runs out OR if a renewal payment fails (no money in card, expired card etc.)
        await handleSubscriptionDeleted(subscription)
        break
      }
      default: {
        console.log(`Unhandled event type ${eventType}`)
      }
    }

    return NextResponse.json({ message: "Stripe webhook processed." }, { status: 200 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: (err as Error).message }, { status: 500 })
  }
}
