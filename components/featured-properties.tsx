import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const properties = [
  {
    id: 1,
    slug: "fazendao-400-alqueires-nova-roma-goias",
    title: "Fazendão de 400 alqueires às margens do Rio Paraná em Nova Roma-Go",
    location: "Nova Roma, Goiás",
    price: "R$ 40.000.000,00",
    description:
      "Fazenda de 400 alqueires à venda em Nova Roma-Goiás localizada às margens do Rio Paraná e da rodovia GO-...",
    formation: "Agricultura Pecuária",
    image: "/large-farm-river-aerial.png",
  },
  {
    id: 2,
    slug: "fazenda-extra-279-alqueires-tocantins",
    title: "Fazenda extra de 279 alqueires na região do Tocantins",
    location: "Novo Acordo, Tocantins",
    price: "R$ 27.900.000,00",
    description:
      "Localizada a 352 km da Capital Palmas sendo 42 km de estrada de chão na região do Novo Acordo-TO incluindo...",
    formation: "Agricultura Pecuária",
    image: "/farmland-cattle-crops.png",
  },
  {
    id: 3,
    slug: "fazenda-aparecida-rio-negro-tocantins",
    title: "Fazenda à venda em Aparecida do Rio Negro-To",
    location: "Aparecida do Rio Negro, Tocantins",
    price: "R$ 55.920.000,00",
    description:
      "Fazenda 660 Alqueires ou 3.245 Hectares Próximo à Palmas Dupla Modelo Fazenda com estrutura completa...",
    formation: "Agricultura Pecuária",
    image: "/modern-farm-infrastructure.png",
  },
  {
    id: 4,
    slug: "fazenda-720-alqueires-lagoa-tocantins",
    title: "Fazenda de 720 alqueires à venda no Tocantins",
    location: "Lagoa do Tocantins, Tocantins",
    price: "R$ 36.000.000,00",
    description:
      "Ref: Município de Lagoa do Tocantins 720 Alqueires | 3.484,80 hectares | 8.608 Acres Localização Privilegiada...",
    formation: "Pecuária Especializada",
    image: "/cattle-ranch-pastures.png",
  },
]

export function FeaturedProperties() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold font-serif text-center mb-12">Fazendas em Destaque</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary mb-2">{property.price}</div>
                <h3 className="font-semibold text-sm mb-2 line-clamp-2">{property.title}</h3>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-3">{property.description}</p>
                <div className="text-xs text-muted-foreground mb-3">
                  <strong>Formação:</strong> {property.formation}
                </div>
                <Link href={`/imovel/${property.slug}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-primary border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    Ver Detalhes
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
