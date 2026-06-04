"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";

const SOCIALS = [
  {
    href: "https://github.com",
    label: "GitHub",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const CONTACT_INFO = [
  { icon: <Mail className="w-5 h-5" />, text: "cedratovonanahary@gmail.com", href: "mailto:cedratovonanahary@gmail.com" },
  { icon: <MapPin className="w-5 h-5" />, text: "Antananarivo, Madagascar", href: "#" },
];

const FORM_FIELDS = [
  { id: "name",  label: "Nom complet", type: "text",  placeholder: "Votre nom"        },
  { id: "email", label: "Email",       type: "email", placeholder: "vous@exemple.com" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="mb-14 text-center md:text-left">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--accent)" }}>
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter" style={{ color: "var(--text-primary)" }}>
            Travaillons <span className="gradient-text">ensemble</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Infos gauche */}
          <div>
            <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: "var(--text-muted)" }}>
              Disponible pour des opportunités de stage ou des missions freelance.
              N&apos;hésitez pas à me contacter pour discuter de vos projets.
            </p>

            <div className="space-y-4 mb-10">
              {CONTACT_INFO.map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="flex items-center gap-4 group w-fit"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <div
                    className="p-3 rounded-xl"
                    style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)", color: "var(--accent)" }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium group-hover:text-blue-500 transition-colors">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>

            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-3 rounded-xl hover:scale-110 hover:text-blue-500 transition-all"
                  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)", color: "var(--text-muted)" }}
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Formulaire droite */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="card rounded-3xl p-8 space-y-5"
          >
            {FORM_FIELDS.map((field) => (
              <div key={field.id}>
                <label
                  htmlFor={field.id}
                  className="block text-xs font-bold uppercase tracking-wider mb-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; }}
                  onBlur={(e)  => { e.target.style.borderColor = "var(--border-color)"; }}
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-bold uppercase tracking-wider mb-2"
                style={{ color: "var(--text-muted)" }}
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                placeholder="Parlez-moi de votre projet…"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                style={{
                  backgroundColor: "var(--bg-primary)",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-primary)",
                }}
                onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; }}
                onBlur={(e)  => { e.target.style.borderColor = "var(--border-color)"; }}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm text-white"
              style={{
                background: sent
                  ? "linear-gradient(135deg,#10b981,#059669)"
                  : "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
                boxShadow: "0 4px 20px var(--accent-glow)",
              }}
            >
              {sent ? "Message envoyé ✓" : (
                <>
                  <Send className="w-4 h-4" />
                  Envoyer
                </>
              )}
            </motion.button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}