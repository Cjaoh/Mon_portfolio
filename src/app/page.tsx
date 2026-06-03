"use client"
import { motion } from "framer-motion"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import FadeIn from "@/components/FadeIn"
import ProfileImage from "@/components/ProfileImage"; // L'import est déjà bon

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-black px-6 relative overflow-hidden">
        {/* Effet de Halo lumineux en arrière-plan */}
        <div className="absolute top-1/4 w-150 h-100 bg-blue-600/20 blur-[120px] rounded-full -z-10" />
        
        {/* Grille : Colonne unique sur mobile, 2 colonnes sur grand écran (md) */}
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
          
          {/* Bloc de Gauche : Textes et Boutons */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left flex flex-col md:items-start"
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none">
              RATOVONANAHARY <br />
              <span className="text-blue-500">Cédrick</span>
            </h1>
            
            <h2 className="mt-4 text-xl md:text-2xl font-bold text-gray-200">
              Développeur Full Stack Senior en devenir
            </h2>

            <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
              Fort de **2 ans d&apos;expérience** en autodidacte et projets académiques, 
              je conçois des solutions digitales robustes et scalables. 
              Expertise focalisée sur les architectures modernes et l&apos;optimisation de l&apos;expérience utilisateur.
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#skills" className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform cursor-pointer">
                Explorer ma stack
              </a>
              <a href="#contact" className="border border-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition cursor-pointer">
                Me contacter
              </a>
            </div>
          </motion.div>

          {/* Bloc de Droite : La photo de profil plus grande */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center md:justify-end order-first md:order-last"
          >
            <ProfileImage />
          </motion.div>

        </div>
      </main>

      <FadeIn>
        <Skills />
      </FadeIn>

      <FadeIn delay={0.2}>
        <Projects />
      </FadeIn>

      <FadeIn delay={0.3}>
        <Contact />
      </FadeIn>
    </>
  )
}
