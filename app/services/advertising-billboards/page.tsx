"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Phone, Mail, Info, Check } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/translations"

export default function BillboardsPage() {
  const { language } = useLanguage()

  // Create a translation helper function
  const t = (key: string) => getTranslation(language, key)

  // This array will hold your billboard locations - you can expand this with your actual locations
  const billboardLocations = [
    {
      id: 1,
      city: language === "en" ? "Skopje" : "Скопје",
      area: language === "en" ? "Bridge billboard Aleksandar Palace North" : "Мостовски билборд Александар Палас Север",
      size: "10m x 1.2m",
    },
    {
      id: 2,
      city: language === "en" ? "Skopje" : "Скопје",
      area: language === "en" ? "Bridge billboard Aleksandar Palace South" : "Мостовски билборд Александар Палас Југ",
      size: "10m x 1.2m",
    },
    {
      id: 3,
      city: language === "en" ? "Veles" : "Велес",
      area: language === "en" ? "Veles North (two-sided)" : "Велес Север (двостран)",
      size: "20.7m x 4m",
    },
    {
      id: 4,
      city: language === "en" ? "Veles" : "Велес",
      area: language === "en" ? "Veles South" : "Велес Југ",
      size: "20.7m x 4m",
    },
    {
      id: 5,
      city: language === "en" ? "Negotino" : "Неготино",
      area: language === "en" ? "Highway Entry (two-sided)" : "Влез на автопат (двостран)",
      size: "20m x 4m",
    },
    {
      id: 6,
      city: language === "en" ? "Gevgelija" : "Гевгелија",
      area: language === "en" ? "Highway Entry (two-sided)" : "Влез на автопат (двостран)",
      size: "15m x 4m",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        {/* Background image placeholder - replace with your own image */}
        <div className="absolute inset-0 bg-blue-200 z-0">
          <div
            className="absolute inset-0 "
            style={{
              backgroundImage:
                "url(/Nashville-billboards.jpeg )",
            }}
          ></div>
        </div>
        <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-start md:px-6">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
              {t("billboardsTitle")}{" "}
              <span className="text-blue-400">{language === "en" ? "Billboards" : "билборди"}</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              {t("billboardsSubtitle")}
            </p>
            <Button
              asChild
              className="bg-white hover:bg-gray-100 text-blue-600 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link href="#billboard-gallery">
                {t("viewOurBillboards")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("maximumVisibility")}{" "}
                <span className="text-gradient">{language === "en" ? "Visibility" : "Видливост"}</span>{" "}
                {language === "en" ? "for Your Brand" : "за Вашиот Бренд"}
              </h2>
              <p className="text-gray-700 mb-6 text-lg">{t("billboardsIntroText")}</p>
              <p className="text-gray-700 mb-8 text-lg">{t("billboardsIntroText2")}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{t("primeLocations")}</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{t("highTrafficAreas")}</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{t("nationwideCoverage")}</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden modern-shadow">
              <Image
                src="/billboards/ap2-zapad.jpeg"
                alt={language === "en" ? "Billboard advertising" : "Рекламирање на билборди"}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Billboard Gallery */}
      <section id="billboard-gallery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("billboardNetwork")}{" "}
              <span className="text-gradient">{language === "en" ? "Billboard Network" : "Мрежа на билборди"}</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("billboardNetworkSubtitle")}</p>
          </div>

          {/* Featured Billboards - Large Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Featured Billboard 1 */}
            <div className="relative h-[500px] rounded-xl overflow-hidden modern-shadow group">
              <Image
                src="/billboards/veles1-sever.jpeg"
                alt={language === "en" ? "Premium Billboard Location" : "Премиум локација на билборд"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-white font-medium">
                    {language === "en" ? "Veles Highway" : "Автопат Велес"}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t("premiumHighwayBillboard")}</h3>
                <p className="text-white/80 mb-4">{t("highwayBillboardDesc")}</p>
                <div className="flex items-center text-white/70 text-sm">
                  <Info className="h-4 w-4 mr-1" />
                  <span>{language === "en" ? "Dimensions: 20.7m x 4m" : "Димензии: 20.7м x 4м"}</span>
                </div>
              </div>
            </div>

            {/* Featured Billboard 2 */}
            <div className="relative h-[500px] rounded-xl overflow-hidden modern-shadow group">
              <Image
                src="/billboards/negotino.jpeg"
                alt={language === "en" ? "Highway Billboard Location" : "Локација на автопатски билборд"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-white font-medium">
                    {language === "en" ? "Negotino Highway" : "Автопат Неготино"}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t("highwayMegaBillboard")}</h3>
                <p className="text-white/80 mb-4">{t("highwayMegaBillboardDesc")}</p>
                <div className="flex items-center text-white/70 text-sm">
                  <Info className="h-4 w-4 mr-1" />
                  <span>{language === "en" ? "Dimensions: 20m x 4m" : "Димензии: 20м x 4м"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Billboard Grid - Smaller Showcases */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Billboard 1 - Aleksandar Palace North */}
            <div className="relative h-[300px] rounded-xl overflow-hidden modern-shadow group">
              <Image
                src="/billboards/ap1-jug.jpeg"
                alt={
                  language === "en"
                    ? "Billboard Location - Aleksandar Palace North"
                    : "Локација на билборд - Александар Палас Север"
                }
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center mb-1">
                  <MapPin className="h-4 w-4 text-blue-400 mr-1" />
                  <span className="text-white font-medium text-sm">
                    {language === "en" ? "Skopje - Aleksandar Palace" : "Скопје - Александар Палас"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {language === "en" ? "Bridge Billboard North" : "Мостовски билборд Север"}
                </h3>
                <div className="flex items-center text-white/70 text-xs">
                  <Info className="h-3 w-3 mr-1" />
                  <span>{language === "en" ? "Dimensions: 10m x 1.2m" : "Димензии: 10м x 1.2м"}</span>
                </div>
              </div>
            </div>

            {/* Billboard 2 - Aleksandar Palace South */}
            <div className="relative h-[300px] rounded-xl overflow-hidden modern-shadow group">
              <Image
                src="/billboards/ap2-zapad.jpeg"
                alt={
                  language === "en"
                    ? "Billboard Location - Aleksandar Palace South"
                    : "Локација на билборд - Александар Палас Југ"
                }
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center mb-1">
                  <MapPin className="h-4 w-4 text-blue-400 mr-1" />
                  <span className="text-white font-medium text-sm">
                    {language === "en" ? "Skopje - Aleksandar Palace" : "Скопје - Александар Палас"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {language === "en" ? "Bridge Billboard South" : "Мостовски билборд Југ"}
                </h3>
                <div className="flex items-center text-white/70 text-xs">
                  <Info className="h-3 w-3 mr-1" />
                  <span>{language === "en" ? "Dimensions: 10m x 1.2m" : "Димензии: 10м x 1.2м"}</span>
                </div>
              </div>
            </div>

            {/* Billboard 3 - Veles North */}
            <div className="relative h-[300px] rounded-xl overflow-hidden modern-shadow group">
              <Image
                src="/billboards/veles1-sever.jpeg"
                alt={language === "en" ? "Billboard Location - Veles North" : "Локација на билборд - Велес Север"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center mb-1">
                  <MapPin className="h-4 w-4 text-blue-400 mr-1" />
                  <span className="text-white font-medium text-sm">
                    {language === "en" ? "Veles - Highway Entry" : "Велес - Влез на автопат"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {language === "en" ? "Veles North Billboard" : "Билборд Велес Север"}
                </h3>
                <div className="flex items-center text-white/70 text-xs">
                  <Info className="h-3 w-3 mr-1" />
                  <span>{language === "en" ? "Dimensions: 20.7m x 4m" : "Димензии: 20.7м x 4м"}</span>
                </div>
              </div>
            </div>

            {/* Billboard 4 - Veles South */}
            <div className="relative h-[300px] rounded-xl overflow-hidden modern-shadow group">
              <Image
                src="/billboards/veles2-jug.jpeg"
                alt={language === "en" ? "Billboard Location - Veles South" : "Локација на билборд - Велес Југ"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center mb-1">
                  <MapPin className="h-4 w-4 text-blue-400 mr-1" />
                  <span className="text-white font-medium text-sm">
                    {language === "en" ? "Veles - Highway Km 75" : "Велес - Автопат Км 75"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {language === "en" ? "Veles South Billboard" : "Билборд Велес Југ"}
                </h3>
                <div className="flex items-center text-white/70 text-xs">
                  <Info className="h-3 w-3 mr-1" />
                  <span>{language === "en" ? "Dimensions: 20.7m x 4m" : "Димензии: 20.7м x 4м"}</span>
                </div>
              </div>
            </div>

            {/* Billboard 5 - Negotino */}
            <div className="relative h-[300px] rounded-xl overflow-hidden modern-shadow group">
              <Image
                src="/billboards/negotino.jpeg"
                alt={language === "en" ? "Billboard Location - Negotino" : "Локација на билборд - Неготино"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center mb-1">
                  <MapPin className="h-4 w-4 text-blue-400 mr-1" />
                  <span className="text-white font-medium text-sm">
                    {language === "en" ? "Negotino - Highway Entry" : "Неготино - Влез на автопат"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {language === "en" ? "Negotino Highway Billboard" : "Автопатски билборд Неготино"}
                </h3>
                <div className="flex items-center text-white/70 text-xs">
                  <Info className="h-3 w-3 mr-1" />
                  <span>{language === "en" ? "Dimensions: 20m x 4m" : "Димензии: 20м x 4м"}</span>
                </div>
              </div>
            </div>

            {/* Billboard 6 - Gevgelija */}
            <div className="relative h-[300px] rounded-xl overflow-hidden modern-shadow group">
              <Image
                src="/billboards/gevgelija1.jpeg"
                alt={language === "en" ? "Billboard Location - Gevgelija" : "Локација на билборд - Гевгелија"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center mb-1">
                  <MapPin className="h-4 w-4 text-blue-400 mr-1" />
                  <span className="text-white font-medium text-sm">
                    {language === "en" ? "Gevgelija - Highway Entry" : "Гевгелија - Влез на автопат"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {language === "en" ? "Gevgelija Highway Billboard" : "Автопатски билборд Гевгелија"}
                </h3>
                <div className="flex items-center text-white/70 text-xs">
                  <Info className="h-3 w-3 mr-1" />
                  <span>{language === "en" ? "Dimensions: 15m x 4m" : "Димензии: 15м x 4м"}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="#contact">
                {t("requestBillboardAvailability")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("nationwideCoverageTitle")}{" "}
              <span className="text-gradient">{language === "en" ? "Coverage" : "Покриеност"}</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("nationwideCoverageSubtitle")}</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 modern-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Map Visualization - Replace with actual map */}
              <div className="lg:col-span-2 relative h-[600px] rounded-xl overflow-hidden">
                <Image
                  src="/mk.png"
                  alt={language === "en" ? "Billboard Coverage Map" : "Мапа на покриеност со билборди"}
                  fill
                  className="object-cover"
                />
                {/* You can add map pins or markers here */}
              </div>

              {/* Location List */}
              <div className="bg-white rounded-xl p-6 modern-shadow">
                <h3 className="text-xl font-bold mb-4">{t("billboardLocations")}</h3>
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                  {billboardLocations.map((location) => (
                    <div key={location.id} className="border-b border-gray-100 pb-3">
                      <div className="flex items-center mb-1">
                        <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="font-medium">{location.city}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 ml-6">
                        <span>{location.area}</span>
                        <span>{location.size}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  <Link href="#contact">
                    {t("inquireAboutLocations")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Billboard Types & Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("billboardSpecifications")}{" "}
              <span className="text-gradient">{language === "en" ? "Specifications" : "Спецификации"}</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("billboardSpecificationsSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Billboard */}
            <div className="bg-white p-8 rounded-xl modern-shadow hover-scale">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/billboards/ap1-jug.jpeg"
                  alt={language === "en" ? "Standard Billboard" : "Стандарден билборд"}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("standardBillboard")}</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">•</div>
                  <span className="text-gray-700">{t("standardBillboardDesc1")}</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">•</div>
                  <span className="text-gray-700">{t("standardBillboardDesc2")}</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">•</div>
                  <span className="text-gray-700">{t("standardBillboardDesc3")}</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">•</div>
                  <span className="text-gray-700">{t("standardBillboardDesc4")}</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="#contact">
                  {t("getPricing")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* LED Digital Billboard */}
            <div className="bg-white p-8 rounded-xl modern-shadow hover-scale">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/billboards/gevgelija2.jpeg"
                  alt={language === "en" ? "LED Digital Billboard" : "LED дигитален билборд"}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("ledDigitalBillboard")}</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">•</div>
                  <span className="text-gray-700">{t("ledDigitalBillboardDesc1")}</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">•</div>
                  <span className="text-gray-700">{t("ledDigitalBillboardDesc2")}</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">•</div>
                  <span className="text-gray-700">{t("ledDigitalBillboardDesc3")}</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">•</div>
                  <span className="text-gray-700">{t("ledDigitalBillboardDesc4")}</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="#contact">
                  {t("getPricing")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Mega Billboard */}
            <div className="bg-white p-8 rounded-xl modern-shadow hover-scale">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/billboards/negotino.jpeg"
                  alt={language === "en" ? "Mega Billboard" : "Мега билборд"}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("megaBillboard")}</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">•</div>
                  <span className="text-gray-700">{t("megaBillboardDesc1")}</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">•</div>
                  <span className="text-gray-700">{t("megaBillboardDesc2")}</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">•</div>
                  <span className="text-gray-700">{t("megaBillboardDesc3")}</span>
                </li>
                <li className="flex items-start">
                  <div className="text-blue-600 mr-2 mt-1">•</div>
                  <span className="text-gray-700">{t("megaBillboardDesc4")}</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="#contact">
                  {t("getPricing")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("designServices")}{" "}
                <span className="text-gradient">{language === "en" ? "Design Solutions" : "Дизајнерски решенија"}</span>
              </h2>
              <p className="text-gray-700 mb-6 text-lg">{t("designServicesText")}</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("creativeConceptDevelopment")}</h3>
                    <p className="text-gray-700">{t("creativeConceptDevelopmentDesc")}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("professionalGraphicDesign")}</h3>
                    <p className="text-gray-700">{t("professionalGraphicDesignDesc")}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("productionInstallation")}</h3>
                    <p className="text-gray-700">{t("productionInstallationDesc")}</p>
                  </div>
                </li>
              </ul>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
              >
                <Link href="#contact">
                  {t("learnMoreAboutDesignServices")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden modern-shadow order-1 md:order-2">
              <Image
                src="/billboards/veles2-jug.jpeg"
                alt={language === "en" ? "Billboard design services" : "Услуги за дизајн на билборди"}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("clientSuccessStories")}{" "}
              <span className="text-gradient">{language === "en" ? "Success Stories" : "Успешни приказни"}</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("clientSuccessStoriesSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl modern-shadow">
              <div className="relative h-12 w-12 mb-6">
                <Image
                  src="/anchosch.png?height=100&width=100&text=Logo"
                  alt={language === "en" ? "Client Logo" : "Лого на клиент"}
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <p className="text-gray-700 mb-6 italic">{t("testimonial1")}</p>
              <div>
                <h4 className="font-bold">{t("marketingDirector")}</h4>
                <p className="text-sm text-gray-500">{t("majorRetailChain")}</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl modern-shadow">
              <div className="relative h-12 w-12 mb-6">
                <Image
                  src="/mozzart.png?height=100&width=100&text=Logo"
                  alt={language === "en" ? "Client Logo" : "Лого на клиент"}
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <p className="text-gray-700 mb-6 italic">{t("testimonial2")}</p>
              <div>
                <h4 className="font-bold">{t("campaignManager")}</h4>
                <p className="text-sm text-gray-500">{t("telecommunicationsCompany")}</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl modern-shadow">
              <div className="relative h-12 w-12 mb-6">
                <Image
                  src="/tikvesh.png?height=100&width=100&text=Logo"
                  alt={language === "en" ? "Client Logo" : "Лого на клиент"}
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <p className="text-gray-700 mb-6 italic">{t("testimonial3")}</p>
              <div>
                <h4 className="font-bold">{t("ceo")}</h4>
                <p className="text-sm text-gray-500">{t("localRestaurantChain")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 modern-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{t("readyToMakeImpact")}</h2>
                <p className="text-white/90 mb-8 text-lg">{t("readyToMakeImpactText")}</p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-xl mb-2 text-white">{t("phone")}</p>
                      <p className="text-white/90">+389 2 3131113</p>
                      
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-white/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-xl mb-2 text-white">{t("email")}</p>
                      <p className="text-white/90">{t("billboardsEmail")}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <Button
                    asChild
                    className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Link href="/contact">
                      {t("contactUs")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden bg-white/10 p-4">
                <Image
                  src="/billboards/gevgelija1.jpeg"
                  alt={language === "en" ? "Contact Us" : "Контактирајте нè"}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
