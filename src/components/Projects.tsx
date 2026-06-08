"use client";

import { motion }        from "framer-motion";
import { FolderGit2, ArrowUpRight } from "lucide-react";
import Link              from "next/link";
import { projectsData }  from "@/data/projectsData";
import GlassCard         from "@/components/GlassCard";

/* Couleur d'accentuation par projet (alterne cyan / violet) */
const ACCENTS = ["#00D4FF", "#7B2FFF", "#00D4FF", "#7B2FFF"];

export default function Projects() {
  return (
    <section id="projets" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* En-tête */}
        <div className="mb-14 text-center md:text-left">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "var(--cyan)" }}
          >
            Portfolio
          </p>
          <h2
            className="text-3xl md:text-5xl font-black uppercase tracking-tighter"
            style={{ color: "var(--text-white)" }}
          >
            Projets{" "}
            <span className="gradient-text">Sélectionnés</span>
          </h2>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => {
            const accent = ACCENTS[index % ACCENTS.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard
                  className="p-7 flex flex-col justify-between h-full group"
                  glowColor={
                    accent === "#00D4FF"
                      ? "rgba(0,212,255,0.10)"
                      : "rgba(123,47,255,0.10)"
                  }
                  style={{
                    /* Bordure colorée en haut */
                    borderTop: `1px solid ${accent}55`,
                  }}
                >
                  {/* Haut */}
                  <div>
                    <div className="flex justify-between items-start mb-5">
                      {/* Badge techno */}
                      <span
                        className="text-xs font-bold uppercase tracking-wider border px-3 py-1 rounded-full"
                        style={{
                          color:           accent,
                          borderColor:     `${accent}44`,
                          backgroundColor: `${accent}12`,
                        }}
                      >
                        {project.tech}
                      </span>
                      <FolderGit2
                        className="w-5 h-5"
                        style={{ color: accent, opacity: 0.6 }}
                      />
                    </div>

                    {/* Titre */}
                    <h3
                      className="text-xl font-black mb-2 transition-colors duration-200"
                      style={{ color: "var(--text-white)" }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {project.desc}
                    </p>
                  </div>

                  {/* Bas — liens */}
                  <div
                    className="mt-7 pt-5 flex items-center justify-between"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <Link
                      href={`/projets/${project.id}`}
                      className="text-sm font-semibold flex items-center gap-1.5 transition-colors duration-200"
                      style={{ color: "var(--text-lunar)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-lunar)")}
                    >
                      Voir le projet
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold px-3 py-1.5 rounded-full transition-all hover:scale-105"
                      style={{
                        backgroundColor: `${accent}12`,
                        border:          `1px solid ${accent}30`,
                        color:           accent,
                      }}
                    >
                      GitHub →
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}