import { ThemeProvider } from "@/context/ThemeContext";
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
        style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
        className="antialiased min-h-screen flex flex-col"
      >
        <ThemeProvider>
          <ScrollProgress />
          <ScrollToTop />
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}