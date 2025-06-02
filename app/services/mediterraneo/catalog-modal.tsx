"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

type CatalogModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function CatalogModal({ isOpen, onClose }: CatalogModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-5xl h-[80vh] bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <Button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-white/80 hover:bg-white text-red-700 p-2"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </Button>

        {/* iFrame content */}
        <iframe
          src="https://mediterraneo.mk/"
          title="Mediterraneo Catalog"
          className="w-full h-full rounded-lg"
          frameBorder="0"
        />
      </div>
    </div>
  )
}
