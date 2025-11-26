"use client"

import { CheckCircle2 } from "lucide-react"

const features = [
  {
    category: "Manutenção Científica",
    items: [
      "Monitoramento contínuo e previsão de falhas",
      "Aumento de disponibilidade das máquinas",
      "Redução de paradas não planejadas",
      "IA para otimizar comportamento de equipamentos",
    ],
  },
  {
    category: "Tecnologia & Automação",
    items: [
      "Integração total com sistemas existentes",
      "Documentação automatizada e organizada",
      "Processos otimizados e ágeis",
      "Suporte técnico 24/7",
    ],
  },
  {
    category: "Drones & Projetos",
    items: [
      "Limpeza e pintura com precisão",
      "Redução de ruídos industriais",
      "Controle de temperatura em tempo real",
      "Inspeção remota e segura",
    ],
  },
]

export default function Features() {
  return (
    <section id="features" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Nossos Recursos</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Soluções completas para transformar sua operação industrial
          </p>
        </div>
        {/* End of added title section */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-2xl font-bold text-blue-400">{feature.category}</h3>
              <div className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
