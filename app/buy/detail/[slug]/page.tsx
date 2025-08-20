import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import Breadcrumb from "@/components/shared/breadcrumb"
import GrainDetails from "@/components/pages/grain-details"
import PhotoGallery from "@/components/shared/photo-gallery"
import ContactForm from "@/components/pages/contact-form"
import LocationSection from "@/components/shared/location-section"
import CTASection from "@/components/shared/cta-section"
import WhatsAppFloat from "@/components/shared/whatsapp-float"
import { getGrainBySlug } from "@/lib/data/mock-grains"

export default async function GrainPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const grain = getGrainBySlug(slug)

  if (!grain) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">
              Grão não encontrado
            </h1>
            <p className="text-gray-600">
              O grão que você está procurando não foi encontrado.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-4">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Comprar Grãos", href: "/buy/list" },
              { label: `${grain.type} - ${grain.producer}`, href: "#" },
            ]}
          />

          <div className="mt-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">
              {grain.type} à venda - {grain.location}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <GrainDetails grain={grain} />
                <PhotoGallery images={[grain.image]} />
                <LocationSection />
              </div>

              <div className="lg:col-span-1">
                <ContactForm />
              </div>
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
