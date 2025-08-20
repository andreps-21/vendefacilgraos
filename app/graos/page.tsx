import { Suspense } from "react"
import Header from "@/components/header"
import Breadcrumb from "@/components/breadcrumb"
import GrainFilters from "@/components/grain-filters"
import GrainGrid from "@/components/grain-grid"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function GraosPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Grãos", href: "/graos" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        {/* Page Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="text-3xl font-bold text-gray-900 mt-4">Grãos Disponíveis</h1>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <aside className="w-80 flex-shrink-0">
              <Suspense fallback={<div>Carregando filtros...</div>}>
                <GrainFilters />
              </Suspense>
            </aside>

            {/* Grains Grid */}
            <div className="flex-1">
              <Suspense fallback={<div>Carregando grãos...</div>}>
                <GrainGrid />
              </Suspense>
            </div>
          </div>
        </div>
      </main>

      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
