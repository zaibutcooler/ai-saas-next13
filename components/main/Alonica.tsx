"use client"

import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

const font = Montserrat({ weight: "600", subsets: ["latin"] })

const Alonica = () => {
  return (
    <div>
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/bot.png" />
        </div>
        <h1 className={cn("text-lg md:text-xl font-bold")}>Alonica</h1>
      </Link>
    </div>
  )
}

export default Alonica
