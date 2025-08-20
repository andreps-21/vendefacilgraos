"use client"

import { useState } from "react"
import Image from "next/image"

interface PhotoGalleryProps {
  images: string[]
}

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Galeria de Fotos</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-lg hover:opacity-80 transition-opacity"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Foto ${index + 1} da propriedade`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Foto ampliada"
              width={800}
              height={600}
              className="object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
