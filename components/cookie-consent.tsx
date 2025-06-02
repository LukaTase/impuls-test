"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="mb-4 md:mb-0 text-sm">
          This website uses cookies to enhance the user experience. To learn more, click here:{" "}
          <a href="/privacy" className="underline hover:text-gray-300">
            Privacy & Cookie Policy
          </a>
        </p>
        <Button onClick={handleAccept} className="bg-red-600 hover:bg-red-700 text-white">
          OK
        </Button>
      </div>
    </div>
  )
}
