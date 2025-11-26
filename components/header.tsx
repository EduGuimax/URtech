"use client"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-blue-500/20 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2 font-bold text-xl text-blue-400">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full"></div>
              <span>URTECH</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <a href="#servicos" className="text-slate-300 hover:text-blue-400 transition">
              Serviços
            </a>
            <a href="#features" className="text-slate-300 hover:text-blue-400 transition">
              Recursos
            </a>
            <a href="#contato" className="text-slate-300 hover:text-blue-400 transition">
              Contato
            </a>
          </nav>

          <Link
            href="/contact"
            className="hidden md:flex bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
          >
            Entrar em Contato
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-blue-400" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <a href="#servicos" className="block text-slate-300 hover:text-blue-400 transition">
              Serviços
            </a>
            <a href="#features" className="block text-slate-300 hover:text-blue-400 transition">
              Recursos
            </a>
            <a href="#contato" className="block text-slate-300 hover:text-blue-400 transition">
              Contato
            </a>
            <Link
              href="/contact"
              className="block text-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
            >
              Entrar em Contato
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
