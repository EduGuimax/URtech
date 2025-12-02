"use client"

import { Mail, MapPin, Building2, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8 py-12 bg-slate-950 border-t border-blue-500/20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">URTECH</h3>
            <p className="text-slate-400 text-sm">Soluções tecnológicas inteligentes para sua empresa.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Software Exclusivos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Automação
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Gestão de Documentos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Drones
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Portfólio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex gap-2 items-center">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:contato@urtech.com" className="hover:text-blue-400 transition">
                  urtech.contato@gmail.com
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Instagram size={16} className="text-pink-500" />
                <a href="https://www.instagram.com/urtech_br/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                  @urtech_br
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Building2 size={16} className="text-blue-400" />
                <span className="hover:text-blue-400 transition">CNPJ: 62.707.330/0001-79</span>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>São Paulo - SP, Brasil</span>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Catalão - GO, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2025 URTECH. Todos os direitos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition">
                Privacidade
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Termos
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
