"use client";

/**
 * AmbientBackground
 * -----------------
 * Affiche 3 cercles géants flous (cyan + violet) qui flottent
 * lentement en arrière-plan avec des vitesses asymétriques.
 * Placé en position fixed z-index 0, derrière tout le contenu.
 */
export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* ── Orbe 1 : Cyan — en haut à droite — vitesse lente (22s) ── */}
      <div
        style={{
          position: "absolute",
          top: "-160px",
          right: "-100px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,212,255,0.22) 0%, rgba(0,212,255,0.06) 50%, transparent 70%)",
          filter: "blur(120px)",
          animation: "float-slow 22s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* ── Orbe 2 : Violet — en bas à gauche — vitesse moyenne (18s) ── */}
      <div
        style={{
          position: "absolute",
          bottom: "-200px",
          left: "-120px",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(123,47,255,0.20) 0%, rgba(123,47,255,0.05) 50%, transparent 70%)",
          filter: "blur(140px)",
          animation: "float-medium 18s ease-in-out infinite",
          animationDelay: "-6s",
          willChange: "transform",
        }}
      />

      {/* ── Orbe 3 : Cyan doux — centre gauche — vitesse rapide (14s) ── */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "20%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,212,255,0.10) 0%, rgba(123,47,255,0.08) 50%, transparent 70%)",
          filter: "blur(130px)",
          animation: "float-fast 14s ease-in-out infinite",
          animationDelay: "-3s",
          willChange: "transform",
        }}
      />
    </div>
  );
}