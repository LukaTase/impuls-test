import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4">
              <div className="relative h-12 w-36">
                <Image src="/logo.png" alt="Impuls International" fill className="object-contain" />
              </div>
            </div>
            <p className="mb-4 text-gray-400">A global provider of integrated services and rapid response solutions.</p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/impulsinternational/" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
             
              <Link href="https://www.linkedin.com/in/goran-bogatinovski-49090814/?originalSubdomain=mk" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.instagram.com/impuls_lighting/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/ego-water" className="text-gray-400 hover:text-white transition-colors">
                  Ego Water
                </Link>
              </li>
              <li>
                <Link href="/services/advertising-billboards" className="text-gray-400 hover:text-white transition-colors">
                  Advertising Billboards
                </Link>
              </li>
              <li>
                <Link href="/services/kings-choice" className="text-gray-400 hover:text-white transition-colors">
                  Kings Choice
                </Link>
              </li>
              <li>
                <Link href="/services/construction" className="text-gray-400 hover:text-white transition-colors">
                  Building & Construction
                </Link>
              </li>
              <li>
                <Link href="/services/led-lighting" className="text-gray-400 hover:text-white transition-colors">
                  LED Lighting
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/mediterraneo" className="text-gray-400 hover:text-white transition-colors">
                  Mediterraneo
                </Link>
              </li>
              <li>
                <Link href="/services/terapot" className="text-gray-400 hover:text-white transition-colors">
                  Terapot
                </Link>
              </li>
              <li>
                <Link href="/services/undebold" className="text-gray-400 hover:text-white transition-colors">
                  Underbold
                </Link>
              </li>
              <li>
                <Link href="/services/multisit" className="text-gray-400 hover:text-white transition-colors">
                  Multisit
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Impuls International. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
