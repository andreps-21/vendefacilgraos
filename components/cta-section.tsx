import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="bg-primary text-primary-foreground py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-serif mb-4">Procurando a fazenda dos sonhos?</h2>
        <p className="text-lg mb-8 opacity-90">Ajudamos você a tornar esse sonho de uma fazenda uma realidade.</p>
        <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
          Explorar propriedades →
        </Button>
      </div>
    </section>
  )
}
