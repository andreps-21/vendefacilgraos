import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Vende Fácil Grãos - Conectando Produtores e Compradores",
  description: "Plataforma especializada em conectar produtores rurais diretamente aos compradores de grãos. Venda seus grãos com agilidade e transparência.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${sourceSans.variable} antialiased`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
