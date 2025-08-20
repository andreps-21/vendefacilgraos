import { MapPin, Calendar, Package, Award, Truck, Droplets } from "lucide-react"

interface GrainDetailsProps {
  grain: {
    id: string
    title: string
    pricePerBag: string
    producer: string
    location: string
    grainType: string
    variety: string
    quality: string
    quantity: string
    harvestDate: string
    delivery: string
    moisture: string
    impurities: string
    description: string
  }
}

export default function GrainDetails({ grain }: GrainDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{grain.title}</h2>
        <div className="text-3xl font-bold text-verde-campo mb-4">{grain.pricePerBag}/saca</div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-marrom-terra" />
            <span className="text-gray-600">{grain.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Package className="w-4 h-4 text-marrom-terra" />
            <span className="text-gray-600">{grain.quantity}</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-marrom-terra" />
            <span className="text-gray-600">Qualidade {grain.quality}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-marrom-terra" />
            <span className="text-gray-600">Colheita {grain.harvestDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-marrom-terra" />
            <span className="text-gray-600">{grain.delivery}</span>
          </div>
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4 text-marrom-terra" />
            <span className="text-gray-600">Umidade {grain.moisture}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Produtor</h3>
          <p className="text-gray-600">{grain.producer}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Variedade</h3>
          <p className="text-gray-600">{grain.variety}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Especificações</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Umidade:</span> {grain.moisture}
            </div>
            <div>
              <span className="font-medium">Impurezas:</span> {grain.impurities}
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Descrição</h3>
          <p className="text-gray-600 leading-relaxed">{grain.description}</p>
        </div>
      </div>
    </div>
  )
}
