import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import CookieConsent from "@/components/cookie-consent"
import "./styles/animations.css"
import Script from "next/script"
import { LanguageProvider } from "@/components/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Impuls International",
  description: "A global provider of integrated services and rapid response solutions",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          <CookieConsent />
        </LanguageProvider>
        <Script id="animations-script" strategy="afterInteractive">
          {`
     // Scroll reveal animation
     function revealOnScroll() {
       const reveals = document.querySelectorAll(".reveal")

       for (let i = 0; i < reveals.length; i++) {
         const windowHeight = window.innerHeight
         const elementTop = reveals[i].getBoundingClientRect().top
         const elementVisible = 150

         if (elementTop < windowHeight - elementVisible) {
           reveals[i].classList.add("active")
         } else {
           reveals[i].classList.remove("active")
         }
       }
     }

     // Billboard flip animation
     function initBillboardFlip() {
       const billboards = document.querySelectorAll(".two-sided-billboard")

       billboards.forEach((billboard) => {
         // Auto flip every 5 seconds
         setInterval(() => {
           const inner = billboard.querySelector(".two-sided-billboard-inner")
           if (inner) {
             inner.style.transform = inner.style.transform === "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)"
           }
         }, 5000)

         // Manual flip on hover
         billboard.addEventListener("mouseenter", () => {
           const inner = billboard.querySelector(".two-sided-billboard-inner")
           if (inner) {
             inner.style.transform = "rotateY(180deg)"
           }
         })

         billboard.addEventListener("mouseleave", () => {
           const inner = billboard.querySelector(".two-sided-billboard-inner")
           if (inner) {
             inner.style.transform = "rotateY(0deg)"
           }
         })
       })
     }

     // Parallax effect
     function initParallax() {
       window.addEventListener("scroll", () => {
         const parallaxElements = document.querySelectorAll(".parallax-element")

         parallaxElements.forEach((element) => {
           const distance = window.scrollY
           const speed = element.dataset.speed || 0.5
           element.style.transform = \`translateY(\${distance * speed}px)\`
         })
       })
     }

     // Spotlight effect
     function initSpotlight() {
       const spotlights = document.querySelectorAll(".spotlight")

       spotlights.forEach((spotlight) => {
         spotlight.addEventListener("mousemove", (e) => {
           const rect = spotlight.getBoundingClientRect()
           const x = e.clientX - rect.left
           const y = e.clientY - rect.top

           const spotlightEffect = spotlight.querySelector(".spotlight-effect")
           if (spotlightEffect) {
             spotlightEffect.style.top = \`\${y}px\`
             spotlightEffect.style.left = \`\${x}px\`
           }
         })
       })
     }

     // 3D tilt effect
     function init3DTilt() {
       const tiltElements = document.querySelectorAll(".tilt-effect")

       tiltElements.forEach((element) => {
         element.addEventListener("mousemove", (e) => {
           const rect = element.getBoundingClientRect()
           const x = e.clientX - rect.left
           const y = e.clientY - rect.top

           const centerX = rect.width / 2
           const centerY = rect.height / 2

           const angleX = (y - centerY) / 20
           const angleY = (centerX - x) / 20

           element.style.transform = \`perspective(1000px) rotateX(\${angleX}deg) rotateY(\${angleY}deg)\`
         })

         element.addEventListener("mouseleave", () => {
           element.style.transform = "perspective(1000px) rotateX(0) rotateY(0)"
         })
       })
     }

     // Initialize all animations
     function initAnimations() {
       // Add scroll event listener for reveal animations
       window.addEventListener("scroll", revealOnScroll)

       // Initial check for elements in view
       revealOnScroll()

       // Initialize billboard flip animations
       initBillboardFlip()

       // Initialize parallax effect
       initParallax()

       // Initialize spotlight effect
       initSpotlight()

       // Initialize 3D tilt effect
       init3DTilt()
     }

     // Run when DOM is fully loaded
     document.addEventListener("DOMContentLoaded", initAnimations)
   `}
        </Script>
      </body>
    </html>
  )
}
