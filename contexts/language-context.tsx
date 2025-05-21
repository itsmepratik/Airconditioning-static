"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ar"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About Us",
    "nav.contact": "Contact Us",
    "nav.book": "Book Now",

    // Hero Section
    "hero.title.part1": "Reliable Air Conditioning Services",
    "hero.title.part2": "Across Oman",
    "hero.description":
      "Saham's premier air conditioning specialists providing expert installation, maintenance, and repair services for residential and commercial properties. With over 10 years of experience, we ensure your cooling systems operate efficiently in Oman's challenging climate.",
    "hero.callNow": "Call Now",
    "hero.bookAppointment": "Book Appointment",

    // Services Section
    "services.title": "Your Trusted Partner for Home Comfort",
    "services.subtitle": "Services",
    "services.description":
      "At AlsaShield, we specialize in air conditioning repair, ensuring your systems run efficiently. We also offer expert repair services for refrigerators and washing machines.",
    "services.ac.title": "Expert Air Conditioning Repair Services",
    "services.ac.description": "Keep your environment comfortable with our reliable AC repair.",
    "services.fridge.title": "Professional Refrigerator Repair You Can Trust",
    "services.fridge.description": "Our technicians ensure your refrigerator operates smoothly.",
    "services.washing.title": "Dependable Washing Machine Repair Services Available",
    "services.washing.description": "We provide fast and reliable washing machine repairs.",
    "services.callUs": "Call Us",
    "services.bookNow": "Book Now",

    // Contact Section
    "contact.title": "Get in Touch",
    "contact.subtitle": "We're here to assist you with your needs.",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.terms": "I agree to Terms",
    "contact.form.submit": "Submit",
    "contact.form.placeholder": "Enter your message...",

    // Testimonials
    "testimonials.title": "Customer testimonials",
  },
  ar: {
    // Navbar
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.about": "من نحن",
    "nav.contact": "اتصل بنا",
    "nav.book": "احجز الآن",

    // Hero Section
    "hero.title.part1": "خدمات تكييف الهواء الموثوقة",
    "hero.title.part2": "في جميع أنحاء عمان",
    "hero.description":
      "متخصصو تكييف الهواء الرائدون في صحم يقدمون خدمات التركيب والصيانة والإصلاح للعقارات السكنية والتجارية. مع أكثر من 10 سنوات من الخبرة، نضمن تشغيل أنظمة التبريد الخاصة بك بكفاءة في مناخ عمان الصعب.",
    "hero.callNow": "اتصل الآن",
    "hero.bookAppointment": "حجز موعد",

    // Services Section
    "services.title": "شريكك الموثوق لراحة المنزل",
    "services.subtitle": "الخدمات",
    "services.description":
      "في الساشيلد، نحن متخصصون في إصلاح أجهزة تكييف الهواء، مما يضمن تشغيل أنظمتك بكفاءة. نحن نقدم أيضًا خدمات إصلاح متخصصة للثلاجات وغسالات الملابس.",
    "services.ac.title": "خدمات إصلاح تكييف الهواء المتخصصة",
    "services.ac.description": "حافظ على بيئتك مريحة مع خدمة إصلاح مكيفات الهواء الموثوقة لدينا.",
    "services.fridge.title": "إصلاح الثلاجات الاحترافي الذي يمكنك الوثوق به",
    "services.fridge.description": "يضمن فنيونا تشغيل ثلاجتك بسلاسة.",
    "services.washing.title": "خدمات إصلاح غسالات الملابس الموثوقة متوفرة",
    "services.washing.description": "نحن نقدم إصلاحات سريعة وموثوقة لغسالات الملابس.",
    "services.callUs": "اتصل بنا",
    "services.bookNow": "احجز الآن",

    // Contact Section
    "contact.title": "تواصل معنا",
    "contact.subtitle": "نحن هنا لمساعدتك في تلبية احتياجاتك.",
    "contact.form.name": "الاسم",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.message": "الرسالة",
    "contact.form.terms": "أوافق على الشروط",
    "contact.form.submit": "إرسال",
    "contact.form.placeholder": "أدخل رسالتك...",

    // Testimonials
    "testimonials.title": "آراء العملاء",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  // Function to translate text
  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  // Set direction based on language
  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

