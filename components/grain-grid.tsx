"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Truck } from "lucide-react"
import Link from "next/link"

const grains = [
  {
    id: 1,
    slug: "soja-premium-sorriso-mt",
    type: "Soja",
    quality: "Premium",
    price: 89.5,
    quantity: 5000,
    location: "Sorriso, MT",
    producer: "Fazenda São João",
    harvestDate: "Mar 2024",
    delivery: true,
    image: "/soybean-field-golden-harvest.png",
    description: "Soja de alta qualidade, colheita recente com excelente padrão de grãos.",
  },
  {
    id: 2,
    slug: "milho-safrinha-rio-verde-go",
    type: "Milho",
    quality: "Padrão",
    price: 45.8,
    quantity: 8500,
    location: "Rio Verde, GO",
    producer: "Agropecuária Cerrado",
    harvestDate: "Jul 2024",
    delivery: true,
    image: "/corn-field-golden-kernels.png",
    description: "Milho safrinha com ótima produtividade e qualidade garantida.",
  },
  {
    id: 3,
    slug: "feijao-carioca-primavera-mt",
    type: "Feijão",
    quality: "Premium",
    price: 125.0,
    quantity: 1200,
    location: "Primavera do Leste, MT",
    producer: "Fazenda Boa Vista",
    harvestDate: "Jun 2024",
    delivery: false,
    image: "/bean-field-harvest.png",
    description: "Feijão carioca tipo 1, grãos uniformes e sem defeitos.",
  },
  {
    id: 4,
    slug: "soja-organica-sinop-mt",
    type: "Soja",
    quality: "Orgânico",
    price: 110.0,
    quantity: 2800,
    location: "Sinop, MT",
    producer: "Fazenda Verde Vida",
    harvestDate: "Mar 2024",
    delivery: true,
    image: "/soybean-field-golden-harvest.png",
    description: "Soja orgânica certificada, produzida sem agrotóxicos.",
  },
  {
    id: 5,
    slug: "milho-pipoca-dourados-ms",
    type: "Milho",
    quality: "Premium",
    price: 78.9,
    quantity: 3500,
    location: "Dourados, MS",
    producer: "Cooperativa Sul",
    harvestDate: "Jul 2024",
    delivery: true,
    image: "/corn-field-golden-kernels.png",
    description: "Milho especial para pipoca, grãos selecionados e uniformes.",
  },
  {
    id: 6,
    slug: "arroz-irrigado-pelotas-rs",
    type: "Arroz",
    quality: "Premium",
    price: 95.5,
    quantity: 4200,
    location: "Pelotas, RS",
    producer: "Rizicultura Gaúcha",
    harvestDate: "Abr 2024",
    delivery: true,
    image: "/golden-grain-field.png",
    description: "Arroz irrigado tipo 1, grãos longos e de excelente qualidade.",
  },
]

export default function GrainGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const totalPages = Math.ceil(grains.length / itemsPerPage)

  const currentGrains = grains.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case "Premium":
        return "bg-milho-yellow text-terra-brown"
      case "Orgânico":
        return "bg-campo-green text-white"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div>
      {/* Results Header */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          Mostrando {currentGrains.length} de {grains.length} resultados
        </p>
        <select className="border rounded-lg px-3 py-2 text-sm">
          <option>Ordenar por: Mais recentes</option>
          <option>Menor preço</option>
          <option>Maior preço</option>
          <option>Maior quantidade</option>
        </select>
      </div>

      {/* Grains Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentGrains.map((grain) => (
          <div
            key={grain.id}
            className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative">
              <img
                src={grain.image || "/placeholder.svg"}
                alt={`${grain.type} - ${grain.producer}`}
                className="w-full h-48 object-cover"
              />
              <Badge className={`absolute top-3 left-3 ${getQualityColor(grain.quality)}`}>{grain.quality}</Badge>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-gray-900">{grain.type}</h3>
                <span className="text-2xl font-bold text-campo-green">
                  R$ {grain.price.toFixed(2)}
                  <span className="text-sm font-normal text-gray-500">/saca</span>
                </span>
              </div>

              <div className="flex items-center text-gray-600 text-sm mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                {grain.location}
              </div>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{grain.description}</p>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Produtor:</span>
                  <span className="font-medium">{grain.producer}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Quantidade:</span>
                  <span className="font-medium">{grain.quantity.toLocaleString()} sacas</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Colheita:</span>
                  <span className="font-medium flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {grain.harvestDate}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Entrega:</span>
                  <span
                    className={`font-medium flex items-center ${grain.delivery ? "text-campo-green" : "text-gray-500"}`}
                  >
                    <Truck className="w-3 h-3 mr-1" />
                    {grain.delivery ? "Disponível" : "Retirada"}
                  </span>
                </div>
              </div>

              <Link href={`/grao/${grain.slug}`}>
                <Button className="w-full bg-campo-green hover:bg-campo-green/90 text-white">Ver Detalhes</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-2 rounded-lg text-sm font-medium ${
              currentPage === page ? "bg-campo-green text-white" : "bg-white text-gray-700 border hover:bg-gray-50"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  )
}
