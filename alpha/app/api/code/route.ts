import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"
import OpenAI from "openai"
import { ChatCompletionMessage } from "openai/resources/chat"

const key = process.env.OPENAI_SECRET_KEY

const openai = new OpenAI({
  apiKey: key,
})

const instruction: ChatCompletionMessage = {
  role: "system",
  content:
    "You are a professional code generator. You have to answer only in markdown code snippets. Use code comments for explanations.",
}

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { prompt } = body
    console.log("starting")

    // if (!userId) {
    //   return new NextResponse("Unauthorized", { status: 401 })
    // }

    if (!key) {
      return new NextResponse("No Api Key Error", { status: 500 })
    }

    if (!prompt) {
      return new NextResponse("Messages are required", { status: 400 })
    }

    const response = await openai.chat.completions.create({
      messages: [instruction, ...prompt],
      model: "gpt-3.5-turbo",
    })

    return NextResponse.json(response.choices[0].message)
  } catch (err) {
    console.log("[chat error]", err)
    return new NextResponse("internalError", { status: 500 })
  }
}
