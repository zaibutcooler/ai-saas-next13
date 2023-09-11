import { ImageIcon } from "lucide-react"

import Header from "@/components/main/Header"

export default function ImagePage() {
  return (
    <main>
      {" "}
      <Header
        title="Image Generation"
        description="Turn your prompt into an image."
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />
    </main>
  )
}
