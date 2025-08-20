import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"
import GrainDetails from "@/components/grain-details"
import PhotoGallery from "@/components/photo-gallery"
import ContactForm from "@/components/contact-form"
import LocationSection from "@/components/location-section"
import CTASection from "@/components/cta-section"
import WhatsAppFloat from "@/components/whatsapp-float"

const getGrainData = (slug: string) => {
  return {
    id: "soja-premium-mt-001",
    title: "Soja Premium - Safra 2024/25",
    pricePerBag: "R$ 185,00",
    producer: "Fazenda São João",
    location: "Sorriso, Mato Grosso",
    grainType: "Soja",
    variety: "M 5917 IPRO",
    quality: "Premium",
    quantity: "50.000 sacas",
    harvestDate: "Março 2024",
    delivery: "Disponível imediata",
    moisture: "12%",
    impurities: "1%",
    description:
      "Soja de alta qualidade da safra 2024/25, cultivada em solo de cerrado com tecnologia de ponta. Grão limpo, seco e armazenado adequadamente. Ideal para exportação ou processamento industrial. Fazenda certificada com boas práticas agrícolas e sustentabilidade ambiental.",
    images: [
      "/golden-grain-field.png",
      "/soybean-field-golden-harvest.png",
      "/corn-field-golden-kernels.png",
      "/bean-field-harvest.png",
      "/grain-storage-silos.png",
      "/harvesting-soybeans.png",
      "/grain-quality-test.png",
      "/farm-machinery-harvest.png",
      "/soybean-close-up.png",
      "/grain-truck-loading.png",
      "/grain-storage.png",
      "/soybean-harvest.png",
    ],
  }
}

export default function GrainPage({ params }: { params: { slug: string } }) {
  const grain = getGrainData(params.slug)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-4">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Comprar Grãos", href: "/graos" },
              { label: `${grain.grainType} - ${grain.producer}`, href: "#" },
            ]}
          />

          <div className="mt-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">
              {grain.grainType} à venda - {grain.location}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <GrainDetails grain={grain} />
                <PhotoGallery images={grain.images} />
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
