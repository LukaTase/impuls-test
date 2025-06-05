"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Phone, Mail, Info, Check } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { createContext } from "react"





export default function BillboardsPage() {
  const { language, t} = useLanguage()
  const billboardLocations = [
    {
      id: 1,
      city: language === "en" ? "Skopje" : "Скопје",
      area: language === "en" ? "City Center Aleksandar Palace istok" : "Градски центар Александар Палас исток",
      size: "10m x 1.2m",
    },
    {
      id: 2,
      city: language === "en" ? "Skopje" : "Скопје",
      area: language === "en" ? "City Center Aleksandar Palace zapad" : "Градски центар Александар Палас запад",
      size: "10m x 1.2m",
    },
    {
      id: 3,
      city: language === "en" ? "Veles" : "Велес",
      area: language === "en" ? "Highway Entry Veles 1 sever two-sided" : "Влез на автопат Велес 1 север двостран",
      size: "20.7m x 4m",
    },
    {
      id: 4,
      city: language === "en" ? "Veles" : "Велес",
      area: language === "en" ? "Highway Entry Veles 1 jug" : "Влез на автопат Велес 1 југ",
      size: "20.7m x 4m",
    },
    {
      id: 5,
      city: language === "en" ? "Negotino" : "Неготино",
      area: language === "en" ? "Highway Entry two-sided" : "Влез на автопат двостран",
      size: "20m x 4m",
    },
    {
      id: 6,
      city: language === "en" ? "Gevgelija" : "Гевгелија",
      area: language === "en" ? "Highway Entry two-sided" : "Влез на автопат двостран",
      size: "15m x 4m",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        {/* Background image with rotating effect */}
        <div className="absolute inset-0 bg-blue-900 z-0">
          <div
            className="rotating-bg rotating-bg-1"
            style={{ backgroundImage: "url('/billboards/gevgelija1.jpeg')" }}
          ></div>
          <div
            className="rotating-bg rotating-bg-2"
            style={{ backgroundImage: "url('/billboards/gevgelija2.jpeg')" }}
          ></div>
          <div
            className="rotating-bg rotating-bg-3"
            style={{ backgroundImage: "url('/billboards/negotino.jpeg')" }}
          ></div>
          <div
            className="rotating-bg rotating-bg-4"
            style={{ backgroundImage: "url('/billboards/veles1-sever.jpeg')" }}
          ></div>
        </div>
        <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-start md:px-6">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
              {t("billboardsTitle")} <span className="text-gradient">{t("billboardsSubtitle")}</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              {t("billboardsSubtitle")}
            </p>
            <Button
              asChild
              className="bg-white hover:bg-gray-100 text-blue-600 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all animate-slide-up animate-pulse"
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
            <div className="reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("maximumVisibility")}</h2>
              <p className="text-gray-700 mb-6 text-lg">{t("billboardsIntroText")}</p>
              <p className="text-gray-700 mb-8 text-lg">{t("billboardsIntroText2")}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center animate-slide-left" style={{ animationDelay: "0.1s" }}>
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{t("primeLocations")}</span>
                </div>
                <div className="flex items-center animate-slide-left" style={{ animationDelay: "0.2s" }}>
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{t("highTrafficAreas")}</span>
                </div>
                <div className="flex items-center animate-slide-left" style={{ animationDelay: "0.3s" }}>
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{t("nationwideCoverage")}</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden modern-shadow reveal spotlight">
              <Image
                src="/billboards/ap2-zapad.jpeg"
                alt="Billboard advertising"
                fill
                className="object-cover hover-scale"
              />
              <div className="spotlight-effect"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Billboard Gallery */}
      <section id="billboard-gallery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("billboardNetwork")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("billboardNetworkSubtitle")}</p>
          </div>

          {/* Featured Billboards - Large Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Featured Billboard 1 - Veles Highway */}
            <div className="relative h-[500px] rounded-xl overflow-hidden modern-shadow group reveal billboard-3d">
              <div className="billboard-3d-inner">
                <Image
                  src="/billboards/veles1-sever.jpeg"
                  alt="Premium Billboard Location - Veles Highway"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <div className="flex items-center mb-2 animate-slide-right" style={{ animationDelay: "0.1s" }}>
                    <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                    <span className="text-white font-medium">
                      {language === "en" ? "Veles Highway" : "Автопат Велес"}
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-bold text-white mb-2 animate-slide-right"
                    style={{ animationDelay: "0.2s" }}
                  >
                    {t("premiumHighwayBillboard")}
                  </h3>
                  <p className="text-white/80 mb-4 animate-slide-right" style={{ animationDelay: "0.3s" }}>
                    {t("highwayBillboardDesc")}
                  </p>
                  <div
                    className="flex items-center text-white/70 text-sm animate-slide-right"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <Info className="h-4 w-4 mr-1" />
                    <span>{language === "en" ? "Dimensions: 20.7m x 4m" : "Димензии: 20.7м x 4м"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Billboard 2 - Negotino */}
            <div className="relative h-[500px] rounded-xl overflow-hidden modern-shadow group reveal billboard-3d">
              <div className="billboard-3d-inner">
                <Image
                  src="/billboards/negotino.jpeg"
                  alt="Highway Billboard Location - Negotino"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <div className="flex items-center mb-2 animate-slide-left" style={{ animationDelay: "0.1s" }}>
                    <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                    <span className="text-white font-medium">
                      {language === "en" ? "Negotino Highway" : "Автопат Неготино"}
                    </span>
                  </div>
                  <h3
                    className="text-2xl font-bold text-white mb-2 animate-slide-left"
                    style={{ animationDelay: "0.2s" }}
                  >
                    {t("highwayMegaBillboard")}
                  </h3>
                  <p className="text-white/80 mb-4 animate-slide-left" style={{ animationDelay: "0.3s" }}>
                    {t("highwayMegaBillboardDesc")}
                  </p>
                  <div
                    className="flex items-center text-white/70 text-sm animate-slide-left"
                    style={{ animationDelay: "0.4s" }}
                  >
                    <Info className="h-4 w-4 mr-1" />
                    <span>{language === "en" ? "Dimensions: 20m x 4m" : "Димензии: 20м x 4м"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gevgelija Two-Sided Billboard Showcase */}
          <div className="mb-16 reveal">
            <h3 className="text-2xl font-bold mb-6 text-center">
              {language === "en" ? "Featured " : "Истакнат "}{" "}
              <span className="text-gradient">{t("twoSidedBillboard")}</span> -{" "}
              {language === "en" ? "Gevgelija" : "Гевгелија"}
            </h3>

            <div className="relative h-[600px] rounded-xl overflow-hidden modern-shadow two-sided-billboard">
              <div className="two-sided-billboard-inner">
                {/* Front side - Day view */}
                <div className="two-sided-billboard-front">
                  <Image
                    src="/billboards/gevgelija1.jpeg"
                    alt="Gevgelija Billboard - Day View"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                    <div className="flex items-center mb-2">
                      <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                      <span className="text-white font-medium">
                        {language === "en" ? "Gevgelija Highway Entry" : "Влез на автопат Гевгелија"}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {t("twoSidedBillboard")} ({t("dayView")})
                    </h3>
                    <p className="text-white/80 mb-4">{t("twoSidedBillboardDesc")}</p>
                    <div className="flex items-center text-white/70 text-sm">
                      <Info className="h-4 w-4 mr-1" />
                      <span>{language === "en" ? "Dimensions: 15m x 4m" : "Димензии: 15м x 4м"}</span>
                    </div>
                    <p className="text-white/80 mt-4 text-sm italic">
                      {t("hoverToSee")} {t("nightView")}
                    </p>
                  </div>
                </div>

                {/* Back side - Night view */}
                <div className="two-sided-billboard-back">
                  <Image
                    src="/billboards/gevgelija2.jpeg"
                    alt="Gevgelija Billboard - Night View"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
                    <div className="flex items-center mb-2">
                      <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                      <span className="text-white font-medium">
                        {language === "en" ? "Gevgelija Highway Entry" : "Влез на автопат Гевгелија"}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {t("twoSidedBillboard")} ({t("nightView")})
                    </h3>
                    <p className="text-white/80 mb-4">{t("illuminated")}</p>
                    <div className="flex items-center text-white/70 text-sm">
                      <Info className="h-4 w-4 mr-1" />
                      <span>{language === "en" ? "Dimensions: 15m x 4m" : "Димензии: 15м x 4м"}</span>
                    </div>
                    <p className="text-white/80 mt-4 text-sm italic">
                      {t("hoverToSee")} {t("dayView")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 max-w-3xl mx-auto mb-6">{t("gevgelijaBillboardDesc")}</p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white animate-pulse">
                <Link href="#contact">
                  {t("reserveBillboard")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Billboard Grid - Smaller Showcases */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Billboard 1 */}
            <div className="relative h-[300px] rounded-xl overflow-hidden modern-shadow group reveal hover-scale">
              <Image
                src="/billboards/ap1-jug.jpeg"
                alt="Billboard Location - Bridge Underpass"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center mb-1">
                  <MapPin className="h-4 w-4 text-blue-400 mr-1" />
                  <span className="text-white font-medium text-sm">
                    {language === "en" ? "Skopje - Bridge Underpass" : "Скопје - Подвозник"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{t("urbanBillboard")}</h3>
                <div className="flex items-center text-white/70 text-xs">
                  <Info className="h-3 w-3 mr-1" />
                  <span>{language === "en" ? "Dimensions: 10m x 1.2m" : "Димензии: 10м x 1.2м"}</span>
                </div>
              </div>
            </div>

            {/* Billboard 2 */}
            <div className="relative h-[300px] rounded-xl overflow-hidden modern-shadow group reveal hover-scale">
              <Image
                src="/billboards/ap2-zapad.jpeg"
                alt="Billboard Location - Pedestrian Underpass"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center mb-1">
                  <MapPin className="h-4 w-4 text-blue-400 mr-1" />
                  <span className="text-white font-medium text-sm">
                    {language === "en" ? "Skopje - Pedestrian Area" : "Скопје - Пешачка зона"}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{t("urbanPassageBillboard")}</h3>
                <div className="flex items-center text-white/70 text-xs">
                  <Info className="h-3 w-3 mr-1" />
                  <span>{language === "en" ? "Dimensions: 10m x 1.2m" : "Димензии: 10м x 1.2м"}</span>
                </div>
              </div>
            </div>

            {/* Billboard 3 */}
            <div className="relative h-[300px] rounded-xl overflow-hidden modern-shadow group reveal hover-scale">
              <Image
                src="/billboards/veles2-jug.jpeg"
                alt="Billboard Location - Highway Kilometer 75"
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
                <h3 className="text-xl font-bold text-white mb-1">{t("highwayBillboard")}</h3>
                <div className="flex items-center text-white/70 text-xs">
                  <Info className="h-3 w-3 mr-1" />
                  <span>{language === "en" ? "Dimensions: 20.7m x 4m" : "Димензии: 20.7м x 4м"}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 reveal">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all animate-pulse"
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
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("nationwideCoverageTitle")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("nationwideCoverageSubtitle")}</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 modern-shadow reveal">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Map Visualization - Replace with actual map */}
              <div
                className="lg:col-span-2 relative h-[500px] rounded-xl overflow-hidden parallax-element"
                data-speed="0.1"
              >
                <Image
                  src="/Nashville.jpg?height=800&width=1200&text=Billboard Coverage Map"
                  alt="Billboard Coverage Map"
                  fill
                  className="object-cover"
                />
                {/* You can add map pins or markers here */}
              </div>

              {/* Location List */}
              <div className="bg-white rounded-xl p-6 modern-shadow">
                <h3 className="text-xl font-bold mb-4">{t("billboardLocations")}</h3>
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                  {billboardLocations.map((location, index) => (
                    <div
                      key={location.id}
                      className="border-b border-gray-100 pb-3 animate-slide-right hover-lift"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
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
                <Button asChild className="w-full mt-6 bg-blue-600 hover:bg-blue-700 animate-pulse">
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
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("billboardSpecifications")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("billboardSpecificationsSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Standard Billboard */}
            <div className="bg-white p-8 rounded-xl modern-shadow hover-scale reveal tilt-effect">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image src="/billboards/ap1-jug.jpeg" alt="Standard Billboard" fill className="object-cover" />
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
            <div className="bg-white p-8 rounded-xl modern-shadow hover-scale reveal tilt-effect">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden led-glow">
                <Image src="/billboards/gevgelija2.jpeg" alt="LED Digital Billboard" fill className="object-cover" />
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
            <div className="bg-white p-8 rounded-xl modern-shadow hover-scale reveal tilt-effect">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image src="/billboards/negotino.jpeg" alt="Mega Billboard" fill className="object-cover" />
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
            <div className="order-2 md:order-1 reveal">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("designServices")}</h2>
              <p className="text-gray-700 mb-6 text-lg">{t("designServicesText")}</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start animate-slide-left" style={{ animationDelay: "0.1s" }}>
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("creativeConceptDevelopment")}</h3>
                    <p className="text-gray-700">{t("creativeConceptDevelopmentDesc")}</p>
                  </div>
                </li>
                <li className="flex items-start animate-slide-left" style={{ animationDelay: "0.2s" }}>
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("professionalGraphicDesign")}</h3>
                    <p className="text-gray-700">{t("professionalGraphicDesignDesc")}</p>
                  </div>
                </li>
                <li className="flex items-start animate-slide-left" style={{ animationDelay: "0.3s" }}>
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
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white animate-pulse"
              >
                <Link href="#contact">
                  {t("learnMoreAboutDesignServices")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden modern-shadow order-1 md:order-2 reveal spotlight">
              <Image
                src="/billboards/veles2-jug.jpeg"
                alt="Billboard design services"
                fill
                className="object-cover hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("clientSuccessStories")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("clientSuccessStoriesSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl modern-shadow hover-lift reveal">
              <div className="relative h-12 w-12 mb-6">
                <Image
                  src="/anchosch.png?height=100&width=100&text=Logo"
                  alt="Client Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <p className="text-gray-700 mb-6 italic">"{t("testimonial1")}"</p>
              <div>
                <h4 className="font-bold">{t("marketingDirector")}</h4>
                <p className="text-sm text-gray-500">{t("majorRetailChain")}</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl modern-shadow hover-lift reveal">
              <div className="relative h-12 w-12 mb-6">
                <Image
                  src="/mozzart.png?height=100&width=100&text=Logo"
                  alt="Client Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <p className="text-gray-700 mb-6 italic">"{t("testimonial2")}"</p>
              <div>
                <h4 className="font-bold">{t("campaignManager")}</h4>
                <p className="text-sm text-gray-500">{t("telecommunicationsCompany")}</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl modern-shadow hover-lift reveal">
              <div className="relative h-12 w-12 mb-6">
                <Image
                  src="/tikvesh.png?height=100&width=100&text=Logo"
                  alt="Client Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <p className="text-gray-700 mb-6 italic">"{t("testimonial3")}"</p>
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
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 modern-shadow reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white typing-animation">
                  {t("readyToMakeImpact")}
                </h2>
                <p className="text-white/90 mb-8 text-lg">{t("readyToMakeImpactText")}</p>
                <div className="space-y-6">
                  <div className="flex items-start animate-slide-left" style={{ animationDelay: "0.1s" }}>
                    <div className="bg-white/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-xl mb-2 text-white">{t("phone")}</p>
                      <p className="text-white/90">+389 2 3131113</p>
                    
                    </div>
                  </div>
                  <div className="flex items-start animate-slide-left" style={{ animationDelay: "0.2s" }}>
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
                    className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all animate-pulse"
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
                  alt="Contact Us"
                  fill
                  className="object-cover rounded-xl hover-scale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
