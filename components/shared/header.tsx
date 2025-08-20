"use client"

import { Phone, Mail, Search } from "lucide-react"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"
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

export default function Header() {
  const pathname = usePathname()
  
  // Função para verificar se o link está ativo
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }
  
  return (
    <header>
      <div className="bg-verde-campo text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>contato@vendefacilgraos.com.br</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <button className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
                  <Phone className="h-4 w-4" />
                  <span>Receber uma ligação</span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
                <div className="bg-verde-campo p-6 text-white">
                  <DialogTitle className="text-2xl font-bold text-center text-white">
                    Solicitar Ligação
                  </DialogTitle>
                </div>
                
                <div className="space-y-6 p-6 max-h-[70vh] overflow-y-auto modal-scroll">
                  {/* Informações Pessoais */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                    />
                  </div>

                  {/* Assunto da Ligação */}
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto da Ligação *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o assunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vender-graos">Quero vender grãos</SelectItem>
                        <SelectItem value="comprar-graos">Quero comprar grãos</SelectItem>
                        <SelectItem value="parceria">Quero ser parceiro</SelectItem>
                        <SelectItem value="duvidas">Dúvidas sobre a plataforma</SelectItem>
                        <SelectItem value="suporte">Suporte técnico</SelectItem>
                        <SelectItem value="outros">Outros assuntos</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Melhor Horário */}
                  <div className="space-y-2">
                    <Label htmlFor="best-time">Melhor Horário para Ligação *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o horário" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manha">Manhã (8h às 12h)</SelectItem>
                        <SelectItem value="tarde">Tarde (13h às 17h)</SelectItem>
                        <SelectItem value="noite">Noite (18h às 20h)</SelectItem>
                        <SelectItem value="flexivel">Horário flexível</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Mensagem */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem (Opcional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Descreva brevemente o que você precisa ou sua dúvida..."
                      rows={3}
                    />
                  </div>

                  {/* Urgência */}
                  <div className="space-y-2">
                    <Label htmlFor="urgency">Nível de Urgência</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a urgência" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="baixa">Baixa - Pode aguardar</SelectItem>
                        <SelectItem value="media">Média - Em breve</SelectItem>
                        <SelectItem value="alta">Alta - Urgente</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Botões */}
                  <div className="flex justify-end space-x-3 pt-6">
                    <Button variant="outline" className="border-verde-campo text-verde-campo hover:bg-amarelo-milho hover:text-preto-agricola px-6 py-2 text-sm font-medium">
                      Cancelar
                    </Button>
                    <Button className="bg-verde-campo hover:bg-amarelo-milho hover:text-preto-agricola text-white px-6 py-2 text-sm font-medium">
                      Solicitar Ligação
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-sm py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              {/* Logo SVG - Maior e sem texto */}
              <Logo width={60} height={48} showText={false} className="flex-shrink-0" />
              
              {/* Texto da Marca separado */}
              <div className="ml-3 text-verde-campo font-bold text-2xl font-serif">
                VENDE FÁCIL
                <span className="text-sm block leading-none text-marrom-terra">GRÃOS</span>
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`transition-colors ${
                isActive("/") 
                  ? "text-verde-campo font-semibold" 
                  : "text-foreground hover:text-verde-campo"
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors ${
                isActive("/about") 
                  ? "text-verde-campo font-semibold" 
                  : "text-foreground hover:text-verde-campo"
              }`}
            >
              Quem Somos
            </Link>
            <Link 
              href="/buy/list" 
              className={`transition-colors ${
                isActive("/buy") 
                  ? "text-verde-campo font-semibold" 
                  : "text-foreground hover:text-verde-campo"
              }`}
            >
              Comprar Grãos
            </Link>
            <Link 
              href="/sell" 
              className={`transition-colors ${
                isActive("/sell") 
                  ? "text-verde-campo font-semibold" 
                  : "text-foreground hover:text-verde-campo"
              }`}
            >
              Vender Grãos
            </Link>
            <Link 
              href="/partner" 
              className={`transition-colors ${
                isActive("/partner") 
                  ? "text-verde-campo font-semibold" 
                  : "text-foreground hover:text-verde-campo"
              }`}
            >
              Seja Parceiro
            </Link>
            <Link 
              href="/contact" 
              className={`transition-colors ${
                isActive("/contact") 
                  ? "text-verde-campo font-semibold" 
                  : "text-foreground hover:text-verde-campo"
              }`}
            >
              Fale Conosco
            </Link>
          </div>

          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </nav>
    </header>
  )
}
