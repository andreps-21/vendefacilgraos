"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function GrainFilters() {
  const [priceRange, setPriceRange] = useState([20, 150])
  const [quantityRange, setQuantityRange] = useState([100, 10000])

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 space-y-6">
      {/* Location */}
      <div>
        <Label className="text-sm font-semibold text-gray-700 mb-3 block">Localização</Label>
        <div className="space-y-3">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione um estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mt">Mato Grosso</SelectItem>
              <SelectItem value="go">Goiás</SelectItem>
              <SelectItem value="ms">Mato Grosso do Sul</SelectItem>
              <SelectItem value="pr">Paraná</SelectItem>
              <SelectItem value="rs">Rio Grande do Sul</SelectItem>
              <SelectItem value="ba">Bahia</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma cidade" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sorriso">Sorriso</SelectItem>
              <SelectItem value="sinop">Sinop</SelectItem>
              <SelectItem value="primavera">Primavera do Leste</SelectItem>
              <SelectItem value="rio-verde">Rio Verde</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Grain Type */}
      <div>
        <Label className="text-sm font-semibold text-gray-700 mb-3 block">Tipo de Grão</Label>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="soja" />
            <Label htmlFor="soja" className="text-sm">
              Soja
            </Label>
            <span className="text-xs text-gray-500 ml-auto">1,247</span>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="milho" />
            <Label htmlFor="milho" className="text-sm">
              Milho
            </Label>
            <span className="text-xs text-gray-500 ml-auto">892</span>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="feijao" />
            <Label htmlFor="feijao" className="text-sm">
              Feijão
            </Label>
            <span className="text-xs text-gray-500 ml-auto">156</span>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="arroz" />
            <Label htmlFor="arroz" className="text-sm">
              Arroz
            </Label>
            <span className="text-xs text-gray-500 ml-auto">89</span>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="trigo" />
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
        <div className="px-2">
          <Slider value={priceRange} onValueChange={setPriceRange} max={200} min={10} step={5} className="w-full" />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>R$ {priceRange[0]}</span>
            <span>R$ {priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Quantity Available */}
      <div>
        <Label className="text-sm font-semibold text-gray-700 mb-3 block">Quantidade Disponível (sacas)</Label>
        <div className="px-2">
          <Slider
            value={quantityRange}
            onValueChange={setQuantityRange}
            max={50000}
            min={50}
            step={100}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>{quantityRange[0].toLocaleString()}</span>
            <span>{quantityRange[1].toLocaleString()}</span>
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
      <Button className="w-full bg-verde-campo hover:bg-amarelo-milho hover:text-preto-agricola text-white transition-colors">BUSCAR</Button>
    </div>
  )
}
