"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Check,
  Star,
  Heart,
  Droplet,
  Shield,
  ExternalLink,
  Globe,
  Instagram,
  ShoppingBag,
} from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/translations"

export default function KingsChoicePage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/k11111.jpg"
            alt="Kings Choice Dog Juices"
            fill
            className="object-contain object-center opacity-90"
            priority
          />
        </div>
        <div className="container relative z-20 mx-auto px-4 h-full flex flex-col justify-center items-start md:px-6">
          <div className="max-w-3xl animate-fade-in">
            <div className="inline-block bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 animate-slide-up">
              {t("officialDealer")}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
              King's <span className="text-amber-400">Choice</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              {t("kingsChoiceSubtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-white hover:bg-gray-100 text-amber-600 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all animate-slide-up"
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
                className="bg-white hover:bg-gray-100 text-amber-600 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <a href="https://kingschoice.rs/" target="_blank" rel="noopener noreferrer">
                  {t("visitOfficialWebsite")}
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white hover:bg-gray-100 text-amber-600 rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <a href="https://www.instagram.com/kingchoicemk/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 h-5 w-5" />
                  @kingchoicemk
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
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                {t("naturalIngredients")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
                  {t("naturalGoodness")}
                </span>
              </h2>
              <p className="text-gray-700 mb-6 text-lg">{t("kingsChoiceIntro")}</p>
              <p className="text-gray-700 mb-8 text-lg">{t("kingsChoiceIntro2")}</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-amber-600" />
                  </div>
                  <span className="text-gray-700">{t("naturalIngredients")}</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-amber-600" />
                  </div>
                  <span className="text-gray-700">{t("noPreservatives")}</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-amber-100 p-2 rounded-full mr-3">
                    <Check className="h-5 w-5 text-amber-600" />
                  </div>
                  <span className="text-gray-700">{t("vetApproved")}</span>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-300">
              <Image src="/k1.jpg" alt="King's Choice product range" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Official Partnership Banner */}
      <section className="py-12 bg-gradient-to-r from-amber-700 to-amber-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("officialPartnership")}</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            {t("officialPartnershipText")}{" "}
            <a
              href="https://kingschoice.rs/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-amber-300"
            >
              kingschoice.rs
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              className="bg-white hover:bg-gray-100 text-amber-800 rounded-full px-6 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <a href="https://kingschoice.rs/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Globe className="mr-2 h-5 w-5" />
                kingschoice.rs
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              className="bg-white hover:bg-gray-100 text-amber-800 rounded-full px-6 py-3 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <a
                href="https://www.instagram.com/kingchoicemk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Instagram className="mr-2 h-5 w-5" />
                @kingchoicemk
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              {t("premiumQuality")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
                {t("productRange")}
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("productRangeSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-[300px]">
                <Image src="/k111.jpg" alt="Raspberry Juice for Dogs" fill className="object-contain" />
                <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {t("bestseller")}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("raspberryBoost")}</h3>
                <p className="text-gray-600 mb-4">{t("raspberryBoostDesc")}</p>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">128 {t("reviews")}</span>
                </div>
                <div className="flex justify-between items-center">
                 
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-[300px]">
                <Image src="/k11.jpg" alt="Pineapple Juice for Dogs" fill className="object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("pineappleRefresh")}</h3>
                <p className="text-gray-600 mb-4">{t("pineappleRefreshDesc")}</p>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 4 ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">94 {t("reviews")}</span>
                </div>
                <div className="flex justify-between items-center">
                 
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-[300px]">
                <Image src="/k1111.jpg" alt="Blueberry Juice for Dogs" fill className="object-contain" />
                <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {t("new")}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t("blueberryAntioxidant")}</h3>
                <p className="text-gray-600 mb-4">{t("blueberryAntioxidantDesc")}</p>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < 5 ? "text-amber-500 fill-amber-500" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">56 {t("reviews")}</span>
                </div>
                <div className="flex justify-between items-center">
                  
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
          
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              {t("healthBenefits")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
                {t("benefitsTitle")}
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("benefitsSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full border border-gray-100">
              <div className="mb-6 text-amber-600">
                <Heart className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("improvedHeartHealth")}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{t("improvedHeartHealthDesc")}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full border border-gray-100">
              <div className="mb-6 text-amber-600">
                <Shield className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("enhancedImmunity")}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{t("enhancedImmunityDesc")}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full border border-gray-100">
              <div className="mb-6 text-amber-600">
                <Droplet className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t("optimalHydration")}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{t("optimalHydrationDesc")}</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full border border-gray-100">
              <div className="mb-6 text-amber-600">
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
                  <path d="M2 12h20" />
                  <path d="M2 12a10 10 0 0 1 20 0" />
                  <path d="M2 12a10 10 0 0 0 20 0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{t("digestiveSupport")}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{t("digestiveSupportDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              {t("testimonials")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
                {t("testimonialsTitle")}
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("testimonialsSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{t("testimonial1")}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center mr-4">
                  <span className="font-bold text-amber-700">SL</span>
                </div>
                <div>
                  <h4 className="font-bold">{t("testimonial1Author")}</h4>
                  <p className="text-sm text-gray-500">{t("testimonial1Role")}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{t("testimonial2")}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center mr-4">
                  <span className="font-bold text-amber-700">DR</span>
                </div>
                <div>
                  <h4 className="font-bold">{t("testimonial2Author")}</h4>
                  <p className="text-sm text-gray-500">{t("testimonial2Role")}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{t("testimonial3")}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center mr-4">
                  <span className="font-bold text-amber-700">JT</span>
                </div>
                <div>
                  <h4 className="font-bold">{t("testimonial3Author")}</h4>
                  <p className="text-sm text-gray-500">{t("testimonial3Role")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
                {t("howToUse")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
                  {t("howToUse")}
                </span>
              </h2>
              <p className="text-gray-700 mb-6 text-lg">{t("howToUseIntro")}</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3 mt-1">
                    <span className="font-bold text-amber-600">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("directServing")}</h3>
                    <p className="text-gray-700">{t("directServingDesc")}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3 mt-1">
                    <span className="font-bold text-amber-600">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("mixWithFood")}</h3>
                    <p className="text-gray-700">{t("mixWithFoodDesc")}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3 mt-1">
                    <span className="font-bold text-amber-600">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{t("frozenTreats")}</h3>
                    <p className="text-gray-700">{t("frozenTreatsDesc")}</p>
                  </div>
                </li>
              </ul>
              <p className="text-gray-700 mt-6 text-lg">{t("howToUseNote")}</p>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-300 order-1 md:order-2">
              <Image src="/k11111.jpg" alt="Dog enjoying King's Choice juice" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4">
              {t("faq")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-amber-800">
                {t("faqTitle")}
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">{t("faqSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <h3 className="text-xl font-bold mb-3">{t("faq1Question")}</h3>
              <p className="text-gray-700">{t("faq1Answer")}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <h3 className="text-xl font-bold mb-3">{t("faq2Question")}</h3>
              <p className="text-gray-700">{t("faq2Answer")}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <h3 className="text-xl font-bold mb-3">{t("faq3Question")}</h3>
              <p className="text-gray-700">{t("faq3Answer")}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
              <h3 className="text-xl font-bold mb-3">{t("faq4Question")}</h3>
              <p className="text-gray-700">{t("faq4Answer")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("callToAction")}</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">{t("callToActionSubtitle")}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            <Button
              asChild
              variant="outline"
              className="bg-white text-amber-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
            >
              <a
                href="https://www.instagram.com/kingchoicemk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Instagram className="mr-2 h-5 w-5" />
                {t("followUs")}
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white text-amber-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg"
            >
              <Link href="/contact" className="flex items-center">
                {t("contactUs")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
