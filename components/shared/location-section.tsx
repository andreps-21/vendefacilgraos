export default function LocationSection() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Localização</h3>

      <div className="bg-gray-100 rounded-lg p-8 text-center text-gray-600">
        <p className="text-sm">
          Google Maps Platform rejected your request. This API project was not found. This API project may have been
          deleted or may not be authorized to use this API. You may need to enable the API or check the API key in the
          console.
        </p>
        <div className="mt-4 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Mapa não disponível</span>
        </div>
      </div>
    </div>
  )
}
