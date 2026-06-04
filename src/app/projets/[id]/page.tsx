import { notFound } from "next/navigation";
import { projectsData } from "@/data/projectsData";
import Link from "next/link";
import { ArrowLeft, GitBranch, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <div
      className="min-h-screen py-28 px-6"
      style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      <div className="max-w-4xl mx-auto">

        <Link
          href="/#projets"
          className="inline-flex items-center gap-2 text-sm font-semibold mb-10 group transition-colors"
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
          Retour aux projets
        </Link>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h1
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
            style={{ color: "var(--text-primary)" }}
          >
            {project!.title}
          </h1>
          <span className={`text-xs font-bold uppercase tracking-wider border px-4 py-1.5 rounded-full ${project!.techClass}`}>
            {project!.tech}
          </span>
        </div>

        <p
          className="text-lg leading-relaxed mb-14 pl-6"
          style={{ color: "var(--text-secondary)", borderLeft: "3px solid var(--accent)" }}
        >
          {project!.longDesc}
        </p>

        <div className="mb-16">
          <h2
            className="text-2xl font-black uppercase tracking-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Fonctionnalités clés
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project!.features.map((f, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl"
                style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
              >
                <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--accent)" }} />
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex justify-center pt-10"
          style={{ borderTop: "1px solid var(--border-color)" }}
        >
          <a
            href={project!.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform text-white"
            style={{
              background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
              boxShadow: "0 4px 24px var(--accent-glow)",
            }}
          >
            <GitBranch className="w-5 h-5" />
            Explorer le code sur GitHub
          </a>
        </div>

      </div>
    </div>
  );
}