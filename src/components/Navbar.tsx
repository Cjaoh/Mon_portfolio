"use client";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const NAV_LINKS = [
  { href: "#skills",  label: "Compétences" },
  { href: "#projets", label: "Projets"     },
  { href: "#contact", label: "Contact"     },
];

export default function Navbar() {
  const [isOpen, setIsOpen]       = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  return (
    <nav
      style={{
        backgroundColor: isScrolled ? "var(--nav-bg)" : "transparent",
        borderBottomColor: isScrolled ? "var(--nav-border)" : "transparent",
      }}
      className={`fixed w-full z-50 top-0 border-b transition-all duration-300 ${
        isScrolled ? "backdrop-blur-xl h-16 shadow-lg" : "h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 w-full h-full flex justify-between items-center">

        <a href="#" className="text-xl font-black tracking-tight gradient-text select-none">
          CED.DEV
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center text-sm font-semibold">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ color: "var(--text-secondary)" }}
              className="hover:text-blue-500 transition-colors duration-200 relative group"
            >
              {link.label}
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 rounded"
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              color: "var(--text-secondary)",
            }}
            className="rounded-xl p-2.5 transition-colors"
            aria-label="Basculer le thème"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.button>

          <button
            className="md:hidden p-2"
            style={{ color: "var(--text-primary)" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            backgroundColor: "var(--nav-bg)",
            borderBottomColor: "var(--nav-border)",
          }}
          className="absolute top-full left-0 w-full border-b backdrop-blur-xl p-6 flex flex-col gap-5 md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{ color: "var(--text-secondary)" }}
              className="text-base font-semibold hover:text-blue-500 transition-colors"
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