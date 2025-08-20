import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A Real Fazendas é muito mais que uma imobiliária de imóveis rurais e uma empresa de soluções para que os
              mais diversos tipos de investidores encontrem as melhores oportunidades de profissionais com
              especialidades interdisciplinares contando em seu quadro pessoal para assessoria comercial, fiscal,
              contábil, jurídica e agronômica.
            </p>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Fazendas
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Vender Imóvel
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Seja um Corretor Parceiro
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Fale Conosco
                </a>
              </li>
            </ul>
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
            <p className="text-sm text-muted-foreground mb-4">Receba por email nossos conteúdos sobre imóveis.</p>
            <div className="space-y-3">
              <Input type="text" placeholder="Nome" className="bg-background text-foreground" />
              <Input type="email" placeholder="E-mail" className="bg-background text-foreground" />
              <Button className="w-full bg-primary hover:bg-primary/90">Cadastrar</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-muted-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © Real Fazendas 2024. Todos os direitos reservados - CNPJ 41.676.502/0001-82 - CRECI 60465 CJ 33.245
          </p>
          <p className="text-sm text-muted-foreground mt-2">Política de Privacidade</p>
        </div>
      </div>
    </footer>
  )
}
