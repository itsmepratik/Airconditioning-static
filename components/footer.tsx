"use client"

import Link from "next/link"
import { Fan } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2">
            <Fan className="h-6 w-6 flex-shrink-0" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold">Abdulkhaliq</span>
              <span className="text-sm font-bold">Abdulshakoor</span>
            </div>
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <button onClick={() => scrollToSection("home")} className="text-gray-600 hover:text-gray-900">
            Home
          </button>
          <button onClick={() => scrollToSection("services")} className="text-gray-600 hover:text-gray-900">
            Services
          </button>
          <button onClick={() => scrollToSection("about")} className="text-gray-600 hover:text-gray-900">
            About Us
          </button>
          <button onClick={() => scrollToSection("contact")} className="text-gray-600 hover:text-gray-900">
            Contact Us
          </button>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-4 mb-4 md:mb-0">
            <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-gray-900">
              Terms of Service
            </Link>
            <Link href="/cookie-settings" className="text-sm text-gray-600 hover:text-gray-900">
              Cookie Settings
            </Link>
          </div>

          <div className="text-sm text-gray-600">© 2023 AlsaShield. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

