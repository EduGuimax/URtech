"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const projects = [
  {
    id: "dsp-poweraps",
    title: "DSP Engenharia e Construções",
    category: "Software",
    image: "/aplicativo-powerapps-gest-o-obras.jpg",
    description: "Aplicativo Power Apps totalmente licenciado pela Microsoft",
    features: [
      "Agenda profissional integrada",
      "Gestão completa de pessoas",
      "Administração de obras em tempo real",
      "Logística de produtos otimizada",
      "Contratos profissionais e especificados",
    ],
    impact:
      "100% digitalizado - Saiu do papel e foi apenas para o aplicativo, garantindo total segurança para o cliente",
    details:
      "Desenvolvemos uma solução completa de gestão para a DSP Engenharia que transformou seus processos operacionais. O aplicativo, construído em Power Apps com total conformidade Microsoft, consolidou todas as operações da empresa em uma única plataforma integrada, eliminando fluxos manuais e aumentando a eficiência operacional.",
    results: [
      "Redução de 80% em tempo administrativo",
      "100% rastreabilidade de projetos",
      "Melhor controle de recursos e pessoas",
      "Maior segurança de dados",
    ],
  },
  {
    id: "drone-limpeza",
    title: "Drones para Limpeza e Pintura",
    category: "Drones",
    image: "/drone-amarelo-profissional-limpeza.jpg",
    description: "Tecnologia de drones especializados para limpeza e pintura",
    features: [
      "Drones de alta precisão para superfícies verticais",
      "Sistema de projeção para pintura",
      "Limpeza de fachadas e estruturas",
      "Acesso seguro a áreas de difícil alcance",
      "Redução de riscos e custos operacionais",
    ],
    impact: "Solução segura, rápida e econômica para limpeza e pintura de grandes estruturas",
    details:
      "Nossos drones especializados são equipados com tecnologia de ponta para realizar limpeza e pintura em superfícies verticais, fachadas e estruturas elevadas. Reduzem significativamente os riscos à segurança dos profissionais e otimizam tempo e custos operacionais.",
    results: [
      "70% mais rápido que métodos tradicionais",
      "Segurança aumentada para a equipe",
      "Redução de 60% em custos operacionais",
      "Acesso a áreas inacessíveis",
    ],
  },
  {
    id: "manutencao-cientifica",
    title: "Manutenção Científica com IA",
    category: "Software",
    image: "/interface-ia-monitoramento-m-quinas.jpg",
    description: "Programa inteligente para melhoria e controle de máquinas",
    features: [
      "Aumento de disponibilidade de máquinas",
      "Redução de manutenções emergenciais",
      "Inteligência artificial para análise comportamental",
      "Previsão de falhas antes de ocorrerem",
      "Otimização de decisões operacionais",
    ],
    impact: "Inteligência estratégica para máquinas - aumento de uptime e redução de custos de manutenção",
    details:
      "Desenvolvemos um sistema inteligente de manutenção científica que utiliza IA para monitorar o comportamento de máquinas em tempo real, previnir falhas e otimizar a manutenção. A plataforma fornece insights precisos para tomadas de decisão, aumentando significativamente a disponibilidade operacional.",
    results: [
      "Aumento de 45% em disponibilidade",
      "Redução de 55% em tempo de parada",
      "Previsão de falhas com 92% de acurácia",
      "ROI em menos de 6 meses",
    ],
  },
  {
    id: "projetos-especiais",
    title: "Projetos de Redução de Ruído e Controle",
    category: "Engenharia",
    image: "/projeto-engenharia-redu--o-ru-do.jpg",
    description: "Soluções customizadas para redução de ruído, aquecimento e controle em tempo real",
    features: [
      "Análise acústica profissional",
      "Projetos de isolamento térmico",
      "Sistemas de controle em tempo real",
      "Soluções customizadas por ambiente",
      "Conformidade com regulamentações",
    ],
    impact: "Ambiência otimizada - Redução de ruído, eficiência térmica e controle total",
    details:
      "Desenvolvemos projetos especializados que incorporam análise científica e tecnologia avançada para resolver desafios complexos de ruído, temperatura e controle ambiental. Cada solução é customizada conforme as necessidades específicas do cliente.",
    results: [
      "Redução de até 40dB em ruído",
      "Eficiência térmica melhorada em 35%",
      "Controle automático e preciso",
      "Manutenção reduzida em 50%",
    ],
  },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const categories = ["Todos", "Software", "Drones", "Engenharia"]
  const filteredProjects =
    selectedCategory === "Todos" ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <main className="min-h-screen bg-slate-950 pt-24">
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft size={20} />
          Voltar
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Nosso Portfólio Completo</h1>
            <p className="text-lg text-slate-300">
              Conheça os projetos que transformaram empresas com nossas soluções inovadoras
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-blue-500 text-white"
                    : "bg-slate-900 border border-blue-500/20 text-slate-300 hover:border-blue-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid de Projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/project/${project.id}`}
                className="group bg-slate-900/50 border border-blue-500/20 rounded-lg overflow-hidden hover:border-blue-500 transition"
              >
                <div className="relative h-64 overflow-hidden bg-slate-800">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                    <span className="text-blue-300 font-semibold">Ver Detalhes →</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-slate-400">{project.description}</p>
                  <div className="mt-4 pt-4 border-t border-blue-500/10">
                    <p className="text-sm text-blue-400 font-semibold">{project.impact}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Final */}
          <div className="mt-16 text-center">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Quer Conhecer Mais Sobre Nossas Soluções?
              </h2>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Entre em contato conosco e descubra como a URTECH pode transformar sua empresa com soluções customizadas
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-semibold transition"
              >
                Entrar em Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
