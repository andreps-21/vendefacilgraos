import Header from "@/components/header"
import Breadcrumb from "@/components/breadcrumb"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

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
                Entre em contato conosco para dúvidas sobre grãos, parcerias ou suporte técnico.
              </h2>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-verde-campo text-white p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">E-mail</h3>
                  <p className="text-muted-foreground">contato@vendefacilgraos.com.br</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-verde-campo text-white p-3 rounded-full">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telefone</h3>
                  <p className="text-verde-campo font-medium">+55 63 9120-8484</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <strong>Suporte Vende Fácil Grãos</strong> - Atendimento Especializado
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-verde-campo text-white p-3 rounded-full">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Endereço</h3>
                  <p className="text-muted-foreground">Palmas, TO - Brasil</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Plataforma 100% digital para todo o Brasil
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-verde-campo text-white p-3 rounded-full">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Horário de Atendimento</h3>
                  <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Sábado: 8h às 12h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6 text-center text-verde-campo">
              Envie sua mensagem
            </h3>
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

              <Button type="submit" className="bg-verde-campo hover:bg-amarelo-milho hover:text-preto-agricola text-white px-8 transition-colors">
                Enviar Mensagem
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
