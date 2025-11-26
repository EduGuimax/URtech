"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24">
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft size={20} />
          Voltar
        </Link>

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
