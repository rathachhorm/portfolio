import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import { projects, projectsSection } from "../data/portfolio";

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-[#f7f9fb] text-slate-800 tech-bg">
      <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col gap-8 px-4 pb-16 pt-8 sm:px-8">
        <Header />

        <section>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              {projectsSection.eyebrow}
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              {projectsSection.title}
            </h1>
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              {projectsSection.description}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
