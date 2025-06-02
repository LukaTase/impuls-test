"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/translations"

export default function AboutPage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full bg-[#ed3237]">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-32 w-64 md:h-48 md:w-96">
            <Image src="/logo.png" alt="Impuls International" fill className="object-contain" priority />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/20">
          <div className="container mx-auto h-full px-4 flex flex-col justify-center md:px-6">
            <div className="max-w-3xl mt-32 md:mt-48">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{t("aboutTitle")}</h1>
              <p className="text-xl text-white/80">{t("aboutSubtitle")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("ourStory")}</h2>
              <p className="text-gray-700 mb-4">{t("storyParagraph1")}</p>
              <p className="text-gray-700 mb-4">{t("storyParagraph2")}</p>
              <p className="text-gray-700">{t("storyParagraph3")}</p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/hand.jpg" alt="Impuls International team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("missionVisionValues")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("missionVisionValuesSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-red-600">{t("ourMissionTitle")}</h3>
              <p className="text-gray-700">{t("ourMissionText")}</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-red-600">{t("ourVisionTitle")}</h3>
              <p className="text-gray-700">{t("ourVisionText")}</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-red-600">{t("ourValuesTitle")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>{t("excellence")}:</strong> {t("excellenceDesc")}
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>{t("integrity")}:</strong> {t("integrityDesc")}
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>{t("innovation")}:</strong> {t("innovationDesc")}
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>{t("responsibility")}:</strong> {t("responsibilityDesc")}
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>{t("collaboration")}:</strong> {t("collaborationDesc")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t("leadershipTeam")}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("leadershipTeamSubtitle")}</p>
          </div>

          <div className="flex justify-center">
            <div className="text-center max-w-sm">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden bg-red-600 p-4">
                <Image src="/goran.jpg" alt="CEO" fill className="object-contain" />
              </div>
              <h3 className="text-xl font-bold">{t("goranName")}</h3>
              <p className="text-red-600 mb-2">{t("goranTitle")}</p>
              <p className="text-gray-600">{t("goranDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      
    </main>
  )
}
