import HeroSection from "@/components/hero-section"
import ComfortSection from "@/components/comfort-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import WhatsAppWidget from "@/components/whatsapp-widget"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <ComfortSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <TestimonialsSection />
      <section id="contact">
        <ContactSection />
      </section>
      <WhatsAppWidget />
    </main>
  )
}

