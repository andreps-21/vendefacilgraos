"use client"

import { useEffect } from "react"

import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Truck } from "lucide-react"
import Link from "next/link"
import { useGrainStore } from "@/lib/store/grain-store"
import { mockGrains } from "@/lib/data/mock-grains"

export default function GrainGrid() {
  const { 
    currentGrains, 
    totalPages, 
    currentPage, 
    setCurrentPage, 
    setGrains,
    filteredGrains,
    grains
  } = useGrainStore()

  // Inicializar dados mockados
  useEffect(() => {
    if (grains.length === 0) {
      setGrains(mockGrains)
    }
  }, [grains.length, setGrains])

  // Dados para mostrar (fallback para filteredGrains se currentGrains estiver vazio)
  const grainsToShow = currentGrains.length > 0 ? currentGrains : filteredGrains

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case "Premium":
        return "bg-amarelo-milho text-marrom-terra"
      case "Orgânico":
        return "bg-verde-campo text-white"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div>
      {/* Results Header */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          Mostrando {grainsToShow.length} de {filteredGrains.length} resultados
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
        {grainsToShow.length === 0 && (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500">Nenhum grão encontrado.</p>
          </div>
        )}
        {grainsToShow.map((grain) => (
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
                <span className="text-2xl font-bold text-verde-campo">
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
                    className={`font-medium flex items-center ${grain.delivery ? "text-verde-campo" : "text-gray-500"}`}
                  >
                    <Truck className="w-3 h-3 mr-1" />
                    {grain.delivery ? "Disponível" : "Retirada"}
                  </span>
                </div>
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

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-2 rounded-lg text-sm font-medium ${
              currentPage === page ? "bg-verde-campo text-white" : "bg-white text-gray-700 border hover:bg-gray-50"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  )
}
