"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"

interface OfficeLedSimulationProps {
  productName?: string
  className?: string
}

export default function OfficeLedSimulation({
  productName = "LED Big Round Panel R580",
  className = "",
}: OfficeLedSimulationProps) {
  const [lightsOn, setLightsOn] = useState(true)
  const [colorTemp, setColorTemp] = useState<"warm" | "neutral" | "cool">("neutral")
  const [brightness, setBrightness] = useState(100)
  const animationRef = useRef<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  // Toggle lights on/off with animation
  const toggleLights = () => {
    if (isAnimating) return

    setIsAnimating(true)
    const startBrightness = lightsOn ? 100 : 0
    const endBrightness = lightsOn ? 0 : 100
    const startTime = Date.now()
    const duration = 1000 // 1 second animation

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smoother transition
      const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

      const easedProgress = easeInOutCubic(progress)
      const currentBrightness = startBrightness + (endBrightness - startBrightness) * easedProgress

      setBrightness(currentBrightness)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setLightsOn(!lightsOn)
        setIsAnimating(false)
      }
    }

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    animationRef.current = requestAnimationFrame(animate)
  }

  // Clean up animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Get color temperature CSS values
  const getLightColor = () => {
    switch (colorTemp) {
      case "warm":
        return "rgb(255, 244, 229)" // 3000K
      case "neutral":
        return "rgb(255, 250, 244)" // 4000K
      case "cool":
        return "rgb(255, 255, 251)" // 6000K
      default:
        return "rgb(255, 250, 244)"
    }
  }

  return (
    <div className={`relative w-full overflow-hidden rounded-xl shadow-lg ${className}`}>
      {/* Office background */}
      <div className="relative h-[400px] w-full">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/office-dark-9Yd9Yd9Yd9.jpg"
          alt="Office environment"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay to darken/lighten based on lights state */}
        <div
          className="absolute inset-0 bg-black transition-opacity duration-1000"
          style={{ opacity: lightsOn ? 0 : 0.7 }}
        />

        {/* LED Panels */}
        <div className="absolute inset-0 grid grid-cols-3 gap-8 p-8">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center"
              style={{
                opacity: brightness / 100,
                transition: isAnimating ? "none" : "opacity 1s ease-in-out",
              }}
            >
              {/* LED Panel */}
              <div
                className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full"
                style={{
                  backgroundColor: getLightColor(),
                  boxShadow: `0 0 ${brightness / 2}px ${brightness / 10}px ${getLightColor()}`,
                  opacity: brightness / 100,
                }}
              />

              {/* LED Panel Frame */}
              <div className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-200 bg-transparent" />

              {/* Light beam effect */}
              <div
                className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${getLightColor()} 0%, transparent 70%)`,
                  opacity: (brightness / 100) * 0.7,
                  transform: "translateY(20px)",
                }}
              />
            </div>
          ))}
        </div>

        {/* Product label */}
        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm">
          {productName}
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white p-4 border-t border-gray-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Button
              onClick={toggleLights}
              variant={lightsOn ? "default" : "outline"}
              size="sm"
              className={lightsOn ? "bg-red-600 hover:bg-red-700" : ""}
              disabled={isAnimating}
            >
              {lightsOn ? (
                <>
                  <Sun className="mr-2 h-4 w-4" />
                  ON
                </>
              ) : (
                <>
                  <Moon className="mr-2 h-4 w-4" />
                  OFF
                </>
              )}
            </Button>

            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Brightness:</span>
              <input
                type="range"
                min="0"
                max="100"
                value={brightness}
                onChange={(e) => setBrightness(Number.parseInt(e.target.value))}
                className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                disabled={!lightsOn || isAnimating}
              />
              <span className="text-xs w-8">{brightness}%</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Color Temperature:</span>
            <div className="flex gap-1">
              <Button
                variant={colorTemp === "warm" ? "default" : "outline"}
                size="sm"
                className={`px-2 ${colorTemp === "warm" ? "bg-amber-600 hover:bg-amber-700" : ""}`}
                onClick={() => setColorTemp("warm")}
                disabled={!lightsOn || isAnimating}
              >
                3000K
              </Button>
              <Button
                variant={colorTemp === "neutral" ? "default" : "outline"}
                size="sm"
                className={`px-2 ${colorTemp === "neutral" ? "bg-red-600 hover:bg-red-700" : ""}`}
                onClick={() => setColorTemp("neutral")}
                disabled={!lightsOn || isAnimating}
              >
                4000K
              </Button>
              <Button
                variant={colorTemp === "cool" ? "default" : "outline"}
                size="sm"
                className={`px-2 ${colorTemp === "cool" ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                onClick={() => setColorTemp("cool")}
                disabled={!lightsOn || isAnimating}
              >
                6000K
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
