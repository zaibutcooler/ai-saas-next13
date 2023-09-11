import { Code } from "lucide-react"

import Header from "@/components/main/Header"

export default function CodePage() {
  return (
    <main>
      {" "}
      <Header
        title="Code Generation"
        description="Generate code using descriptive text."
        icon={Code}
        iconColor="text-green-700"
        bgColor="bg-green-700/10"
      />
    </main>
  )
}
