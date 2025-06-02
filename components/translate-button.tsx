"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/translations"
import { Globe } from "lucide-react"

export default function TranslateButton() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "mk" : "en")
  }

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="border-black text-black flex items-center gap-1"
    >
      <Globe className="h-4 w-4" />
      {language === "en" ? getTranslation(language, "switchToMacedonian") : getTranslation(language, "switchToEnglish")}
    </Button>
  )
}
