import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5563999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors z-50"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
