"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ContactSection() {
  const { t, language } = useLanguage()

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      text: "info@alsashield.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      text: "+968 1234 5678",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      text: "Seham Industrial Area, Oman",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className={language === "ar" ? "text-right" : ""}>
            <h2 className="text-2xl font-bold mb-6">{t("contact.title")}</h2>
            <p className="text-gray-600 mb-8">{t("contact.subtitle")}</p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 bg-gray-100 p-4 rounded-lg ${language === "ar" ? "flex-row-reverse" : ""}`}
                >
                  <div className="text-blue-600">{item.icon}</div>
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
            <div suppressHydrationWarning>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium text-gray-700 mb-1 ${language === "ar" ? "text-right" : ""}`}
                  >
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    suppressHydrationWarning
                    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${language === "ar" ? "text-right" : ""}`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium text-gray-700 mb-1 ${language === "ar" ? "text-right" : ""}`}
                  >
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    suppressHydrationWarning
                    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${language === "ar" ? "text-right" : ""}`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium text-gray-700 mb-1 ${language === "ar" ? "text-right" : ""}`}
                  >
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    suppressHydrationWarning
                    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${language === "ar" ? "text-right" : ""}`}
                    placeholder={t("contact.form.placeholder")}
                  ></textarea>
                </div>

                <div className={`flex items-center ${language === "ar" ? "justify-end" : ""}`}>
                  <input
                    type="checkbox"
                    id="terms"
                    suppressHydrationWarning
                    className={`mr-2 ${language === "ar" ? "order-2 ml-2 mr-0" : ""}`}
                  />
                  <label htmlFor="terms" className={`text-sm text-gray-600 ${language === "ar" ? "order-1" : ""}`}>
                    {t("contact.form.terms")}
                  </label>
                </div>

                <button type="submit" className="custom-button w-full">
                  {t("contact.form.submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

