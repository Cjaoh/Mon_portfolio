import { notFound } from "next/navigation";
import { projectsData } from "@/data/projectsData";
import Link from "next/link";
import { ArrowLeft, GitBranch, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Bouton Retour */}
        <Link href="/#projets" className="inline-flex items-center gap-2 text-neutral-500 hover:text-black mb-8 group transition-colors">
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Retour aux projets
        </Link>

        {/* En-tête */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-neutral-900">{project.title}</h1>
          <span className={`text-xs font-bold uppercase tracking-wider border px-4 py-1.5 rounded-full ${project.techClass}`}>
            {project.tech}
          </span>
        </div>

        {/* Longue description */}
        <p className="text-neutral-600 text-lg md:text-xl leading-relaxed mb-12 border-l-2 border-blue-600 pl-6">
          {project.longDesc}
        </p>

        {/* Fonctionnalités clés */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-neutral-900 uppercase tracking-tight">Fonctionnalités clés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-neutral-50 border border-neutral-200 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-neutral-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Captures d'écran */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-neutral-900 uppercase tracking-tight">Captures d&apos;écran</h2>
          <div className="grid grid-cols-1 gap-6">
            {project.images.map((img, idx) => (
              <div key={idx} className="relative w-full h-75 rounded-2xl border border-neutral-200 bg-neutral-50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm bg-neutral-50">
                  Espace pour capture d&apos;écran : {img}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton d'action final */}
        <div className="flex justify-center border-t border-neutral-200 pt-10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-neutral-900 text-white font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-md cursor-pointer"
          >
            <GitBranch className="w-5 h-5" />
            Explorer le code source sur GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
