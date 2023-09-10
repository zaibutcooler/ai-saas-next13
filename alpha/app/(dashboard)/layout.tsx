import { ReactNode } from "react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <section>
      <nav className="hidden md:flex md:w-72 md:h-full md:fixed bg-slate-500 dark:bg-slate-900">
        Navbar
      </nav>
      <main className="md:pl-72">{children}</main>
    </section>
  )
}
