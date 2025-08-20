"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const properties = [
  {
    id: 1,
    slug: "fazenda-extra-de-279-alqueires-venda-no-tocantins",
    title: "Fazenda à venda no Tocantins",
    price: 23000000,
    location: "Ponte Alta do Tocantins, Tocantins",
    description:
      "Fazenda localizada a 252 km da Capital Palmas sendo 42 kms de estrada de chão na região de Novo Acordo-TO (cidade mais próxima). Terra muito boa, argilosa com 600 hectares em pastagem que já foi terceira podendo chegar de 740 hectares de pastagem. Fazenda com casa sede, galpão para máquinas de 2.000 m2, curral e muito mais. Área excelente para lavoura com grande projeção de produção, região de safra e safrinha com chuva variando de 1.800 a 2.000 milímetros média anual.",
    formation: "Agricultura/Pecuária",
    image: "/tocantins-farm-aerial.png",
  },
  {
    id: 2,
    slug: "fazenda-de-720-alqueires-venda-tocantins",
    title: "Fazenda de 720 alqueires à venda no Tocantins",
    price: 36000000,
    location: "Lagoa do Tocantins, Tocantins",
    description:
      "Ref.: Município de lagoa do Tocantins 720 Alqueires ( 3.484,80 hectares ) 1.650 hectares em pastos. Viage Dicionário...",
    formation: "Agricultura/Pecuária",
    image: "/pastagem-fazenda-tocantins.png",
  },
  {
    id: 3,
    slug: "fazenda-de-1000-alqueires-venda-parana",
    title: "Fazenda de 1.000 alqueires à venda em Paraná-TO",
    price: 25000000,
    location: "Paraná, Tocantins",
    description:
      'Fazenda AS MARGENS DO RIO TOCANTINS. * Fazenda composta por: 1.006 "ha" ou 4.660,06 "ha" * SEDE: 3 matrículas...',
    formation: "Agricultura/Pecuária",
    image: "/fazenda-parana-tocantins.png",
  },
  {
    id: 4,
    slug: "fazenda-venda-santa-rita-tocantins",
    title: "Fazenda à venda em Santa Rita do Tocantins",
    price: 20000000,
    location: "Santa Rita do Tocantins, Tocantins",
    description:
      "Fazenda localizada em Santa Rita do Tocantins. Vizinha de lavoura, região de safra e safrinha. Área total 641...",
    formation: "Agricultura/Pecuária",
    image: "/santa-rita-fazenda.png",
  },
  {
    id: 5,
    slug: "fazenda-venda-tocantins-dianopolis",
    title: "Fazenda à venda no Tocantins",
    price: 25000000,
    location: "Dianópolis, Tocantins",
    description:
      "486 Alqueires - Tocantins (2.351 hectares) Fazenda localizada na Região Sudeste de Preto Aericido para Plantio em 50% d...",
    formation: "Agricultura/Pecuária",
    image: "/dianopolis-fazenda.png",
  },
  {
    id: 6,
    slug: "fazenda-agricola-goias",
    title: "Fazenda agrícola em Goiás",
    price: 18000000,
    location: "São Miguel do Araguaia, Goiás",
    description:
      "Área total: 700 alqueires (484 ha) Com 50 alqueires de mata, 650 alqueires de safra, via pra quarta safra Pode abrir m...",
    formation: "Agricultura/Pecuária",
    image: "/goias-fazenda-agricola.png",
  },
]

export default function PropertyGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 17

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const renderPagination = () => {
    const pages = []
    const maxVisiblePages = 12

    for (let i = 1; i <= Math.min(maxVisiblePages, totalPages); i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-8 h-8 rounded-full text-sm font-medium ${
            i === currentPage ? "bg-red-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {i}
        </button>,
      )
    }

    if (totalPages > maxVisiblePages) {
      pages.push(
        <span key="ellipsis" className="text-gray-500">
          ...
        </span>,
      )
      pages.push(
        <button
          key={totalPages}
          onClick={() => setCurrentPage(totalPages)}
          className="w-8 h-8 rounded-full text-sm font-medium bg-white text-gray-700 hover:bg-gray-100"
        >
          {totalPages}
        </button>,
      )
    }

    return pages
  }

  return (
    <div className="space-y-8">
      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="text-2xl font-bold text-red-600">{formatPrice(property.price)}</div>
                <h3 className="font-semibold text-gray-900 line-clamp-2">{property.title}</h3>
                <p className="text-sm text-gray-600">{property.location}</p>
                <p className="text-sm text-gray-700 line-clamp-3">{property.description}</p>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-medium text-gray-900">Formação</span>
                    <p className="text-sm text-gray-600">{property.formation}</p>
                  </div>
                </div>
                <Link href={`/imovel/${property.slug}`}>
                  <Button className="w-full bg-red-600 hover:bg-red-700">Ver Detalhes</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2">{renderPagination()}</div>
    </div>
  )
}
