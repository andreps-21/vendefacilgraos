interface PropertyDetailsProps {
  property: {
    title: string
    price: string
    location: string
    area: string
    pasture: string
    grains: string
    hectares: string
    description: string
  }
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{property.title}</h2>

      <div className="text-3xl font-bold text-red-600 mb-6">{property.price}</div>

      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
        <div className="flex items-center">
          <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
          {property.location}
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
          Área do Terreno: {property.area}
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
          {property.pasture}
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
          {property.grains}
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
          {property.hectares}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Descrição</h3>
        <p className="text-gray-700 leading-relaxed">{property.description}</p>
      </div>
    </div>
  )
}
