"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface CatalogModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CatalogModal({ isOpen, onClose }: CatalogModalProps) {
  const [mounted, setMounted] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Catalog pages based on the provided images
  const catalogPages = [
    {
      id: 1,
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_29-4-2025_01822_-raoMNvHktZVJJa6L17mjLs0K5Td0fE.jpeg",
      title: "MEDITERRANEO",
      description: "MEDITERRANEAN TRAYS, BOWLS & TABLE CLOTHS",
    },
    {
      id: 2,
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_29-4-2025_01842_-lG6rDmDNh78010QVZbtnnd5rnmEnPg.jpeg",
      title: "MEDITERRANEO TIN TRAYS 25/16 CM",
      description: "32 designs",
    },
    {
      id: 3,
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_29-4-2025_01858_-i0krpQVVyS3GAKmuxDu0d6r1A1JYPZ.jpeg",
      title: "MEDITERRANEO TIN TRAYS 32/22 CM",
      description: "14 designs",
    },
    {
      id: 4,
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_29-4-2025_01915_-UE9K85REbdYoqJxcKbqc5Pw6z4ynJY.jpeg",
      title: "MEDITERRANEO TIN BOWL 9 CM",
      description: "3 ASSORTMENTS - 18 DESIGNS",
    },
    {
      id: 5,
      imageUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_29-4-2025_01929_-oM9jYKJUzRvXmzFxWtobRqRNJcOo8n.jpeg",
      title: "MEDITERRANEO 100% POLYESTER TABLE CLOTH",
      description: "Various sizes and designs",
    },
  ]

  // Auto-rotate pages every 5 seconds
  useEffect(() => {
    if (!isOpen) return

    const interval = setInterval(() => {
      goToNextPage()
    }, 5000)

    return () => clearInterval(interval)
  }, [isOpen, currentPage])

  // Handle escape key to close modal
  useEffect(() => {
    setMounted(true)

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  const goToNextPage = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage((prev) => (prev === catalogPages.length - 1 ? 0 : prev + 1))
      setIsTransitioning(false)
    }, 300)
  }

  const goToPrevPage = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage((prev) => (prev === 0 ? catalogPages.length - 1 : prev - 1))
      setIsTransitioning(false)
    }, 300)
  }

  if (!mounted) return null
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <Button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-white/80 hover:bg-white text-red-700 p-2"
          aria-label="Close catalog"
        >
          <X className="h-6 w-6" />
        </Button>

        <div className="p-6 pt-12">
          <div className="relative w-full h-[70vh] rounded-lg overflow-hidden bg-gray-100">
            {/* Carousel */}
            <div
              className={`relative w-full h-full transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
            >
              <img
                src={catalogPages[currentPage].imageUrl || "/placeholder.svg"}
                alt={`Mediterraneo Catalog Page ${currentPage + 1}`}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Navigation buttons */}
            <Button
              onClick={goToPrevPage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full p-2 bg-white/70 hover:bg-white text-red-700"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              onClick={goToNextPage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-2 bg-white/70 hover:bg-white text-red-700"
              aria-label="Next page"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Page indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {catalogPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isTransitioning) return
                    setIsTransitioning(true)
                    setTimeout(() => {
                      setCurrentPage(index)
                      setIsTransitioning(false)
                    }, 300)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentPage === index ? "bg-red-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-6 flex justify-center gap-4">
            <p className="text-gray-500 text-sm">
              Page {currentPage + 1} of {catalogPages.length} • For the complete catalog, visit{" "}
              <a
                href="https://mediterraneo.mk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-700 hover:underline"
              >
                www.mediterraneo.mk
              </a>
            </p>
            <Button asChild variant="outline" className="text-sm border-red-700 text-red-700 hover:bg-red-50">
              <a href="/mediterraneo-catalog.pdf" download>
                Download PDF
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
