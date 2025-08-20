"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function CTASection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="bg-verde-campo text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-serif mb-4">Precisa vender seus grãos?</h2>
        <p className="text-lg mb-8 opacity-90">Conectamos você diretamente aos melhores compradores do mercado, sem intermediários e com preços justos.</p>
        
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="secondary" size="lg" className="bg-white text-verde-campo hover:bg-white/90">
              Cadastrar Grãos →
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center text-verde-campo">
                Cadastrar Grãos para Venda
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6 py-4">
              {/* Informações Básicas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="grain-type">Tipo de Grão *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="soja">Soja</SelectItem>
                      <SelectItem value="milho">Milho</SelectItem>
                      <SelectItem value="feijao">Feijão</SelectItem>
                      <SelectItem value="arroz">Arroz</SelectItem>
                      <SelectItem value="trigo">Trigo</SelectItem>
                      <SelectItem value="sorgo">Sorgo</SelectItem>
                      <SelectItem value="girassol">Girassol</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantidade (Sacas) *</Label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="Ex: 1000"
                    min="1"
                  />
                </div>
              </div>

              {/* Localização */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="state">Estado *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o estado" />
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
                
                <div className="space-y-2">
                  <Label htmlFor="city">Cidade *</Label>
                  <Input
                    id="city"
                    placeholder="Digite a cidade"
                  />
                </div>
              </div>

              {/* Preço e Qualidade */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Preço por Saca (R$) *</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="Ex: 85,00"
                    min="0"
                    step="0.01"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="quality">Qualidade *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a qualidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tipo1">Tipo 1</SelectItem>
                      <SelectItem value="tipo2">Tipo 2</SelectItem>
                      <SelectItem value="tipo3">Tipo 3</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                      <SelectItem value="convencional">Convencional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Safra e Disponibilidade */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="harvest">Safra *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a safra" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2026">2026</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="availability">Disponibilidade *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione a disponibilidade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="imediata">Imediata</SelectItem>
                      <SelectItem value="15dias">15 dias</SelectItem>
                      <SelectItem value="30dias">30 dias</SelectItem>
                      <SelectItem value="60dias">60 dias</SelectItem>
                      <SelectItem value="90dias">90 dias</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Informações Adicionais */}
              <div className="space-y-2">
                <Label htmlFor="description">Descrição Adicional</Label>
                <Textarea
                  id="description"
                  placeholder="Informações sobre armazenamento, certificações, origem, etc."
                  rows={3}
                />
              </div>

              {/* Contato */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Nome do Contato *</Label>
                  <Input
                    id="contact-name"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Telefone *</Label>
                  <Input
                    id="contact-phone"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">E-mail</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <Button 
                variant="outline" 
                className="border-verde-campo text-verde-campo hover:bg-amarelo-milho hover:text-preto-agricola"
                onClick={() => setIsOpen(false)}
              >
                Cancelar
              </Button>
              <Button className="bg-verde-campo hover:bg-amarelo-milho hover:text-preto-agricola text-white">
                Enviar Pedido de Cadastro
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
