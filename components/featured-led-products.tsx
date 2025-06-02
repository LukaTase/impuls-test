"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"

// Define the product type
interface Product {
  id: string
  name: string
  brand?: string
  featured?: boolean
  imageUrl: string
}

// Props for the component
interface FeaturedLedProductsProps {
  title: string
  subtitle?: string
  products: Product[]
}

export default function FeaturedLedProducts({ title, subtitle, products }: FeaturedLedProductsProps) {
  const [isHovered, setIsHovered] = useState<string | null>(null)
  const [glowingIndex, setGlowingIndex] = useState<number | null>(null)

  // Animation effect that cycles through products making them glow
  useEffect(() => {
    const interval = setInterval(() => {
      setGlowingIndex((prev) => {
        if (prev === null || prev >= products.length - 1) {
          return 0
        }
        return prev + 1
      })
    }, 2000) // Change glowing product every 2 seconds

    return () => clearInterval(interval)
  }, [products.length])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title.split(" ").map((word, index, array) =>
              index === array.length - 1 ? (
                <span key={index} className="text-gradient">
                  {word}
                </span>
              ) : (
                <span key={index}>{word} </span>
              ),
            )}
          </h2>
          {subtitle && <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="flex flex-col items-center w-40 md:w-48"
              onMouseEnter={() => setIsHovered(product.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              <div
                className={`
                  relative h-40 w-40 md:h-48 md:w-48 rounded-full overflow-hidden 
                  border-4 transition-all duration-500 bg-white
                  ${isHovered === product.id ? "shadow-lg scale-105 border-red-200" : "border-gray-100 shadow-md"}
                  ${glowingIndex === index ? "led-glow" : ""}
                `}
                style={{
                  boxShadow:
                    glowingIndex === index
                      ? "0 0 15px 5px rgba(255, 100, 100, 0.7), 0 0 30px 10px rgba(255, 100, 100, 0.5), 0 0 45px 15px rgba(255, 100, 100, 0.3)"
                      : isHovered === product.id
                        ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                        : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
                }}
              >
                {product.brand && (
                  <div className="absolute top-0 left-0 bg-red-600 text-white py-1 px-2 text-xs font-bold z-10 rounded-br-lg">
                    {product.brand}
                  </div>
                )}
                {product.featured && (
                  <div className="absolute top-0 right-0 bg-red-600 text-white py-1 px-2 text-xs font-bold z-10 rounded-bl-lg">
                    FEATURED
                  </div>
                )}
                <Link href={`/services/led-lighting/products/${product.id}`}>
                  <div className="relative h-full w-full">
                    <Image
                      src={product.imageUrl || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className={`object-contain p-4 transition-all duration-500 ${glowingIndex === index ? "brightness-110" : ""}`}
                    />
                    {glowingIndex === index && (
                      <div className="absolute inset-0 bg-gradient-radial from-transparent to-white/20 animate-pulse"></div>
                    )}
                  </div>
                </Link>
              </div>
              <h3
                className={`text-base font-bold text-center mb-1 mt-4 transition-colors duration-300 ${glowingIndex === index ? "text-red-600" : ""}`}
              >
                {product.name}
              </h3>
              <Link
                href={`/services/led-lighting/products/${product.id}`}
                className={`text-sm font-medium inline-flex items-center hover:underline transition-colors duration-300 ${glowingIndex === index ? "text-red-500" : "text-red-600"}`}
              >
                View Details
                <ArrowRight
                  className={`ml-1 h-3 w-3 transition-transform duration-300 ${glowingIndex === index ? "translate-x-1" : ""}`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
