"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/chat",
    color: "text-violet-500",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-orange-700",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-500",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-700",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-green-700",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/setting",
    color: "text-white-700",
  },
]

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full w-full ">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-2 mb-14">
          <div className="relative w-8 h-8 mr-4">Logo</div>
        </Link>
        <div className="space-y-1 w-ful">
          {routes.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                `text-sm group flex p-3 justify-start font-medium cursor-pointer dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg w-full`,
                pathname === item.href
                  ? "bg-gray-100 hover:bg-gray-200 dark:bg-white/10 "
                  : ""
              )}
            >
              <div className="flex items-center flex-1">
                <item.icon className={cn("h-5 w-5 mr-3", item.color)} />
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
