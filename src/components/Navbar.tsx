"use client";

import { Menu, X }                                    from "lucide-react";
import { useState }                                   from "react";
import { motion, useScroll, useMotionValueEvent }     from "framer-motion";

const NAV_LINKS = [
  { href: "#skills",  label: "Compétences" },
  { href: "#projets", label: "Projets"     },
  { href: "#contact", label: "Contact"     },
];

export default function Navbar() {
  const [isOpen, setIsOpen]       = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const { scrollY }               = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  return (
    <nav
      style={{
        position:        "fixed",
        top:             0,
        left:            0,
        right:           0,
        zIndex:          50,
        backdropFilter:  isScrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
        backgroundColor: isScrolled ? "rgba(0,0,0,0.75)" : "transparent",
        borderBottom:    isScrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition:      "all 0.3s ease",
      }}
      className={isScrolled ? "h-16 shadow-lg" : "h-20"}
    >
      <div className="max-w-7xl mx-auto px-6 w-full h-full flex justify-between items-center">

        {/* Logo */}
        <a
          href="#"
          className="text-xl font-black tracking-tight select-none gradient-text"
        >
          CED.DEV
        </a>

        {/* Liens desktop */}
        <div className="hidden md:flex gap-8 items-center text-sm font-semibold">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ color: "rgba(200,208,224,0.80)" }}
              className="relative group transition-colors duration-200 hover:text-white"
            >
              {link.label}
              {/* Soulignement cyan animé */}
              <span
                style={{
                  position:        "absolute",
                  bottom:          "-2px",
                  left:            0,
                  height:          "1.5px",
                  width:           0,
                  background:      "linear-gradient(90deg, #00D4FF, #7B2FFF)",
                  borderRadius:    "999px",
                  transition:      "width 0.3s ease",
                }}
                className="group-hover:w-full!"
              />
            </a>
          ))}
        </div>

        {/* Bouton mobile */}
        <button
          className="md:hidden p-2"
          style={{ color: "var(--text-white)" }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            backgroundColor:    "rgba(0,0,0,0.90)",
            borderBottom:       "1px solid rgba(255,255,255,0.06)",
            backdropFilter:     "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
          className="absolute top-full left-0 w-full p-6 flex flex-col gap-5 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ color: "var(--text-lunar)" }}
              className="text-base font-semibold hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}