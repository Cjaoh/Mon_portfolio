import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

export const metadata = {
  title: "R. Cédrick | Full Stack Developer",
  description: "Portfolio de RATOVONANAHARY Cédrick - Développeur Full Stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body className="bg-black text-white antialiased selection:bg-blue-500/30 min-h-screen flex flex-col">
      <ScrollProgress />
      <ScrollToTop />
        {/* Barre de navigation */}
        <Navbar />
        
        {/* 
          Le main avec grow permet de pousser le footer vers le bas 
          si le contenu de la page est trop petit.
        */}
        <main className="grow">
          {children}
        </main>

        {/* Pied de page */}
        <Footer />
      </body>
    </html>
  );
}
