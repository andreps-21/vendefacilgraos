"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function PropertyFilters() {
  const [priceRange, setPriceRange] = useState([580000, 154000000])
  const [areaRange, setAreaRange] = useState([0, 5000])
  const [areaUnit, setAreaUnit] = useState("hectares")
  const [maxDistance, setMaxDistance] = useState("100km")

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="space-y-6">
      {/* Location Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Localização</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="state">Estado</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="to">Tocantins</SelectItem>
                <SelectItem value="go">Goiás</SelectItem>
                <SelectItem value="mt">Mato Grosso</SelectItem>
                <SelectItem value="ms">Mato Grosso do Sul</SelectItem>
                <SelectItem value="ba">Bahia</SelectItem>
                <SelectItem value="mg">Minas Gerais</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="city">Cidade</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma cidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="novo-acordo">Novo Acordo</SelectItem>
                <SelectItem value="lagoa-tocantins">Lagoa do Tocantins</SelectItem>
                <SelectItem value="santa-rita">Santa Rita do Tocantins</SelectItem>
                <SelectItem value="dianopolis">Dianópolis</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="w-full bg-red-600 hover:bg-red-700">BUSCAR</Button>
        </CardContent>
      </Card>

      {/* Property Type Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Tipo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="fazenda" defaultChecked />
              <Label htmlFor="fazenda">Fazenda</Label>
            </div>
            <span className="text-sm text-gray-500">100</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="apartamento" />
              <Label htmlFor="apartamento">Apartamento</Label>
            </div>
            <span className="text-sm text-gray-500">1</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox id="casa" />
              <Label htmlFor="casa">Casa</Label>
            </div>
            <span className="text-sm text-gray-500">2</span>
          </div>
        </CardContent>
      </Card>

      {/* Price Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Preço</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={154000000}
            min={580000}
            step={100000}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm">
            <span>{formatPrice(priceRange[0])}</span>
            <span>até</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
        </CardContent>
      </Card>

      {/* Area Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Área</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup value={areaUnit} onValueChange={setAreaUnit} className="flex justify-between">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="m2" id="m2" />
              <Label htmlFor="m2" className="text-sm">
                m²
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="hectares" id="hectares" />
              <Label htmlFor="hectares" className="text-sm">
                Hectares
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="alq-goiano" id="alq-goiano" />
              <Label htmlFor="alq-goiano" className="text-sm">
                Alqueires Goiano
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="alq-paulista" id="alq-paulista" />
              <Label htmlFor="alq-paulista" className="text-sm">
                Alqueires Paulista
              </Label>
            </div>
          </RadioGroup>
          <Slider value={areaRange} onValueChange={setAreaRange} max={5000} min={0} step={10} className="w-full" />
          <div className="flex items-center justify-between text-sm">
            <span>De 0 até 0</span>
          </div>
        </CardContent>
      </Card>

      {/* Distance Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Distância máxima</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Select value={maxDistance} onValueChange={setMaxDistance}>
            <SelectTrigger>
              <SelectValue placeholder="Busque uma cidade..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="palmas">Palmas</SelectItem>
              <SelectItem value="goiania">Goiânia</SelectItem>
              <SelectItem value="brasilia">Brasília</SelectItem>
            </SelectContent>
          </Select>
          <RadioGroup value={maxDistance} onValueChange={setMaxDistance} className="flex justify-between">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="100km" id="100km" />
              <Label htmlFor="100km" className="text-sm">
                100km
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="200km" id="200km" />
              <Label htmlFor="200km" className="text-sm">
                200km
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="300km" id="300km" />
              <Label htmlFor="300km" className="text-sm">
                300km
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="400km" id="400km" />
              <Label htmlFor="400km" className="text-sm">
                400km
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="500km" id="500km" />
              <Label htmlFor="500km" className="text-sm">
                500km
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  )
}
