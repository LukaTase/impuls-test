"use client"

import { useEffect, useRef, useState } from "react"

interface LEDAnimationProps {
  className?: string
}

export default function LEDAnimation({ className = "" }: LEDAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = 120
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // LED light properties
    const ledCount = Math.floor(canvas.width / 30)
    const leds: { x: number; color: string; brightness: number; speed: number }[] = []

    // Initialize LEDs
    for (let i = 0; i < ledCount; i++) {
      leds.push({
        x: (canvas.width / ledCount) * i + canvas.width / ledCount / 2,
        color: getRandomColor(),
        brightness: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 0.03 + 0.01,
      })
    }

    // Animation loop
    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw LEDs
      leds.forEach((led) => {
        // Update brightness with a sine wave for pulsing effect
        led.brightness = 0.5 + Math.sin(Date.now() * led.speed) * 0.5

        // Draw glowing LED
        const gradient = ctx.createRadialGradient(led.x, canvas.height / 2, 0, led.x, canvas.height / 2, 30)

        const color = hexToRgb(led.color)
        if (color) {
          gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${led.brightness})`)
          gradient.addColorStop(0.3, `rgba(${color.r}, ${color.g}, ${color.b}, ${led.brightness * 0.5})`)
          gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`)
        }

        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(led.x, canvas.height / 2, 30, 0, Math.PI * 2)
        ctx.fill()

        // Draw LED center
        ctx.beginPath()
        ctx.fillStyle = led.color
        ctx.arc(led.x, canvas.height / 2, 5, 0, Math.PI * 2)
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationId)
    }
  }, [])

  // Helper functions
  function getRandomColor() {
    const colors = [
      "#FF5252", // Red
      "#FF4081", // Pink
      "#7C4DFF", // Purple
      "#536DFE", // Indigo
      "#448AFF", // Blue
      "#40C4FF", // Light Blue
      "#18FFFF", // Cyan
      "#64FFDA", // Teal
      "#69F0AE", // Green
      "#B2FF59", // Light Green
      "#EEFF41", // Lime
      "#FFFF00", // Yellow
      "#FFD740", // Amber
      "#FFAB40", // Orange
      "#FF6E40", // Deep Orange
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  }

  function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: Number.parseInt(result[1], 16),
          g: Number.parseInt(result[2], 16),
          b: Number.parseInt(result[3], 16),
        }
      : null
  }

  // Hide animation after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="w-full h-[120px]" aria-hidden="true" />
    </div>
  )
}
