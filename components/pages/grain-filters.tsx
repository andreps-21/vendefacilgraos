"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useGrainStore } from "@/lib/store/grain-store"

export default function GrainFilters() {
  const [priceRange, setPriceRange] = useState([20, 150])
  const [quantityRange, setQuantityRange] = useState([100, 10000])
  const [selectedGrainTypes, setSelectedGrainTypes] = useState<string[]>([])
  
  const { setFilters, applyFilters } = useGrainStore()

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 space-y-6">
      {/* Location */}
      <div>
        <Label className="text-sm font-semibold text-gray-700 mb-3 block">Localização</Label>
        <div className="space-y-4">
          <div>
            <Select>
              <SelectTrigger className="w-full h-10 border-gray-300 focus:border-verde-campo focus:ring-verde-campo">
                <SelectValue placeholder="Selecione um estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="to">Tocantins</SelectItem>
                <SelectItem value="go">Goiás</SelectItem>
                <SelectItem value="mt">Mato Grosso</SelectItem>
                <SelectItem value="ms">Mato Grosso do Sul</SelectItem>
                <SelectItem value="pr">Paraná</SelectItem>
                <SelectItem value="rs">Rio Grande do Sul</SelectItem>
                <SelectItem value="mg">Minas Gerais</SelectItem>
                <SelectItem value="ba">Bahia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select>
              <SelectTrigger className="w-full h-10 border-gray-300 focus:border-verde-campo focus:ring-verde-campo">
                <SelectValue placeholder="Selecione uma cidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="palmas">Palmas</SelectItem>
                <SelectItem value="araguaina">Araguaína</SelectItem>
                <SelectItem value="gurupi">Gurupi</SelectItem>
                <SelectItem value="porto-nacional">Porto Nacional</SelectItem>
                <SelectItem value="sorriso">Sorriso</SelectItem>
                <SelectItem value="sinop">Sinop</SelectItem>
                <SelectItem value="primavera">Primavera do Leste</SelectItem>
                <SelectItem value="rio-verde">Rio Verde</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Grain Type */}
      <div>
        <Label className="text-sm font-semibold text-gray-700 mb-3 block">Tipo de Grão</Label>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="soja" 
              checked={selectedGrainTypes.includes("Soja")}
              onCheckedChange={(checked) => {
                if (checked) {
                  setSelectedGrainTypes([...selectedGrainTypes, "Soja"])
                } else {
                  setSelectedGrainTypes(selectedGrainTypes.filter(type => type !== "Soja"))
                }
              }}
            />
            <Label htmlFor="soja" className="text-sm">
              Soja
            </Label>
            <span className="text-xs text-gray-500 ml-auto">1,247</span>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="milho" 
              checked={selectedGrainTypes.includes("Milho")}
              onCheckedChange={(checked) => {
                if (checked) {
                  setSelectedGrainTypes([...selectedGrainTypes, "Milho"])
                } else {
                  setSelectedGrainTypes(selectedGrainTypes.filter(type => type !== "Milho"))
                }
              }}
            />
            <Label htmlFor="milho" className="text-sm">
              Milho
            </Label>
            <span className="text-xs text-gray-500 ml-auto">892</span>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="feijao" 
              checked={selectedGrainTypes.includes("Feijão")}
              onCheckedChange={(checked) => {
                if (checked) {
                  setSelectedGrainTypes([...selectedGrainTypes, "Feijão"])
                } else {
                  setSelectedGrainTypes(selectedGrainTypes.filter(type => type !== "Feijão"))
                }
              }}
            />
            <Label htmlFor="feijao" className="text-sm">
              Feijão
            </Label>
            <span className="text-xs text-gray-500 ml-auto">156</span>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="arroz" 
              checked={selectedGrainTypes.includes("Arroz")}
              onCheckedChange={(checked) => {
                if (checked) {
                  setSelectedGrainTypes([...selectedGrainTypes, "Arroz"])
                } else {
                  setSelectedGrainTypes(selectedGrainTypes.filter(type => type !== "Arroz"))
                }
              }}
            />
            <Label htmlFor="arroz" className="text-sm">
              Arroz
            </Label>
            <span className="text-xs text-gray-500 ml-auto">89</span>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="trigo" 
              checked={selectedGrainTypes.includes("Trigo")}
              onCheckedChange={(checked) => {
                if (checked) {
                  setSelectedGrainTypes([...selectedGrainTypes, "Trigo"])
                } else {
                  setSelectedGrainTypes(selectedGrainTypes.filter(type => type !== "Trigo"))
                }
              }}
            />
            <Label htmlFor="trigo" className="text-sm">
              Trigo
            </Label>
            <span className="text-xs text-gray-500 ml-auto">234</span>
          </div>
        </div>
      </div>

      {/* Price Range */}
      <div>
        <Label className="text-sm font-semibold text-gray-700 mb-3 block">Preço por Saca (R$)</Label>
        <div className="px-3 py-2 bg-gray-50 rounded-lg border">
          <Slider 
            value={priceRange} 
            onValueChange={setPriceRange} 
            max={200} 
            min={10} 
            step={5} 
            className="w-full mb-3" 
          />
          <div className="flex justify-between text-sm">
            <span className="font-medium text-verde-campo bg-white px-2 py-1 rounded shadow-sm">R$ {priceRange[0].toFixed(2)}</span>
            <span className="font-medium text-verde-campo bg-white px-2 py-1 rounded shadow-sm">R$ {priceRange[1].toFixed(2)}</span>
          </div>
          <div className="text-xs text-gray-500 text-center mt-2">
            Faixa selecionada: R$ {priceRange[0].toFixed(2)} - R$ {priceRange[1].toFixed(2)}
          </div>
        </div>
      </div>

      {/* Quantity Available */}
      <div>
        <Label className="text-sm font-semibold text-gray-700 mb-3 block">Quantidade Disponível (sacas)</Label>
        <div className="px-3 py-2 bg-gray-50 rounded-lg border">
          <Slider
            value={quantityRange}
            onValueChange={setQuantityRange}
            max={50000}
            min={50}
            step={100}
            className="w-full mb-3"
          />
          <div className="flex justify-between text-sm">
            <span className="font-medium text-verde-campo bg-white px-2 py-1 rounded shadow-sm">{quantityRange[0].toLocaleString()}</span>
            <span className="font-medium text-verde-campo bg-white px-2 py-1 rounded shadow-sm">{quantityRange[1].toLocaleString()}</span>
          </div>
          <div className="text-xs text-gray-500 text-center mt-2">
            Faixa selecionada: {quantityRange[0].toLocaleString()} - {quantityRange[1].toLocaleString()} sacas
          </div>
        </div>
      </div>

      {/* Quality */}
      <div>
        <Label className="text-sm font-semibold text-gray-700 mb-3 block">Qualidade</Label>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="premium" />
            <Label htmlFor="premium" className="text-sm">
              Premium
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="standard" />
            <Label htmlFor="standard" className="text-sm">
              Padrão
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="organico" />
            <Label htmlFor="organico" className="text-sm">
              Orgânico
            </Label>
          </div>
        </div>
      </div>

      {/* Delivery */}
      <div>
        <Label className="text-sm font-semibold text-gray-700 mb-3 block">Entrega</Label>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="retirada" />
            <Label htmlFor="retirada" className="text-sm">
              Retirada na fazenda
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="entrega" />
            <Label htmlFor="entrega" className="text-sm">
              Entrega disponível
            </Label>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <Button 
        onClick={() => {
          setFilters({
            priceRange,
            quantityRange,
            grainTypes: selectedGrainTypes,
            quality: selectedQuality,
            delivery: selectedDelivery
          })
          applyFilters()
        }}
        className="w-full h-12 bg-verde-campo hover:bg-amarelo-milho hover:text-preto-agricola text-white font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg"
      >
        BUSCAR GRÃOS
      </Button>
    </div>
  )
}
