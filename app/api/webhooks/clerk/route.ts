import { SubscriptionPlans } from "@/app/(main)/dashboard/billing/types"
import { createSupabaseClientSsrWithServiceKey } from "@/supabase/server"
import { headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (req: NextRequest) => {
  const headerList = await headers()
  const signature = headerList.get("clerk-signature") || ""
  if (!signature || signature !== process.env.CLERK_WEBHOOK_SECRET) {
    return NextResponse.json({ payload: "Invalid signature" }, { status: 401 })
  }

  const body = await req.json()

  if (body.type === "user.created") {
    const clerkUser = body.data

    const supabase = await createSupabaseClientSsrWithServiceKey()
    const { error } = await supabase.from("users").insert({
      user_id: clerkUser.id,
      email: clerkUser.email_addresses[0]?.email_address,
      plan: SubscriptionPlans.Free,
    })

    if (error) {
      console.error("Error inserting user into Supabase:", error)
      return NextResponse.json({ payload: "Error inserting user into Supabase:" }, { status: 500 })
    }
  }

  return NextResponse.json({ payload: "okay" }, { status: 200 })
}
