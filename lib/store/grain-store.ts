import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

// Tipos para os dados
export interface Grain {
  id: number
  slug: string
  type: string
  quality: string
  price: number
  quantity: number
  location: string
  producer: string
  harvestDate: string
  delivery: boolean
  image: string
  description: string
}

export interface GrainFilters {
  state?: string
  city?: string
  grainTypes?: string[]
  priceRange?: [number, number]
  quantityRange?: [number, number]
  quality?: string[]
  delivery?: boolean[]
}

export interface GrainStore {
  // Estado
  grains: Grain[]
  filteredGrains: Grain[]
  filters: GrainFilters
  currentPage: number
  itemsPerPage: number
  isLoading: boolean
  error: string | null
  
  // Ações
  setGrains: (grains: Grain[]) => void
  setFilters: (filters: Partial<GrainFilters>) => void
  resetFilters: () => void
  setCurrentPage: (page: number) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  
  // Computed values
  totalPages: number
  currentGrains: Grain[]
  applyFilters: () => void
}

// Estado inicial
const initialState = {
  grains: [],
  filteredGrains: [],
  filters: {},
  currentPage: 1,
  itemsPerPage: 6,
  isLoading: false,
  error: null,
}

export const useGrainStore = create<GrainStore>()(
  devtools(
    (set, get) => ({
      ...initialState,
      
      // Setters
      setGrains: (grains) => {
        set({ 
          grains, 
          filteredGrains: grains,
          currentPage: 1 // Garantir que começa na primeira página
        })
      },
      setFilters: (newFilters) => set((state) => ({
        filters: { ...state.filters, ...newFilters },
        currentPage: 1, // Reset para primeira página ao filtrar
      })),
      resetFilters: () => set({ filters: {}, currentPage: 1 }),
      setCurrentPage: (page) => set({ currentPage: page }),
      setLoading: (loading) => set({ isLoading: loading }),
      setError: (error) => set({ error }),
      
      // Computed values
      get totalPages() {
        const { filteredGrains, itemsPerPage } = get()
        return Math.ceil(filteredGrains.length / itemsPerPage)
      },
      
      get currentGrains() {
        const { filteredGrains, currentPage, itemsPerPage } = get()
        const start = (currentPage - 1) * itemsPerPage
        const end = start + itemsPerPage
        return filteredGrains.slice(start, end)
      },
      
      // Aplicar filtros
      applyFilters: () => {
        const { grains, filters } = get()
        
        // Se não há filtros aplicados, mostrar todos os grãos
        if (!filters || Object.keys(filters).length === 0) {
          set({ 
            filteredGrains: grains, 
            currentPage: 1 
          })
          return
        }
        
        let filtered = [...grains]
        
        // Filtro por estado
        if (filters.state) {
          filtered = filtered.filter(grain => 
            grain.location.toLowerCase().includes(filters.state!.toLowerCase())
          )
        }
        
        // Filtro por cidade
        if (filters.city) {
          filtered = filtered.filter(grain => 
            grain.location.toLowerCase().includes(filters.city!.toLowerCase())
          )
        }
        
        // Filtro por tipo de grão
        if (filters.grainTypes && filters.grainTypes.length > 0) {
          filtered = filtered.filter(grain => 
            filters.grainTypes!.includes(grain.type)
          )
        }
        
        // Filtro por preço
        if (filters.priceRange && filters.priceRange.length === 2) {
          const [min, max] = filters.priceRange
          filtered = filtered.filter(grain => 
            grain.price >= min && grain.price <= max
          )
        }
        
        // Filtro por quantidade
        if (filters.quantityRange && filters.quantityRange.length === 2) {
          const [min, max] = filters.quantityRange
          filtered = filtered.filter(grain => 
            grain.quantity >= min && grain.quantity <= max
          )
        }
        
        // Filtro por qualidade
        if (filters.quality && filters.quality.length > 0) {
          filtered = filtered.filter(grain => 
            filters.quality!.includes(grain.quality)
          )
        }
        
        // Filtro por entrega
        if (filters.delivery && filters.delivery.length > 0) {
          filtered = filtered.filter(grain => 
            filters.delivery!.includes(grain.delivery)
          )
        }
        
        set({ 
          filteredGrains: filtered, 
          currentPage: 1 // Reset para primeira página
        })
      },
    }),
    {
      name: 'grain-store',
    }
  )
)
