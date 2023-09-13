import { Button } from "../ui/button"

const LandingNavbar = () => {
  return (
    <div className="w-full dark:bg-gray-900 h-12 flex items-center justify-between">
      <section>Logo</section>
      <section>
        <Button className="text-sm rounded-full">Get Started</Button>
      </section>
    </div>
  )
}

export default LandingNavbar
