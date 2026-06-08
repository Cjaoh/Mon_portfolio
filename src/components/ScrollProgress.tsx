"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: "linear-gradient(90deg, var(--cyan), var(--violet))",
        transformOrigin: "0%",
        zIndex: 200,
        boxShadow: "0 0 12px var(--cyan-glow), 0 0 24px var(--violet-glow)",
      }}
    />
  );
}