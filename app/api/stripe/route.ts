import { NextResponse } from "next/server"
import { auth, currentUser } from "@clerk/nextjs"

import prismadb from "@/lib/prisma"
import { stripe } from "@/lib/stripe"
import { getUrl } from "@/lib/utils"

const settingsUrl = getUrl("/settings")

export async function GET() {
  try {
    const { userId } = auth()
    const user = await currentUser()

    if (!userId || !user) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const userSubscription = await prismadb.userSubscription.findUnique({
      where: {
        userId,
      },
    })

    if (userSubscription && userSubscription.stripeCustomerID) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCustomerID,
        return_url: settingsUrl,
      })
      return new NextResponse(JSON.stringify({ url: stripeSession.url }))
    }

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: user.emailAddresses[0].emailAddress,
      line_items: [
        {
          price_data: {
            currency: "USD",
            product_data: {
              name: "Alonica Pro",
              description: "Shut up and buy this you idiot",
            },
            unit_amount: 2000,
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
    })
    return new NextResponse(JSON.stringify({ url: stripeSession.url }))
  } catch (error) {
    console.log("[Stripe Error]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
