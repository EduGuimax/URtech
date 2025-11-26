"use client"

import ContactForm from "./contact-form"

export default function CTA() {
  return (
    <section
      id="contato"
      className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-y border-blue-500/20"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para Transformar sua Empresa?
          </h2>
          <p className="text-lg text-slate-300">
            Entre em contato conosco hoje mesmo e descubra como a URTECH pode levar sua operação para o próximo nível
            com soluções inteligentes e inovadoras.
          </p>
        </div>

        <div className="bg-slate-900/50 border border-blue-500/20 rounded-lg p-8 sm:p-12">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
