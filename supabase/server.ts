"use server"
import { auth } from "@clerk/nextjs/server"
import { createClient } from "@supabase/supabase-js"

export async function createClerkSupabaseClientSsr() {
  const { getToken } = await auth()

  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_KEY!, {
    global: {
      // Get the custom Supabase token from Clerk
      fetch: async (url, options = {}) => {
        const clerkToken = await getToken({
          template: "supabase",
        })

        // Insert the Clerk Supabase token into the headers
        const headers = new Headers(options?.headers)
        headers.set("Authorization", `Bearer ${clerkToken}`)

        // Now call the default fetch
        return fetch(url, {
          ...options,
          headers,
        })
      },
    },
  })
}

export async function createSupabaseClientSsrWithServiceKey() {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
}
