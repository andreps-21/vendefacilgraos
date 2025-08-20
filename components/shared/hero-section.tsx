

export function HeroSection() {
  return (
    <section className="relative h-[500px] bg-gradient-to-r from-black/50 to-black/30">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          /* Updated background image to grain field */
          backgroundImage: "url('/golden-grain-field.png')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />

      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl font-bold font-serif mb-4 leading-tight">
            Vende Fácil Grãos — do campo para o comprador, sem rodeios.
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Conectamos produtores rurais diretamente ao mercado comprador. Cadastre seus grãos, defina o preço por saca
            e venda com agilidade e transparência.
          </p>

        </div>
      </div>
    </section>
  )
}
