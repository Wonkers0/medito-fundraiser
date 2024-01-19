import "dotenv/config"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_KEY!)

interface FormData {
  firstName: string | null
  lastName: string | null
  donationAmount: number
  currency: string
}

export async function POST(request: Request) {
  const body: FormData = await request.json()
  if (body.donationAmount < 0.5 || body.currency == null)
    return new Response("", {
      status: 400,
    })

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: body.currency,
          unit_amount: body.donationAmount * 100,
          product_data: {
            name: "Medito Fundraiser",
          },
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:3000/",
    cancel_url: "http://localhost:3000/",
  })

  return Response.json(session.url)
}
