"use client";

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-neutral-200 text-neutral-600">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <span className="text-lg font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            CED.DEV
          </span>
          <p className="text-sm text-neutral-400 mt-1">© 2024 Tous droits réservés.</p>
        </div>

        <div className="flex gap-6 text-sm font-medium text-neutral-500">
          <a href="#projets" className="hover:text-black transition-colors">Projets</a>
          <a href="#skills" className="hover:text-black transition-colors">Compétences</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </div>
        
      </div>
    </footer>
  );
}
