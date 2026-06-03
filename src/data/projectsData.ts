export interface Project {
  id: string;
  title: string;
  tech: string;
  techClass: string;
  desc: string;
  longDesc: string;
  features: string[];
  github: string;
  images: string[];
}

export const projectsData: Project[] = [
  {
    id: "microfinance-tantsaha",
    title: "MicroFinance Tantsaha",
    tech: "Dart / Flutter",
    techClass: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    desc: "Application mobile dédiée aux solutions de microfinance en milieu rural.",
    longDesc: "Une solution mobile complète conçue pour désenclaver les services financiers en milieu rural. L'application permet de gérer les comptes d'épargne, les demandes de micro-crédits et le suivi des remboursements hors-ligne avec synchronisation résiliente.",
    features: ["Gestion des comptes clients", "Calculateur de taux d'intérêt", "Mode hors-ligne avec base SQLite local", "Synchronisation sécurisée"],
    github: "https://github.com",
    images: ["/projects/tantsaha-1.jpg", "/projects/tantsaha-2.jpg"] // Place tes captures ici plus tard
  },
  {
    id: "cms-blog-collaboratif",
    title: "CMS Blog Collaboratif",
    tech: "TypeScript / Next.js",
    techClass: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    desc: "Plateforme de gestion de contenus avec système de modération avancée.",
    longDesc: "Un système de gestion de contenu moderne axé sur la collaboration. Il intègre un flux de travail strict pour la soumission d'articles, un système de commentaires en temps réel et un tableau de bord complet pour les modérateurs.",
    features: ["Éditeur de texte enrichi", "Dashboard de modération", "Rôles d'utilisateurs (Admin, Auteur, Modérateur)", "Notifications système"],
    github: "https://github.com",
    images: ["/projects/cms-1.jpg"]
  },
  {
    id: "mini-market",
    title: "Mini Market Spring Boot & Angular",
    tech: "Java / Angular / TypeScript",
    techClass: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    desc: "Application e-commerce complète combinant la robustesse de Spring et l'agilité d'Angular.",
    longDesc: "Une architecture découplée unissant un backend puissant sous Spring Boot (sécurisé avec Spring Security) et un frontend dynamique et modulaire développé avec Angular.",
    features: ["Catalogue de produits dynamique", "Gestion du panier et tunnel d'achat", "Authentification JWT sécurisée", "Panel d'administration pour la gestion des stocks"],
    github: "https://github.com",
    images: ["/projects/market-1.jpg"]
  },
  {
    id: "declaration-naissance",
    title: "Gestion de Déclaration de Naissance",
    tech: "Dart / TypeScript",
    techClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    desc: "Écosystème comprenant l'application utilisateur mobile et le BackOffice de gestion administrative.",
    longDesc: "Un projet d'utilité publique digitalisant les processus d'état civil. Les citoyens déclarent les naissances via l'application mobile, et les agents administratifs valident les documents sur une interface web.",
    features: ["Formulaires de saisie guidés", "Numérisation de documents justificatifs", "Suivi du statut de la demande en temps réel", "Génération automatique de registres officiels"],
    github: "https://github.com",
    images: ["/projects/naissance-1.jpg"]
  }
];
