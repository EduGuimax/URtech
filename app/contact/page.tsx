"use client"

import Link from "next/link"
import ContactForm from "@/components/contact-form"
import BackButton from "@/components/back-button"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24">
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <BackButton className="text-blue-400 hover:text-blue-300 mb-8" />

        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Entrar em Contato</h1>
            <p className="text-lg text-slate-300">
              Preencha o formulário abaixo e nossa equipe entrará em contato em breve
            </p>
          </div>

          <div className="bg-slate-900/50 border border-blue-500/20 rounded-lg p-8 sm:p-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
