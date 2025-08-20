import Header from "@/components/header"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"

export default function VenderPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif">
            Venda seu imóvel mais rápido e com <span className="text-primary">muito mais segurança.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            A Real Fazendas te ajuda durante todo o processo de venda, do anúncio até a documentação.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
            Começar um anúncio
          </Button>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Venda o seu imóvel com facilidade e sem burocracia
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nosso time de especialistas garante um processo de venda muito mais seguro, transparente e ágil.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Cadastre seu imóvel para criar o anúncio, de graça.
              </h3>
              <p className="text-muted-foreground text-sm">
                Nosso fotógrafo profissional e piloto de drone visita seu imóvel para fazer as fotos e o tour virtual,
                gratuitamente. Seu anúncio fica ainda mais atrativo.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Alcance milhares de compradores.</h3>
              <p className="text-muted-foreground text-sm">
                Divulgamos seu imóvel em nosso site, nas redes sociais e em outros portais. Suas chances de vender ficam
                ainda maiores.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Conte com o nosso time de especialistas.</h3>
              <p className="text-muted-foreground text-sm">
                Nossos Especialistas de Vendas buscam o comprador ideal e realizam as visitas. Você vende 3 vezes mais
                rápido, e com muito mais comodidade.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                Receba assessoria jurídica gratuita para cuidar das documentações.
              </h3>
              <p className="text-muted-foreground text-sm">
                Nosso time de advogados cuida da parte burocrática para você ter ainda mais segurança e menos
                preocupações.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              Começar um anúncio
            </Button>
          </div>
        </div>
      </section>

      {/* Partner Program Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
            Com a Real Fazendas você pode ganhar dinheiro indicando imóveis à venda.
          </h2>
          <p className="text-xl text-foreground mb-2">Basta se cadastrar e começar a indicar!</p>

          <div className="mt-8 mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Programa</h3>
            <h4 className="text-3xl font-bold text-primary mb-6">Corretor Parceiro</h4>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ganhe comissões indicando propriedades rurais para nossa rede de especialistas. É simples, rápido e você
              pode trabalhar de onde estiver.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              Quero Participar
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
