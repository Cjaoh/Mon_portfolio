"use client"
import { Menu, X } from "lucide-react" 
import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  // Détecte le scroll pour changer le style
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${
      isScrolled 
        ? "bg-black/70 backdrop-blur-xl border-b border-white/10 h-16" 
        : "bg-transparent h-20"
    } text-white flex items-center`}>
      <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
        {/* Ton Logo dégradé */}
        <span className="text-xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          CED.DEV
        </span>
        
        {/* Menu Desktop */}
        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-400">
          <a href="#projets" className="hover:text-white transition">Projets</a>
          <a href="#skills" className="hover:text-white transition">Compétences</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Bouton Mobile */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4 text-gray-300 md:hidden"
        >
          <a href="#projets" onClick={() => setIsOpen(false)}>Projets</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Compétences</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </motion.div>
      )}
    </nav>
  )
}
