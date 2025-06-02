"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ExternalLink,
  Award,
  Check,
  ShoppingBag,
  Globe,
  Download,
  Leaf,
  Shield,
  Sun,
  Info,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useContext, useEffect, useState } from "react"
import { LanguageContext } from "@/components/language-context"
import { getTranslation } from "@/lib/translations"

export default function TerapotPage() {
  const { language } = useContext(LanguageContext)
  const t = (key: string) => getTranslation(language, key)
  const [currentImage, setCurrentImage] = useState(0)

  const backgroundImages = [
    "/drina.png",
    "/tara.png",
    "/oblo.png",
    "/round.png",
    "/quadro.png",
    "/tisa.png",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Product lines
  const productLines = [
    {
      id: "drina",
      name: "DRINA Planters",
      description:
        language === "en"
          ? "Elegant round fiberglass planters with modern design"
          : "Елегантни кружни саксии од фиберглас со модерен дизајн",
      imageUrl: "/drina.png",
      models: [
        {
          name: "DRINA 90",
          dimensions: "D=90cm H=42cm",
          volume: "205l",
          weight: "8kg",
          price: "440€",
        },
        {
          name: "DRINA 105",
          dimensions: "D=105cm H=49cm",
          volume: "325l",
          weight: "14.5kg",
          price: "565€",
        },
        {
          name: "DRINA 120",
          dimensions: "D=120cm H=55cm",
          volume: "462l",
          weight: "19.5kg",
          price: "690€",
        },
        {
          name: "DRINA 200",
          dimensions: "D=200cm H=93cm",
          volume: "2150l",
          weight: "64kg",
          price: "3190€",
        },
        {
          name: "DRINA 200 WITH BENCH",
          dimensions:
            language === "en" ? "D=200cm H=93cm, Bench depth: 45cm" : "D=200cm H=93cm, Длабочина на клупа: 45cm",
          volume: "2150l",
          weight: "100kg",
          price: "4350€",
        },
      ],
    },
    {
      id: "tisa",
      name: "TISA Planters",
      description:
        language === "en"
          ? "Tall cylindrical fiberglass planters for statement pieces"
          : "Високи цилиндрични саксии од фиберглас за впечатливи парчиња",
      imageUrl: "/tisa.png",
      models: [
        {
          name: "TISA 120",
          dimensions: "D=120cm H=100cm",
          volume: "1050l",
          weight: "65.5kg",
          price: "1450€",
        },
        {
          name: "TISA 150",
          dimensions: "D=150cm H=125cm",
          volume: "1800l",
          weight: "95.5kg",
          price: "2150€",
        },
        {
          name: "TISA 180",
          dimensions: "D=180cm H=150cm",
          volume: "3300l",
          weight: "145.5kg",
          price: "3250€",
        },
        {
          name: "TISA 200",
          dimensions: "D=200cm H=165cm",
          volume: "4500l",
          weight: "185.5kg",
          price: "4350€",
        },
        {
          name: "TISA 250",
          dimensions: "D=250cm H=200cm",
          volume: "7500l",
          weight: "285.5kg",
          price: "6450€",
        },
      ],
    },
    {
      id: "tara",
      name: "TARA Planters",
      description:
        language === "en"
          ? "Sleek round fiberglass planters with minimalist design"
          : "Елегантни кружни саксии од фиберглас со минималистички дизајн",
      imageUrl: "/tara.png",
      models: [
        {
          name: "TARA 90",
          dimensions: "D=90cm H=42cm",
          volume: "198l",
          weight: "8kg",
          price: "425€",
        },
        {
          name: "TARA 105",
          dimensions: "D=105cm H=49cm",
          volume: "315l",
          weight: "14.5kg",
          price: "540€",
        },
        {
          name: "TARA 120",
          dimensions: "D=120cm H=55cm",
          volume: "448l",
          weight: "19.5kg",
          price: "660€",
        },
      ],
    },
    {
      id: "oblo",
      name: "OBLO Planters",
      description:
        language === "en"
          ? "Modern bowl-shaped fiberglass planters for contemporary spaces"
          : "Модерни саксии од фиберглас во форма на чинија за современи простори",
      imageUrl: "/oblo.png",
      models: [
        {
          name: "OBLO 55",
          dimensions:
            language === "en" ? "D=55cm H=68cm, Inner diameter: D=39cm" : "D=55cm H=68cm, Внатрешен дијаметар: D=39cm",
          volume: "120l",
          weight: "11kg",
          price: "365€",
        },
        {
          name: "OBLO 76",
          dimensions:
            language === "en" ? "D=76cm H=86cm, Inner diameter: D=53cm" : "D=76cm H=86cm, Внатрешен дијаметар: D=53cm",
          volume: "140l",
          weight: "18kg",
          price: "555€",
        },
        {
          name: "OBLO 98",
          dimensions:
            language === "en"
              ? "D=98cm H=67.5cm, Inner diameter: D=74cm"
              : "D=98cm H=67.5cm, Внатрешен дијаметар: D=74cm",
          volume: "350l",
          weight: "20kg",
          price: "640€",
        },
        {
          name: "OBLO 116",
          dimensions:
            language === "en"
              ? "D=116cm H=88cm, Inner diameter: D=92cm"
              : "D=116cm H=88cm, Внатрешен дијаметар: D=92cm",
          volume: "650l",
          weight: "32kg",
          price: "930€",
        },
        {
          name: "OBLO 144",
          dimensions:
            language === "en"
              ? "D=144cm H=106cm, Inner diameter: D=120cm"
              : "D=144cm H=106cm, Внатрешен дијаметар: D=120cm",
          volume: "1260l",
          weight: "72kg",
          price: "1660€",
        },
      ],
    },
    {
      id: "round",
      name: "ROUND Planters",
      description:
        language === "en"
          ? "Contemporary round fiberglass planters for versatile applications"
          : "Современи кружни саксии од фиберглас за разновидни апликации",
      imageUrl: "/round.png",
      models: [
        {
          name: "ROUND 55",
          dimensions:
            language === "en" ? "D=55cm H=55cm, Inner diameter: D=46cm" : "D=55cm H=55cm, Внатрешен дијаметар: D=46cm",
          volume: "105l",
          weight: "6.8kg",
          price: "325€",
        },
        {
          name: "ROUND 50",
          dimensions:
            language === "en" ? "D=50cm H=70cm, Inner diameter: D=41cm" : "D=50cm H=70cm, Внатрешен дијаметар: D=41cm",
          volume: "113l",
          weight: "7.4kg",
          price: "340€",
        },
        {
          name: "ROUND 65",
          dimensions:
            language === "en" ? "D=65cm H=80cm, Inner diameter: D=56cm" : "D=65cm H=80cm, Внатрешен дијаметар: D=56cm",
          volume: "220l",
          weight: "11kg",
          price: "475€",
        },
        {
          name: "ROUND 70",
          dimensions:
            language === "en"
              ? "D=70cm H=100cm, Inner diameter: D=62cm"
              : "D=70cm H=100cm, Внатрешен дијаметар: D=62cm",
          volume: "320l",
          weight: "14.5kg",
          price: "560€",
        },
        {
          name: "ROUND 90",
          dimensions:
            language === "en"
              ? "D=90cm H=125cm, Inner diameter: D=82cm"
              : "D=90cm H=125cm, Внатрешен дијаметар: D=82cm",
          volume: "690l",
          weight: "23kg",
          price: "970€",
        },
      ],
    },
    {
      id: "quadro",
      name: "QUADRO Planters",
      description:
        language === "en"
          ? "Modern square fiberglass planters for contemporary spaces"
          : "Модерни квадратни саксии од фиберглас за современи простори",
      imageUrl: "/quadro.png",
      models: [
        {
          name: "QUADRO 70",
          dimensions: "W:70cm L:70cm H:60cm",
          volume: "213l",
          weight: "9kg",
          price: "530€",
        },
        {
          name: "QUADRO 90",
          dimensions: "W:90cm L:90cm H:77cm",
          volume: "453l",
          weight: "15kg",
          price: "840€",
        },
        {
          name: "QUADRO 120",
          dimensions: "W:120cm L:120cm H:100cm",
          volume: "1073l",
          weight: "40kg",
          price: "1490€",
        },
      ],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        {/* Dark gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>

        {/* Rotating background images */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((img, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000 flex items-center justify-center"
              style={{
                opacity: currentImage === index ? 1 : 0,
                zIndex: currentImage === index ? 1 : 0,
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`Terapot Planter ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-start md:px-6">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
              {t("terapotTitle")}
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              {t("terapotSubtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-white hover:bg-gray-100 text-black rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <Link href="#catalog">
                  {t("viewCatalog")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <a href="https://terapot.eu/" target="_blank" rel="noopener noreferrer">
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
              <div className="mb-8 flex items-center">
                <div className="relative w-[200px] h-[60px] mr-4">
                  <Image src="/terapotlogo.png" alt="Terapot Logo" fill className="object-contain" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{t("terapotIntroTitle")}</h2>
              </div>
              <p className="text-gray-700 mb-6 text-lg">{t("terapotIntroText1")}</p>
              <p className="text-gray-700 mb-8 text-lg">{t("terapotIntroText2")}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-black" />
                  </div>
                  <span className="text-gray-700">
                    {language === "en" ? "Authentic Products" : "Автентични производи"}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-black" />
                  </div>
                  <span className="text-gray-700">{language === "en" ? "Full Warranty" : "Целосна гаранција"}</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-black" />
                  </div>
                  <span className="text-gray-700">{language === "en" ? "Expert Support" : "Експертска поддршка"}</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg bg-white flex items-center justify-center p-8">
              <div className="relative w-full h-full">
                <Image src="/terapotlogo.png" alt="Terapot Logo" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Dealership Banner */}
      <section className="py-12 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image src="/terapotlogo.png" alt="Terapot Logo Background" fill className="object-contain opacity-20" />
          </div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <Award className="h-8 w-8 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold">{t("officialDealership")}</h2>
          </div>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">{t("officialDealershipText")}</p>
          <div className="flex justify-center gap-4">
            <Button
              asChild
              className="bg-white hover:bg-gray-100 text-black rounded-full px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <a href="https://terapot.eu/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                {t("terapotEUWebsite")}
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              className="bg-white hover:bg-gray-100 text-black rounded-full px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <a href="/public\TERAPOT CATALOG NOV.pdf" download className="flex items-center">
                <Download className="mr-2 h-5 w-5" />
                {t("downloadCatalog")}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section id="catalog" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("productCatalog")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("productCatalogSubtitle")}</p>
          </div>

          <Tabs defaultValue="drina" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              {productLines.map((line) => (
                <TabsTrigger key={line.id} value={line.id} className="text-sm md:text-base">
                  {line.name.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {productLines.map((line) => (
              <TabsContent key={line.id} value={line.id} className="mt-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex flex-col md:flex-row gap-8 mb-8">
                    <div className="md:w-1/3">
                      <div className="relative h-[300px] rounded-lg overflow-hidden bg-gray-50 p-4">
                        <Image
                          src={line.imageUrl || "/placeholder.svg"}
                          alt={line.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold mb-4">{line.name}</h3>
                      <p className="text-gray-700 mb-6">{line.description}</p>

                      <div className="mb-6">
                        <h4 className="font-bold text-lg mb-2">{t("materialFinish")}</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="text-black mr-2 mt-1">•</div>
                            <span className="text-gray-700">
                              {language === "en"
                                ? "Premium fiberglass (GRP - nautical)"
                                : "Премиум фиберглас (GRP - наутички)"}
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="text-black mr-2 mt-1">•</div>
                            <span className="text-gray-700">
                              {language === "en" ? "2k PU finish" : "2k PU завршница"}
                            </span>
                          </li>
                          <li className="flex items-start">
                            <div className="text-black mr-2 mt-1">•</div>
                            <span className="text-gray-700">
                              {language === "en"
                                ? "UV protected for outdoor durability"
                                : "UV заштитени за надворешна издржливост"}
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-lg mb-2">{t("keyFeatures")}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="flex items-center">
                            <div className="bg-gray-100 p-2 rounded-full mr-3">
                              <Shield className="h-5 w-5 text-black" />
                            </div>
                            <span className="text-gray-700">{t("weatherResistant")}</span>
                          </div>
                          <div className="flex items-center">
                            <div className="bg-gray-100 p-2 rounded-full mr-3">
                              <Sun className="h-5 w-5 text-black" />
                            </div>
                            <span className="text-gray-700">{t("uvProtected")}</span>
                          </div>
                          <div className="flex items-center">
                            <div className="bg-gray-100 p-2 rounded-full mr-3">
                              <Leaf className="h-5 w-5 text-black" />
                            </div>
                            <span className="text-gray-700">{t("lightweight")}</span>
                          </div>
                          <div className="flex items-center">
                            <div className="bg-gray-100 p-2 rounded-full mr-3">
                              <Info className="h-5 w-5 text-black" />
                            </div>
                            <span className="text-gray-700">{t("customizable")}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-3 text-left font-bold">{t("model")}</th>
                          <th className="p-3 text-left font-bold">{t("dimensions")}</th>
                          <th className="p-3 text-left font-bold">{t("volume")}</th>
                          <th className="p-3 text-left font-bold">{t("weight")}</th>
                          <th className="p-3 text-left font-bold">{t("price")}</th>
                          <th className="p-3 text-left font-bold"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {line.models.map((model, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="p-3 font-medium">{model.name}</td>
                            <td className="p-3">{model.dimensions}</td>
                            <td className="p-3">{model.volume}</td>
                            <td className="p-3">{model.weight}</td>
                            <td className="p-3 font-bold">{model.price}</td>
                            <td className="p-3">
                              <Button asChild size="sm" className="bg-black hover:bg-gray-800 text-white">
                                <Link href={`/contact?product=${model.name}`}>
                                  {t("inquire")}
                                  <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">{t("allTerapotProducts")}</p>
            <Button asChild className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-4">
              <Link href="/contact">
                {t("requestQuote")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Terapot */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("whyChooseTerapot")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("whyChooseTerapotSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-black mb-4">
                <Shield className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("superiorDurability")}</h3>
              <p className="text-gray-700">{t("superiorDurabilityDesc")}</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-black mb-4">
                <Sun className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("weatherResistantTitle")}</h3>
              <p className="text-gray-700">{t("weatherResistantDesc")}</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-black mb-4">
                <Leaf className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("modernDesign")}</h3>
              <p className="text-gray-700">{t("modernDesignDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dealership Advantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg bg-white flex items-center justify-center p-8">
              <div className="relative w-full h-full">
                <Image src="/terapotlogo.png" alt="Terapot Logo" fill className="object-contain" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("dealershipAdvantagesTitle")}</h2>
              <p className="text-gray-700 mb-6">
                {language === "en"
                  ? "As an official Terapot dealership, we offer numerous advantages to our customers:"
                  : "Како официјален застапник на Terapot, ние нудиме бројни предности на нашите клиенти:"}
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-full mr-3 mt-1">
                    <Check className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("authenticProducts")}</h3>
                    <p className="text-gray-700">{t("authenticProductsDesc")}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-full mr-3 mt-1">
                    <Check className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("fullManufacturerWarranty")}</h3>
                    <p className="text-gray-700">{t("fullManufacturerWarrantyDesc")}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-full mr-3 mt-1">
                    <Check className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("expertProductKnowledge")}</h3>
                    <p className="text-gray-700">{t("expertProductKnowledgeDesc")}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-gray-100 p-2 rounded-full mr-3 mt-1">
                    <Check className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("afterSalesService")}</h3>
                    <p className="text-gray-700">{t("afterSalesServiceDesc")}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("experienceTerapotDifference")}</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">{t("experienceTerapotDifferenceText")}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
              <Link href="/contact">
                <ShoppingBag className="mr-2 h-5 w-5" />
                {t("visitOurShowroom")}
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
            >
              <a href="https://terapot.eu/" target="_blank" rel="noopener noreferrer">
                {t("visitOfficialWebsite")}
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
