import Link from "next/link"

export const metadata = {
  title: "Sobre Nós - URTECH",
  description: "URTECH — Parceira em inovação: software sob medida, automação, drones e manutenção com IA.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Sobre a URTECH</h1>
          <div className="h-1 w-28 bg-gradient-to-r from-blue-500 to-cyan-500 rounded"></div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/20 rounded-lg p-8 sm:p-12 text-lg text-slate-300 leading-relaxed">
          <p className="mb-6 text-justify">
            A URTECH é uma empresa parceira em inovação, dedicada a criar soluções tecnológicas que gerem
            resultados mensuráveis e sustentáveis para organizações dos mais diversos setores. Atuamos com
            excelência no desenvolvimento de software exclusivo, implementações de automação inteligente, soluções
            com drones especializados e projetos de manutenção científica apoiados por inteligência artificial.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-4">Nossa Abordagem</h2>
          <p className="mb-6 text-justify">
            Acreditamos que cada cliente possui desafios e necessidades únicas. Por isso adotamos uma abordagem
            consultiva e orientada a dados: iniciamos com um diagnóstico detalhado, alinhamos requisitos de negócio e
            desenhamos soluções sob medida que entregam eficiência operacional, redução de custos e maior segurança
            nos processos. Nosso time integra engenharia, design e ciência de dados para garantir implementações
            robustas e escaláveis.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-4">O que fazemos</h2>
          <ul className="list-disc list-inside space-y-3 mb-6 text-justify">
            <li>
              Desenvolvimento de software sob medida, com foco em experiência do usuário, segurança e integração com
              sistemas legados.
            </li>
            <li>
              Automação inteligente de processos para otimizar fluxos operacionais e reduzir intervenção manual.
            </li>
            <li>
              Projetos com drones especializados para inspeção, limpeza e pintura, garantindo precisão e segurança em
              operações de alto risco.
            </li>
            <li>
              Soluções de manutenção científica com uso de IA para monitoramento preditivo, redução de falhas e maior
              disponibilidade de ativos.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-6 mb-4">Por que escolher a URTECH</h2>
          <p className="mb-6 text-justify">
            Entregamos tecnologia aliada a conhecimento de domínio. Trabalhamos em parceria com nossos clientes,
            priorizando transparência, governança e mensuração de resultados. Nossos projetos combinam inovação com
            pragmatismo para gerar impacto real nos processos e na performance do negócio.
          </p>

          <div className="mt-8 border-t border-blue-500/20 pt-6">
            <p className="text-slate-400 mb-4">Pronto para conversar sobre o seu projeto?</p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold"
            >
              Entrar em Contato
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
