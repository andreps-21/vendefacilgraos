import Header from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SearchForm } from "@/components/search-form"
import FeaturedGrains from "@/components/featured-grains"
import { PopularSearches } from "@/components/popular-searches"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

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
    </main>
  )
}
