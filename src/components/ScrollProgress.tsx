"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Le "spring" rend le mouvement fluide et moins rigide qu'un simple trait
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "4px", // Un peu plus fin pour l'élégance
        background: "linear-gradient(90deg, #3b82f6, #8b5cf6)", // Dégradé bleu vers violet
        transformOrigin: "0%",
        zIndex: 100,
        boxShadow: "0px 0px 8px rgba(59, 130, 246, 0.6)" // Effet de lueur (glow)
      }}
    />
  );
}
