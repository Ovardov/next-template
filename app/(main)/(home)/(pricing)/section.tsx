import PricingPlans, { Plan } from "./plans"
import { getStripePlans } from "./actions"

const PricingSection = async () => {
  const stripePlans = await getStripePlans()

  const plans: Plan[] = stripePlans
    .map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      popular: product.metadata.popular === "true",
      features: product.metadata.features?.split(",") || [],
      prices: product.prices.map((price) => ({
        id: price.id,
        price: (price.unit_amount ?? 0) / 100,
        currency: price.currency,
        interval: price.recurring?.interval,
      })),
    }))
    .sort((a, b) => {
      const aPrice = a.prices[0].price
      const bPrice = b.prices[0].price

      return aPrice - bPrice
    })

  return (
    <section className="flex flex-col items-center gap-10 py-10">
      <div className="space-y-18 mb-12 flex flex-col items-center text-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-medium md:text-5xl">Plans and Pricing</h2>

          <p>Choose the plan that fits you best.</p>
        </div>
      </div>

      <PricingPlans plans={plans} />
    </section>
  )
}

export default PricingSection
