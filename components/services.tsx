"use client"

import { Code2, Zap, Cpu, Wind, Activity, Bone as Drone } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "software-exclusivos",
    icon: Code2,
    title: "Software Exclusivos",
    description:
      "Desenvolvemos softwares sob medida para suas necessidades específicas, garantindo máxima eficiência e integração com seus processos.",
  },
  {
    id: "automacao-processos",
    icon: Zap,
    title: "Automação de Processos",
    description:
      "Automatizamos seus processos empresariais, reduzindo tempo, custos e aumentando a produtividade da sua operação.",
  },
  {
    id: "drones-especializados",
    icon: Drone,
    title: "Drones Especializados",
    description:
      "Soluções com drones autônomos para limpeza, pintura e inspeção com precisão, segurança e eficiência operacional.",
  },
  {
    id: "manutencao-cientifica",
    icon: Activity,
    title: "Manutenção Científica",
    description:
      "Programa inteligente que monitora máquinas em tempo real, previne falhas, otimiza disponibilidade e usa IA para decisões.",
  },
  {
    id: "projetos-especializados",
    icon: Wind,
    title: "Projetos Especializados",
    description: "Redução de ruídos, controle de aquecimento e monitoramento em tempo real para ambientes industriais.",
  },
  {
    id: "integracao-sistemas",
    icon: Cpu,
    title: "Integração de Sistemas",
    description:
      "Integração completa de seus sistemas existentes com nossas soluções, garantindo compatibilidade e eficiência máxima.",
  },
]

export default function Services() {
  return (
    <section id="servicos" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 bg-slate-900/50">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Nossos Serviços</h2>
          <p className="text-lg text-slate-400">
            Soluções completas para transformar sua empresa com tecnologia de ponta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.id}
                href={`/service/${service.id}`}
                className="p-8 rounded-lg border border-blue-500/20 bg-gradient-to-br from-slate-900 to-slate-800 hover:border-blue-500/50 transition group cursor-pointer"
              >
                <div className="inline-block p-3 bg-blue-500/20 rounded-lg mb-4 group-hover:bg-blue-500/30 transition">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400">{service.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
