import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A Vende Fácil Grãos é uma plataforma especializada em conectar produtores rurais diretamente aos compradores de grãos. 
              Eliminamos intermediários desnecessários, garantindo transparência total e preços justos para quem produz no campo.
            </p>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="/buy/list" className="text-muted-foreground hover:text-accent transition-colors">
                  Comprar Grãos
                </a>
              </li>
              <li>
                <a href="/sell" className="text-muted-foreground hover:text-accent transition-colors">
                  Vender Grãos
                </a>
              </li>
              <li>
                <a href="/partner" className="text-muted-foreground hover:text-accent transition-colors">
                  Seja um Parceiro
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-muted-foreground">Telefone:</p>
                <p className="font-medium">+55 63 9120-8484</p>
              </div>
              <div>
                <p className="text-muted-foreground">E-mail:</p>
                <p className="font-medium">contato@vendefacilgraos.com.br</p>
              </div>
            </div>
          </div>

          {/* Central de Ajuda */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Central de Ajuda</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">Receba por email nossos conteúdos sobre grãos e mercado agrícola.</p>
            <div className="space-y-3">
              <Input type="text" placeholder="Nome" className="bg-background text-foreground" />
              <Input type="email" placeholder="E-mail" className="bg-background text-foreground" />
              <Button className="w-full bg-verde-campo hover:bg-amarelo-milho hover:text-preto-agricola text-white transition-colors">Cadastrar</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © Vende Fácil Grãos 2025. Todos os direitos reservados
          </p>
          <p className="text-sm text-muted-foreground mt-2">Política de Privacidade</p>
          <p className="text-sm text-muted-foreground mt-2">Desenvolvido por Gooding Solutions</p>
        </div>
      </div>
    </footer>
  )
}
