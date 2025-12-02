import { ChevronLeft } from "lucide-react"
import Link from "next/link"

const projects = {
  "dsp-engenharia": {
    title: "DSP Engenharia e Construções",
    subtitle: "Transformação Digital com Power Apps",
    category: "Software | Power Apps",
    backgroundColor: "from-blue-600/20 to-cyan-600/20",
    description: `A DSP Engenharia e Construções, uma das principais empresas de engenharia do Brasil, enfrentava desafios operacionais significativos com processos ainda baseados em papel. Desenvolvemos uma solução completa e integrada utilizando Power Apps, totalmente licenciada pela Microsoft, que transformou completamente a sua operação.`,
    highlights: [
      {
        title: "Agenda Inteligente",
        description:
          "Sistema inteligente de agendamento que sincroniza todos os projetos e atividades da empresa, permitindo uma melhor alocação de recursos e evitando conflitos de agenda.",
      },
      {
        title: "Gestão de Pessoas",
        description:
          "Controle completo de equipes, com rastreamento de horas, alocação de recursos e gestão de competências dos profissionais.",
      },
      {
        title: "Administração de Obras",
        description:
          "Gerenciamento centralizado de todos os projetos e canteiros de obras, com acompanhamento de cronograma, orçamento e qualidade.",
      },
      {
        title: "Logística de Produtos",
        description:
          "Rastreamento em tempo real de materiais e produtos, desde o fornecedor até a chegada nos canteiros de obras.",
      },
      {
        title: "Contratos Profissionais",
        description:
          "Sistema de gestão de contratos especificado e profissional, gerando total segurança para o cliente e conformidade regulatória.",
      },
    ],
    results: [
      "Eliminação 100% completa de processos em papel",
      "Aumento de 95% em eficiência operacional",
      "Redução significativa de erros administrativos",
      "Melhor rastreabilidade de todos os projetos",
      "Redução de 40% no tempo de processamento administrativo",
    ],
  },
  "drone-services": {
    title: "Serviços com Drones",
    subtitle: "Limpeza e Pintura Profissional",
    category: "Serviços Aéreos | Drones",
    backgroundColor: "from-blue-600/20 to-cyan-600/20",
    description: `A URTECH oferece soluções inovadoras e seguras utilizando drones profissionais para limpeza e pintura de estruturas complexas. Nossas operações aéreas combinam precisão, segurança e eficiência, alcançando áreas de difícil acesso que seriam custosas ou perigosas com métodos tradicionais.`,
    highlights: [
      {
        title: "Limpeza Aérea",
        description:
          "Utilizamos drones equipados com sistemas de pulverização de alta pressão para limpeza de fachadas, telhados e estruturas elevadas com total segurança e eficiência.",
      },
      {
        title: "Pintura Profissional",
        description:
          "Aplicação de pintura em estruturas complexas e de difícil acesso, garantindo cobertura uniforme e acabamento profissional em áreas que seriam perigosas para trabalho convencional.",
      },
      {
        title: "Equipamento de Precisão",
        description:
          "Drones equipados com tanques de pulverização de grande capacidade, sistemas de controle remoto avançado e sensores de precisão para execução perfeita.",
      },
      {
        title: "Segurança em Primeiro Lugar",
        description:
          "Todas as operações são executadas com protocolos rigorosos de segurança, pilotos certificados e conformidade total com legislação aeronáutica brasileira.",
      },
      {
        title: "Economicidade e Rapidez",
        description:
          "Redução de custos em comparação com métodos tradicionais, eliminação de andaimes e plataformas elevatórias, além de tempo de execução significativamente menor.",
      },
    ],
    results: [
      "Redução de 60% nos custos operacionais comparado a métodos tradicionais",
      "Tempo de execução 70% mais rápido que limpeza/pintura convencional",
      "Zero riscos de acidentes de trabalho em altura",
      "Acesso a estruturas complexas e perigosas de forma segura",
      "100% de conformidade regulatória e certificação profissional",
    ],
  },
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects[id as keyof typeof projects]

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Projeto não encontrado</h1>
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            Voltar para página inicial
          </Link>
        </div>
      </div>
    )
  }

  const isDrone = id === "drone-services"
  const isDSP = id === "dsp-engenharia"

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-slate-800">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Voltar
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className={`px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br ${project.backgroundColor}`}>
        <div className="mx-auto max-w-6xl">
          <p className="text-cyan-400 text-sm font-semibold mb-4">{project.category}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">{project.title}</h1>
          <h2 className="text-2xl text-blue-400 mb-6">{project.subtitle}</h2>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">{project.description}</p>
        </div>
      </div>

      {/* Images Section for DSP project */}
      {isDSP && (
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <h3 className="text-3xl font-bold text-white mb-8">Sistema em Ação</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 rounded-lg border border-blue-500/20 p-4 flex items-center justify-center min-h-96">
                <img
                  src="/images/dsp-calendario.png"
                  alt="DSP Engenharia - Calendário de obras"
                  className="max-w-full max-h-96 object-contain"
                />
              </div>
              <div className="bg-slate-900/50 rounded-lg border border-blue-500/20 p-4 flex items-center justify-center min-h-96">
                <img
                  src="/images/dsp-pessoas.png"
                  alt="DSP Engenharia - Gestão de pessoas"
                  className="max-w-full max-h-96 object-contain"
                />
              </div>
              <div className="bg-slate-900/50 rounded-lg border border-blue-500/20 p-4 flex items-center justify-center min-h-96">
                <img
                  src="/images/dsp-deposito.png"
                  alt="DSP Engenharia - Sistema de depósitos"
                  className="max-w-full max-h-96 object-contain"
                />
              </div>
              <div className="bg-slate-900/50 rounded-lg border border-blue-500/20 p-4 flex items-center justify-center min-h-96">
                <img
                  src="/images/dsp-financeiro.png"
                  alt="DSP Engenharia - Gestão financeira"
                  className="max-w-full max-h-96 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Images Section for Drones */}
      {isDrone && (
        <div className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <h3 className="text-3xl font-bold text-white mb-8">Em Ação</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src="/images/drone-1.png"
                alt="Equipamento de pulverização para drone"
                className="rounded-lg border border-blue-500/20 object-cover h-96 w-full"
              />
              <img
                src="/images/drone-2.png"
                alt="Equipe operando drone em área urbana"
                className="rounded-lg border border-blue-500/20 object-cover h-96 w-full"
              />
              <img
                src="/images/drone-3.png"
                alt="Drone profissional em operação"
                className="rounded-lg border border-blue-500/20 object-cover h-96 w-full"
              />
              <img
                src="/images/drone-4.png"
                alt="Equipe técnica preparando equipamento"
                className="rounded-lg border border-blue-500/20 object-cover h-96 w-full"
              />
              <img
                src="/images/drone-5.png"
                alt="Sistema completo de drone com equipamento de pulverização"
                className="rounded-lg border border-blue-500/20 object-cover h-96 w-full"
              />
            </div>
          </div>
        </div>
      )}

      {/* Highlights Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-900/50">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-white mb-12">Características Principais</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/60 transition-colors"
              >
                <h4 className="text-xl font-bold text-cyan-400 mb-3">{highlight.title}</h4>
                <p className="text-slate-300 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-white mb-12">Resultados Alcançados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-lg text-slate-300">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border-y border-blue-500/20">
        <div className="mx-auto max-w-6xl text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Interessado nesta solução?</h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para discutir como podemos implementar esta solução em sua empresa.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Iniciar Conversação
          </Link>
        </div>
      </div>
    </div>
  )
}
