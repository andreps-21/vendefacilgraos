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
  // Mapeamento de dados baseado no slug
  const grainDataMap: Record<string, any> = {
    "soja-premium-1000-sacas-palmas-to": {
      id: "soja-premium-to-001",
      title: "Soja Premium - 1000 sacas",
      pricePerBag: "R$ 85,00",
      producer: "Fazenda São João",
      location: "Palmas, Tocantins",
      grainType: "Soja",
      variety: "M 5917 IPRO",
      quality: "Premium",
      quantity: "1.000 sacas",
      harvestDate: "Março 2024",
      delivery: "Disponível imediata",
      moisture: "12%",
      impurities: "1%",
      description:
        "Soja de alta qualidade da safra 2024/25, cultivada em solo de cerrado com tecnologia de ponta. Grão limpo, seco e armazenado adequadamente. Ideal para exportação ou processamento industrial. Fazenda certificada com boas práticas agrícolas e sustentabilidade ambiental.",
      images: [
        "/soybean-field-golden-harvest.png",
        "/soybean-harvest.png",
        "/soybean-close-up.png",
        "/golden-grain-field.png",
        "/grain-storage.png",
        "/grain-quality-test.png",
      ],
    },
    "milho-safrinha-2500-sacas-araguaina-to": {
      id: "milho-safrinha-to-001",
      title: "Milho Safrinha - 2500 sacas",
      pricePerBag: "R$ 42,00",
      producer: "Agropecuária Verde",
      location: "Araguaína, Tocantins",
      grainType: "Milho",
      variety: "AG 1051",
      quality: "Tipo 2",
      quantity: "2.500 sacas",
      harvestDate: "Julho 2024",
      delivery: "Disponível em 15 dias",
      moisture: "13%",
      impurities: "2%",
      description:
        "Milho safrinha de excelente qualidade, cultivado com tecnologia avançada em solo fértil do Tocantins. Grão seco adequadamente e armazenado em silos modernos. Ideal para ração animal e processamento industrial.",
      images: [
        "/corn-field-golden-kernels.png",
        "/vast-cornfield.png",
        "/golden-grain-field.png",
        "/grain-storage.png",
        "/grain-quality-test.png",
        "/grain-storage-silos.png",
      ],
    },
    "feijao-carioca-500-sacas-gurupi-to": {
      id: "feijao-carioca-to-001",
      title: "Feijão Carioca - 500 sacas",
      pricePerBag: "R$ 180,00",
      producer: "Fazenda Cristal",
      location: "Gurupi, Tocantins",
      grainType: "Feijão",
      variety: "Carioca",
      quality: "Tipo 1",
      quantity: "500 sacas",
      harvestDate: "Maio 2024",
      delivery: "Disponível imediata",
      moisture: "14%",
      impurities: "1%",
      description:
        "Feijão carioca de primeira qualidade, cultivado organicamente em solo rico do Tocantins. Grão limpo, seco e selecionado manualmente. Perfeito para consumo humano e comércio local.",
      images: [
        "/bean-field-harvest.png",
        "/golden-grain-field.png",
        "/grain-storage.png",
        "/grain-quality-test.png",
        "/grain-storage-silos.png",
        "/placeholder-f3noz.png",
      ],
    },
    "soja-convencional-800-sacas-porto-nacional-to": {
      id: "soja-convencional-to-001",
      title: "Soja Convencional - 800 sacas",
      pricePerBag: "R$ 82,00",
      producer: "Fazenda Primavera",
      location: "Porto Nacional, Tocantins",
      grainType: "Soja",
      variety: "BRS 1010 IPRO",
      quality: "Tipo 2",
      quantity: "800 sacas",
      harvestDate: "Março 2024",
      delivery: "Disponível em 30 dias",
      moisture: "13%",
      impurities: "2%",
      description:
        "Soja convencional de boa qualidade, cultivada com práticas sustentáveis no Tocantins. Grão seco e armazenado adequadamente. Ideal para processamento industrial e exportação.",
      images: [
        "/soybean-field-golden-harvest.png",
        "/soybean-harvest.png",
        "/golden-grain-field.png",
        "/grain-storage.png",
        "/grain-quality-test.png",
        "/grain-storage-silos.png",
      ],
    },
  }

  // Retorna dados específicos baseados no slug ou dados padrão
  return grainDataMap[slug] || {
    id: "grain-default-001",
    title: "Grão Disponível",
    pricePerBag: "R$ 0,00",
    producer: "Produtor",
    location: "Localização",
    grainType: "Grão",
    variety: "Variedade",
    quality: "Qualidade",
    quantity: "Quantidade",
    harvestDate: "Data da Safra",
    delivery: "Entrega",
    moisture: "0%",
    impurities: "0%",
    description: "Descrição do grão disponível para venda.",
    images: [
      "/golden-grain-field.png",
      "/soybean-field-golden-harvest.png",
      "/corn-field-golden-kernels.png",
      "/bean-field-harvest.png",
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
