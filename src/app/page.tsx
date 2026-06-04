"use client";

import { motion } from "framer-motion";
import Skills       from "@/components/Skills";
import Projects     from "@/components/Projects";
import Contact      from "@/components/Contact";
import FadeIn       from "@/components/FadeIn";
import ProfileImage from "@/components/ProfileImage";
import { Download } from "lucide-react";

const STATS = [
  { value: "2+", label: "ans d'XP" },
  { value: "4",  label: "projets"  },
  { value: "5",  label: "technos"  },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex items-center justify-center min-h-screen px-6 pt-20 overflow-hidden">

        {/* Fond radial */}
        <div className="hero-bg-gradient absolute inset-0 -z-10" />

        {/* Grille légère */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Textes */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            {/* Badge disponible */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                color: "var(--text-secondary)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Disponible pour stage / freelance
            </motion.div>

            <h1
              className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] uppercase"
              style={{ color: "var(--text-primary)" }}
            >
              RATOVONANAHARY
              <br />
              <span className="gradient-text">Cédrick</span>
            </h1>

            <h2
              className="mt-5 text-xl md:text-2xl font-semibold"
              style={{ color: "var(--text-secondary)" }}
            >
              Développeur Full Stack
            </h2>

            <p
              className="mt-5 text-base md:text-lg leading-relaxed max-w-lg"
              style={{ color: "var(--text-muted)" }}
            >
              2 ans d&apos;expérience en autodidacte et projets académiques.
              Je conçois des solutions digitales robustes et scalables, avec
              une expertise sur les architectures modernes et l&apos;expérience utilisateur.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projets"
                className="px-7 py-3 rounded-full font-bold text-sm text-white transition-all hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
                  boxShadow: "0 4px 24px var(--accent-glow)",
                }}
              >
                Voir mes projets
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
                style={{
                  backgroundColor: "var(--bg-card)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-primary)",
                }}
              >
                Me contacter
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm transition-all hover:scale-105"
                style={{
                  border: "1px solid var(--accent)",
                  color: "var(--accent)",
                }}
              >
                <Download className="w-4 h-4" />
                CV
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-black gradient-text">{s.value}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="flex justify-center md:justify-end order-first md:order-last"
          >
            <ProfileImage />
          </motion.div>
        </div>

        {/* Flèche scroll */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          style={{ color: "var(--text-muted)" }}
          onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </section>

      <FadeIn><Skills /></FadeIn>
      <FadeIn delay={0.2}><Projects /></FadeIn>
      <FadeIn delay={0.3}><Contact /></FadeIn>
    </>
  );
}