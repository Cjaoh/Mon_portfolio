"use client";

import { motion } from "framer-motion";
import { FolderGit2, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";

export default function Projects() {
  return (
    <section id="projets" className="py-20 bg-black text-white px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-center md:text-left">
          Projets <span className="text-blue-500">Sélectionnés</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="p-8 rounded-2xl bg-linear-to-br from-white/5 to-transparent border border-white/10 flex flex-col justify-between hover:border-blue-500/30 shadow-2xl transition-all duration-300 relative group"
            >
              <div>
                <div className="flex justify-between items-start">
                  <span className={`text-xs font-bold uppercase tracking-wider border px-3 py-1 rounded-full ${project.techClass}`}>
                    {project.tech}
                  </span>
                  <FolderGit2 className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mt-5 mb-2 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5">
                {/*  Utilisation de Link vers la page interne */}
                <Link 
                  href={`/projets/${project.id}`}
                  className="text-sm font-semibold text-gray-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                >
                  Découvrir le projet 
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
