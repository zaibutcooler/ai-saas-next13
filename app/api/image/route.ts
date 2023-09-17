import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"
import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { prompt, amount = 1, resolution = "512x512" } = body
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

    const response = await openai.createImage({
      prompt: prompt,
    })

    console.log("res", response)

    return NextResponse.json(response)
  } catch (err) {
    console.log("[chat error]", err)
    return new NextResponse("internalError", { status: 500 })
  }
}
