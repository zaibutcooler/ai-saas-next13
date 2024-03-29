"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { FileAudio, MessageSquare } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Header from "@/components/main/Header"
import Loading from "@/components/main/Loading"
import None from "@/components/main/None"

import { formSchema } from "./constants"

export default function ChatPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  })

  const isLoading = form.formState.isSubmitting

  const [music, setMusic] = useState<string>("")

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setMusic("")

      const response = await axios.post("/api/music", values)
      console.log(response)

      setMusic(response.data.audio)

      form.reset()
    } catch (err) {}
  }

  return (
    <main>
      {" "}
      <Header
        title="Music Generation"
        description="Turn your prompt into video."
        icon={FileAudio}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none dark:bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="How do I calculate the radius of a circle?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                type="submit"
                disabled={isLoading}
                size="icon"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 my-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loading />
            </div>
          )}
          {!isLoading && !music && (
            <None label="No music generation started." />
          )}
          {music && (
            <audio controls className="w-full mt-8">
              <source src={music} />
            </audio>
          )}
        </div>
        <div className="flex gap-y-4"></div>
      </div>
    </main>
  )
}
