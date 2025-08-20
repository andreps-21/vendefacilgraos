import { Suspense } from "react"
import Header from "@/components/shared/header"
import Breadcrumb from "@/components/shared/breadcrumb"
import GrainFilters from "@/components/pages/grain-filters"
import GrainGrid from "@/components/pages/grain-grid"
import CTASection from "@/components/shared/cta-section"
import Footer from "@/components/shared/footer"
import WhatsAppFloat from "@/components/shared/whatsapp-float"

export default function GraosPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Comprar Grãos", href: "/buy/list" },
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
