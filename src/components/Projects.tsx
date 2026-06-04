"use client";
import { motion } from "framer-motion";
import { FolderGit2, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";

export default function Projects() {
  return (
    <section id="projets" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-14 text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
            Portfolio
          </p>
          <h2
            className="text-3xl md:text-5xl font-black uppercase tracking-tighter"
            style={{ color: "var(--text-primary)" }}
          >
            Projets <span className="gradient-text">Sélectionnés</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 280 }}
              className="card rounded-2xl p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-5">
                  <span className={`text-xs font-bold uppercase tracking-wider border px-3 py-1 rounded-full ${project.techClass}`}>
                    {project.tech}
                  </span>
                  <FolderGit2 className="w-5 h-5" style={{ color: "var(--text-muted)" }} />
                </div>
                <h3
                  className="text-xl font-black mb-2 group-hover:text-blue-500 transition-colors"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {project.desc}
                </p>
              </div>

              <div
                className="mt-7 pt-5 flex items-center justify-between"
                style={{ borderTop: "1px solid var(--border-color)" }}
              >
                <Link
                  href={`/projets/${project.id}`}
                  className="text-sm font-semibold flex items-center gap-1.5 hover:text-blue-500 transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Voir le projet
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-3 py-1.5 rounded-full hover:scale-105 transition-all"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-muted)",
                  }}
                >
                  GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}