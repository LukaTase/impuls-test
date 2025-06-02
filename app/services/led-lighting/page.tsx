"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Check, Star, Shield, Zap, Clock, Award, Download, Play } from "lucide-react"
import AutoVideoCarousel from "@/components/auto-video-carousel"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/translations"

export default function LedLightingPage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  // Brand partners data
  const brandPartners = [
    {
      name: "SHEENLY",
      logo: "/SHEENLY.png",
      description: "Premium LED lighting solutions with innovative designs and superior quality.",
      website: "https://www.sheenly.com",
      featured: true,
    },
    {
      name: "SLV",
      logo: "/slv.png",
      description: "German lighting brand known for architectural and decorative lighting solutions.",
      website: "https://www.slv.com",
      featured: true,
    },
    {
      name: "TECHLUMEN",
      logo: "/TECHLUMEN.png",
      description: "Innovative lighting technology for commercial and industrial applications.",
      website: "https://www.techlumen.gr",
      featured: true,
    },
    {
      name: "OLIPTEK",
      logo: "/oliptek-logo.png",
      description: "Specialized in high-quality LED lighting solutions for various applications.",
      website: "https://www.oliptek.com",
      featured: true,
      hasVideos: true,
    },
    {
      name: "TEC-MAR",
      logo: "/tec-mar.png",
      description: "Italian manufacturer of professional lighting systems with focus on energy efficiency.",
      website: "https://www.tec-mar.it",
      featured: true,
    },
    {
      name: "EUROLAMP",
      logo: "/eurolamp.png",
      description: "Greek lighting brand offering a wide range of LED products for residential and commercial use.",
      website: "https://www.eurolamp.gr",
      featured: false,
    },
    {
      name: "VYRTYCH",
      logo: "/vy.jpeg",
      description: "Czech manufacturer specializing in industrial and explosion-proof lighting solutions.",
      website: "https://www.vyrtych.cz",
      featured: false,
    },
    {
      name: "ACA LIGHT",
      logo: "/ACA-LOGO_WHITE.png",
      description: "Quality lighting fixtures for residential and commercial spaces.",
      website: "https://www.acalight.gr",
      featured: false,
    },
    {
      name: "CUPHOSCO",
      logo: "/cupa.png",
      description: "Specialized outdoor and architectural lighting solutions.",
      website: "https://www.cuphosco.com",
      featured: false,
    },
    {
      name: "VIZULO",
      logo: "https://www.vizulo.com/wp-content/uploads/2021/01/vizulo-logo.png",
      description: "Smart lighting systems and energy-efficient solutions.",
      website: "https://www.vizulo.com",
      featured: false,
    },
  ]
  // Application areas
  const applicationAreas = [
    {
      title: t("officeCommercial"),
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LED7.jpg-OcJOS94zd15dAAf667m96YB1QdXvrK.jpeg",
      description: t("officeCommercialDesc"),
      link: "/services/led-lighting/office",
    },
    {
      title: t("industrialWarehouse"),
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LED9.jpg-ZIbGODEp9LgsvPKhuyleeCKGiMxo47.jpeg",
      description: t("industrialWarehouseDesc"),
      link: "/services/led-lighting/industrial",
    },
    {
      title: t("retailHospitality"),
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LED10.jpg-2TrHwfGASUxKAvSKsFElsl6NK9N3gS.jpeg",
      description: t("retailHospitalityDesc"),
      link: "/services/led-lighting/retail",
    },
    {
      title: t("outdoorUrban"),
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LED5.jpg-xnZrqCiP7zKtyMExoDN3tSey74jm4K.jpeg",
      description: t("outdoorUrbanDesc"),
      link: "/services/led-lighting/outdoor",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section with Dynamic Background */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Rotating Background Images */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-0 animate-fade-in-out" style={{ animationDelay: "0s" }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LED7.jpg-OcJOS94zd15dAAf667m96YB1QdXvrK.jpeg"
              alt="LED Lighting"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 opacity-0 animate-fade-in-out" style={{ animationDelay: "8s" }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LED8.jpg-keHApHxf1BsOmBo8jeoO6fMhngZgfG.jpeg"
              alt="LED Lighting"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 opacity-0 animate-fade-in-out" style={{ animationDelay: "16s" }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LED5.jpg-xnZrqCiP7zKtyMExoDN3tSey74jm4K.jpeg"
              alt="LED Lighting"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 opacity-0 animate-fade-in-out" style={{ animationDelay: "24s" }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LED6.jpg-nBmSAiOFvj8Y9BlW3oSfXPNzDCi1wE.jpeg"
              alt="LED Lighting"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 opacity-0 animate-fade-in-out" style={{ animationDelay: "32s" }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LED9.jpg-ZIbGODEp9LgsvPKhuyleeCKGiMxo47.jpeg"
              alt="LED Lighting"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 opacity-0 animate-fade-in-out" style={{ animationDelay: "40s" }}>
            <Image
              src="https://sjc.microlink.io/LLvPQl6pW-Rpunw1sfDsW-VgvMAwQ10lEnydQcQiOTAZRLoJZNAglSI-KxbfmWIQ7ffTj9rcUJeuTqf_VNKThQ.jpeg"
              alt="LED Lighting"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 opacity-0 animate-fade-in-out" style={{ animationDelay: "48s" }}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LED10.jpg-2TrHwfGASUxKAvSKsFElsl6NK9N3gS.jpeg"
              alt="LED Lighting"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-center md:px-6 text-center">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t("ledLightingTitle")
                .split(" ")
                .map((word, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i} className="text-red-500">
                      {word}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  ),
                )}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">{t("ledLightingSubtitle")}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 py-6 text-lg">
                <Link href="#brands">
                  {t("exploreBrands")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
              >
                <Link href="#references">
                  {t("viewReferences")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Brand Logos Ticker */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-8">
            <div className="flex justify-center items-center gap-8 overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {brandPartners.map((brand, index) => (
                  <div key={index} className="mx-8 flex items-center">
                    <div className="bg-white/90 h-12 px-6 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-gray-800">{brand.name}</span>
                    </div>
                  </div>
                ))}
                {brandPartners.map((brand, index) => (
                  <div key={`repeat-${index}`} className="mx-8 flex items-center">
                    <div className="bg-white/90 h-12 px-6 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-gray-800">{brand.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t("whyChooseImpuls")
                .split(" ")
                .map((word, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i} className="text-red-600">
                      {word}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  ),
                )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("whyChooseImpulsSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t("authorizedDealer")}</h3>
              <p className="text-gray-600 mb-4">{t("authorizedDealerDesc")}</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span>{t("originalProducts")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span>{t("directAccess")}</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t("expertConsultation")}</h3>
              <p className="text-gray-600 mb-4">{t("expertConsultationDesc")}</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span>{t("professionalLightingDesign")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span>{t("technicalSpecifications")}</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t("completeSolutions")}</h3>
              <p className="text-gray-600 mb-4">{t("completeSolutionsDesc")}</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span>{t("professionalInstallation")}</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span>{t("ongoingMaintenance")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Partners Section */}
      <section id="brands" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t("brandPartners")
                .split(" ")
                .map((word, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i} className="text-red-600">
                      {word}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  ),
                )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("brandPartnersSubtitle")}</p>
          </div>

          {/* Featured Brands */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {brandPartners
              .filter((brand) => brand.featured)
              .map((brand, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-8 flex flex-col h-full">
                    <div className="h-24 flex items-center justify-center mb-6 bg-gray-50 rounded-xl p-4">
                      <div className="relative h-full w-full">
                        <Image
                          src={brand.logo || "/placeholder.svg"}
                          alt={brand.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{brand.name}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{brand.description}</p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                      {brand.hasVideos ? (
                        <Button asChild className="bg-red-600 hover:bg-red-700">
                          <Link href="/services/led-lighting/oliptek" className="flex items-center">
                            {t("viewShowcase")}
                            <Play className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      ) : (
                        <Button asChild className="bg-red-600 hover:bg-red-700">
                          <a
                            href={brand.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                          >
                            {t("officialWebsite")}
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Other Brand Partners */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandPartners
              .filter((brand) => !brand.featured)
              .map((brand, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div className="h-16 flex items-center justify-center mb-4 bg-gray-50 rounded-xl p-3">
                      <div className="relative h-full w-full">
                        <Image
                          src={brand.logo || "/placeholder.svg"}
                          alt={brand.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{brand.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{brand.description}</p>
                    <div className="flex gap-2 mt-auto">
                      <Button asChild size="sm" className="bg-red-600 hover:bg-red-700">
                        <a href={brand.website} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          {t("officialWebsite")}
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t("lightingForEverySpace")
                .split(" ")
                .map((word, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i} className="text-red-500">
                      {word}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  ),
                )}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t("lightingForEverySpaceSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applicationAreas.map((area, index) => (
              <div key={index} className="group relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0">
                  <Image
                    src={area.image || "/placeholder.svg"}
                    alt={area.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold mb-3 group-hover:text-red-400 transition-colors">{area.title}</h3>
                  <p className="text-gray-300 mb-6 max-w-md">{area.description}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of LED Lighting */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t("benefitsOfLED")
                .split(" ")
                .map((word, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i} className="text-red-600">
                      {word}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  ),
                )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("benefitsOfLEDSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-all duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t("energyEfficiency")}</h3>
              <p className="text-gray-600">{t("energyEfficiencyDesc")}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-all duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t("longLifespan")}</h3>
              <p className="text-gray-600">{t("longLifespanDesc")}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-all duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t("superiorQuality")}</h3>
              <p className="text-gray-600">{t("superiorQualityDesc")}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-all duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t("ecoFriendly")}</h3>
              <p className="text-gray-600">{t("ecoFriendlyDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Oliptek Video Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-red-100 p-2 rounded-lg">
                <Image src="/oliptek-logo.png" alt="Oliptek Logo" width={120} height={40} className="h-8 w-auto" />
              </div>
              <span className="text-red-600 font-semibold">{t("featuredPartner")}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t("oliptekShowcase")
                .split(" ")
                .map((word, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i} className="text-red-600">
                      {word}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  ),
                )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("oliptekShowcaseSubtitle")}</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <AutoVideoCarousel
              videos={[
                {
                  id: "oliptek-video1",
                  title: "Oliptek LED Panel Installation",
                  description:
                    "Step-by-step guide to installing Oliptek LED panel lights in commercial spaces. This video demonstrates the ease of installation and the clean, modern look of Oliptek panels.",
                  src: "/vid1.mp4",
                  poster: "/oliptek-logo.png",
                },
                {
                  id: "oliptek-video2",
                  title: "Oliptek LED Lighting Solutions",
                  description:
                    "Showcase of various Oliptek LED lighting products in action, demonstrating their brightness, color quality, and versatility in different environments.",
                  src: "/vid2.mp4",
                  poster: "/oliptek-logo.png",
                },
                {
                  id: "oliptek-video3",
                  title: "Oliptek Commercial Project",
                  description:
                    "A complete commercial lighting project using Oliptek LED products, showing before and after transformation and the impact of quality lighting.",
                  src: "/vid3.mp4",
                  poster: "/oliptek-logo.png",
                },
                {
                  id: "led-showcase",
                  title: "Premium LED Lighting Effects",
                  description:
                    "Demonstration of lighting effects and quality possible with Oliptek and other premium LED lighting solutions we offer.",
                  src: "/vid4.mp4",
                  poster: "/oliptek-logo.png",
                },
              ]}
              autoPlay={true}
              autoRotateInterval={20000}
            />
          </div>

          <div className="mt-8 text-center">
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link href="/services/led-lighting/oliptek" className="flex items-center">
                {t("viewOliptekProducts")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reference List Section */}
      <section id="references" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t("references")
                .split(" ")
                .map((word, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i} className="text-red-600">
                      {word}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  ),
                )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("referencesSubtitle")}</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">{t("completeReferenceList")}</h3>
                <p className="text-gray-600 mb-4">{t("referenceListDesc")}</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span>{t("detailedProductTypes")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span>{t("clientNamesLocations")}</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                    <span>{t("categorizedByIndustry")}</span>
                  </li>
                </ul>
              </div>
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 rounded-xl px-8 py-6">
                <a href="/Referenci vo MK_1.pdf" download className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  {t("downloadReferenceList")}
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reference Category 1 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-red-600">{t("commercialOffice")}</h3>
              <p className="text-gray-600 mb-4">{t("commercialOfficeDesc")}</p>
              <ul className="text-gray-700 space-y-1 mb-4">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                  <span>{t("ledPanelsDownlights")}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                  <span>{t("energyEfficientTubes")}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                  <span>{t("customLightingDesigns")}</span>
                </li>
              </ul>
            </div>

            {/* Reference Category 2 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-red-600">{t("industrialManufacturing")}</h3>
              <p className="text-gray-600 mb-4">{t("industrialManufacturingDesc")}</p>
              <ul className="text-gray-700 space-y-1 mb-4">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                  <span>{t("highBayFixtures")}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                  <span>{t("waterproofLighting")}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                  <span>{t("explosionProofSolutions")}</span>
                </li>
              </ul>
            </div>

            {/* Reference Category 3 */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold mb-3 text-red-600">{t("retailHospitalityCategory")}</h3>
              <p className="text-gray-600 mb-4">{t("retailHospitalityDesc")}</p>
              <ul className="text-gray-700 space-y-1 mb-4">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                  <span>{t("accentDisplayLighting")}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                  <span>{t("decorativeLEDFixtures")}</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                  <span>{t("energyEfficientAmbient")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t("ourProjects")
                .split(" ")
                .map((word, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i} className="text-red-600">
                      {word}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  ),
                )}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("ourProjectsSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LED7.jpg-OcJOS94zd15dAAf667m96YB1QdXvrK.jpeg"
                alt="Office Project"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{t("corporateOffice")}</h3>
                <p className="text-white/80 mb-4">{t("corporateOfficeDesc")}</p>
               
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LED9.jpg-ZIbGODEp9LgsvPKhuyleeCKGiMxo47.jpeg"
                alt="Warehouse Project"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{t("industrialWarehouseProject")}</h3>
                <p className="text-white/80 mb-4">{t("industrialWarehouseDesc")}</p>
                
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LED5.jpg-xnZrqCiP7zKtyMExoDN3tSey74jm4K.jpeg"
                alt="Retail Project"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{t("retailShoppingCenter")}</h3>
                <p className="text-white/80 mb-4">{t("retailShoppingCenterDesc")}</p>
                
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("readyToTransform")}</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">{t("readyToTransformSubtitle")}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-red-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
              <Link href="/contact">
                {t("scheduleConsultation")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
            >
              <Link href="/services/led-lighting/products">
                {t("browseAllProducts")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
