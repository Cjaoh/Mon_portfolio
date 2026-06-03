"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Smartphone, Monitor, Terminal } from "lucide-react";

const skills = [
  { 
    name: "TypeScript / JavaScript", 
    level: "Expertise Frontend & Fullstack", 
    color: "from-blue-500/20 to-cyan-500/5",
    borderColor: "hover:border-blue-500/50",
    icon: <Code2 className="w-6 h-6 text-blue-400" />
  },
  { 
    name: "Spring Boot (Java)", 
    level: "Architectures REST & Backoffice", 
    color: "from-green-500/20 to-emerald-500/5",
    borderColor: "hover:border-green-500/50",
    icon: <Layers className="w-6 h-6 text-green-400" />
  },
  { 
    name: "Dart / Flutter", 
    level: "Applications Mobiles Cross-Platform", 
    color: "from-sky-500/20 to-blue-500/5",
    borderColor: "hover:border-sky-500/50",
    icon: <Smartphone className="w-6 h-6 text-sky-400" />
  },
  { 
    name: "Angular", 
    level: "Développement d'interfaces modulaires", 
    color: "from-red-500/20 to-rose-500/5",
    borderColor: "hover:border-red-500/50",
    icon: <Monitor className="w-6 h-6 text-red-400" />
  },
  { 
    name: "Python", 
    level: "Analyse de données & Scripts", 
    color: "from-yellow-500/20 to-amber-500/5",
    borderColor: "hover:border-yellow-500/50",
    icon: <Terminal className="w-6 h-6 text-yellow-400" />
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black text-white px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-center md:text-left">
          Ma <span className="text-blue-500">Stack Technique</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, x: 5 }}
              className={`p-6 rounded-2xl bg-linear-to-r ${skill.color} border border-neutral-200 shadow-sm flex items-center gap-5 ${skill.borderColor} transition-all duration-300`}
            >
              <div className="p-3 bg-black/40 rounded-xl border border-white/5 shadow-inner">
                {skill.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-wide">{skill.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{skill.level}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
