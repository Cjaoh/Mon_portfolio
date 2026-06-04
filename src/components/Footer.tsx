"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="border-t border-footer-border bg-footer-bg text-footer-text">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm">© {new Date().getFullYear()} RATOVONANAHARY Cédrick. Tous droits réservés.</p>
        <button
          onClick={toggleTheme}
          aria-label="Basculer le thème"
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition hover:bg-slate-100 dark:hover:bg-slate-800"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "1px solid var(--border-color)",
            color: "var(--text-secondary)",
          }}
        >
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          {theme === "dark" ? "Mode claire" : "Mode sombre"}
        </button>
      </div>
    </footer>
  );
}