import AmbientBackground from "@/components/AmbientBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

export const metadata = {
  title: "R. Cédrick | Full Stack Developer",
  description: "Portfolio de RATOVONANAHARY Cédrick — Développeur Full Stack",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        style={{
          backgroundColor: "var(--bg-void)",
          color: "var(--text-white)",
          position: "relative",
        }}
        className="antialiased min-h-screen flex flex-col"
      >
        {/* Fond ambiant fixe — passe derrière tout */}
        <AmbientBackground />

        {/* Contenu principal — z-index 2 pour passer au-dessus du fond */}
        <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <ScrollProgress />
          <ScrollToTop />
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}