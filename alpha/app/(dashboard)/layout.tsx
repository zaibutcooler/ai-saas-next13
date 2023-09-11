import { ReactNode } from "react"

import Navbar from "@/components/main/Navbar"
import Sidebar from "@/components/main/Sidebar"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <nav className="hidden md:flex md:w-72 md:h-full md:fixed bg-slate-500 dark:bg-slate-900">
        <Sidebar />
      </nav>
      <main className="md:pl-72">
        <Navbar />
        <div>{children}</div>
      </main>
    </section>
  )
}
