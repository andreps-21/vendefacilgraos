"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Entremos em contato com você</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="name" placeholder="Seu nome completo" value={formData.name} onChange={handleChange} required />

        <Input
          name="email"
          type="email"
          placeholder="Seu e-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Input
          name="phone"
          type="tel"
          placeholder="Seu telefone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <Textarea
          name="message"
          placeholder="Mensagem"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="resize-none"
        />

        <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
          Enviar
        </Button>
      </form>
    </div>
  )
}
