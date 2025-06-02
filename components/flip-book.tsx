"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Page {
  id: number
  imageUrl: string
  title?: string
  description?: string
}

interface FlipBookProps {
  pages: Page[]
  title?: string
  className?: string
}

export default function FlipBook({ pages, title, className = "" }: FlipBookProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [direction, setDirection] = useState<"left" | "right">("right")

  const totalPages = pages.length
  const isFirstPage = currentPage === 0
  const isLastPage = currentPage === totalPages - 1

  const goToNextPage = () => {
    if (!isLastPage && !isFlipping) {
      setDirection("right")
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage + 1)
        setIsFlipping(false)
      }, 500)
    }
  }

  const goToPrevPage = () => {
    if (!isFirstPage && !isFlipping) {
      setDirection("left")
      setIsFlipping(true)
      setTimeout(() => {
        setCurrentPage(currentPage - 1)
        setIsFlipping(false)
      }, 500)
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        goToNextPage()
      } else if (e.key === "ArrowLeft") {
        goToPrevPage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentPage, isFlipping])

  return (
    <div className={`w-full ${className}`}>
      {title && <h2 className="text-2xl font-bold text-center mb-6 text-red-700">{title}</h2>}

      <div className="relative mx-auto max-w-4xl aspect-[16/10] shadow-2xl rounded-lg overflow-hidden bg-white">
        {/* Book cover and spine effect */}
        <div className="absolute inset-0 bg-red-700 rounded-lg" style={{ zIndex: -1 }}>
          <div className="absolute left-[49.5%] top-0 bottom-0 w-[1%] bg-red-900 shadow-inner"></div>
          <div
            className="absolute inset-0 rounded-lg opacity-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>

        {/* Current page */}
        <div
          className={`absolute inset-0 bg-white flex items-center justify-center transition-transform duration-500 ease-in-out ${
            isFlipping ? (direction === "right" ? "animate-page-flip-right" : "animate-page-flip-left") : ""
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={pages[currentPage].imageUrl || "/placeholder.svg"}
              alt={pages[currentPage].title || `Page ${currentPage + 1}`}
              fill
              className="object-contain p-4"
              priority
            />

            {(pages[currentPage].title || pages[currentPage].description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-6">
                {pages[currentPage].title && (
                  <h3 className="text-2xl font-bold text-red-700 text-center mb-2">{pages[currentPage].title}</h3>
                )}
                {pages[currentPage].description && (
                  <p className="text-gray-700 text-center whitespace-pre-line">{pages[currentPage].description}</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Page number indicator */}
        <div className="absolute bottom-2 left-0 right-0 text-center text-sm text-gray-500">
          Page {currentPage + 1} of {totalPages}
        </div>

        {/* Navigation buttons */}
        <Button
          onClick={goToPrevPage}
          disabled={isFirstPage || isFlipping}
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 bg-white/70 hover:bg-white text-red-700 ${
            isFirstPage ? "opacity-30 cursor-not-allowed" : ""
          }`}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          onClick={goToNextPage}
          disabled={isLastPage || isFlipping}
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full p-2 bg-white/70 hover:bg-white text-red-700 ${
            isLastPage ? "opacity-30 cursor-not-allowed" : ""
          }`}
          aria-label="Next page"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Thumbnail navigation */}
      <div className="mt-6 flex justify-center gap-2 overflow-x-auto py-2 px-4">
        {pages.map((page, index) => (
          <button
            key={page.id}
            onClick={() => {
              if (!isFlipping) {
                setDirection(index > currentPage ? "right" : "left")
                setIsFlipping(true)
                setTimeout(() => {
                  setCurrentPage(index)
                  setIsFlipping(false)
                }, 500)
              }
            }}
            className={`relative w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
              currentPage === index ? "border-red-700 scale-110" : "border-gray-200 hover:border-red-300"
            }`}
            disabled={isFlipping}
            aria-label={`Go to page ${index + 1}`}
          >
            <Image
              src={page.imageUrl || "/placeholder.svg"}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
