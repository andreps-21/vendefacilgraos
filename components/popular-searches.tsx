const searchLinks = [
  "Fazenda para vender em Miranorte do Tocantins",
  "Fazenda para vender em Maringá",
  "Fazenda para vender em São Valério da Natividade",
  "Fazenda para vender em Monte do Carmo",
  "Fazenda para vender em Santa Maria do Tocantins",
  "Fazenda para vender em Cristalina",
  "Fazenda para vender em São Miguel do Araguaia",
  "Fazenda para vender em Palmas",
  "Fazenda para vender em Goiânia",
  "Fazenda para vender em Santana do Araguaia",
  "Fazenda para vender em Lagoa de São Bento",
  "Fazenda para vender em Araguaína",
  "Fazenda para vender em Garanhuns",
  "Fazenda para vender em Comalapa",
  "Fazenda para vender em Lagoa dos Três Cantos",
  "Fazenda para vender em Palmas",
  "Fazenda para vender em Anápolis",
  "Fazenda para vender em Formoso do Araguaia",
  "Fazenda para vender em Araguacema",
  "Fazenda para vender em Nova Olinda",
  "Fazenda para vender em Almas",
]

export function PopularSearches() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold font-serif mb-8">Buscas mais populares</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
          {searchLinks.map((link, index) => (
            <a key={index} href="#" className="text-sm text-foreground hover:text-primary transition-colors py-1 block">
              {link}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
