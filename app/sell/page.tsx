"use client"

import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import CTASection from "@/components/shared/cta-section"
import WhatsAppFloat from "@/components/shared/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Package, Users, Shield, Truck, TrendingUp, Star } from "lucide-react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function VenderPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenSecond, setIsOpenSecond] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
            Venda seus grãos com <span className="text-verde-campo">agilidade e transparência</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Conectamos você diretamente aos melhores compradores do mercado, sem intermediários e com preços justos.
          </p>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-verde-campo hover:bg-amarelo-milho hover:text-preto-agricola text-white px-8 py-3 transition-colors">
                Cadastrar Grãos
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
              <div className="bg-verde-campo p-6 text-white">
                <DialogTitle className="text-2xl font-bold text-center text-white">
                  Cadastrar Grãos para Venda
                </DialogTitle>
              </div>
              
              <div className="space-y-6 p-4">
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

                {/* Botões */}
                <div className="flex justify-end space-x-3 pt-6">
                  <Button 
                    variant="outline" 
                    size="default"
                    className="border-verde-campo text-verde-campo hover:bg-amarelo-milho hover:text-preto-agricola px-6 py-2 text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button 
                    size="default"
                    className="bg-verde-campo hover:bg-amarelo-milho hover:text-preto-agricola text-white px-6 py-2 text-sm font-medium"
                  >
                    Cadastrar Grãos
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Como funciona a venda de grãos na Vende Fácil Grãos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Processo simples, rápido e transparente para conectar produtores aos melhores compradores do mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-verde-campo text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Cadastre seus grãos
              </h3>
              <p className="text-muted-foreground text-sm">
                Informe o tipo, quantidade, qualidade, preço e localização dos seus grãos. Processo 100% digital e gratuito.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-verde-campo text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Alcance compradores qualificados</h3>
              <p className="text-muted-foreground text-sm">
                Sua oferta é exibida para milhares de compradores certificados em todo o Brasil.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-verde-campo text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Negociação segura</h3>
              <p className="text-muted-foreground text-sm">
                Conectamos você diretamente ao comprador, com toda a segurança e transparência necessárias.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-verde-campo text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Venda realizada
              </h3>
              <p className="text-muted-foreground text-sm">
                Após a negociação, você recebe o pagamento e organiza a entrega dos grãos ao comprador.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Dialog open={isOpenSecond} onOpenChange={setIsOpenSecond}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-verde-campo hover:bg-amarelo-milho hover:text-preto-agricola text-white px-8 py-3 transition-colors">
                  Começar a vender
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
                <div className="bg-verde-campo p-6 text-white">
                  <DialogTitle className="text-2xl font-bold text-center text-white">
                    Cadastrar Grãos para Venda
                  </DialogTitle>
                </div>
                
                <div className="space-y-6 p-4">
                  {/* Informações Básicas */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="grain-type-2">Tipo de Grão *</Label>
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
                      <Label htmlFor="quantity-2">Quantidade (Sacas) *</Label>
                      <Input
                        id="quantity-2"
                        type="number"
                        placeholder="Ex: 1000"
                        min="1"
                      />
                    </div>
                  </div>

                  {/* Localização */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="state-2">Estado *</Label>
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
                      <Label htmlFor="city-2">Cidade *</Label>
                      <Input
                        id="city-2"
                        placeholder="Digite a cidade"
                      />
                    </div>
                  </div>

                  {/* Preço e Qualidade */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="price-2">Preço por Saca (R$) *</Label>
                      <Input
                        id="price-2"
                        type="number"
                        placeholder="Ex: 85,00"
                        min="0"
                        step="0.01"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="quality-2">Qualidade *</Label>
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
                      <Label htmlFor="harvest-2">Safra *</Label>
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
                      <Label htmlFor="availability-2">Disponibilidade *</Label>
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
                    <Label htmlFor="description-2">Descrição Adicional</Label>
                    <Textarea
                      id="description-2"
                      placeholder="Informações sobre armazenamento, certificações, origem, etc."
                      rows={3}
                    />
                  </div>

                  {/* Contato */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name-2">Nome do Contato *</Label>
                      <Input
                        id="contact-name-2"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone-2">Telefone *</Label>
                      <Input
                        id="contact-phone-2"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email-2">E-mail</Label>
                    <Input
                      id="contact-email-2"
                      type="email"
                      placeholder="seu@email.com"
                    />
                  </div>

                  {/* Botões */}
                  <div className="flex justify-end space-x-3 pt-6">
                    <Button 
                      variant="outline" 
                      size="default"
                      className="border-verde-campo text-verde-campo hover:bg-amarelo-milho hover:text-preto-agricola px-6 py-2 text-sm font-medium"
                      onClick={() => setIsOpenSecond(false)}
                    >
                      Cancelar
                    </Button>
                    <Button 
                      size="default"
                      className="bg-verde-campo hover:bg-amarelo-milho hover:text-preto-agricola text-white px-6 py-2 text-sm font-medium"
                  >
                      Cadastrar Grãos
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            Por que escolher a Vende Fácil Grãos?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Vantagens exclusivas para produtores que querem maximizar seus lucros na venda de grãos.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-verde-campo text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Preços Justos</h3>
              <p className="text-sm text-muted-foreground">Sem intermediários, você recebe o valor real pelo seu produto.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-verde-campo text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Transparência Total</h3>
              <p className="text-sm text-muted-foreground">Processo claro e sem surpresas, do cadastro até a venda.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-verde-campo text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Compradores Qualificados</h3>
              <p className="text-sm text-muted-foreground">Acesso a uma rede de compradores certificados e confiáveis.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
