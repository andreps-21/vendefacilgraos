import { TrendingUp, TrendingDown, Minus, DollarSign, Package, Users } from "lucide-react"

interface MarketData {
  grain: string
  price: number
  change: number
  volume: string
  trend: 'up' | 'down' | 'stable'
}

const marketData: MarketData[] = [
  {
    grain: "Soja",
    price: 89.50,
    change: 2.3,
    volume: "15.2k sacas",
    trend: 'up'
  },
  {
    grain: "Milho",
    price: 45.80,
    change: -1.2,
    volume: "8.7k sacas",
    trend: 'down'
  },
  {
    grain: "Feijão",
    price: 125.40,
    change: 0.0,
    volume: "3.1k sacas",
    trend: 'stable'
  },
  {
    grain: "Arroz",
    price: 78.90,
    change: 1.8,
    volume: "5.6k sacas",
    trend: 'up'
  },
  {
    grain: "Trigo",
    price: 95.20,
    change: -0.5,
    volume: "2.3k sacas",
    trend: 'down'
  },
  {
    grain: "Sorgo",
    price: 38.60,
    change: 3.1,
    volume: "1.8k sacas",
    trend: 'up'
  }
]

const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
  switch (trend) {
    case 'up':
      return <TrendingUp className="h-4 w-4 text-green-600" />
    case 'down':
      return <TrendingDown className="h-4 w-4 text-red-600" />
    case 'stable':
      return <Minus className="h-4 w-4 text-gray-500" />
  }
}

const getTrendColor = (trend: 'up' | 'down' | 'stable') => {
  switch (trend) {
    case 'up':
      return 'text-green-600'
    case 'down':
      return 'text-red-600'
    case 'stable':
      return 'text-gray-500'
  }
}

export function MarketInsights() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Mercado em Tempo Real
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Acompanhe os preços, tendências e volume de negociação dos principais grãos
          </p>
        </div>

        {/* Cards de Mercado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {marketData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{item.grain}</h3>
                {getTrendIcon(item.trend)}
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Preço por saca</span>
                  <span className="text-2xl font-bold text-gray-900">
                    R$ {item.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Variação</span>
                  <span className={`font-medium ${getTrendColor(item.trend)}`}>
                    {item.change > 0 ? '+' : ''}{item.change.toFixed(1)}%
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Volume</span>
                  <span className="font-medium text-gray-900">{item.volume}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas Rápidas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-verde-campo text-white rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Package className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Total de Ofertas</h3>
            <p className="text-3xl font-bold">2.847</p>
            <p className="text-sm opacity-90">+12% este mês</p>
          </div>
          
          <div className="bg-amarelo-milho text-preto-agricola rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Produtores Ativos</h3>
            <p className="text-3xl font-bold">1.234</p>
            <p className="text-sm opacity-90">+8% este mês</p>
          </div>
          
          <div className="bg-marrom-terra text-white rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Volume Mensal</h3>
            <p className="text-3xl font-bold">R$ 12,5M</p>
            <p className="text-sm opacity-90">+15% este mês</p>
          </div>
        </div>
      </div>
    </section>
  )
}
