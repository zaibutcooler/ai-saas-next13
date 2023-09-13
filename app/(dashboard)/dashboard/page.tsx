"use client"

import { useRouter } from "next/navigation"
import { UserButton } from "@clerk/nextjs"
import { ArrowRight } from "lucide-react"

import { tools } from "@/lib/tools"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

export default function DashboardPage() {
  const router = useRouter()

  return (
    <main>
      {" "}
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((item) => (
          <Card
            onClick={() => router.push(item.href)}
            key={item.href}
            className="p-4 border-black/5 flex tools-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", item.bgColor)}>
                <item.icon className={cn("w-8 h-8", item.color)} />
              </div>
              <div className="font-semibold">{item.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </main>
  )
}
