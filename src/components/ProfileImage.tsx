"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * ProfileImage — Cyber version
 * - Double anneau rotatif (cyan + violet)
 * - Halo Gaussian blur
 * - Badge "Open to work" en bas
 * - Coins avec accent lumineux
 */
export default function ProfileImage() {
  return (
    <div
      style={{
        position:        "relative",
        width:           "320px",
        height:          "420px",
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "center",
      }}
    >
      {/* Halo arrière (flou gaussien) */}
      <div
        aria-hidden="true"
        style={{
          position:        "absolute",
          inset:           "-40px",
          background:      "radial-gradient(ellipse at center, rgba(0,212,255,0.2) 0%, rgba(123,47,255,0.15) 50%, transparent 75%)",
          filter:          "blur(40px)",
          borderRadius:    "50%",
          zIndex:          0,
          animation:       "haloBreath 6s ease-in-out infinite alternate",
        }}
      />

      {/* Anneau extérieur — Violet — tourne sens inverse */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{
          position:     "absolute",
          inset:        "-20px",
          borderRadius: "28px",
          border:       "1px dashed rgba(123,47,255,0.35)",
          zIndex:       1,
        }}
      />

      {/* Anneau intérieur — Cyan — tourne normalement */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          position:     "absolute",
          inset:        "-6px",
          borderRadius: "24px",
          border:       "1px solid transparent",
          backgroundImage: "linear-gradient(#0B0B0F, #0B0B0F), linear-gradient(135deg, var(--cyan), var(--violet), var(--cyan))",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
          zIndex:       1,
        }}
      />

      {/* Cadre principal (la photo) */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        style={{
          position:     "relative",
          width:        "100%",
          height:       "100%",
          borderRadius: "20px",
          overflow:     "hidden",
          zIndex:       2,
          background:   "var(--glass-bg)",
          border:       "1px solid var(--glass-border)",
          boxShadow:    "0 20px 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,212,255,0.1)",
        }}
      >
        <Image
          src="/me.jpg"
          alt="Cédrick Ratovonanahary"
          fill
          sizes="320px"
          className="object-cover object-top"
          priority
        />

        {/* Overlay dégradé bas (pour lisibilité du badge) */}
        <div
          style={{
            position:   "absolute",
            bottom:     0,
            left:       0,
            right:      0,
            height:     "40%",
            background: "linear-gradient(to top, rgba(11,11,15,0.85), transparent)",
            zIndex:     3,
          }}
        />

        {/* Badge Open to work */}
        <div
          style={{
            position:        "absolute",
            bottom:          "16px",
            left:            "50%",
            transform:       "translateX(-50%)",
            display:         "flex",
            alignItems:      "center",
            gap:             "8px",
            padding:         "7px 18px",
            borderRadius:    "50px",
            background:      "rgba(11,11,15,0.8)",
            border:          "1px solid rgba(0,212,255,0.25)",
            backdropFilter:  "blur(12px)",
            zIndex:          4,
            whiteSpace:      "nowrap",
          }}
        >
          <span
            style={{
              width:        "8px",
              height:       "8px",
              borderRadius: "50%",
              background:   "#4ADE80",
              boxShadow:    "0 0 8px #4ADE80",
              flexShrink:   0,
              animation:    "pulse 2s infinite",
            }}
          />
          <span
            style={{
              fontFamily:    "var(--font-body)",
              fontSize:      "12px",
              fontWeight:    600,
              color:         "var(--text-white)",
              letterSpacing: "0.04em",
            }}
          >
            Open to work
          </span>
        </div>

        {/* Coins lumineux — accent décoratif */}
        {/* Haut-gauche */}
        <div style={{ position:"absolute", top:0, left:0, width:"40px", height:"40px", zIndex:3 }}>
          <div style={{ position:"absolute", top:0, left:0, width:"2px", height:"16px", background:"var(--cyan)", boxShadow:"0 0 8px var(--cyan-glow)" }} />
          <div style={{ position:"absolute", top:0, left:0, height:"2px", width:"16px", background:"var(--cyan)", boxShadow:"0 0 8px var(--cyan-glow)" }} />
        </div>
        {/* Haut-droit */}
        <div style={{ position:"absolute", top:0, right:0, width:"40px", height:"40px", zIndex:3 }}>
          <div style={{ position:"absolute", top:0, right:0, width:"2px", height:"16px", background:"var(--violet)", boxShadow:"0 0 8px var(--violet-glow)" }} />
          <div style={{ position:"absolute", top:0, right:0, height:"2px", width:"16px", background:"var(--violet)", boxShadow:"0 0 8px var(--violet-glow)" }} />
        </div>
        {/* Bas-gauche */}
        <div style={{ position:"absolute", bottom:0, left:0, width:"40px", height:"40px", zIndex:3 }}>
          <div style={{ position:"absolute", bottom:0, left:0, width:"2px", height:"16px", background:"var(--violet)", boxShadow:"0 0 8px var(--violet-glow)" }} />
          <div style={{ position:"absolute", bottom:0, left:0, height:"2px", width:"16px", background:"var(--violet)", boxShadow:"0 0 8px var(--violet-glow)" }} />
        </div>
        {/* Bas-droit */}
        <div style={{ position:"absolute", bottom:0, right:0, width:"40px", height:"40px", zIndex:3 }}>
          <div style={{ position:"absolute", bottom:0, right:0, width:"2px", height:"16px", background:"var(--cyan)", boxShadow:"0 0 8px var(--cyan-glow)" }} />
          <div style={{ position:"absolute", bottom:0, right:0, height:"2px", width:"16px", background:"var(--cyan)", boxShadow:"0 0 8px var(--cyan-glow)" }} />
        </div>
      </motion.div>

      <style>{`
        @keyframes haloBreath {
          0%   { opacity: 0.8; transform: scale(1);    }
          100% { opacity: 1;   transform: scale(1.05); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>
    </div>
  );
}