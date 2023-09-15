"use client"

import { useTheme } from "next-themes"

import LandingContact from "@/components/main/LandingContact"
import LandingContent from "@/components/main/LandingContent"
import LandingFooter from "@/components/main/LandingFooter"
import LandingHero from "@/components/main/LandingHero"
import LandingNavbar from "@/components/main/LandingNavbar"

export default function IndexPage() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="h-full min-h-screen bg-white dark:bg-gray-900 overflow-auto w-full">
      <div className="mx-auto max-w-screen-xl h-full w-full">
        <LandingNavbar />
        <LandingHero />
        <LandingContent />
        <LandingContact />
        <LandingFooter />
      </div>
    </main>
  )
}
