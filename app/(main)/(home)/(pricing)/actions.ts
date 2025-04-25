"use server"

import { getStripeClient } from "@/lib/stripe/server-client"

export const getStripePlans = async () => {
  try {
    const stripeClient = await getStripeClient()

    const { data: products } = await stripeClient.products.list({ active: true })

    const productsWithPrices = await Promise.all(
      products.map(async (product) => {
        const pricesList = await stripeClient.prices.list({ product: product.id, active: true })

        return {
          ...product,
          prices: pricesList.data,
        }
      })
    )

    return productsWithPrices
  } catch (error) {
    console.error("Error fetching stripe products:", error)
    return []
  }
}
