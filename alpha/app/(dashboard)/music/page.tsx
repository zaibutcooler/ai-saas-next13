import { FileAudio } from "lucide-react"

import Header from "@/components/main/Header"

export default function MusicPage() {
  return (
    <main>
      {" "}
      <Header
        title="Video Generation"
        description="Turn your prompt into video."
        icon={FileAudio}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
    </main>
  )
}
