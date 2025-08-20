import { Phone, Mail, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
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
            <Phone className="h-4 w-4" />
            <span>Receber uma ligação</span>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-sm py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="text-verde-campo font-bold text-2xl font-serif">
              VENDE FÁCIL
              <span className="text-sm block leading-none text-marrom-terra">GRÃOS</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-verde-campo transition-colors">
              Home
            </Link>
            <Link href="/quem-somos" className="text-foreground hover:text-verde-campo transition-colors">
              Quem Somos
            </Link>
            <Link href="/graos" className="text-foreground hover:text-verde-campo transition-colors">
              Comprar Grãos
            </Link>
            <Link href="/vender" className="text-foreground hover:text-verde-campo transition-colors">
              Vender Grãos
            </Link>
            <Link href="/corretor-parceiro" className="text-foreground hover:text-verde-campo transition-colors">
              Seja Parceiro
            </Link>
            <Link href="/fale-conosco" className="text-foreground hover:text-verde-campo transition-colors">
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
