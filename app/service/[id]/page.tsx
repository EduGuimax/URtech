"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useParams } from "next/navigation"

const serviceDetails: Record<
  string,
  { title: string; description: string; fullDescription: string; benefits: string[] }
> = {
  "software-exclusivos": {
    title: "Software Exclusivos",
    description: "Desenvolvemos softwares sob medida para suas necessidades",
    fullDescription:
      "Na URTECH, criamos software exclusivos e personalizados que se adaptam perfeitamente aos processos da sua empresa. Nossos softwares são desenvolvidos com as mais modernas tecnologias, garantindo máxima eficiência, segurança e integração com seus sistemas existentes. Cada solução é projetada especificamente para suas necessidades, eliminando funcionalidades desnecessárias e focando no que realmente importa para o seu negócio.",
    benefits: [
      "Desenvolvimento customizado para suas necessidades específicas",
      "Interface intuitiva e fácil de usar",
      "Integração seamless com sistemas existentes",
      "Suporte técnico contínuo e atualizações",
      "Escalabilidade para crescimento futuro",
      "Segurança de dados em nível empresarial",
    ],
  },
  "automacao-processos": {
    title: "Automação de Processos",
    description: "Automatizamos seus processos empresariais",
    fullDescription:
      "Transforme sua operação com automação inteligente. A URTECH implementa soluções de automação que eliminam tarefas repetitivas, reduzem erros humanos e aumentam significativamente a produtividade. Nossas estratégias de automação são baseadas em análise profunda dos seus processos, garantindo que cada implementação gere impacto mensurável nos seus resultados.",
    benefits: [
      "Redução de até 70% no tempo de processos",
      "Eliminação de erros e retrabalho",
      "Aumento exponencial de produtividade",
      "Redução de custos operacionais",
      "Liberação de equipe para atividades estratégicas",
      "Implementação sem interrupção das operações",
    ],
  },
  "drones-especializados": {
    title: "Drones Especializados",
    description: "Soluções com drones autônomos para limpeza e pintura",
    fullDescription:
      "Nossa tecnologia de drones especializados oferece soluções inovadoras para limpeza e pintura de estruturas complexas com segurança, precisão e eficiência. Os drones da URTECH são equipados com tecnologia de ponta para alcançar áreas de difícil acesso, reduzindo riscos, custos e tempo de operação. Ideal para limpeza de fachadas, painéis solares, estruturas industriais e trabalhos de pintura em altura.",
    benefits: [
      "Redução de 80% no tempo de limpeza e pintura",
      "Eliminação de riscos para operadores",
      "Alcance de áreas de difícil acesso",
      "Precisão profissional em cada operação",
      "Redução significativa de custos",
      "Impacto visual e acabamento impecável",
    ],
  },
  "manutencao-cientifica": {
    title: "Manutenção Científica",
    description: "Programa inteligente com IA para suas máquinas",
    fullDescription:
      "Revolucione a manutenção das suas máquinas com nosso programa de Manutenção Científica alimentado por inteligência artificial. Este sistema monitora continuamente o comportamento de seus equipamentos em tempo real, prevendo falhas antes que aconteçam, otimizando a disponibilidade operacional e reduzindo custos de manutenção emergencial. Com decisões baseadas em dados e análise preditiva, sua operação funciona com máxima eficiência.",
    benefits: [
      "Previsão de falhas com até 95% de precisão",
      "Aumento de disponibilidade das máquinas em 40%+",
      "Redução de 60% em manutenções emergenciais",
      "Otimização do ciclo de vida dos equipamentos",
      "Decisões baseadas em inteligência artificial",
      "Monitoramento 24/7 em tempo real",
    ],
  },
  "projetos-especializados": {
    title: "Projetos Especializados",
    description: "Redução de ruídos, aquecimento e controle em tempo real",
    fullDescription:
      "A URTECH desenvolve projetos especializados focados em otimização ambiental e operacional. Nossas soluções incluem redução avançada de ruídos industriais, controle inteligente de aquecimento e sistemas de monitoramento em tempo real. Cada projeto é projetado para melhorar as condições de trabalho, aumentar a eficiência energética e garantir conformidade com normas ambientais.",
    benefits: [
      "Redução de até 50% em níveis de ruído",
      "Controle de temperatura otimizado",
      "Eficiência energética comprovada",
      "Conformidade com normas ambientais",
      "Monitoramento em tempo real de parâmetros",
      "Diagnóstico automático de anomalias",
    ],
  },
  "integracao-sistemas": {
    title: "Integração de Sistemas",
    description: "Integração completa de seus sistemas existentes",
    fullDescription:
      "Conecte toda sua infraestrutura de TI com a integração completa de sistemas da URTECH. Nossa expertise garante que todos os seus sistemas funcionem em perfeita harmonia, compartilhando dados e comunicando-se sem fricção. Desde integração com legados até implementação de APIs modernas, cuidamos de cada detalhe para assegurar uma operação unificada e eficiente.",
    benefits: [
      "Compatibilidade total com sistemas existentes",
      "Fluxo de dados automático e seguro",
      "Eliminação de silos de informação",
      "Redução de tempo em processos integrados",
      "Segurança em todas as camadas de integração",
      "Suporte contínuo e manutenção preventiva",
    ],
  },
}

export default function ServicePage() {
  const params = useParams()
  const id = params?.id as string

  const service = serviceDetails[id]

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Serviço não encontrado</h1>
          <Link href="/" className="text-blue-400 hover:text-cyan-400 transition">
            Voltar para página inicial
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-slate-950 py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-400 transition mb-8">
          <ArrowLeft size={20} />
          Voltar
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{service.title}</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded"></div>
        </div>

        {/* Main Description */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/20 rounded-lg p-8 sm:p-12 mb-12">
          <p className="text-lg text-slate-300 leading-relaxed">{service.fullDescription}</p>
        </div>

        {/* Benefits Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Benefícios Principais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/50 transition"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-500/20">
                    <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-slate-300">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg p-8 sm:p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Pronto para transformar sua empresa?</h3>
          <p className="text-slate-300 mb-8">
            Converse com um de nossos especialistas e descubra como o {service.title.toLowerCase()} pode potencializar
            seus resultados.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg font-semibold transition"
          >
            Entrar em Contato
          </Link>
        </div>
      </div>
    </main>
  )
}
