"use client"

import { useTheme } from "next-themes"

export default function IndexPage() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="text-blue-500 dark:text-red-500">
      <button
        onClick={() => {
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }}
      >
        Toggle
      </button>
    </main>
  )
}
