"use client"

import { useLanguage } from "@/contexts/language-context"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => setLanguage("en")}
        className={`px-2 py-1 rounded transition-colors ${language === "en" ? "bg-white/20 font-medium" : "hover:bg-white/10"}`}
      >
        EN
      </button>
      <span className="text-white/50">|</span>
      <button
        onClick={() => setLanguage("ar")}
        className={`px-2 py-1 rounded transition-colors ${language === "ar" ? "bg-white/20 font-medium" : "hover:bg-white/10"}`}
      >
        AR
      </button>
    </div>
  )
}

