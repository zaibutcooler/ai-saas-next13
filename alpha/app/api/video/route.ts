import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"
import Replicate from "replicate"

const replicate = new Replicate({ auth: process.env.REPLICATE_TOKEN as string })

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { prompt } = body
    console.log("starting")

    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 })
    // }

    // if (!key) {
    //   return new NextResponse("No Api Key Error", { status: 500 })
    // }

    // if (!prompt) {
    //   return new NextResponse("prompt are required", { status: 400 })
    // }

    const response = await replicate.run(
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          prompt: "Cat swimming",
        },
      }
    )

    return NextResponse.json(response)
  } catch (err) {
    console.log("[music error]", err)
    return new NextResponse("internalError", { status: 500 })
  }
}
