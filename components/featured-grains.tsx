import Link from "next/link"
import { MapPin, Calendar } from "lucide-react"

export default function FeaturedGrains() {
  const grains = [
    {
      id: 1,
      title: "Soja Premium - 1000 sacas",
      location: "Sorriso, Mato Grosso",
      price: "R$ 85,00",
      unit: "por saca",
      image: "/soybean-field-golden-harvest.png",
      producer: "Fazenda São João",
      harvest: "Safra 2024",
      quality: "Tipo 1",
      slug: "soja-premium-1000-sacas-sorriso-mt",
    },
    {
      id: 2,
      title: "Milho Safrinha - 2500 sacas",
      location: "Rio Verde, Goiás",
      price: "R$ 42,00",
      unit: "por saca",
      image: "/corn-field-golden-kernels.png",
      producer: "Agropecuária Verde",
      harvest: "Safrinha 2024",
      quality: "Tipo 2",
      slug: "milho-safrinha-2500-sacas-rio-verde-go",
    },
    {
      id: 3,
      title: "Feijão Carioca - 500 sacas",
      location: "Cristalina, Goiás",
      price: "R$ 180,00",
      unit: "por saca",
      image: "/bean-field-harvest.png",
      producer: "Fazenda Cristal",
      harvest: "Safra 2024",
      quality: "Tipo 1",
      slug: "feijao-carioca-500-sacas-cristalina-go",
    },
    {
      id: 4,
      title: "Soja Convencional - 800 sacas",
      location: "Primavera do Leste, MT",
      price: "R$ 82,00",
      unit: "por saca",
      image: "/placeholder-f3noz.png",
      producer: "Fazenda Primavera",
      harvest: "Safra 2024",
      quality: "Tipo 2",
      slug: "soja-convencional-800-sacas-primavera-mt",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-marrom-terra mb-12">Grãos em Destaque</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {grains.map((grain) => (
            <div
              key={grain.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img src={grain.image || "/placeholder.svg"} alt={grain.title} className="w-full h-48 object-cover" />
              </div>

              <div className="p-4">
                <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{grain.location}</span>
                </div>

                <div className="mb-3">
                  <div className="text-2xl font-bold text-verde-campo mb-1">{grain.price}</div>
                  <div className="text-sm text-gray-600">{grain.unit}</div>
                </div>

                <h3 className="font-semibold text-marrom-terra mb-2 line-clamp-2">{grain.title}</h3>

                <div className="text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1 mb-1">
                    <Calendar className="w-3 h-3" />
                    <span>{grain.harvest}</span>
                  </div>
                  <div>Produtor: {grain.producer}</div>
                  <div>Qualidade: {grain.quality}</div>
                </div>

                <Link
                  href={`/grao/${grain.slug}`}
                  className="w-full bg-verde-campo hover:bg-amarelo-milho hover:text-preto-agricola text-white py-2 px-4 rounded-md font-medium transition-colors text-center block"
                >
                  Ver Detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
