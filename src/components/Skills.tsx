"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import { Code2, Layers, Smartphone, Monitor, Terminal } from "lucide-react";

const SKILLS = [
  {
    name:  "TypeScript / JavaScript",
    level: "Expertise Frontend & Fullstack",
    icon:  <Code2      size={26} />,
    color: "#00D4FF",
    tag:   "Expert",
    pct:   88,
  },
  {
    name:  "Spring Boot (Java)",
    level: "Architectures REST & Backoffice",
    icon:  <Layers     size={26} />,
    color: "#4ADE80",
    tag:   "Avancé",
    pct:   72,
  },
  {
    name:  "Dart / Flutter",
    level: "Applications Mobiles Cross-Platform",
    icon:  <Smartphone size={26} />,
    color: "#38BDF8",
    tag:   "Avancé",
    pct:   70,
  },
  {
    name:  "Angular",
    level: "Interfaces modulaires & SPA",
    icon:  <Monitor    size={26} />,
    color: "#F87171",
    tag:   "Avancé",
    pct:   68,
  },
  {
    name:  "Python",
    level: "Analyse de données & Scripts",
    icon:  <Terminal   size={26} />,
    color: "#FBBF24",
    tag:   "Avancé",
    pct:   65,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding:  "120px 24px 100px",
        position: "relative",
        zIndex:   2,
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* ——— Header ——— */}
        <div style={{ marginBottom: "72px" }}>
          <p
            style={{
              fontFamily:    "var(--font-body)",
              fontSize:      "11px",
              fontWeight:    700,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color:         "var(--cyan)",
              marginBottom:  "16px",
            }}
          >
            Compétences
          </p>
          <h2
            style={{
              fontFamily:    "var(--font-display)",
              fontWeight:    800,
              fontSize:      "clamp(36px, 5vw, 60px)",
              letterSpacing: "-0.03em",
              lineHeight:    1,
              color:         "var(--text-white)",
              textTransform: "uppercase",
            }}
          >
            Ma{" "}
            <span
              style={{
                background:           "linear-gradient(135deg, var(--cyan), var(--violet))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor:  "transparent",
                backgroundClip:       "text",
              }}
            >
              Stack Technique
            </span>
          </h2>
        </div>

        {/* ——— Grille — 2 colonnes, gap généreux ——— */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
            gap:                 "28px",
          }}
        >
          {SKILLS.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <GlassCard style={{ padding: "36px 32px" }} tilt spotlight>

                {/* Ligne du haut : icône + badge */}
                <div
                  style={{
                    display:         "flex",
                    justifyContent:  "space-between",
                    alignItems:      "flex-start",
                    marginBottom:    "24px",
                  }}
                >
                  {/* Icône */}
                  <div
                    style={{
                      width:           "58px",
                      height:          "58px",
                      borderRadius:    "16px",
                      background:      `${skill.color}18`,
                      border:          `1px solid ${skill.color}30`,
                      display:         "flex",
                      alignItems:      "center",
                      justifyContent:  "center",
                      color:           skill.color,
                      flexShrink:      0,
                    }}
                  >
                    {skill.icon}
                  </div>

                  {/* Badge */}
                  <span
                    style={{
                      fontFamily:    "var(--font-body)",
                      fontSize:      "11px",
                      fontWeight:    700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      padding:       "5px 14px",
                      borderRadius:  "50px",
                      background:    `${skill.color}18`,
                      border:        `1px solid ${skill.color}40`,
                      color:         skill.color,
                      whiteSpace:    "nowrap",
                    }}
                  >
                    {skill.tag}
                  </span>
                </div>

                {/* Nom */}
                <h3
                  style={{
                    fontFamily:    "var(--font-display)",
                    fontWeight:    700,
                    fontSize:      "20px",
                    color:         "var(--text-white)",
                    marginBottom:  "8px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {skill.name}
                </h3>

                {/* Sous-titre */}
                <p
                  style={{
                    fontFamily:   "var(--font-body)",
                    fontSize:     "13px",
                    color:        "var(--text-muted)",
                    marginBottom: "28px",
                    lineHeight:   1.5,
                  }}
                >
                  {skill.level}
                </p>

                {/* Barre de progression */}
                <div
                  style={{
                    height:       "3px",
                    borderRadius: "4px",
                    background:   "rgba(255,255,255,0.06)",
                    overflow:     "hidden",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, delay: i * 0.1, ease: "easeOut" }}
                    style={{
                      height:     "100%",
                      borderRadius: "4px",
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                      boxShadow:  `0 0 12px ${skill.color}60`,
                    }}
                  />
                </div>

                {/* Pourcentage */}
                <p
                  style={{
                    fontFamily:  "var(--font-body)",
                    fontSize:    "12px",
                    color:       "var(--text-muted)",
                    marginTop:   "10px",
                    textAlign:   "right",
                    letterSpacing: "0.04em",
                  }}
                >
                  {skill.pct}%
                </p>

              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}