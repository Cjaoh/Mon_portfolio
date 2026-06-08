"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop:       "1px solid rgba(255,255,255,0.06)",
        backgroundColor: "#000000",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p
          className="text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          © {new Date().getFullYear()}{" "}
          <span className="gradient-text font-semibold">RATOVONANAHARY Cédrick</span>.
          Tous droits réservés.
        </p>

        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          Construit avec{" "}
          <span style={{ color: "var(--cyan)" }}>Next.js</span>
          {" · "}
          <span style={{ color: "var(--violet)" }}>Framer Motion</span>
          {" · "}
          <span style={{ color: "var(--cyan)" }}>Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}