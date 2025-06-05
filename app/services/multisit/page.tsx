"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, CheckCircle, MapPin, Phone, Mail } from "lucide-react"
import { getTranslation } from "@/lib/translations"
import { useLanguage } from "@/components/language-context"
import { useState, useEffect } from "react"

export default function MultisitPage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  // Image rotation state
  const [currentImage, setCurrentImage] = useState(0)
  const multisitImages = ["/multisit_start.jpg", "/multisit_seats.jpg"]

  // Set up image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % multisitImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        {/* Rotating images */}
        {multisitImages.map((src, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: currentImage === index ? 1 : 0,
              zIndex: 0,
            }}
          >
            <Image
              src={src || "/placeholder.svg"}
              alt={t("multisitHeroAlt")}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center z-10">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Multisit</h1>
            <p className="text-xl text-white/90 max-w-2xl">{t("multisitHeroSubtitle")}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-red-600">{t("multisitTagline")}</h2>

            <p className="text-gray-700 mb-6">{t("multisitIntro")}</p>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-4">{t("keyBenefits")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{t("multisitBenefit1")}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{t("multisitBenefit2")}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{t("multisitBenefit3")}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{t("multisitBenefit4")}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{t("multisitBenefit5")}</span>
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-4">{t("applications")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold mb-2">{t("publicTransitAreas")}</h4>
                  <p className="text-gray-700">{t("publicTransitAreasDesc")}</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold mb-2">{t("commercialSpaces")}</h4>
                  <p className="text-gray-700">{t("commercialSpacesDesc")}</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold mb-2">{t("publicParks")}</h4>
                  <p className="text-gray-700">{t("publicParksDesc")}</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h4 className="font-semibold mb-2">{t("educationalInstitutions")}</h4>
                  <p className="text-gray-700">{t("educationalInstitutionsDesc")}</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-semibold mb-4">{t("officialPartner")}</h3>
              <p className="text-gray-700 mb-4">{t("multisitPartnerDesc")}</p>
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                <Link
                  href="https://www.multisit.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  {t("visitMultisitWebsite")}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4 text-red-600">{t("contactUs")}</h3>
              <p className="text-gray-700 mb-4">{t("multisitContactDesc")}</p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t("impulsHeadquarters")}</span>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">+389 2 3131 113</span>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">info@impuls-international.com</span>
                </div>
              </div>
              <Button asChild className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white">
                <Link href="/contact">{t("contactUs")}</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-red-600">{t("whyChooseMultisit")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t("multisitReason1")}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t("multisitReason2")}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t("multisitReason3")}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t("multisitReason4")}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{t("multisitReason5")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
