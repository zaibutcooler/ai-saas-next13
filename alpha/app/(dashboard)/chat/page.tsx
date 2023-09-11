import { MessageSquare } from "lucide-react"

import Header from "@/components/main/Header"

export default function ChatPage() {
  return (
    <main>
      {" "}
      <Header
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </main>
  )
}
