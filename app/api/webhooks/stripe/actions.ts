import Stripe from "stripe"
import { createSupabaseClientSsrWithServiceKey } from "@/supabase/server"
import { SubscriptionPlans } from "@/app/(main)/dashboard/billing/types"

export const handleSubscriptionCreated = async (session: Stripe.Checkout.Session): Promise<void> => {
  if (!session.client_reference_id || !session.customer || typeof session.customer !== "string") {
    throw new Error("Customer not found")
  }

  const subscriptionPlan = session.metadata?.subscription_plan as SubscriptionPlans | null
  if (!subscriptionPlan) {
    throw new Error("Subscription plan is missing")
  }

  const supabase = await createSupabaseClientSsrWithServiceKey()
  const { error, data } = await supabase
    .from("users")
    .update({
      stripe_customer_id: session.customer,
      subscription_plan: subscriptionPlan,
    })
    .eq("user_id", session.client_reference_id)
    .select("*")

  if (error) {
    throw new Error(error.message)
  }

  if (data?.length === 0) {
    throw new Error("User not found")
  }
}

export const handleSubscriptionDeleted = async (subscription: Stripe.Subscription): Promise<void> => {
  if (!subscription.customer || typeof subscription.customer !== "string") {
    throw new Error("Customer not found")
  }

  const supabase = await createSupabaseClientSsrWithServiceKey()
  const { error, data } = await supabase
    .from("users")
    .update({
      stripe_customer_id: null,
      subscription_plan: null,
    })
    .eq("stripe_customer_id", subscription.customer)
    .select("*")

  if (error) {
    throw new Error(error.message)
  }

  if (data?.length === 0) {
    throw new Error("User not found")
  }
}

export const handleSubscriptionUpdated = async (
  subscription: Stripe.Subscription,
  previousAttributes: Stripe.Subscription | null,
  stripeClient: Stripe
): Promise<void> => {
  if (!subscription.customer || typeof subscription.customer !== "string") {
    throw new Error("Customer not found")
  }

  // When the user downgrades to a lower plan we let him have the rest of his period and downgrade him on the next billing cycle. (Controlled in Stripe settings)
  // When the user upgrades to a higher plan we upgrade him immediately.
  const oldProduct = previousAttributes?.items?.data.at(0)?.plan?.product
  const newProduct = subscription.items.data.at(0)?.plan?.product

  const isChanged = oldProduct && newProduct && oldProduct !== newProduct
  if (!isChanged) {
    return
  }

  const product = await stripeClient.products.retrieve(newProduct as string)
  if (!product) {
    throw new Error("Product not found")
  }

  if (!product.metadata.subscription_plan) {
    throw new Error("Subscription plan is missing")
  }

  const supabase = await createSupabaseClientSsrWithServiceKey()
  const { error, data } = await supabase
    .from("users")
    .update({
      subscription_plan: product.metadata.subscription_plan,
    })
    .eq("stripe_customer_id", subscription.customer)
    .select("*")

  if (error) {
    throw new Error(error.message)
  }

  if (data?.length === 0) {
    throw new Error("User not found")
  }
}
