import Header from "@/components/header"
import Footer from "@/components/footer"
import Breadcrumb from "@/components/breadcrumb"
import PropertyDetails from "@/components/property-details"
import PhotoGallery from "@/components/photo-gallery"
import ContactForm from "@/components/contact-form"
import LocationSection from "@/components/location-section"
import CTASection from "@/components/cta-section"
import WhatsAppFloat from "@/components/whatsapp-float"

// Mock data - in a real app, this would come from a database
const getPropertyData = (slug: string) => {
  return {
    id: "91553",
    title: "Fazenda extra de 279 alqueires à venda no Tocantins",
    price: "R$ 27.900.000,00",
    location: "Novo Acordo, Tocantins",
    area: "279 alqueires",
    pasture: "0 Alqueires Pastilha",
    grains: "0 Alqueires Grãos",
    hectares: "0 Hectares",
    description:
      "Localizada a 252 kms da Capital Palmas sendo 42 kms de estrada de chão na região de Novo Acordo-TO (cidade mais próxima). Terra muito boa, argilosa com 600 hectares em pastagem que já foi terceira podendo chegar de 740 hectares de pastagem. Tem uma casa sede, galpão para máquinas de 2.000 m², curral e muito mais. Área excelente para lavoura com grande projeção de produção, região de safra e safrinha com chuva variando de 1.800 a 2.000 milímetros média anual.",
    images: [
      "/tocantins-farm-aerial.png",
      "/pastagem-fazenda-tocantins.png",
      "/rural-farm-road.png",
      "/cattle-grazing-farm.png",
      "/rural-farmhouse.png",
      "/fazenda-galpao-tocantins.png",
      "/soja-fazenda.png",
      "/cattle-pen-farm.png",
      "/panoramic-farm-view.png",
      "/fazenda-acesso.png",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
  }
}

export default function PropertyPage({ params }: { params: { slug: string } }) {
  const property = getPropertyData(params.slug)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-4">
        <div className="container mx-auto px-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Comprar", href: "/comprar" },
              { label: "Fazenda à venda Novo Acordo,Tocantins", href: "#" },
            ]}
          />

          <div className="mt-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">Fazenda à venda Novo Acordo,Tocantins</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <PropertyDetails property={property} />
                <PhotoGallery images={property.images} />
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
