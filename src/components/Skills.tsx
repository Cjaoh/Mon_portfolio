"use client";

import { motion }    from "framer-motion";
import { Code2, Layers, Smartphone, Monitor, Terminal } from "lucide-react";
import GlassCard     from "@/components/GlassCard";

const skills = [
  {
    name:      "TypeScript / JavaScript",
    level:     "Expertise Frontend & Fullstack",
    icon:      <Code2      className="w-6 h-6" />,
    iconColor: "#00D4FF",
    tag:       "Expert",
    pct:       88,
  },
  {
    name:      "Spring Boot (Java)",
    level:     "Architectures REST & Backoffice",
    icon:      <Layers     className="w-6 h-6" />,
    iconColor: "#7B2FFF",
    tag:       "Avancé",
    pct:       72,
  },
  {
    name:      "Dart / Flutter",
    level:     "Applications Mobiles Cross-Platform",
    icon:      <Smartphone className="w-6 h-6" />,
    iconColor: "#00D4FF",
    tag:       "Avancé",
    pct:       70,
  },
  {
    name:      "Angular",
    level:     "Interfaces modulaires & SPA",
    icon:      <Monitor    className="w-6 h-6" />,
    iconColor: "#7B2FFF",
    tag:       "Avancé",
    pct:       68,
  },
  {
    name:      "Python",
    level:     "Analyse de données & Scripts",
    icon:      <Terminal   className="w-6 h-6" />,
    iconColor: "#00D4FF",
    tag:       "Avancé",
    pct:       65,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* En-tête */}
        <div className="mb-14 text-center md:text-left">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "var(--cyan)" }}
          >
            Compétences
          </p>
          <h2
            className="text-3xl md:text-5xl font-black uppercase tracking-tighter"
            style={{ color: "var(--text-white)" }}
          >
            Ma{" "}
            <span className="gradient-text">Stack Technique</span>
          </h2>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <GlassCard
                glowColor={
                  s.iconColor === "#00D4FF"
                    ? "rgba(0,212,255,0.12)"
                    : "rgba(123,47,255,0.12)"
                }
                className="p-6"
              >
                <div className="flex items-start gap-5">

                  {/* Icône */}
                  <div
                    style={{
                      padding:         "12px",
                      borderRadius:    "14px",
                      backgroundColor: `${s.iconColor}18`,
                      border:          `1px solid ${s.iconColor}30`,
                      color:           s.iconColor,
                      flexShrink:      0,
                    }}
                  >
                    {s.icon}
                  </div>

                  {/* Infos */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <h3
                        className="text-lg font-bold"
                        style={{ color: "var(--text-white)" }}
                        /* data-depth="6" → pour un futur effet parallaxe */
                      >
                        {s.name}
                      </h3>

                      {/* Badge niveau */}
                      <span
                        className="text-xs font-bold px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: `${s.iconColor}18`,
                          border:          `1px solid ${s.iconColor}44`,
                          color:           s.iconColor,
                        }}
                      >
                        {s.tag}
                      </span>
                    </div>

                    <p
                      className="text-sm mt-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {s.level}
                    </p>

                    {/* Barre de progression */}
                    <div
                      className="mt-3 h-0.75 rounded-full overflow-hidden"
                      style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.1 + 0.2, ease: "easeOut" }}
                        style={{
                          height:     "100%",
                          borderRadius: "9999px",
                          background: `linear-gradient(90deg, ${s.iconColor}, ${
                            s.iconColor === "#00D4FF" ? "#7B2FFF" : "#00D4FF"
                          })`,
                          boxShadow: `0 0 8px ${s.iconColor}80`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}