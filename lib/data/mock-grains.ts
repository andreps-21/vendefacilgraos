import { Grain } from '@/lib/store/grain-store'

export const mockGrains: Grain[] = [
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

// Função para buscar grão por slug
export function getGrainBySlug(slug: string): Grain | undefined {
  return mockGrains.find(grain => grain.slug === slug)
}

// Função para buscar todos os grãos
export function getAllGrains(): Grain[] {
  return mockGrains
}
