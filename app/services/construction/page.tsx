"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Building, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/translations"

export default function ConstructionPage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>

        {/* Rotating Background Images */}
        <div className="absolute inset-0 z-0">
          <div className="rotating-bg rotating-bg-1" style={{ backgroundImage: "url('/building-irl.jpg')" }}></div>
          <div
            className="rotating-bg rotating-bg-2"
            style={{ backgroundImage: "url('/building-irl-2.jpg')" }}
          ></div>
          <div
            className="rotating-bg rotating-bg-3"
            style={{ backgroundImage: "url('/building-orce-nikolov-1.jpg')" }}
          ></div>
          <div
            className="rotating-bg rotating-bg-4"
            style={{ backgroundImage: "url('/building-orce-nikolov-4.jpg')" }}
          ></div>
          <div
            className="rotating-bg rotating-bg-5"
            style={{ backgroundImage: "url('/zgrada1.jpg')" }}
          ></div>
          <div
            className="rotating-bg rotating-bg-6"
            style={{ backgroundImage: "url('/zgrada5.jpg')" }}
          ></div>

          {/* Pattern overlay */}
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
              {t("buildingConstructionTitle")} <span className="text-red-400">{t("services")}</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              {t("buildingConstructionSubtitle")}
            </p>
            <Button
              asChild
              className="bg-white hover:bg-gray-100 text-blue-400 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link href="#projects">
                {t("viewProjects")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                {t("buildingExcellence")} <span className="text-gradient">Excellence</span>
              </h2>
              <p className="text-gray-700 mb-6 text-lg">{t("constructionIntroText")}</p>
              <p className="text-gray-700 mb-8 text-lg">{t("constructionIntroText2")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white rounded-full px-6 py-5 shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/contact">
                    {t("discussYourProject")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden modern-shadow order-1 md:order-2">
              <Image
                src="/architect.jpg"
                alt={language === "en" ? "Construction Project" : "Градежен Проект"}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section id="projects" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("featuredProjects")} <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("exclusiveResidential")}</p>
          </div>

          {/* IRL 60 Project */}
          <div className="bg-white rounded-2xl overflow-hidden modern-shadow mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full p-3 mr-4">
                    <Building className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold">IRL Ivo Ribar Lola 60</h3>
                  <span className="ml-3 inline-block bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {language === "en" ? "SOLD OUT" : "РАСПРОДАДЕНО"}
                  </span>
                </div>

                <div className="space-y-6 text-gray-700">
                  <p className="font-semibold text-xl">{t("modernResidentialBuilding")}</p>
                  <p className="font-semibold text-xl">{t("onlyExclusiveUnits")}</p>

                  <div className="mt-8">
                    <h4 className="font-bold text-xl mb-4">{t("apartmentSizes")}</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">92 m²</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">125 m²</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">125 m²</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">131 m²</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-bold text-xl mb-4">{t("features")}</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("modernArchitecture")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("premiumFinishes")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("balconiesWithViews")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("secureParking")}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-10">
                    <Button
                      asChild
                      className="bg-blue-400 hover:bg-blue-500 text-white rounded-full px-6 py-5 shadow-lg hover:shadow-xl transition-all"
                    >
                      <Link href="/contact">
                        {t("requestInformation")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[500px]">
                <Image
                  src="/zgrada1.jpg"
                  alt={
                    language === "en"
                      ? "Residential Building - IRL Ivo Ribar Lola 60"
                      : "Станбена Зграда - IRL Иво Рибар Лола 60"
                  }
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Orce Nikolov 147 Project */}
          <div className="bg-white rounded-2xl overflow-hidden modern-shadow mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full p-3 mr-4">
                    <Building className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold">Orce Nikolov 147</h3>
                  <span className="ml-3 inline-block bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {language === "en" ? "SOLD OUT" : "РАСПРОДАДЕНО"}
                  </span>
                </div>

                <div className="space-y-6 text-gray-700">
                  <p className="font-semibold text-xl">{t("mixedUseBuilding")}</p>
                  <p className="font-semibold text-xl">{t("primeLocation")}</p>

                  <div className="mt-8">
                    <h4 className="font-bold text-xl mb-4">{t("buildingFeatures")}</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("commercialSpaces")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("residentialApartments")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("rooftopTerrace")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("modernDesignMaterials")}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-10">
                    <Button
                      asChild
                      className="bg-blue-400 hover:bg-blue-500 text-white rounded-full px-6 py-5 shadow-lg hover:shadow-xl transition-all"
                    >
                      <Link href="/contact">
                        {t("requestInformation")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[500px]">
                <Image
                  src="/building-orce-nikolov-2.jpg"
                  alt={
                    language === "en"
                      ? "Mixed-Use Building - Orce Nikolov 147"
                      : "Зграда со мешана намена - Орце Николов 147"
                  }
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* IRL Ivo Ribar Lola 21 Project */}
          <div className="bg-white rounded-2xl overflow-hidden modern-shadow mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full p-3 mr-4">
                    <Building className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold">IRL Ivo Ribar Lola 216</h3>
                  <span className="ml-3 inline-block bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {language === "en" ? "SOLD OUT" : "РАСПРОДАДЕНО"}
                  </span>
                </div>

                <div className="space-y-6 text-gray-700">
                  <p className="font-semibold text-xl">{t("modernResidentialBuilding")}</p>
                  <p className="font-semibold text-xl">{t("onlyExclusiveUnits")}</p>

                  <div className="mt-8">
                    <h4 className="font-bold text-xl mb-4">{t("apartmentSizes")}</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">92 m²</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">125 m²</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">125 m²</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">131 m²</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-bold text-xl mb-4">{t("features")}</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("modernArchitecture")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("premiumFinishes")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("balconiesWithViews")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("secureParking")}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-10">
                    <Button
                      asChild
                      className="bg-blue-400 hover:bg-blue-500 text-white rounded-full px-6 py-5 shadow-lg hover:shadow-xl transition-all"
                    >
                      <Link href="/contact">
                        {t("requestInformation")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[500px]">
                <Image
                  src="/building-irl.jpg"
                  alt={
                    language === "en"
                      ? "Residential Building - IRL Ivo Ribar Lola 216"
                      : "Станбена Зграда - IRL Иво Рибар Лола 216"
                  }
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Londonska 17 Project */}
          <div className="bg-white rounded-2xl overflow-hidden modern-shadow mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full p-3 mr-4">
                    <Building className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold">Londonska 17</h3>
                  <span className="ml-3 inline-block bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {language === "en" ? "SOLD OUT" : "РАСПРОДАДЕНО"}
                  </span>
                </div>

                <div className="space-y-6 text-gray-700">
                  <p className="font-semibold text-xl">{t("mixedUseBuilding")}</p>
                  <p className="font-semibold text-xl">{t("primeLocation")}</p>

                  <div className="mt-8">
                    <h4 className="font-bold text-xl mb-4">{t("buildingFeatures")}</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("commercialSpaces")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("residentialApartments")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("rooftopTerrace")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("modernDesignMaterials")}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-10">
                    <Button
                      asChild
                      className="bg-blue-400 hover:bg-blue-500 text-white rounded-full px-6 py-5 shadow-lg hover:shadow-xl transition-all"
                    >
                      <Link href="/contact">
                        {t("requestInformation")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[500px]">
                <Image
                  src="/zgrada5.jpg"
                  alt={
                    language === "en" ? "Mixed-Use Building - Londonska 17" : "Зграда со мешана намена - Лондонска 17"
                  }
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Naum Evro Project */}
          <div className="bg-white rounded-2xl overflow-hidden modern-shadow mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full p-3 mr-4">
                    <Building className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold">Naum Evro</h3>
                  <span className="ml-3 inline-block bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {language === "en" ? "SOLD OUT" : "РАСПРОДАДЕНО"}
                  </span>
                </div>

                <div className="space-y-6 text-gray-700">
                  <p className="font-semibold text-xl">{t("mixedUseBuilding")}</p>
                  <p className="font-semibold text-xl">{t("primeLocation")}</p>

                  <div className="mt-8">
                    <h4 className="font-bold text-xl mb-4">{t("buildingFeatures")}</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("commercialSpaces")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("residentialApartments")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("rooftopTerrace")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("modernDesignMaterials")}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-10">
                    <Button
                      asChild
                      className="bg-blue-400 hover:bg-blue-500 text-white rounded-full px-6 py-5 shadow-lg hover:shadow-xl transition-all"
                    >
                      <Link href="/contact">
                        {t("requestInformation")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[500px]">
                <Image
                  src="/NaumEvro.jpg"
                  alt={language === "en" ? "Mixed-Use Building - Naum Evro" : "Зграда со мешана намена - Наум Евро"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bahar Mois Project */}
          <div className="bg-white rounded-2xl overflow-hidden modern-shadow mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12">
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full p-3 mr-4">
                    <Building className="h-8 w-8" />
                  </div>
                  <h3 className="text-3xl font-bold">Bahar Mois</h3>
                  <span className="ml-3 inline-block bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {language === "en" ? "COMING SOON" : "НАСКОРО"}
                  </span>
                </div>

                <div className="space-y-6 text-gray-700">
                  <p className="font-semibold text-xl">{t("modernResidentialBuilding")}</p>
                  <p className="font-semibold text-xl">{t("primeLocation")}</p>

                  <div className="mt-8">
                    <h4 className="font-bold text-xl mb-4">{t("buildingFeatures")}</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("commercialSpaces")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("residentialApartments")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("rooftopTerrace")}</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-lg">{t("modernDesignMaterials")}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-10">
                    <Button
                      asChild
                      className="bg-blue-400 hover:bg-blue-500 text-white rounded-full px-6 py-5 shadow-lg hover:shadow-xl transition-all"
                    >
                      <Link href="/contact">
                        {t("requestInformation")}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[500px]">
                <Image
                  src="/zgrada6.jpg"
                  alt={language === "en" ? "Residential Building - Bahar Mois" : "Станбена Зграда - Бахар Моис"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plans */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("floorPlans")} <span className="text-gradient">Plans</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("exploreLayouts")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl overflow-hidden modern-shadow hover-scale">
              <div className="p-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white text-center">
                <h3 className="font-bold text-xl">92 m² {language === "en" ? "Apartment" : "Апартман"}</h3>
              </div>
              <div className="relative h-64 w-full">
                <Image
                  src="/stan1.jpg"
                  alt={language === "en" ? "92 m² Floor Plan" : "План на кат 92 m²"}
                  fill
                  className="object-cover p-4"
                />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-4">{t("features")}:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">2 {t("bedrooms")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t("livingRoom")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t("kitchenDining")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t("balcony")}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden modern-shadow hover-scale">
              <div className="p-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white text-center">
                <h3 className="font-bold text-xl">125 m² {language === "en" ? "Apartment" : "Апартман"}</h3>
              </div>
              <div className="relative h-64 w-full">
                <Image
                  src="/stan2.jpg"
                  alt={language === "en" ? "125 m² Floor Plan" : "План на кат 125 m²"}
                  fill
                  className="object-cover p-4"
                />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-4">{t("features")}:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">3 {t("bedrooms")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t("spaciousLivingRoom")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t("kitchenDining")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">2 {t("balconies")}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden modern-shadow hover-scale">
              <div className="p-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white text-center">
                <h3 className="font-bold text-xl">131 m² {language === "en" ? "Apartment" : "Апартман"}</h3>
              </div>
              <div className="relative h-64 w-full">
                <Image
                  src="/stan3.jpeg"
                  alt={language === "en" ? "131 m² Floor Plan" : "План на кат 131 m²"}
                  fill
                  className="object-cover p-4"
                />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-4">{t("features")}:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">3 {t("bedrooms")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t("largeLivingRoom")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t("kitchenDining")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">2 {t("bathrooms")}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{t("largeBalcony")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gray-50 rounded-2xl p-12 modern-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  {t("interestedInConstruction")} <span className="text-gradient">Construction Services?</span>
                </h2>
                <p className="text-gray-700 mb-8 text-lg">{t("constructionServicesText")}</p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full p-3 mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-xl mb-2">{t("phone")}</p>
                      <p className="text-gray-700">+389 2 3131113</p>
                      <p className="text-gray-700">+389 75 200777</p>
                      
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-full p-3 mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-xl mb-2">{t("email")}</p>
                      <p className="text-gray-700">info@impuls-international.com</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Link href="/contact">
                      {t("contactUs")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/construction-site.jpeg"
                  alt={language === "en" ? "Contact Us" : "Контактирајте нè"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
