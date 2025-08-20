import Header from "@/components/header"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Calendar, DollarSign, Clock, Users, Zap, TrendingUp } from "lucide-react"

export default function CorretorParceiroPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Você recomenda a <span className="text-primary">Real Fazendas</span> e nós{" "}
            <span className="text-primary">trabalhamos por você</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Receba comissão sempre que um imóvel indicado for vendido pela nossa equipe.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            Seja um Corretor Parceiro
          </Button>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Como funciona?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Você indica o imóvel e contatamos o proprietário</h3>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">
                A Real Fazendas negocia com o proprietário e anuncia o imóvel
              </h3>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Com o imóvel vendido você recebe a sua comissão</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Por que ser um Corretor Parceiro da Real Fazendas?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Simplifique seu trabalho</h3>
              <p className="text-muted-foreground">
                Foque na captação de imóveis e deixe o trabalho pesado e burocrático com a Real Fazendas.
              </p>
            </div>

            <div className="text-center p-6">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Receba quando vender</h3>
              <p className="text-muted-foreground">
                Receba uma comissão da Real Fazendas sempre que um imóvel indicado for vendido pela nossa equipe.
              </p>
            </div>

            <div className="text-center p-6">
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sem burocracia</h3>
              <p className="text-muted-foreground">
                Você indica o imóvel e pronto, nossa equipe começa a trabalhar para você.
              </p>
            </div>

            <div className="text-center p-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Não exigimos exclusividade</h3>
              <p className="text-muted-foreground">
                Trabalhe com outros parceiros sem problemas. Aqui você tem total liberdade.
              </p>
            </div>

            <div className="text-center p-6">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Tecnologia de ponta</h3>
              <p className="text-muted-foreground">
                A Real Fazendas utiliza as melhores ferramentas para vender seu imóvel mais rápido.
              </p>
            </div>

            <div className="text-center p-6">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">5x mais vendas</h3>
              <p className="text-muted-foreground">
                Nossa estratégia de marketing digital faz com que seus imóveis vendam 5x mais rápido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 px-4 bg-gradient-to-b from-muted/10 to-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">O que nossos parceiros falam</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-primary text-4xl mb-4">"</div>
              <h3 className="font-semibold mb-2">
                A Real Fazendas está crescendo a cada dia e tenho grandes oportunidades de ganhos sendo um Corretor
                Parceiro.
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Indico imóveis para a Real Fazendas há mais de 2 anos e não esperava, marketing digital aplicado para
                encontrar bons clientes compradores e tudo isso sem exclusividade, sem dar de cabeça, com muita
                facilidade e agilidade. O melhor de tudo o processo foi que todos os proprietários aderiram a Real
                Fazendas.
              </p>
              <div className="text-sm">
                <strong>Valdair</strong>
                <br />
                <span className="text-muted-foreground">Parceiro Real Fazendas em Luiz Alves</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-primary text-4xl mb-4">"</div>
              <h3 className="font-semibold mb-2">
                O retorno e o trabalho de vocês tem sido muito bom, o que estava faltando no mercado era isso.
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Cliente e agora eu posso ficar mais tranquila e não preciso ser tanto. Estou gostando muito, faço minha
                parte e o retorno financeiro tem me ajudado muito.
              </p>
              <div className="text-sm">
                <strong>Francisco</strong>
                <br />
                <span className="text-muted-foreground">Parceiro Real Fazendas em São Luís Dos Montes Belos</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-primary text-4xl mb-4">"</div>
              <h3 className="font-semibold mb-2">É o trabalho que eu estava procurando, a parceria certa.</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Trabalhar com a Real Fazendas é muito tranquilo, é um trabalho bem diferente do que eu estava acostumado
                de casa pelo forma que nós organizou. Estou muito contente com o retorno financeiro, tem sido muito
                vantajoso essa parceria.
              </p>
              <div className="text-sm">
                <strong>Seu Valdír</strong>
                <br />
                <span className="text-muted-foreground">Parceiro Real Fazendas em Catalão</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Junte-se à rede de corretores parceiros da Real Fazendas
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Inscreva-se gratuitamente e aumente a sua renda mensal de forma rápida e previsível.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            Seja um Corretor Parceiro
          </Button>
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
