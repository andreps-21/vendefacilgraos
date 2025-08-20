import Header from "@/components/shared/header"
import { HeroSection } from "@/components/shared/hero-section"
import { SearchForm } from "@/components/pages/search-form"
import FeaturedGrains from "@/components/pages/featured-grains"
import { PopularSearches } from "@/components/shared/popular-searches"
import CTASection from "@/components/shared/cta-section"
import Footer from "@/components/shared/footer"
import WhatsAppFloat from "@/components/shared/whatsapp-float"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SearchForm />
      <FeaturedGrains />
      <PopularSearches />
      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
