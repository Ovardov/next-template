"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/tw/utils"
import { ArrowRight, BadgeCheck } from "lucide-react"
import NumberFlow from "@number-flow/react"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import CustomArrowIcon from "@/components/icons/custom-arrow-icon"

enum PaymentInterval {
  Month = "month",
  Year = "year",
}

export type Plan = {
  id: string
  name: string
  description: string | null
  popular?: boolean
  features: string[]
  prices: {
    id: string
    price: number
    currency: string | null
    interval?: string | null
  }[]
}

const PricingPlans = ({ plans }: { plans: Plan[] }) => {
  const [paymentInterval, setPaymentInterval] = useState<PaymentInterval>(PaymentInterval.Month)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price)
  }

  const getDiscountPercentage = (monthlyPrice?: number, yearlyPrice?: number) => {
    if (!monthlyPrice || !yearlyPrice) {
      return 0
    }

    return ((monthlyPrice * 12 - yearlyPrice) / (monthlyPrice * 12)) * 100
  }

  const maximumDiscount = Math.max(
    ...plans.map((plan) => {
      const monthlyPrice = plan.prices.find((price) => price.interval === PaymentInterval.Month)
      const yearlyPrice = plan.prices.find((price) => price.interval === PaymentInterval.Year)

      return getDiscountPercentage(monthlyPrice?.price, yearlyPrice?.price)
    })
  )

  return (
    <>
      <div className="flex items-center space-x-2">
        <Label htmlFor="payment-frequency">Monthly</Label>

        <Switch
          id="payment-frequency"
          checked={paymentInterval === PaymentInterval.Year}
          onCheckedChange={(checked: boolean) => {
            setPaymentInterval(checked ? PaymentInterval.Year : PaymentInterval.Month)
          }}
        />

        <Label htmlFor="payment-frequency" className="relative">
          <span>Annual</span>

          <span className="absolute -top-10 start-auto -end-28">
            <span className="flex items-center">
              <CustomArrowIcon />

              <Badge className="mt-3 uppercase">Save up to ${Math.round(maximumDiscount)}%</Badge>
            </span>
          </span>
        </Label>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-wrap justify-center items-stretch gap-12">
        {plans.map((plan) => {
          const monthlyPrice = plan.prices.find((price) => price.interval === PaymentInterval.Month)
          const yearlyPrice = plan.prices.find((price) => price.interval === PaymentInterval.Year)

          if (!monthlyPrice || !yearlyPrice) {
            return null
          }

          const currentPrice = paymentInterval === PaymentInterval.Year ? yearlyPrice.price / 12 : monthlyPrice.price
          const discountPercentage = getDiscountPercentage(monthlyPrice.price, yearlyPrice.price)

          return (
            <Card
              key={plan.name}
              className={cn(
                "relative border shadow flex-1 max-w-full min-w-xs min-h-[400px] flex flex-col",
                plan.popular && "shadow-2xl border-[rgba(120,119,198)]"
              )}
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span>{plan.name}</span>

                  {plan.popular && (
                    <Badge className="absolute -top-2.5 left-1/2 transform -translate-x-1/2 bg-orange-900 text-white hover:bg-orange-900">
                      🔥 Most Popular
                    </Badge>
                  )}

                  <Badge
                    className={cn(
                      "ml-auto bg-orange-900 text-white invisible",
                      paymentInterval === PaymentInterval.Year && "visible"
                    )}
                  >
                    Save {Math.round(discountPercentage)}%
                  </Badge>
                </CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <div className="flex space-x-2 items-end">
                    <NumberFlow
                      value={currentPrice}
                      locales="en-US"
                      format={{ style: "currency", currency: "USD" }}
                      className="text-4xl font-bold"
                    />
                  </div>

                  <p className="text-muted-foreground mb-1 p-0">per month</p>

                  <p
                    className={cn(
                      "text-muted-foreground p-0 m-0 invisible ",
                      paymentInterval === PaymentInterval.Year && "visible"
                    )}
                  >
                    Billed as {formatPrice(yearlyPrice.price)}/year
                  </p>
                </div>

                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <BadgeCheck size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex-col gap-1 mt-auto pt-2">
                <Button className="w-full" size="lg" asChild>
                  <Link href="/auth/register">
                    Start 7 days free-trial
                    <ArrowRight />
                  </Link>
                </Button>

                <p className="text-sm text-muted-foreground">No credit card required</p>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </>
  )
}

export default PricingPlans
