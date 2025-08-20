import Header from "@/components/header"
import Breadcrumb from "@/components/breadcrumb"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Building2, Target, Eye } from "lucide-react"

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-muted py-12">
          <div className="max-w-7xl mx-auto px-4">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Quem Somos", href: "/quem-somos" },
              ]}
            />
            <h1 className="text-4xl font-bold text-foreground mt-6 font-serif">Quem Somos</h1>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-verde-campo border-dashed rounded-full opacity-30"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-verde-campo border-dashed rounded-full opacity-30"></div>
                <img
                  src="/vast-cornfield.png"
                  alt="Plantação de milho - agricultura"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="text-verde-campo font-semibold text-lg">História da Marca</div>
                  
                  <div className="space-y-4">
                    <p className="text-foreground leading-relaxed text-lg">
                      <strong>Vende Fácil Grãos</strong> nasceu com um propósito claro: conectar produtores rurais diretamente ao mercado comprador, facilitando a venda de grãos com <strong>agilidade</strong>, <strong>transparência</strong> e <strong>segurança</strong>.
                    </p>
                    
                    <p className="text-foreground leading-relaxed">
                      Com anos de vivência no campo e no comércio agrícola, percebemos que muitos agricultores enfrentam dificuldades para encontrar compradores de forma rápida e justa. Por isso, criamos uma plataforma <strong>simples</strong>, <strong>direta</strong> e <strong>acessível</strong>, onde cada saca conta.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="text-verde-campo font-semibold text-lg">Nossa Missão</div>
                  
                  <p className="text-foreground leading-relaxed">
                    Democratizar o acesso ao mercado de grãos, eliminando intermediários desnecessários e garantindo que o produtor rural receba o <strong>valor justo</strong> pelo seu trabalho e investimento.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="text-verde-campo font-semibold text-lg">Por que escolher a Vende Fácil Grãos?</div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-verde-campo rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Plataforma <strong>100% digital</strong> e fácil de usar</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-verde-campo rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Conectamos você diretamente aos <strong>compradores certificados</strong></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-verde-campo rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Processo de venda <strong>transparente</strong> e sem surpresas</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-verde-campo rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground">Suporte especializado para <strong>toda a jornada</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Nossa História */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Building2 className="h-16 w-16 text-verde-campo" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">Nossa História</h3>
                <p className="text-verde-campo font-bold text-lg">DO CAMPO PARA O MERCADO</p>
                <p className="text-muted-foreground leading-relaxed mt-2">
                  Nascida da experiência real no campo, nossa plataforma conecta produtores e compradores de forma direta e transparente.
                </p>
              </div>

              {/* Missão */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Target className="h-16 w-16 text-verde-campo" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Democratizar o acesso ao mercado de grãos, eliminando intermediários e garantindo transparência total no processo de venda.
                </p>
              </div>

              {/* Visão */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Eye className="h-16 w-16 text-verde-campo" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser a plataforma líder em conectividade rural, revolucionando a forma como os grãos são comercializados no Brasil.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
