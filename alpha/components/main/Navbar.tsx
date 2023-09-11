import React from "react"
import { UserButton } from "@clerk/nextjs"
import { Menu } from "lucide-react"

import { Button } from "../ui/button"

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <div className="flex w-full justify-end gap-4">
        <UserButton />
      </div>
    </div>
  )
}

export default Navbar
