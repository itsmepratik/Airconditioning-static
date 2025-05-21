"use client"

import { Fan, Refrigerator, WashingMachine, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Fan className="h-10 w-10 text-blue-600" />,
      titleKey: "services.ac.title",
      descriptionKey: "services.ac.description",
    },
    {
      icon: <Refrigerator className="h-10 w-10 text-blue-600" />,
      titleKey: "services.fridge.title",
      descriptionKey: "services.fridge.description",
    },
    {
      icon: <WashingMachine className="h-10 w-10 text-blue-600" />,
      titleKey: "services.washing.title",
      descriptionKey: "services.washing.description",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-sm text-gray-500">{t("services.subtitle")}</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2">{t("services.title")}</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">{t("services.description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-white p-4 rounded-full mb-4 shadow-sm">{service.icon}</div>
              <h3 className="font-bold text-lg mb-3">{t(service.titleKey)}</h3>
              <p className="text-gray-600">{t(service.descriptionKey)}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button className="custom-button-outline flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>{t("services.callUs")}</span>
          </button>
          <button className="custom-button flex items-center gap-2">
            {t("services.bookNow")} <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

