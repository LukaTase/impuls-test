"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import CircularServices from "@/components/circular-services"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/translations"

export default function Home() {
  const { language } = useLanguage()

  // Partner logos data
  const partners = [
    { name: "Terapot", logo: "/terapotlogo.png", url: "https://terapot.eu/" },
    { name: "King's Choice", logo: "/KC.png", url: "https://www.kingschoice.com/en/" },
    { name: "EgoVoda", logo: "/egovoda.jpg", url: "https://egovoda.mk/en/" },
    { name: "Sheenly", logo: "/SHEENLY.png", url: "https://www.sheenly.com/" },
    { name: "Underbold", logo: "/gtt.jpg", url: "https://www.underbold-pod30.de/" },
    { name: "Multisit", logo: "/multisit_start.jpg", url: "https://www.multisit.net/" },
    { name: "Beer", logo: "/peja.png", url: "https://birrapeja.com/" },
    { name: "Mozzart", logo: "/mozzart.png", url: "https://www.mozzartbet.mk/mk/oblozuvanje" },
    { name: "Tikvesh", logo: "/tikvesh.png", url: "https://tikves.com.mk/en/home/" },
    { name: "Anchosch", logo: "/anchosch.png", url: "https://www.anhoch.com/" },
    { name: "Lactails", logo: "/lactails.jpg", url: "https://lactalismk.mk/" },
    { name: "Vero", logo: "/vero.png", url: "https://vero.com.mk/marketi/" },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[#ed3237] z-0"></div>
        <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-center md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight animate-slide-up">
            {getTranslation(language, "heroTitle")}
          </h1>
          <div className="mb-8 flex flex-col items-center">
            <div className="relative h-24 w-48 md:h-32 md:w-64 mb-4">
              <Image src="/logo.png" alt="Impuls International" fill className="object-contain" priority />
            </div>
          </div>
          <div className="max-w-4xl text-center animate-fade-in">
            <Button
              asChild
              className="bg-white hover:bg-gray-100 text-[#ed3237] rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link href="/about">
                {getTranslation(language, "learnMore")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              {getTranslation(language, "ourMission")}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">{getTranslation(language, "missionText")}</p>
          </div>
        </div>
      </section>

      {/* Services Overview - Circular Layout */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{getTranslation(language, "ourServices")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{getTranslation(language, "servicesText")}</p>
          </div>

          <CircularServices />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{getTranslation(language, "featuredProjects")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{getTranslation(language, "projectsText")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group relative overflow-hidden rounded-2xl modern-shadow hover-scale h-[400px]">
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src="/led-panel-light.jpeg"
                  alt="LED Lighting Project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{getTranslation(language, "commercialLED")}</h3>
                <p className="text-white/90 mb-6">{getTranslation(language, "commercialLEDDesc")}</p>
                <Link
                  href="/services/led-lighting"
                  className="inline-flex items-center text-white font-medium bg-blue-400 hover:bg-blue-500 transition-colors py-2 px-4 rounded-full"
                >
                  {getTranslation(language, "viewProject")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl modern-shadow hover-scale h-[400px]">
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src="/construction-site.jpeg"
                  alt="Construction Project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{getTranslation(language, "officeBuilding")}</h3>
                <p className="text-white/90 mb-6">{getTranslation(language, "officeBuildingDesc")}</p>
                <Link
                  href="/services/construction"
                  className="inline-flex items-center text-white font-medium bg-blue-400 hover:bg-blue-500 transition-colors py-2 px-4 rounded-full"
                >
                  {getTranslation(language, "viewProject")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl modern-shadow hover-scale h-[400px]">
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src="/Nashville-billboards.jpeg"
                  alt="Billboard Project"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{getTranslation(language, "digitalBillboard")}</h3>
                <p className="text-white/90 mb-6">{getTranslation(language, "digitalBillboardDesc")}</p>
                <Link
                  href="/services/billboards"
                  className="inline-flex items-center text-white font-medium bg-blue-400 hover:bg-blue-500 transition-colors py-2 px-4 rounded-full"
                >
                  {getTranslation(language, "viewProject")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-16"></div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{getTranslation(language, "ourPartners")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{getTranslation(language, "partnersText")}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center hover-scale">
                <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block relative h-16 w-full">
                  <div className="relative h-16 w-full bg-white rounded-lg p-2 flex items-center justify-center">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ed3237] to-[#f04c51] z-0"></div>
        <div
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="relative h-24 w-48 md:h-32 md:w-64 mb-6">
              <Image src="/logo.png" alt="Impuls International" fill className="object-contain" />
            </div>
            <p className="text-white/90 max-w-2xl mx-auto mb-10 text-lg">{getTranslation(language, "ctaText")}</p>
            <Button
              asChild
              className="bg-white text-[#ed3237] hover:bg-gray-100 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/contact">
                {getTranslation(language, "contactUsButton")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
