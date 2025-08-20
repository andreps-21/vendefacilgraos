const searchLinks = [
  "Soja para vender em Palmas, TO",
  "Milho para vender em Rio Verde, GO",
  "Feijão para vender em Cristalina, GO",
  "Soja para vender em Araguaína, TO",
  "Milho para vender em Jataí, GO",
  "Feijão para vender em Formosa, GO",
  "Soja para vender em Gurupi, TO",
  "Milho para vender em Mineiros, GO",
  "Arroz para vender em Porto Nacional, TO",
  "Soja para vender em Paraíso do Tocantins, TO",
  "Milho para vender em Quirinópolis, GO",
  "Feijão para vender em Luziânia, GO",
  "Soja para vender em Dianópolis, TO",
  "Milho para vender em Itumbiara, GO",
  "Feijão para vender em Valparaíso, GO",
  "Soja para vender em Colinas do Tocantins, TO",
  "Milho para vender em Goiatuba, GO",
  "Arroz para vender em Pedro Afonso, TO",
  "Soja para vender em Augustinópolis, TO",
  "Milho para vender em Morrinhos, GO",
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
