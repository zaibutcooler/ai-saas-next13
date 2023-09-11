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
      "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
      {
        input: {
          prompt_a: prompt,
        },
      }
    )

    return NextResponse.json(response)
  } catch (err) {
    console.log("[music error]", err)
    return new NextResponse("internalError", { status: 500 })
  }
}
