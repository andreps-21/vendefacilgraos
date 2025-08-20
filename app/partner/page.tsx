import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import CTASection from "@/components/shared/cta-section"
import WhatsAppFloat from "@/components/shared/whatsapp-float"
import { Button } from "@/components/ui/button"
import { DollarSign, Clock, Users, Zap, Handshake, Globe } from "lucide-react"

export default function CorretorParceiroPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-muted/30 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Seja um <span className="text-verde-campo">Parceiro Vende Fácil Grãos</span> e{" "}
            <span className="text-verde-campo">ganhe comissões</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Conecte produtores rurais aos melhores compradores e receba comissões por cada negociação realizada.
          </p>
          <Button size="lg" className="bg-verde-campo hover:bg-amarelo-milho hover:text-preto-agricola text-white px-8 py-3 transition-colors">
            Seja um Parceiro
          </Button>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Como funciona?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-verde-campo text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Você conecta produtores e compradores</h3>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-verde-campo text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">
                A Vende Fácil Grãos facilita a negociação e venda
              </h3>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-verde-campo text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Com a venda realizada você recebe sua comissão</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">
            Por que ser um Parceiro da Vende Fácil Grãos?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Handshake className="h-12 w-12 text-verde-campo mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Parceria Simples</h3>
              <p className="text-muted-foreground">
                Foque na conexão entre produtores e compradores, deixe a plataforma cuidar do resto.
              </p>
            </div>

            <div className="text-center p-6">
              <DollarSign className="h-12 w-12 text-verde-campo mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Comissões Atraentes</h3>
              <p className="text-muted-foreground">
                Receba comissões por cada negociação de grãos realizada através da plataforma.
              </p>
            </div>

            <div className="text-center p-6">
              <Clock className="h-12 w-12 text-verde-campo mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sem Burocracia</h3>
              <p className="text-muted-foreground">
                Processo 100% digital e transparente, sem complicações desnecessárias.
              </p>
            </div>

            <div className="text-center p-6">
              <Users className="h-12 w-12 text-verde-campo mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Sem Exclusividade</h3>
              <p className="text-muted-foreground">
                Trabalhe com outras plataformas sem problemas. Aqui você tem total liberdade.
              </p>
            </div>

            <div className="text-center p-6">
              <Zap className="h-12 w-12 text-verde-campo mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Tecnologia Avançada</h3>
              <p className="text-muted-foreground">
                Plataforma moderna que conecta produtores e compradores de forma eficiente.
              </p>
            </div>

            <div className="text-center p-6">
              <Globe className="h-12 w-12 text-verde-campo mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mercado Nacional</h3>
              <p className="text-muted-foreground">
                Acesso a compradores de todo o Brasil, aumentando suas chances de sucesso.
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
              <div className="text-verde-campo text-4xl mb-4">&quot;</div>
              <h3 className="font-semibold mb-2">
                A Vende Fácil Grãos está revolucionando o mercado agrícola e eu estou aproveitando essa oportunidade.
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Como parceiro há mais de 1 ano, conectei dezenas de produtores aos melhores compradores. A plataforma é intuitiva e as comissões são justas. O melhor é que posso trabalhar de qualquer lugar.
              </p>
              <div className="text-sm">
                <strong>João Silva</strong>
                <br />
                <span className="text-muted-foreground">Parceiro em Goiás</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-verde-campo text-4xl mb-4">&quot;</div>
              <h3 className="font-semibold mb-2">
                Excelente plataforma para conectar produtores e compradores de grãos.
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Trabalho com agricultura há anos e nunca vi algo tão eficiente. Como parceiro, consigo ajudar produtores da minha região a venderem seus grãos por preços justos.
              </p>
              <div className="text-sm">
                <strong>Maria Santos</strong>
                <br />
                <span className="text-muted-foreground">Parceira em Mato Grosso</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-verde-campo text-4xl mb-4">&quot;</div>
              <h3 className="font-semibold mb-2">A parceria certa para quem quer crescer no mercado agrícola.</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Comecei como parceiro há 6 meses e já estou vendo resultados. A plataforma é confiável e as comissões chegam sempre no prazo. Recomendo para todos os colegas.
              </p>
              <div className="text-sm">
                <strong>Carlos Oliveira</strong>
                <br />
                <span className="text-muted-foreground">Parceiro em Tocantins</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">
            Junte-se à rede de parceiros da Vende Fácil Grãos
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Inscreva-se gratuitamente e comece a ganhar comissões conectando produtores e compradores de grãos.
          </p>
          <Button size="lg" className="bg-verde-campo hover:bg-amarelo-milho hover:text-preto-agricola text-white px-8 py-3 transition-colors">
            Seja um Parceiro
          </Button>
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
