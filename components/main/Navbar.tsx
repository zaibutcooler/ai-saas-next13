import React from "react"
import { UserButton } from "@clerk/nextjs"
import { Menu } from "lucide-react"

import { ThemeToggle } from "../theme-toggle"
import { Button } from "../ui/button"
import { MobileSidebar } from "./MobileSidebar"

const Navbar = () => {
  return (
    <div className="flex items-center p-4 border-slate-800">
      <MobileSidebar />
      <div className="flex w-full justify-end items-center space-x-4">
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  )
}

export default Navbar
