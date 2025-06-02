"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import TranslateButton from "@/components/translate-button"
import { useLanguage } from "@/components/language-context"
import { getTranslation } from "@/lib/translations"

export default function SiteHeader() {
  const { language } = useLanguage()

  // List of services for the dropdown menu
  const services = [
    { name: "Building & Construction", href: "/services/construction" },
    { name: "LED Lighting", href: "/services/led-lighting" },
    { name: "Outdoor Advertising ", href: "/services/advertising-billboards" },
    { name: "Underbold", href: "/services/underbold" },
    { name: "Mediterraneo", href: "/services/mediterraneo" },
    { name: "Kings Choice", href: "/services/kings-choice" },
    { name: "Terapot", href: "/services/terapot" },
    { name: "Ego Water", href: "/services/ego-water" },
    { name: "Multisit", href: "/services/multisit" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-transparent">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex-1"></div>
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Impuls</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary text-black">
              {getTranslation(language, "home")}
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary text-black">
              {getTranslation(language, "about")}
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-primary text-black">
                {getTranslation(language, "services")} <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/services" className="w-full">
                    {getTranslation(language, "services")}
                  </Link>
                </DropdownMenuItem>
                <div className="h-px bg-gray-200 my-1"></div>
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link href={service.href} className="w-full">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

           
          </nav>
        </div>
        <div className="flex items-center gap-4 flex-1 justify-end">
          <div className="hidden md:flex gap-2">
            <TranslateButton />
            <Button asChild variant="outline" size="sm" className="border-black text-black">
              <Link href="/contact">{getTranslation(language, "contactUs")}</Link>
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                  {getTranslation(language, "home")}
                </Link>
                <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                  {getTranslation(language, "about")}
                </Link>

                {/* Mobile Services Menu */}
                <div className="flex flex-col gap-2">
                  <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
                    {getTranslation(language, "services")}
                  </Link>
                  <div className="pl-4 flex flex-col gap-2 border-l border-gray-200">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="text-xs font-medium transition-colors hover:text-primary"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
                  {getTranslation(language, "contact")}
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <TranslateButton />
                  <Button asChild variant="outline" size="sm">
                    <Link href="/contact">{getTranslation(language, "contactUs")}</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}