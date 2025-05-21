"use client"

import { Phone } from "lucide-react"
import HeroCarousel from "./hero-carousel"
import { useLanguage } from "@/contexts/language-context"

export default function HeroSection() {
  const { t, language } = useLanguage()

  const carouselImages = [
    {
      src: "/images/AdobeStock_353359642.jpeg",
      alt: "Professional AC maintenance service",
    },
    {
      src: "/images/AdobeStock_1152567492.jpeg",
      alt: "Expert AC repair and installation",
    },
    {
      src: "/images/AdobeStock_1119599339.jpeg",
      alt: "Quality air conditioning solutions",
    },
  ]

  return (
    <section className="bg-blue-600 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className={`text-3xl md:text-4xl font-bold ${language === "ar" ? "text-right" : ""}`}>
              {t("hero.title.part1")} <span className="text-amber-300">{t("hero.title.part2")}</span>
            </h1>
            <p className={`text-blue-100 ${language === "ar" ? "text-right" : ""}`}>{t("hero.description")}</p>
            <div className={`flex flex-wrap gap-4 pt-2 ${language === "ar" ? "justify-end" : ""}`}>
              <button className="custom-button-white flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{t("hero.callNow")}</span>
              </button>
              <button className="custom-button">{t("hero.bookAppointment")}</button>
            </div>
          </div>
          <div className="md:h-96 h-72">
            <HeroCarousel images={carouselImages} />
          </div>
        </div>
      </div>
    </section>
  )
}

