"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Download,
  ExternalLink,
  CheckCircle,
  Leaf,
  Clock,
  PiggyBank,
  Shield,
  Droplet,
  Recycle,
} from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/translations"

export default function UnderboldPage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <div className="absolute inset-0 bg-green-700 z-0">
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>
        <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-start md:px-6">
          <div className="max-w-4xl animate-fade-in">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight animate-slide-up">
                  UNDERBOLD<sup>®</sup> <span className="text-green-300">POD30</span>
                </h1>
                <p className="text-xl text-white/90 mt-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                  {t("underboldSubtitle")}
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                  <Button
                    asChild
                    className="bg-white hover:bg-gray-100 text-green-700 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all animate-slide-up"
                    style={{ animationDelay: "0.2s" }}
                  >
                    <Link href="#benefits">
                      {t("discoverBenefits")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg animate-slide-up"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <a href="https://www.underbold-pod30.de/" target="_blank" rel="noopener noreferrer">
                      {t("officialWebsite")}
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="relative w-full md:w-[400px] h-[300px] rounded-xl overflow-hidden">
                <Image
                  src="/uderboldp.jpg"
                  alt={t("underboldGroundStabilization")}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
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
                {t("intelligentWay")} <span className="text-green-700">{t("forGroundStabilization")}</span>
              </h2>
              <p className="text-gray-700 mb-6 text-lg">{t("underboldIntro1")}</p>
              <p className="text-gray-700 mb-8 text-lg">{t("underboldIntro2")}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <span className="text-gray-700">{t("ecoFriendly100")}</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <span className="text-gray-700">{t("costEffective")}</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <span className="text-gray-700">{t("timeSaving")}</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden modern-shadow">
              <Image src="/under.jpeg" alt={t("underboldGroundStabilization")} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Official Website Banner */}
      <section className="py-12 bg-green-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">GERMAN GREENTEC ECOLOGIC</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">{t("visitOfficialWebsiteText")}</p>
          <div className="flex justify-center">
            <Button
              asChild
              className="bg-white hover:bg-gray-100 text-green-700 rounded-full px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <a
                href="https://www.underbold-pod30.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                www.underbold-pod30.de
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("whatSpeaksFor")}{" "}
              <span className="text-green-700">
                UNDERBOLD<sup>®</sup>
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("discoverKeyAdvantages")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover-scale">
              <div className="text-green-700 mb-4">
                <Leaf className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("environmentalCompatibility")}</h3>
              <p className="text-gray-700">{t("environmentalCompatibilityDesc")}</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover-scale">
              <div className="text-green-700 mb-4">
                <Shield className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("superiorPerformance")}</h3>
              <p className="text-gray-700">{t("superiorPerformanceDesc")}</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover-scale">
              <div className="text-green-700 mb-4">
                <PiggyBank className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("costSavings")}</h3>
              <p className="text-gray-700">{t("costSavingsDesc")}</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover-scale">
              <div className="text-green-700 mb-4">
                <Clock className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("timeEfficiency")}</h3>
              <p className="text-gray-700">{t("timeEfficiencyDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("the")}{" "}
              <span className="text-green-700">
                UNDERBOLD<sup>®</sup> {t("process")}
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("simpleEfficientProcess")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-scale">
              <div className="flex items-center mb-4">
                <div className="bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">{t("preparation")}</h3>
              </div>
              <p className="text-gray-700 mb-4">{t("preparationDesc")}</p>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/u1.jpeg" alt={t("surfacePreparation")} fill className="object-cover" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-scale">
              <div className="flex items-center mb-4">
                <div className="bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">{t("millingMixing")}</h3>
              </div>
              <p className="text-gray-700 mb-4">{t("millingMixingDesc")}</p>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/u2.jpeg" alt={t("millingProcess")} fill className="object-cover" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-scale">
              <div className="flex items-center mb-4">
                <div className="bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">{t("initialCompaction")}</h3>
              </div>
              <p className="text-gray-700 mb-4">{t("initialCompactionDesc")}</p>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/u3.jpeg" alt={t("initialCompaction")} fill className="object-cover" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-scale">
              <div className="flex items-center mb-4">
                <div className="bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold">{t("cementDistribution")}</h3>
              </div>
              <p className="text-gray-700 mb-4">{t("cementDistributionDesc")}</p>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/u3.jpeg" alt={t("cementDistribution")} fill className="object-cover" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-scale">
              <div className="flex items-center mb-4">
                <div className="bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="font-bold">5</span>
                </div>
                <h3 className="text-xl font-bold">{t("binderMilling")}</h3>
              </div>
              <p className="text-gray-700 mb-4">{t("binderMillingDesc")}</p>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/u4.jpeg" alt={t("binderMilling")} fill className="object-cover" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover-scale">
              <div className="flex items-center mb-4">
                <div className="bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="font-bold">6</span>
                </div>
                <h3 className="text-xl font-bold">{t("finalCompaction")}</h3>
              </div>
              <p className="text-gray-700 mb-4">{t("finalCompactionDesc")}</p>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/u5.jpeg" alt={t("finalCompaction")} fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">{t("processNote")}</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button asChild className="bg-green-700 hover:bg-green-800 text-white">
                <a href="/UB.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  {t("downloadProcessGuide")}
                </a>
              </Button>
              <Button asChild className="bg-green-700 hover:bg-green-800 text-white">
                <a href="/GTT.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  {t("downloadTechnologyDescription")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("additional")} <span className="text-green-700">{t("benefits")}</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("underboldAdvantages")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Droplet className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("waterResistance")}</h3>
                  <p className="text-gray-700">{t("waterResistanceDesc")}</p>
                </div>
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/u8.jpeg" alt={t("waterResistance")} fill className="object-cover" />
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Recycle className="h-6 w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t("asphaltRecycling")}</h3>
                  <p className="text-gray-700">{t("asphaltRecyclingDesc")}</p>
                </div>
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/u9.jpeg" alt={t("asphaltRecycling")} fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-4 text-center">{t("pavementStructureComparison")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-center">{t("conventionalStructure")}</h4>
                <ul className="space-y-2">
                  <li className="flex items-center p-2 bg-gray-50 rounded">
                    <span className="w-24 font-medium">4 cm</span>
                    <span>{t("surfaceLayer")}</span>
                  </li>
                  <li className="flex items-center p-2 bg-gray-50 rounded">
                    <span className="w-24 font-medium">8 cm</span>
                    <span>{t("binderLayer")}</span>
                  </li>
                  <li className="flex items-center p-2 bg-gray-50 rounded">
                    <span className="w-24 font-medium">18 cm</span>
                    <span>{t("bituminousBaseCourse")}</span>
                  </li>
                  <li className="flex items-center p-2 bg-gray-50 rounded">
                    <span className="w-24 font-medium">15 cm</span>
                    <span>{t("bedOfGravel")}</span>
                  </li>
                  <li className="flex items-center p-2 bg-gray-50 rounded">
                    <span className="w-24 font-medium">25-40 cm</span>
                    <span>{t("frostLayer")}</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-center">
                  {t("with")} UNDERBOLD<sup>®</sup>
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center p-2 bg-gray-50 rounded">
                    <span className="w-24 font-medium">4 cm</span>
                    <span>{t("surfaceLayer")}</span>
                  </li>
                  <li className="flex items-center p-2 bg-gray-50 rounded">
                    <span className="w-24 font-medium">8 cm</span>
                    <span>{t("binderLayer")}</span>
                  </li>
                  <li className="flex items-center p-2 bg-gray-50 rounded">
                    <span className="w-24 font-medium">0-9 cm</span>
                    <span>{t("bituminousBaseCourse")}</span>
                  </li>
                  <li className="flex items-center p-2 bg-green-50 rounded">
                    <span className="w-24 font-medium text-green-700">40 cm</span>
                    <span className="text-green-700 font-medium">
                      UNDERBOLD<sup>®</sup> {t("layer")}
                    </span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 rounded text-green-700">
                  <p className="font-medium">{t("significantSavings")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PR PLAST S Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              PR PLAST S<sup>®</sup> &{" "}
              <span className="text-green-700">
                UNDERBOLD<sup>®</sup>
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("solutionForBetterAsphalt")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden modern-shadow">
              <Image src="/u7.jpeg" alt={t("prPlastSAdditive")} fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">{t("asphaltModificationTechnology")}</h3>
              <p className="text-gray-700 mb-6">{t("prPlastSDesc")}</p>

              <h4 className="text-xl font-bold mb-4">{t("mainEffectsAdvantages")}</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-gray-700">{t("improvesRuttingResistance")}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-gray-700">{t("increasesStiffnessModulus")}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-gray-700">{t("improvesCrackingResistance")}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-gray-700">{t("betterAdhesion")}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <p className="text-gray-700">{t("easyToUse")}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <Button asChild className="bg-green-700 hover:bg-green-800 text-white">
                  <a href="/UB.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    {t("downloadPrPlastSTechnicalData")}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Downloads */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("technical")} <span className="text-green-700">{t("documentation")}</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("downloadDetailedInformation")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover-scale">
              <h3 className="text-xl font-bold mb-4">
                UNDERBOLD<sup>®</sup> {t("technologyDescription")}
              </h3>
              <p className="text-gray-700 mb-6">{t("technologyDescriptionText")}</p>
              <Button asChild className="w-full bg-green-700 hover:bg-green-800 text-white">
                <a href="/GTT.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  {t("downloadPDF")}
                </a>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover-scale">
              <h3 className="text-xl font-bold mb-4">{t("applicationProcessGuide")}</h3>
              <p className="text-gray-700 mb-6">{t("applicationProcessGuideText")}</p>
              <Button asChild className="w-full bg-green-700 hover:bg-green-800 text-white">
                <a href="/GTT.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  {t("downloadPDF")}
                </a>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover-scale">
              <h3 className="text-xl font-bold mb-4">
                PR PLAST S<sup>®</sup> {t("technicalData")}
              </h3>
              <p className="text-gray-700 mb-6">{t("technicalDataText")}</p>
              <Button asChild className="w-full bg-green-700 hover:bg-green-800 text-white">
                <a href="/UB.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  {t("downloadPDF")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("readyToTransformProjects")}</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">{t("contactUsToday")}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-white text-green-700 hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
              <Link href="/contact">
                {t("contactOurExperts")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
            >
              <a href="https://www.underbold-pod30.de/" target="_blank" rel="noopener noreferrer">
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
