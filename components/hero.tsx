"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Desenvolvimento Especializado
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Soluções Inteligentes para sua Empresa
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-6 max-w-3xl mx-auto">
            URTECH é sua parceira em inovação: desenvolvemos software exclusivos, automação inteligente, drones
            especializados e soluções de manutenção científica com IA.
          </p>

          <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-4xl mx-auto leading-relaxed text-justify">
            Acreditamos que antes de apresentar soluções, é essencial compreender profundamente as necessidades e
            desafios específicos da sua empresa. Por isso, iniciamos cada parceria com um diagnóstico completo e
            detalhado, analisando seus processos, tecnologias e oportunidades de melhoria. Somente assim desenvolvemos
            estratégias personalizadas que transformam sua empresa, otimizam operações e geram valor real e mensurável
            para seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              Entrar em Contato
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-20 border-t border-blue-500/20">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-slate-400">Projetos Concluídos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-slate-400">Satisfação de Clientes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
            <div className="text-slate-400">Anos de Experiência</div>
          </div>
        </div>
      </div>
    </section>
  )
}
