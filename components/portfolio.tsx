"use client"

import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function Portfolio() {
  const projects = [
    {
      id: "dsp-engenharia",
      title: "DSP Engenharia e Construções",
      subtitle: "Power Apps Solution",
      description: "Transformação digital completa com aplicativo licenciado Microsoft",
      category: "Software",
    },
    {
      id: "drone-services",
      title: "Serviços com Drones",
      subtitle: "Limpeza e Pintura Profissional",
      description: "Soluções aéreas inovadoras para limpeza e pintura de estruturas",
      category: "Drones",
    },
  ]

  return (
    <section id="projetos" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 bg-slate-900/50">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Nossos Projetos</h2>
          <p className="text-lg text-slate-300">Conheça as soluções que transformaram o negócio de nossos clientes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* DSP Project Card */}
          {projects.map((project) => (
            <Link key={project.id} href={`/project/${project.id}`}>
              <div className="group bg-gradient-to-br from-slate-800 to-slate-900 border border-blue-500/20 hover:border-blue-500/60 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer h-full">
                <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center group-hover:from-blue-600/30 group-hover:to-cyan-600/30 transition-all overflow-hidden">
                  {project.id === "dsp-engenharia" ? (
                    <img
                      src="/images/dsp-logo.png"
                      alt="Logo DSP Engenharia e Construções"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src="/images/drone-profissional.png"
                      alt="Drone profissional para limpeza e pintura"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-cyan-400 text-sm font-semibold mb-4">{project.subtitle}</p>

                  <p className="text-slate-300 mb-6">
                    {project.id === "dsp-engenharia" ? (
                      <>
                        Transformamos a operação de uma das principais empresas de engenharia do Brasil, migrando
                        completamente de processos em papel para uma plataforma digital integrada e robusta.
                      </>
                    ) : (
                      project.description
                    )}
                  </p>

                  {project.id === "dsp-engenharia" && (
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-white">Agenda Inteligente</p>
                          <p className="text-sm text-slate-400">Agendamento de projetos e atividades</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-white">Gestão de Pessoas</p>
                          <p className="text-sm text-slate-400">Controle de equipes e alocação de recursos</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-white">Administração de Obras</p>
                          <p className="text-sm text-slate-400">Gerenciamento completo de projetos e canteiros</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-white">Logística de Produtos</p>
                          <p className="text-sm text-slate-400">Rastreamento e controle de materiais</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-white">Contratos Profissionais</p>
                          <p className="text-sm text-slate-400">Gestão de contratos com segurança total</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.id === "dsp-engenharia" && (
                    <div className="pt-6 border-t border-slate-700">
                      <p className="text-sm text-slate-400 mb-4">
                        <span className="text-cyan-400 font-semibold">Resultado:</span> Eliminação completa de processos
                        em papel, aumento de 95% em eficiência operacional e redução significativa de erros
                        administrativos.
                      </p>
                    </div>
                  )}

                  {project.id === "drone-services" && (
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-white">Limpeza Aérea Profissional</p>
                          <p className="text-sm text-slate-400">Limpeza de fachadas e estruturas com precisão e segurança</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-white">Pintura de Alta Qualidade</p>
                          <p className="text-sm text-slate-400">Aplicação uniforme em áreas de difícil acesso sem riscos humanos</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-white">Redução de Custos e Tempo</p>
                          <p className="text-sm text-slate-400">Operações mais rápidas e econômicas que métodos tradicionais</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.id === "drone-services" && (
                    <div className="pt-6 border-t border-slate-700">
                      <p className="text-sm text-slate-400 mb-4">
                        <span className="text-cyan-400 font-semibold">Destaque:</span> Redução de até 70% no tempo de execução
                        e maior segurança para operações em altura.
                      </p>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-blue-400 group-hover:text-cyan-400 transition-colors">
                    <span>Ver Projeto Completo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
