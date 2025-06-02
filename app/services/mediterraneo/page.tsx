"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, MapPin, ShoppingBag, Check } from "lucide-react"
import CatalogModal from "./catalog-modal"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/translations"

export default function MediterraneoPage() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  // Sample product data - replace with actual products
 const products = [
    {
      id: 1,
      name: "Mediterranean  Bowls",
      description: "Hand-painted c bowls with traditional Mediterranean patterns",
      imageUrl: "/bowl.jpeg?height=400&width=400",
    },
    {
      id: 2,
      name: "Decorative Serving Trays",
      description: "Elegant serving trays with Mediterranean-inspired designs",
      imageUrl: "/tray.jpeg?height=400&width=400",
    },
    {
      id: 3,
      name: "Patterned Table Cloths",
      description: "Vibrant table cloths featuring classic Mediterranean motifs",
      imageUrl: "/cloth1.png?height=400&width=400",
    },
  ]

  // VERO Market locations - replace with actual locations
  const veroLocations = [
    { id: 1, name: "VERO Skopje", address: "City Center, Skopje" },
    { id: 2, name: "VERO Tetovo", address: "Tetovo" },
    { id: 3, name: "VERO Bitola", address: " Bitola" },
    { id: 5, name: "VERO Kumanovo", address: "Kumanovo City Center" },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <div className="absolute inset-0 z-0">
          <Image src="/med-ct.jpeg" alt="Mediterraneo Catalog" fill className="object-cover" priority />
        </div>
        <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-start md:px-6">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
              {t("mediterraneoTitle")} <span className="text-red-300">{}</span>
            </h1>
           
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => setIsOpen(true)}
                className="bg-white hover:bg-gray-100 text-red-700 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                {t("viewCatalog")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <a href="https://mediterraneo.mk/" target="_blank" rel="noopener noreferrer">
                  {t("visitOfficialWebsite")}
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("bringMediterranean")}</h2>
              <p className="text-gray-700 mb-6 text-lg">{t("mediterraneoIntro")}</p>
              <p className="text-gray-700 mb-8 text-lg">{t("mediterraneoIntro2")}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-red-700" />
                  </div>
                  <span className="text-gray-700">{t("handcraftedQuality")}</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-red-700" />
                  </div>
                  <span className="text-gray-700">{t("authenticDesigns")}</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-red-700" />
                  </div>
                  <span className="text-gray-700">{t("traditionalPatterns")}</span>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden modern-shadow">
              <Image
                src="/cloth1.png?height=500&width=500&query=mediterranean tablecloth"
                alt="Mediterraneo Table Cloth"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("ourCatalog")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("catalogSubtitle")}</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="relative h-64 w-full mb-6">
              <Image src="/med-ct.jpeg" alt="Mediterraneo Catalog Cover" fill className="object-contain" />
            </div>
            <h3 className="text-2xl font-bold text-red-700 mb-4">{t("catalogTitle")}</h3>
            <p className="text-gray-700 mb-6">{t("catalogDesc")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => setIsOpen(true)} className="bg-red-700 hover:bg-red-800 text-white">
                {t("openOnlineCatalog")}
              </Button>
              <Button asChild variant="outline" className="border-red-700 text-red-700 hover:bg-red-50">
                <a href="/MEDITERRANEO prezentacija 2024.pdf" download>
                  {t("downloadPDF")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("featuredCollection")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("featuredCollectionSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden modern-shadow hover-scale">
                <div className="relative h-64">
                  <Image
                    src={product.imageUrl || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-red-700 font-medium">{t("availableAtVERO")}</span>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERO Markets Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("veroMarkets")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("veroMarketsSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden modern-shadow">
              <Image
                src="/vero.png?height=400&width=600&query=vero supermarket interior"
                alt="VERO Market"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">{t("veroMarketsTitle")}</h3>
              <p className="text-gray-700 mb-6">{t("veroMarketsDesc")}</p>
              <p className="text-gray-700 mb-8">{t("veroMarketsDesc2")}</p>

              <h4 className="text-xl font-bold mb-4">{t("findMediterraneoAt")}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {veroLocations.map((location) => (
                  <div key={location.id} className="flex items-start">
                    <MapPin className="h-5 w-5 text-red-700 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-bold">{location.name}</h5>
                      <p className="text-gray-600 text-sm">{location.address}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button asChild className="bg-red-700 hover:bg-red-800">
                  <a
                    href="https://vero.com.mk/markets"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    {t("findNearestVERO")}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("transformYourHome")}</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">{t("transformYourHomeDesc")}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-red-700 hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
              <a href="https://vero.com.mk/markets" target="_blank" rel="noopener noreferrer">
                {t("findVEROLocation")}
                <MapPin className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
            >
              <a href="https://mediterraneo.mk/" target="_blank" rel="noopener noreferrer">
                {t("visitOfficialWebsite")}
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Modal */}
      <CatalogModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </main>
  )
}
