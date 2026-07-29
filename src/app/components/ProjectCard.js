import Image from "next/image";
import Link from "next/link";
import { getTechIcon } from "./SkillBadge";

const VIEW_DETAIL_LABEL = "View detail";

export function getProjectLinkLabel(project) {
  if (project.linkLabel) return project.linkLabel;
  if (project.link?.includes("github.com")) return "View on GitHub";
  return "Visit site";
}

export function ProjectExternalLink({ project, button = false, className = "" }) {
  if (!project.link) return null;

  const label = getProjectLinkLabel(project);
  const styles = button
    ? "inline-flex items-center rounded-full bg-[#7f5af0] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#6a7cff]"
    : "font-medium text-[#7f5af0] transition hover:text-[#6a7cff]";

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className={`${styles} ${className}`.trim()}
    >
      {label} →
    </a>
  );
}

const statusStyles = {
  Production: "text-emerald-700 bg-emerald-50",
  Completed: "text-slate-600 bg-slate-100",
  Live: "text-emerald-700 bg-emerald-50",
  Archived: "text-slate-600 bg-slate-100",
};

export function TechTag({ name }) {
  const icon = getTechIcon(name);
  const initials = name.slice(0, 2).toUpperCase();

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1 text-xs text-slate-700">
      <span className="grid h-4 w-4 shrink-0 place-items-center">
        {icon ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={icon} alt="" className="h-3.5 w-3.5 object-contain" />
        ) : (
          <span className="text-[8px] font-semibold text-slate-500">{initials}</span>
        )}
      </span>
      {name}
    </span>
  );
}

export function ProjectTypeLabel({ project, pill = false, className = "" }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const typeClass = pill
    ? "text-[11px] font-medium uppercase tracking-wider text-slate-500"
    : "text-[11px] font-medium uppercase tracking-wider text-slate-400";
  const logoSize = pill ? "h-4 w-4" : "h-5 w-5";
  const logoWrapClass =
    project.logoBackground === "white"
      ? `inline-flex shrink-0 items-center justify-center rounded-full bg-white p-0.5 ring-1 ring-slate-200/80 ${logoSize}`
      : `shrink-0 ${logoSize}`;

  const label = (
    <>
      {project.logo ? (
        <span className={logoWrapClass}>
          <Image
            src={`${basePath}${project.logo}`}
            alt=""
            width={20}
            height={20}
            aria-hidden
            className={`${project.logoBackground === "white" ? "h-full w-full" : logoSize} object-contain`}
          />
        </span>
      ) : null}
      <span className={typeClass}>{project.type ?? project.category}</span>
    </>
  );

  if (pill) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 ${className}`}
      >
        {label}
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>{label}</span>
  );
}

export default function ProjectCard({ project }) {
  const statusClass =
    statusStyles[project.status] ?? "text-slate-600 bg-slate-100";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white transition hover:border-slate-300">
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <ProjectTypeLabel project={project} />
          {project.status ? (
            <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${statusClass}`}>
              {project.status}
            </span>
          ) : null}
        </div>

        <h3 className="mt-2 text-lg font-semibold text-slate-900">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <TechTag key={tag} name={tag} />
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between pt-4 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="font-medium text-[#7f5af0] transition hover:text-[#6a7cff]"
          >
            {VIEW_DETAIL_LABEL} →
          </Link>
          {project.period ? (
            <span className="text-xs tabular-nums text-slate-400">{project.period}</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
