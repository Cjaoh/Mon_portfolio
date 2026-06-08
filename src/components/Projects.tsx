"use client";

import { motion } from "framer-motion";
import { FolderGit2, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import GlassCard from "@/components/GlassCard";
import { projectsData } from "@/data/projectsData";

/* Couleur d'accent par techno */
const TECH_COLORS: Record<string, string> = {
  "Dart / Flutter":              "#38BDF8",
  "TypeScript / Next.js":        "#00D4FF",
  "Java / Angular / TypeScript": "#A78BFA",
  "Dart / TypeScript":           "#4ADE80",
};

export default function Projects() {
  return (
    <section
      id="projets"
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
            Portfolio
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
            Projets{" "}
            <span
              style={{
                background:           "linear-gradient(135deg, var(--cyan), var(--violet))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor:  "transparent",
                backgroundClip:       "text",
              }}
            >
              Sélectionnés
            </span>
          </h2>
        </div>

        {/* ——— Grille 2 colonnes ——— */}
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))",
            gap:                 "28px",
          }}
        >
          {projectsData.map((project, i) => {
            const accentColor = TECH_COLORS[project.tech] ?? "var(--cyan)";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <GlassCard
                  style={{
                    padding:        "36px 32px",
                    height:         "100%",
                    display:        "flex",
                    flexDirection:  "column",
                    justifyContent: "space-between",
                  }}
                  tilt
                  spotlight
                >
                  {/* ——— Corps ——— */}
                  <div>
                    {/* Tag tech + icône */}
                    <div
                      style={{
                        display:         "flex",
                        justifyContent:  "space-between",
                        alignItems:      "center",
                        marginBottom:    "28px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily:    "var(--font-body)",
                          fontSize:      "10px",
                          fontWeight:    700,
                          textTransform: "uppercase",
                          letterSpacing: "0.12em",
                          padding:       "5px 14px",
                          borderRadius:  "50px",
                          background:    `${accentColor}18`,
                          border:        `1px solid ${accentColor}35`,
                          color:         accentColor,
                        }}
                      >
                        {project.tech}
                      </span>
                      <FolderGit2
                        size={20}
                        style={{ color: "var(--text-muted)", flexShrink: 0 }}
                      />
                    </div>

                    {/* Titre */}
                    <h3
                      style={{
                        fontFamily:    "var(--font-display)",
                        fontWeight:    700,
                        fontSize:      "22px",
                        color:         "var(--text-white)",
                        marginBottom:  "14px",
                        letterSpacing: "-0.01em",
                        lineHeight:    1.2,
                      }}
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily:  "var(--font-body)",
                        fontSize:    "14px",
                        color:       "var(--text-muted)",
                        lineHeight:  1.7,
                        marginBottom:"0",
                      }}
                    >
                      {project.desc}
                    </p>
                  </div>

                  {/* ——— Footer carte ——— */}
                  <div
                    style={{
                      marginTop:    "32px",
                      paddingTop:   "24px",
                      borderTop:    "1px solid rgba(255,255,255,0.06)",
                      display:      "flex",
                      alignItems:   "center",
                      justifyContent:"space-between",
                    }}
                  >
                    {/* Voir le projet */}
                    <Link
                      href={`/projets/${project.id}`}
                      style={{
                        display:       "inline-flex",
                        alignItems:    "center",
                        gap:           "6px",
                        fontFamily:    "var(--font-body)",
                        fontSize:      "13px",
                        fontWeight:    600,
                        color:         "var(--text-lunar)",
                        textDecoration:"none",
                        transition:    "color 0.25s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = accentColor;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "var(--text-lunar)";
                      }}
                    >
                      Voir le projet
                      <ArrowUpRight size={15} />
                    </Link>

                    {/* GitHub */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily:    "var(--font-body)",
                        fontSize:      "12px",
                        fontWeight:    600,
                        color:         "var(--text-muted)",
                        textDecoration:"none",
                        padding:       "6px 14px",
                        borderRadius:  "50px",
                        border:        "1px solid rgba(255,255,255,0.08)",
                        background:    "rgba(255,255,255,0.03)",
                        transition:    "all 0.25s",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = accentColor;
                        el.style.color       = accentColor;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "rgba(255,255,255,0.08)";
                        el.style.color       = "var(--text-muted)";
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