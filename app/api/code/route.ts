import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai"

const key = process.env.OPENAI_API_KEY

const configuration = new Configuration({
  apiKey: key,
})

const openai = new OpenAIApi(configuration)

const instructionMessage: ChatCompletionRequestMessage = {
  role: "system",
  content:
    "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations.",
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

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...prompt],
    })

    return NextResponse.json(response.data.choices[0].message)
  } catch (err) {
    console.log("[chat error]", err)
    return new NextResponse("internalError", { status: 500 })
  }
}
