import { ReactNode } from "react"

import Navbar from "@/components/main/Navbar"
import Sidebar from "@/components/main/Sidebar"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <nav className="hidden md:flex md:w-72 md:h-full md:fixed border-r dark:border-r-0 dark:bg-gray-900">
        <Sidebar />
      </nav>
      <main className="md:pl-72">
        <Navbar />
        <div>{children}</div>
      </main>
    </section>
  )
}
