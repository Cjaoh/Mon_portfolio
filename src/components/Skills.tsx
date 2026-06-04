"use client";
import { motion } from "framer-motion";
import { Code2, Layers, Smartphone, Monitor, Terminal } from "lucide-react";

const skills = [
  { name: "TypeScript / JavaScript", level: "Expertise Frontend & Fullstack",        icon: <Code2      className="w-6 h-6" />, iconColor: "#3b82f6", tag: "Expert"        },
  { name: "Spring Boot (Java)",       level: "Architectures REST & Backoffice",       icon: <Layers     className="w-6 h-6" />, iconColor: "#10b981", tag: "Avancé"        },
  { name: "Dart / Flutter",           level: "Applications Mobiles Cross-Platform",   icon: <Smartphone className="w-6 h-6" />, iconColor: "#0ea5e9", tag: "Avancé"        },
  { name: "Angular",                  level: "Interfaces modulaires & SPA",           icon: <Monitor    className="w-6 h-6" />, iconColor: "#ef4444", tag: "Avancé" },
  { name: "Python",                   level: "Analyse de données & Scripts",          icon: <Terminal   className="w-6 h-6" />, iconColor: "#f59e0b", tag: "Avancé" },
];

const barWidth: Record<string, string> = {
  "Expert": "88%", "Avancé": "70%", "Intermédiaire": "52%",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-14 text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
            Compétences
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter" style={{ color: "var(--text-primary)" }}>
            Ma <span className="gradient-text">Stack Technique</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, x: 3 }}
              transition={{ type: "spring", stiffness: 320 }}
              className="card p-6 rounded-2xl flex items-start gap-5 cursor-default"
            >
              <div
                className="p-3 rounded-xl shrink-0"
                style={{ backgroundColor: `${s.iconColor}18`, color: s.iconColor }}
              >
                {s.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                    {s.name}
                  </h3>
                  <span
                    className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${s.iconColor}18`,
                      border: `1px solid ${s.iconColor}44`,
                      color: s.iconColor,
                    }}
                  >
                    {s.tag}
                  </span>
                </div>
                <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{s.level}</p>

                {/* Barre de progression */}
                <div className="mt-3 h-1 rounded-full overflow-hidden" style={{ backgroundColor: "var(--border-color)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: barWidth[s.tag] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: s.iconColor }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}