"use client"
import { motion } from "framer-motion"
import { Send, Mail, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Halo lumineux secondaire en bas */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Texte de gauche */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Travaillons <span className="text-blue-500">ensemble</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Disponible pour des opportunités de stage ou de missions freelance. 
              N&apos;hésitez pas à me contacter pour discuter de vos projets.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-blue-500">
                  <Mail className="w-6 h-6" />
                </div>
                <span>cedratovonanahary@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-blue-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <span>Antananarivo, Madagascar</span>
              </div>
            </div>
          </div>

          {/* Formulaire de droite */}
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Nom complet</label>
              <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition" placeholder="Cédrick R." />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
              <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition" placeholder="nom@exemple.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
              <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition" placeholder="Parlez-moi de votre projet..."></textarea>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition transform hover:scale-[1.02]">
              Envoyer <Send className="w-5 h-5" />
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  )
}
