"use client";

import { motion } from "framer-motion";
import { Variants } from "framer-motion";
import Skills       from "@/components/Skills";
import Projects     from "@/components/Projects";
import Contact      from "@/components/Contact";
import FadeIn       from "@/components/FadeIn";
import ProfileImage from "@/components/ProfileImage";
import { Download } from "lucide-react";

/* Animation variants pour le stagger */
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

const STATS = [
  { value: "2+", label: "ans d'XP"  },
  { value: "4",  label: "Projets"   },
  { value: "5+", label: "Technos"   },
];

export default function Home() {
  return (
    <>
      {/* ================================================================
          HERO
          ================================================================ */}
      <section
        style={{
          position:      "relative",
          minHeight:     "100vh",
          display:       "flex",
          alignItems:    "center",
          justifyContent:"center",
          padding:       "100px 24px 60px",
          zIndex:        2,
        }}
      >
        <div
          style={{
            maxWidth:            "1200px",
            width:               "100%",
            display:             "grid",
            gridTemplateColumns: "1fr",
            gap:                 "60px",
            alignItems:          "center",
          }}
          className="md:grid-cols-2-hero"
        >
          {/* ——— Colonne TEXTE ——— */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
          >
            {/* Badge disponible */}
            <motion.div variants={itemVariants}>
              <div
                style={{
                  display:         "inline-flex",
                  alignItems:      "center",
                  gap:             "8px",
                  padding:         "6px 16px",
                  borderRadius:    "50px",
                  background:      "var(--cyan-dim)",
                  border:          "1px solid rgba(0,212,255,0.2)",
                  marginBottom:    "28px",
                }}
              >
                <span
                  style={{
                    width: "8px", height: "8px",
                    borderRadius: "50%",
                    background: "#4ADE80",
                    boxShadow: "0 0 8px #4ADE80",
                    animation: "pulse 2s infinite",
                  }}
                />
                <span
                  style={{
                    fontFamily:    "var(--font-body)",
                    fontSize:      "12px",
                    fontWeight:    700,
                    color:         "var(--cyan)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Disponible pour stage / freelance
                </span>
              </div>
            </motion.div>

            {/* Nom principal */}
            <motion.div variants={itemVariants}>
              <h1
                style={{
                  fontFamily:    "var(--font-display)",
                  fontWeight:    800,
                  fontSize:      "clamp(42px, 6vw, 80px)",
                  lineHeight:    0.9,
                  letterSpacing: "-0.03em",
                  color:         "var(--text-white)",
                  textTransform: "uppercase",
                  marginBottom:  "12px",
                }}
              >
                RATOVONANAHARY
              </h1>
              <h1
                style={{
                  fontFamily:    "var(--font-display)",
                  fontWeight:    800,
                  fontSize:      "clamp(42px, 6vw, 80px)",
                  lineHeight:    0.9,
                  letterSpacing: "-0.03em",
                  background:    "linear-gradient(135deg, var(--cyan) 0%, var(--violet) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor:  "transparent",
                  backgroundClip: "text",
                  textTransform: "uppercase",
                  marginBottom:  "24px",
                }}
              >
                Cédrick
              </h1>
            </motion.div>

            {/* Titre poste */}
            <motion.div variants={itemVariants}>
              <h2
                style={{
                  fontFamily:  "var(--font-body)",
                  fontWeight:  500,
                  fontSize:    "clamp(16px, 2vw, 22px)",
                  color:       "var(--text-lunar)",
                  marginBottom:"20px",
                  letterSpacing:"0.01em",
                }}
              >
                Développeur Full Stack
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p
                style={{
                  fontFamily:  "var(--font-body)",
                  fontSize:    "15px",
                  lineHeight:  1.75,
                  color:       "var(--text-muted)",
                  maxWidth:    "480px",
                  marginBottom:"36px",
                }}
              >
                2 ans d&apos;expérience en autodidacte et projets académiques.
                Je conçois des solutions digitales robustes et scalables, avec
                une expertise sur les architectures modernes et l&apos;expérience utilisateur.
              </p>
            </motion.div>

            {/* CTA Boutons */}
            <motion.div
              variants={itemVariants}
              style={{ display: "flex", flexWrap: "wrap", gap: "14px", marginBottom: "48px" }}
            >
              <a href="#projets" className="btn-cyber btn-primary">
                Voir mes projets
              </a>
              <a href="#contact" className="btn-cyber btn-ghost">
                Me contacter
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber btn-outline-cyan"
              >
                <Download size={16} />
                CV
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              style={{ display: "flex", gap: "40px" }}
            >
              {STATS.map((s) => (
                <div key={s.label}>
                  <p
                    style={{
                      fontFamily:  "var(--font-display)",
                      fontWeight:  800,
                      fontSize:    "28px",
                      background:  "linear-gradient(135deg, var(--cyan), var(--violet))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor:  "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    style={{
                      fontFamily:  "var(--font-body)",
                      fontSize:    "12px",
                      color:       "var(--text-muted)",
                      marginTop:   "4px",
                      textTransform:"uppercase",
                      letterSpacing:"0.08em",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ——— Colonne PHOTO ——— */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            style={{
              display:        "flex",
              justifyContent: "center",
              alignItems:     "center",
            }}
          >
            <ProfileImage />
          </motion.div>
        </div>

        {/* Flèche scroll */}
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          onClick={() =>
            document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
          }
          style={{
            position:    "absolute",
            bottom:      "32px",
            left:        "50%",
            transform:   "translateX(-50%)",
            background:  "none",
            border:      "none",
            cursor:      "pointer",
            color:       "var(--text-muted)",
            zIndex:      3,
          }}
          aria-label="Défiler vers le bas"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.button>
      </section>

      {/* Séparateur */}
      <div style={{ padding: "0 24px", zIndex: 2, position: "relative" }}>
        <div className="cyber-line" />
      </div>

      <FadeIn><Skills   /></FadeIn>
      <FadeIn delay={0.15}><Projects /></FadeIn>
      <FadeIn delay={0.3}><Contact  /></FadeIn>

      {/* Styles CSS internes */}
      <style>{`
        @media (min-width: 768px) {
          .md\\:grid-cols-2-hero {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>
    </>
  );
}