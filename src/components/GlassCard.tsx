"use client";

import { useRef, MouseEvent, ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Intensité de l'inclinaison en degrés (défaut : 12) */
  tiltStrength?: number;
  /** Couleur du projecteur interne (défaut : rgba(0,212,255,0.10)) */
  glowColor?: string;
  /** Activer l'inclinaison 3D au survol (défaut : true) */
  tilt?: boolean;
  /** Activer le projecteur interne (défaut : true) */
  spotlight?: boolean;
  onClick?: () => void;
}

/**
 * GlassCard
 * ---------
 * Carte en verre dépoli avec :
 *  - Inclinaison gyroscopique 3D au survol de la souris
 *  - Projecteur interne qui suit le curseur
 *  - Élévation (translateZ) des enfants avec data-depth
 *
 * Usage :
 *   <GlassCard>
 *     <h3 data-depth="8">Titre qui flotte</h3>
 *     <p>Contenu normal</p>
 *   </GlassCard>
 */
export default function GlassCard({
  children,
  className = "",
  style = {},
  tiltStrength = 12,
  glowColor = "rgba(0, 212, 255, 0.10)",
  tilt = true,
  spotlight = true,
  onClick,
}: GlassCardProps) {
  const cardRef   = useRef<HTMLDivElement>(null);
  const glowRef   = useRef<HTMLDivElement>(null);

  /* ── Calcul de l'inclinaison ── */
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect   = card.getBoundingClientRect();
    // Position relative au centre de la carte (valeurs -0.5 à 0.5)
    const relX   = (e.clientX - rect.left)  / rect.width  - 0.5;
    const relY   = (e.clientY - rect.top)   / rect.height - 0.5;

    // Inclinaison : axe Y inversé (bord haut → penche vers nous)
    // Seulement si tilt est activé
    const rotX   = tilt ? relY * -tiltStrength : 0;
    const rotY   = tilt ? relX *  tiltStrength : 0;

    card.style.transform = `
      perspective(900px)
      rotateX(${rotX}deg)
      rotateY(${rotY}deg)
      scale3d(1.02, 1.02, 1.02)
    `;

    /* ── Déplacement du projecteur ── */
    // Seulement si spotlight est activé
    if (spotlight) {
      const glow = glowRef.current;
      if (!glow) return;
      
      const glowX  = (e.clientX - rect.left);
      const glowY  = (e.clientY - rect.top);
      glow.style.opacity    = "1";
      glow.style.left       = `${glowX}px`;
      glow.style.top        = `${glowY}px`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow) return;

    // Retour à la position neutre
    card.style.transform  = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    glow.style.opacity    = "0";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
      style={{
        /* Glassmorphism */
        background:             "rgba(255, 255, 255, 0.04)",
        border:                 "1px solid rgba(255, 255, 255, 0.08)",
        backdropFilter:         "blur(20px)",
        WebkitBackdropFilter:   "blur(20px)",
        borderRadius:           "20px",
        boxShadow:              "0 8px 48px rgba(0,0,0,0.70)",

        /* 3D */
        transformStyle:         "preserve-3d",
        transition:             "transform 0.15s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        willChange:             "transform",

        /* Conteneur relatif pour le projecteur */
        position:               "relative",
        overflow:               "hidden",
        cursor:                 onClick ? "pointer" : "default",

        ...style,
      }}
    >
      {/* Projecteur interne (suit la souris) */}
      {spotlight && (
        <div
          ref={glowRef}
          aria-hidden="true"
          style={{
            position:       "absolute",
            width:          "300px",
            height:         "300px",
            borderRadius:   "50%",
            background:     `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
            transform:      "translate(-50%, -50%)",
            pointerEvents:  "none",
            opacity:        0,
            transition:     "opacity 0.25s ease",
            zIndex:         0,
          }}
        />
      )}

      {/* Contenu (z-index 1 pour passer au-dessus du projecteur) */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}