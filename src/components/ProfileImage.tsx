"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="relative flex justify-center items-center my-6">
      {/* Ombre douce diffuse en arrière-plan */}
      <div className="absolute -inset-2 rounded-3xl bg-blue-500/5 blur-xl" />

      {/* Conteneur rectangulaire vertical allongé (Proportions 3:4) */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative w-64 h-84 rounded-2xl border border-neutral-200 p-1 bg-white overflow-hidden shadow-lg"
      >
        <Image
          src="/me.jpg" 
          alt="Cédrick Profil"
          fill
          className="object-cover rounded-xl"
          priority
        />
      </motion.div>
    </div>
  );
}
