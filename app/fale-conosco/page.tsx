import Header from "@/components/header"
import Breadcrumb from "@/components/breadcrumb"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone } from "lucide-react"

export default function FaleConoscoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-muted py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Fale Conosco", href: "/fale-conosco" },
            ]}
          />
          <h1 className="text-3xl font-bold text-foreground mt-4">Fale Conosco</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Para falar conosco preencha o formulário ou utilize as informações de contato disponíveis.
              </h2>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">E-mail</h3>
                  <p className="text-muted-foreground">contato@realfazendas.com.br</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telefone</h3>
                  <p className="text-primary font-medium">(62) 9 816... ver telefone</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <strong>Gelson Aguiar</strong> - Diretor Comercial - CRECI GO28905
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Nome completo*" required className="bg-background" />
                </div>
                <div>
                  <Input type="email" placeholder="E-mail*" required className="bg-background" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input type="tel" placeholder="Telefone" className="bg-background" />
                </div>
                <div>
                  <Input placeholder="Assunto" className="bg-background" />
                </div>
              </div>

              <div>
                <Textarea placeholder="Mensagem" rows={6} className="bg-background resize-none" />
              </div>

              <Button type="submit" className="bg-primary hover:bg-primary/90 px-8">
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </div>

      <CTASection />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
