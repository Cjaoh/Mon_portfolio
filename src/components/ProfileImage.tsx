"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative flex justify-center items-center">
      {/* Halo */}
      <div
        style={{ background: "radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%)" }}
        className="absolute inset-0 blur-3xl scale-110 -z-10"
      />

      {/* Anneau décoratif tournant */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full border border-dashed"
        style={{
          width: "calc(100% + 40px)",
          height: "calc(100% + 40px)",
          borderColor: "var(--accent-glow)",
          top: "-20px",
          left: "-20px",
        }}
      />

      {/* Cadre photo tall portrait */}
      <motion.div
        whileHover={{ scale: 1.03, rotate: -1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative overflow-hidden shadow-2xl"
        style={{
          width:        "280px",
          height:       "390px",
          borderRadius: "22px",
          border:       "2px solid var(--border-color)",
          background:   "var(--bg-card)",
          boxShadow:    "var(--shadow-card), var(--shadow-glow)",
        }}
      >
        <Image
          src="/me.jpg"
          alt="Cédrick Ratovonanahary"
          fill
          sizes="280px"
          className="object-cover object-top"
          priority
        />

        {/* Badge Open to work */}
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold backdrop-blur-md whitespace-nowrap"
          style={{
            backgroundColor: "rgba(10,10,15,0.72)",
            border: "1px solid var(--border-color)",
            color: "var(--text-primary)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Open to work
        </div>
      </motion.div>
    </div>
  );
}