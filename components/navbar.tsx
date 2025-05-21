"use client"

import { useState } from "react"
import Link from "next/link"
import { Fan, Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "./language-switcher"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="bg-blue-600 text-white sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2 z-10">
          <Fan className="h-6 w-6 flex-shrink-0" />
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold">Abdulkhaliq</span>
            <span className="text-sm font-bold">Abdulshakoor</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection("home")} className="hover:text-blue-100">
            {t("nav.home")}
          </button>
          <button onClick={() => scrollToSection("services")} className="hover:text-blue-100">
            {t("nav.services")}
          </button>
          <button onClick={() => scrollToSection("about")} className="hover:text-blue-100">
            {t("nav.about")}
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-blue-100">
            {t("nav.contact")}
          </button>
          <LanguageSwitcher />
          <button className="custom-button">{t("nav.book")}</button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button className="text-white z-10" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-blue-600 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${isMenuOpen ? "transform translate-x-0" : "transform translate-x-full"} md:hidden`}
        >
          <div className="flex flex-col items-center gap-6 text-xl">
            <button onClick={() => scrollToSection("home")} className="hover:text-blue-100 py-2">
              {t("nav.home")}
            </button>
            <button onClick={() => scrollToSection("services")} className="hover:text-blue-100 py-2">
              {t("nav.services")}
            </button>
            <button onClick={() => scrollToSection("about")} className="hover:text-blue-100 py-2">
              {t("nav.about")}
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-blue-100 py-2">
              {t("nav.contact")}
            </button>
            <button className="custom-button mt-4">{t("nav.book")}</button>
          </div>
        </div>
      </div>
    </header>
  )
}

