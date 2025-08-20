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
                <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-primary border-dashed rounded-full opacity-30"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-primary border-dashed rounded-full opacity-30"></div>
                <img
                  src="/vast-cornfield.png"
                  alt="Plantação de milho - agricultura"
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="text-primary font-semibold text-lg">Sobre Nós</div>

                <p className="text-foreground leading-relaxed">
                  <strong>Real Fazendas</strong>, empresa composta por profissionais altamente gabaritados, com mais de{" "}
                  <strong>16 anos de experiência</strong> na gestão de negócios rurais, dos mais simples aos mais
                  complexos.
                </p>

                <p className="text-foreground leading-relaxed">
                  A Real Fazendas é muito mais que uma imobiliária de imóveis rurais é uma gestora de soluções para que
                  os mais diversos tipos negócios rurais se formalizem. Para isso, possui um time de profissionais com
                  especialidades interdisciplinares contando em seu quadro pessoal para assessoria comercial, fiscal,
                  contábil, jurídica e financeira.
                </p>

                <div className="space-y-4">
                  <p className="text-foreground leading-relaxed">
                    <strong>Se você quer vender sua fazenda</strong>. Fazemos toda a assessoria documental da sua
                    fazenda, assim como uma avaliação detalhada para deixarmos ela toda pronta para receber o comprador
                    ideal, assim como garantiremos uma busca detalhada nos perfis dos possíveis interessados, para
                    garantir maior segurança em todo o processo de venda.
                  </p>

                  <p className="text-foreground leading-relaxed">
                    <strong>Se você quer comprar uma fazenda</strong>. Fazemos uma densa entrevista para traçar um
                    perfil completo do produto que deseja, para acharmos em nosso portfólio os produtos mais assertivos,
                    assim como cuidaremos de toda assessoria jurídica e até financeira, para que o negócio ocorra da
                    forma mais rápida e transparente possível.
                  </p>

                  <p className="text-foreground leading-relaxed">
                    <strong>Se você quer arrendar uma terra</strong>. Cuidaremos de achar uma terra de acordo com
                    procurado, assessorando com análise de solo e viabilidade econômica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Real Fazendas */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Building2 className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">Real Fazendas</h3>
                <p className="text-primary font-bold text-lg">AQUI, O SISTEMA É BRUTO.</p>
              </div>

              {/* Mission */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Target className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Prestar uma assessoria completa e profissional nos mais diversos negócios rurais.
                </p>
              </div>

              {/* Vision */}
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <Eye className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser reconhecida como a maior gestora de negócios rurais do Centro-Oeste.
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
