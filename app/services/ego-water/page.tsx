"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, ExternalLink, Globe } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/translations"

export default function EgoWaterPage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  // Product data
  const products = [
    {
      id: 1,
      name: t("egoNaturalMineral033"),
      description: t("egoNaturalMineral033Desc"),
      imageUrl: "/egs.jpg",
    },
    {
      id: 2,
      name: t("egoNaturalMineral05"),
      description: t("egoNaturalMineral05Desc"),
      imageUrl: "/egs.jpg",
    },
    {
      id: 3,
      name: t("egoNaturalMineral1"),
      description: t("egoNaturalMineral1Desc"),
      imageUrl: "/egs.jpg",
    },
    {
      id: 4,
      name: t("egoSparklingMineral"),
      description: t("egoSparklingMineralDesc"),
      imageUrl: "/egc.jpg",
    },
  ]

  // Updated mineral content data
  const mineralContent = [
    { name: "Calcium (Ca)", value: "14.40 mg/l" },
    { name: "Magnesium (Mg)", value: "2.10 mg/l" },
    { name: "Sodium (Na)", value: "10.20 mg/l" },
    { name: "Potassium (K)", value: "<1.0 mg/l" },
    { name: "Bicarbonates (HCO₃)", value: "85.40 mg/l" },
    { name: "Chlorides (Cl)", value: "7.60 mg/l" },
    { name: "Sulfates (SO₄)", value: "2.60 mg/l" },
    { name: "Iron (Fe)", value: "<0.10 mg/l" },
    { name: "Chlorine (Cl)", value: "9.60 mg/l" },
    { name: "pH", value: "7.1" },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <div className="absolute inset-0 bg-blue-600 z-0">
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>
        <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-start md:px-6">
          <div className="max-w-3xl animate-fade-in">
            <div className="mb-8">
              <Image
                src="/Ego-all.png"
                alt="Ego Water Bottles"
                width={300}
                height={150}
                className="object-contain"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
              {t("egoWaterTitle")}
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              {t("egoWaterSubtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-white hover:bg-gray-100 text-blue-600 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <Link href="#products">
                  {t("exploreProducts")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white hover:bg-gray-100 text-blue-600 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <a href="https://ego-water.com/" target="_blank" rel="noopener noreferrer">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-blue-600">{t("pureNaturalGoodness")}</span>
              </h2>
              <p className="text-gray-700 mb-6 text-lg">{t("egoWaterIntro")}</p>
              <p className="text-gray-700 mb-8 text-lg">{t("egoWaterIntro2")}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{t("naturalMinerals")}</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{t("perfectPHBalance")}</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">{t("pureTaste")}</span>
                </div>
              </div>
            </div>
            <div className="relative h-[450px] rounded-2xl overflow-hidden modern-shadow">
              <Image src="/ego.png?height=900&width=800" alt="Ego Water Source" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Official Website Banner */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("visitOurWebsites")}</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">{t("discoverMoreEgo")}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="bg-white hover:bg-gray-100 text-blue-600 rounded-full px-6 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <a href="https://ego-water.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                ego-water.com
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              className="bg-white hover:bg-gray-100 text-blue-600 rounded-full px-6 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <a href="https://egovoda.mk/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                egovoda.mk
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              className="bg-white hover:bg-gray-100 text-blue-600 rounded-full px-6 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <a href="https://ego.mk/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                ego.mk
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-blue-600">{t("ourProductRange")}</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("exploreSelection")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden modern-shadow hover-scale">
                <div className="relative h-64 w-full">
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
                    <span className="text-sm text-blue-600 font-medium">{t("premiumQuality")}</span>
                    <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Link href={`/services/ego-water/products/${product.id}`}>
                        {t("details")}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mineral Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-blue-600">{t("egoWaterContains")}</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("perfectBalanceMinerals")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden modern-shadow">
              <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                <div className="relative h-64 w-64">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-500 rounded-full p-4 text-white font-bold text-center">
                      <div className="text-sm">pH</div>
                      <div className="text-4xl">7.1</div>
                    </div>
                  </div>
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#e0e0e0" strokeWidth="2" />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        strokeDasharray="283"
                        strokeDashoffset="70"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">{t("mineralComposition")}</h3>
              <div className="space-y-4">
                {mineralContent.map((mineral, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="font-medium">{mineral.name}</span>
                    <span className="text-blue-600 font-bold">{mineral.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-gray-700">{t("egoWaterBalanced")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-blue-600">{t("benefitsOfEgoWater")}</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("whyEgoWater")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl modern-shadow hover-scale">
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v6" />
                  <path d="M12 22v-6" />
                  <path d="M4.93 4.93l4.24 4.24" />
                  <path d="M14.83 14.83l4.24 4.24" />
                  <path d="M2 12h6" />
                  <path d="M22 12h-6" />
                  <path d="M4.93 19.07l4.24-4.24" />
                  <path d="M14.83 9.17l4.24-4.24" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{t("perfectPHBalanceTitle")}</h3>
              <p className="text-gray-700">{t("perfectPHBalanceDesc")}</p>
            </div>

            <div className="bg-white p-8 rounded-xl modern-shadow hover-scale">
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{t("essentialMineralsTitle")}</h3>
              <p className="text-gray-700">{t("essentialMineralsDesc")}</p>
            </div>

            <div className="bg-white p-8 rounded-xl modern-shadow hover-scale">
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{t("pureNaturalTitle")}</h3>
              <p className="text-gray-700">{t("pureNaturalDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-blue-600">{t("ecoFriendlyPackaging")}</span>
              </h2>
              <p className="text-gray-700 mb-6 text-lg">{t("ecoFriendlyDesc")}</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("recyclableMaterials")}</h3>
                    <p className="text-gray-700">{t("recyclableMaterialsDesc")}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("multipleSizes")}</h3>
                    <p className="text-gray-700">{t("multipleSizesDesc")}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("qualitySealed")}</h3>
                    <p className="text-gray-700">{t("qualitySealedDesc")}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden modern-shadow order-1 md:order-2">
              <Image
                src="/eg.jpg"
                alt="Ego Water Bottles"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("experienceNaturalHydration")}</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">{t("discoverPureTaste")}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
              <Link href="/contact">
                {t("findRetailers")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
            >
              <a href="https://ego-water.com/" target="_blank" rel="noopener noreferrer">
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
