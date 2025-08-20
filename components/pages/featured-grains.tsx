import Link from "next/link"
import { MapPin, Calendar } from "lucide-react"
import { mockGrains } from "@/lib/data/mock-grains"

export default function FeaturedGrains() {
  // Usar apenas os primeiros 4 grãos dos dados mockados
  const grains = mockGrains.slice(0, 4).map(grain => ({
    id: grain.id,
    title: `${grain.type} ${grain.quality} - ${grain.quantity.toLocaleString()} sacas`,
    location: grain.location,
    price: `R$ ${grain.price.toFixed(2).replace('.', ',')}`,
    unit: "por saca",
    image: grain.image,
    producer: grain.producer,
    harvest: grain.harvestDate,
    quality: grain.quality,
    slug: grain.slug,
  }))

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
                  href={`/buy/detail/${grain.slug}`}
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
