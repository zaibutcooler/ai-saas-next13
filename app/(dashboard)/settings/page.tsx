"use client"

import axios from "axios"

import { Button } from "@/components/ui/button"

const SettingPage = () => {
  const handleClick = async () => {
    try {
      const response = await axios.get("/api/stripe")
      window.location.href = await response.data.url
    } catch (error) {}
  }

  return (
    <div>
      <Button onClick={handleClick}>Get Started</Button>
    </div>
  )
}

export default SettingPage
