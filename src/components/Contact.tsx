"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import GlassCard from "./GlassCard";

const CONTACT_INFO = [
  { icon: <Mail size={18} />, text: "cedratovonanahary@gmail.com", href: "mailto:cedratovonanahary@gmail.com" },
  { icon: <MapPin size={18} />, text: "Antananarivo, Madagascar", href: "#" },
];

const SOCIALS = [
  {
    href: "https://github.com",
    label: "GitHub",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const FIELDS = [
  { id: "name", label: "Nom complet", type: "text", placeholder: "Votre nom" },
  { id: "email", label: "Email", type: "email", placeholder: "vous@exemple.com" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* En-tête */}
        <div style={{ marginBottom: "60px" }}>
          <p className="section-label">Contact</p>
          <h2 className="title-section">
            Travaillons <span className="text-gradient">Ensemble</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "40px",
            alignItems: "start",
          }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* Infos gauche */}
          <div>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.75,
                color: "var(--text-muted)",
                marginBottom: "40px",
                maxWidth: "380px",
              }}
            >
              Disponible pour des opportunités de stage ou des missions freelance.
              N&apos;hésitez pas à me contacter pour discuter de vos projets.
            </p>

            {/* Coordonnées */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
              {CONTACT_INFO.map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
                >
              <div
                style={{
                  padding: "10px",
                  borderRadius: "12px",
                  background: "var(--cyan-dim)",
                  border: "1px solid rgba(0,212,255,0.15)",
                  color: "var(--cyan)",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--text-lunar)",
                }}
              >
                {item.text}
              </span>
            </a>
              ))}
          </div>

          {/* Réseaux */}
          <div style={{ display: "flex", gap: "10px" }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: "var(--bg-glass)",
              border: "1px solid var(--border-glass)",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s, background 0.2s",
              backdropFilter: "blur(10px)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--cyan)";
              el.style.color = "var(--cyan)";
              el.style.background = "var(--cyan-dim)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--border-glass)";
              el.style.color = "var(--text-muted)";
              el.style.background = "var(--bg-glass)";
            }}
                >
            {s.svg}
          </a>
              ))}
        </div>
      </div>

      {/* Formulaire */}
      <GlassCard style={{ padding: "36px" }}>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          {FIELDS.map((field) => (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                style={{
                  display: "block",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "8px",
                }}
              >
                {field.label}
              </label>
              <input
                id={field.id}
                type={field.type}
                required
                placeholder={field.placeholder}
                className="glass-input"
              />
            </div>
          ))}

          <div>
            <label
              htmlFor="message"
              style={{
                display: "block",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                marginBottom: "8px",
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              required
              placeholder="Parlez-moi de votre projet…"
              className="glass-input"
              style={{ resize: "none" }}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
            style={{
              width: "100%",
              justifyContent: "center",
              background: sent
                ? "linear-gradient(135deg, #10b981, #059669)"
                : "linear-gradient(135deg, var(--cyan), var(--violet))",
            }}
          >
            {sent ? "Message envoyé ✓" : (
              <>
                <Send size={16} />
                Envoyer
              </>
            )}
          </motion.button>
        </motion.form>
      </GlassCard>
    </div>
      </div >
    </section >
  );
}