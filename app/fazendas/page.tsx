import { Suspense } from "react"
import Header from "@/components/header"
import Breadcrumb from "@/components/breadcrumb"
import PropertyFilters from "@/components/property-filters"
import PropertyGrid from "@/components/property-grid"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function FazendasPage() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Fazendas", href: "/fazendas" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        {/* Page Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <Breadcrumb items={breadcrumbItems} />
            <h1 className="text-3xl font-bold text-gray-900 mt-4">Fazendas</h1>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <aside className="w-80 flex-shrink-0">
              <Suspense fallback={<div>Carregando filtros...</div>}>
                <PropertyFilters />
              </Suspense>
            </aside>

            {/* Properties Grid */}
            <div className="flex-1">
              <Suspense fallback={<div>Carregando propriedades...</div>}>
                <PropertyGrid />
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
