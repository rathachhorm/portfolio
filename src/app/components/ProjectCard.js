export default function ProjectCard({ project }) {
  return (
    <article className="group sheen relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50 animate-fade-up">
      <div className="relative flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            {project.category}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-slate-900">
            {project.title}
          </h3>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
          {project.tags[0]}
        </span>
      </div>
      <p className="relative mt-3 text-sm leading-relaxed text-slate-600">
        {project.summary}
      </p>
      <div className="relative mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="relative mt-4 flex items-center gap-2 text-sm font-semibold text-[#7f5af0]">
        <a
          href={project.link}
          className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-800 transition hover:border-[#7f5af0] hover:text-[#7f5af0]"
        >
          View project <span className="text-xs text-slate-500">{">"}</span>
        </a>
      </div>
    </article>
  );
}
