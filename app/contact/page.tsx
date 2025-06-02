"use client"

import type React from "react"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/translations"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"


export default function ContactPage() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key)
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    if (!form.current) return

    emailjs.sendForm("service_7rjlyos", "template_tb7ixg9", form.current, "lwVM-oXknziY0C0kg").then(
      (result) => {
        console.log("Email sent:", result.text)
        form.current?.reset()
        alert("Message sent successfully!")
        setIsSubmitting(false)
      },
      (error) => {
        console.error("Failed to send:", error.text)
        alert("Failed to send message.")
        setIsSubmitting(false)
      },
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center">
      

      <div className="w-full max-w-6xl px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t("contactUs")}</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{t("contactFormIntro")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">{t("sendMessage")}</h2>

            <form ref={form} className="space-y-6" onSubmit={sendEmail}>
              <input type="hidden" name="contact_number" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("firstName")}
                  </label>
                  <Input id="firstName" name="from_name" placeholder="John" required className="h-12" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("lastName")}
                  </label>
                  <Input id="lastName" name="last_name" placeholder="Doe" className="h-12" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("email")}
                </label>
                <Input
                  id="email"
                  type="email"
                  name="from_email"
                  placeholder="john.doe@example.com"
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("phone")}
                </label>
                <Input id="phone" name="phone" placeholder="+389 XX XXX XXX" className="h-12" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {language === "en" ? "Subject" : "Предмет"}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder={language === "en" ? "How can we help you?" : "Како можеме да ви помогнеме?"}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t("message")}
                </label>
                <Textarea
                  id="message"
                  name="html_message"
                  placeholder={t("messageHelp")}
                  rows={6}
                  required
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {language === "en" ? "Sending..." : "Се испраќа..."}
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="mr-2 h-5 w-5" />
                    {t("sendMessage")}
                  </div>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">{t("contactInformation")}</h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-red-600 p-3 rounded-full mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t("address")}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t("addressLine1")}
                    <br />
                    {t("addressLine2")}
                    <br />
                    {t("addressLine3")}
                    <br />
                    {t("addressLine4")}
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-600 p-3 rounded-full mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t("phone")}</h3>
                  <p className="text-gray-700">{t("phoneNumber")}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-600 p-3 rounded-full mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{t("email")}</h3>
                  <p className="text-gray-700">{t("emailAddress")}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-white rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-4">{t("businessHours")}</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">{t("mondayFriday")}</span>
                  <span className="text-gray-900 font-semibold">{t("mondayFridayHours")}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700 font-medium">{t("saturday")}</span>
                  <span className="text-red-600 font-semibold">{t("saturdayHours")}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 font-medium">{t("sunday")}</span>
                  <span className="text-red-600 font-semibold">{t("closed")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-100 mt-auto py-8">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-gray-600">{t("copyright").replace("{year}", new Date().getFullYear().toString())}</p>
        </div>
      </footer>
    </main>
  )
}
