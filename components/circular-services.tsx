"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Lightbulb, Building, PresentationIcon, Palmtree, Droplets, Crown } from "lucide-react"

interface Service {
  icon: React.ReactNode
  name: string
  description: string
  link: string
}

export default function CircularServices() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const services: Service[] = [
    {
      icon: <Building className="h-10 w-10" />,
      name: "Building Construction",
      description: "High-quality construction services for commercial and residential buildings.",
      link: "/services/construction",
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      name: "LED Lighting",
      description: "Energy-efficient lighting solutions for commercial and industrial applications.",
      link: "/services/led-lighting",
    },
    {
      icon: <PresentationIcon className="h-10 w-10" />,
      name: "Advertising Billboards",
      description: "Strategic outdoor advertising solutions for maximum visibility and impact.",
      link: "/services/billboards",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 5v14" />
          <path d="M20 5v14" />
          <path d="M12 5v14" />
          <path d="M4 12h16" />
          <path d="m9 5 3-3 3 3" />
          <path d="m9 19 3 3 3-3" />
        </svg>
      ),
      name: "Underbold",
      description: "Exclusive dealership for premium products and solutions.",
      link: "/services/underbold",
    },
    {
      icon: <Palmtree className="h-10 w-10" />,
      name: "Mediterraneo",
      description: "Premium Mediterranean products for discerning customers.",
      link: "/services/mediterraneo",
    },
    {
      icon: <Crown className="h-10 w-10" />,
      name: "Kings Choice",
      description: "Premium products for discerning customers with exclusive dealer network.",
      link: "/services/kings-choice",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Simple plant pot */}
          <path d="M8 22h8" /> {/* Pot base */}
          <path d="M7 10v8c0 2 2 4 5 4s5-2 5-4v-8" /> {/* Pot body */}
          <path d="M7 10h10" /> {/* Pot rim */}
          <path d="M7 10c0-1.5.5-3 2.5-3s2.5 1.5 2.5 3" /> {/* Left pot handle */}
          <path d="M17 10c0-1.5-.5-3-2.5-3s-2.5 1.5-2.5 3" /> {/* Right pot handle */}
        </svg>
      ),
      name: "Terapot",
      description: "Exclusive dealership for premium terapot products and accessories.",
      link: "/services/terapot",
    },
    {
      icon: <Droplets className="h-10 w-10" />,
      name: "Ego Water",
      description: "Premium water solutions for residential and commercial applications.",
      link: "/services/ego-water",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="12" width="16" height="6" rx="2" />
          <path d="M4 12V8c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v4" />
          <path d="M8 18v2" />
          <path d="M16 18v2" />
        </svg>
      ),
      name: "Multisit",
      description: "Innovative urban furniture that combines seating with advertising opportunities.",
      link: "/services/multisit",
    },
  ]

  // Rotate through services every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [services.length])

  if (isMobile) {
    // Mobile layout - vertical scrollable list
    return (
      <div className="w-full max-w-md mx-auto">
        {/* Center service display */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-6">
          <div className="text-[#ed3237] mb-3 flex justify-center">{services[activeIndex].icon}</div>
          <h3 className="text-xl font-bold mb-2 text-center">{services[activeIndex].name}</h3>
          <p className="text-gray-600 text-sm mb-4 text-center">{services[activeIndex].description}</p>
          <div className="flex justify-center">
            <Link
              href={services[activeIndex].link}
              className="text-[#ed3237] font-medium inline-flex items-center hover:underline"
            >
              Learn More
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Service selector dots */}
        <div className="flex justify-center gap-2 mb-6">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeIndex === index ? "bg-[#ed3237]" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Select ${services[index].name}`}
            />
          ))}
        </div>

        {/* Horizontal scrollable service list */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4" style={{ width: `${services.length * 100}px` }}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                  activeIndex === index
                    ? "bg-[#ed3237] text-white shadow-lg"
                    : "bg-white text-[#ed3237] shadow-md hover:shadow-lg"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="scale-75">{service.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Desktop layout - circular arrangement
  return (
    <div className="relative w-full max-w-5xl mx-auto h-[700px] md:h-[800px]">
      {/* Center service display */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white shadow-lg flex flex-col items-center justify-center text-center p-6 z-20">
        <div className="text-[#ed3237] mb-3">{services[activeIndex].icon}</div>
        <h3 className="text-xl font-bold mb-2">{services[activeIndex].name}</h3>
        <p className="text-gray-600 text-sm mb-4">{services[activeIndex].description}</p>
        <Link
          href={services[activeIndex].link}
          className="text-[#ed3237] font-medium inline-flex items-center hover:underline"
        >
          Learn More
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      {/* Circular arrangement of services */}
      {services.map((service, index) => {
        // Calculate position in circle
        const angle = (index * (2 * Math.PI)) / services.length
        const radius = 280 // Adjust based on your design
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <div
            key={index}
            className={`absolute top-1/2 left-1/2 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer ${
              activeIndex === index
                ? "bg-[#ed3237] text-white shadow-[0_0_30px_rgba(237,50,55,0.6)]"
                : "bg-white text-[#ed3237] shadow-md hover:shadow-lg"
            }`}
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              zIndex: activeIndex === index ? 10 : 5,
            }}
            onClick={() => setActiveIndex(index)}
          >
            <div className="scale-75">{service.icon}</div>
          </div>
        )
      })}

      {/* Light trail effect */}
      <div
        className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <radialGradient id="lightGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="rgba(237, 50, 55, 0.2)" />
              <stop offset="100%" stopColor="rgba(237, 50, 55, 0)" />
            </radialGradient>
          </defs>
          <circle
            cx="50%"
            cy="50%"
            r="280"
            fill="none"
            stroke="url(#lightGradient)"
            strokeWidth="4"
            strokeDasharray="20 10"
            className="animate-spin-slow"
          />
        </svg>
      </div>
    </div>
  )
}
