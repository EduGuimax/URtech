"use client"

import { Users } from "lucide-react"

const teamMembers = [
  {
    name: "Eduardo Guimarães",
    experience: "4 anos",
    expertise: "Criação de software para design web, automação e desenvolvimento em ambiente fabril",
    initials: "EG",
  },
  {
    name: "Raphael Urtiga",
    experience: "6 anos",
    expertise: "Experiência na Jaguar Land Rover em inovação com grandes projetos de desenvolvimento de software",
    initials: "RU",
  },
  {
    name: "Jorge Fernandes",
    experience: "5 anos",
    expertise: "Experiência na Jaguar Land Rover em criação de novos sistemas e automação para otimização de processos",
    initials: "JF",
  },
]

export default function Team() {
  return (
    <section id="equipe" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-32 bg-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-blue-400 mr-3" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Nossa Equipe</h2>
          </div>
          <p className="text-lg text-slate-400">
            Profissionais experientes e especializados em inovação e desenvolvimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-8 rounded-lg border border-blue-500/20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 hover:border-cyan-500/50 transition group"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                  {member.initials}
                </div>
              </div>

              {/* Info */}
              <h3 className="text-2xl font-bold text-white text-center mb-2">{member.name}</h3>
              <p className="text-blue-400 text-center font-semibold mb-4">{member.experience} de experiência</p>
              <p className="text-slate-400 text-center leading-relaxed">{member.expertise}</p>

              {/* Highlight bar */}
              <div className="mt-6 h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
