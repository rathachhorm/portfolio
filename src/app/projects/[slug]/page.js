import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import { TechTag, ProjectTypeLabel, ProjectExternalLink } from "../../components/ProjectCard";
import { getProjectBySlug, projects } from "../../data/portfolio";

const statusStyles = {
  Production: "text-emerald-700 bg-emerald-50 border-emerald-100",
  Completed: "text-slate-600 bg-slate-100 border-slate-200",
  Live: "text-emerald-700 bg-emerald-50 border-emerald-100",
  Archived: "text-slate-600 bg-slate-100 border-slate-200",
};

function getProjectImages(project) {
  if (project.images?.length) {
    return project.images;
  }
  if (project.image) {
    return [
      {
        src: project.image,
        alt: `${project.title} preview`,
        caption: project.title,
      },
    ];
  }
  return [];
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const statusClass =
    statusStyles[project.status] ?? "text-slate-600 bg-slate-100 border-slate-200";
  const gallery = getProjectImages(project);
  const heroImage = gallery[0];

  return (
    <div className="relative min-h-screen bg-[#f7f9fb] text-slate-800 tech-bg">
      <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col gap-8 px-4 pb-16 pt-8 sm:px-8">
        <Header />

        <Link
          href="/projects"
          className="inline-flex w-fit items-center gap-1 text-sm text-slate-500 transition hover:text-[#7f5af0]"
        >
          ← Back to projects
        </Link>

        <article className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm">
          {heroImage ? (
            <div className="relative overflow-hidden bg-slate-100">
              <Image
                src={`${basePath}${heroImage.src}`}
                alt={heroImage.alt}
                width={1400}
                height={788}
                priority
                className="h-auto max-h-[420px] w-full object-cover object-top"
              />
              {gallery.length === 1 && heroImage.caption ? (
                <p className="border-t border-slate-200/80 bg-white px-6 py-3 text-xs text-slate-500 sm:px-8">
                  {heroImage.caption}
                </p>
              ) : null}
            </div>
          ) : (
            <div className="border-b border-slate-100 bg-gradient-to-br from-[#f8f4ff] via-white to-[#e6f7ff] px-6 py-8 sm:px-8">
              <ProjectTypeLabel project={project} />
              <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {project.title}
              </h1>
            </div>
          )}

          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <ProjectTypeLabel project={project} pill />
              {project.status ? (
                <span
                  className={`rounded-full border px-2.5 py-0.5 text-[11px] font-medium ${statusClass}`}
                >
                  {project.status}
                </span>
              ) : null}
              {project.period ? (
                <span className="text-xs tabular-nums text-slate-400">
                  {project.period}
                </span>
              ) : null}
            </div>

            {heroImage ? (
              <h1 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {project.title}
              </h1>
            ) : null}

            <p className="mt-1 text-sm text-slate-500">{project.category}</p>

            {(project.role || project.company) && (
              <p className="mt-3 text-sm text-slate-600">
                {[project.role, project.company].filter(Boolean).join(" · ")}
              </p>
            )}

            <p className="mt-5 text-base leading-relaxed text-slate-600">
              {project.description ?? project.summary}
            </p>

            {project.highlights?.length ? (
              <section className="mt-8 border-t border-slate-100 pt-6">
                <h2 className="text-sm font-semibold text-slate-900">
                  Key features
                </h2>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-sm leading-relaxed text-slate-600"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7f5af0]"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {gallery.length > 1 ? (
              <section className="mt-8 border-t border-slate-100 pt-6">
                <h2 className="text-sm font-semibold text-slate-900">
                  Screenshots
                </h2>
                <div
                  className={`mt-4 grid gap-4 ${gallery.length > 1 ? "sm:grid-cols-2" : ""}`}
                >
                  {gallery.map((shot) => (
                    <figure
                      key={shot.src}
                      className="overflow-hidden rounded-xl border border-slate-200/70 bg-slate-50"
                    >
                      <Image
                        src={`${basePath}${shot.src}`}
                        alt={shot.alt}
                        width={1200}
                        height={675}
                        className="h-auto w-full object-cover object-top"
                      />
                      {shot.caption ? (
                        <figcaption className="border-t border-slate-100 px-4 py-2.5 text-xs text-slate-500">
                          {shot.caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              </section>
            ) : null}

            <section className="mt-8 border-t border-slate-100 pt-6">
              <h2 className="text-sm font-semibold text-slate-900">
                Technologies
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <TechTag key={tag} name={tag} />
                ))}
              </div>
            </section>

            {project.link ? (
              <div className="mt-8 border-t border-slate-100 pt-6">
                <ProjectExternalLink project={project} button />
              </div>
            ) : null}
          </div>
        </article>
      </div>
    </div>
  );
}
