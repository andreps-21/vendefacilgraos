import Header from "@/components/header"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Package, Users, Shield, Truck, TrendingUp, Star } from "lucide-react"

export default function VenderPage() {
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
          <Button size="lg" className="bg-verde-campo hover:bg-amarelo-milho hover:text-preto-agricola text-white px-8 py-3 transition-colors">
            Cadastrar Grãos
          </Button>
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
            <Button size="lg" className="bg-verde-campo hover:bg-amarelo-milho hover:text-preto-agricola text-white px-8 py-3 transition-colors">
              Começar a vender
            </Button>
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
