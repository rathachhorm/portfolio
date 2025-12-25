export default function ExperienceItem({ experience }) {
  return (
    <div className="relative flex gap-4 pb-6 pl-4 last:pb-0 animate-fade-up">
      <span className="absolute left-0 top-8 grid h-5 w-5 place-items-center rounded-full bg-white shadow-[0_4px_12px_rgba(15,23,42,0.08)]">
        <span className="h-3 w-3 rounded-full bg-gradient-to-r from-[#ff5fb0] to-[#6a7cff]" />
      </span>
      <div className="sheen w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <h3 className="text-lg font-semibold text-slate-900">
            {experience.role}
          </h3>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            {experience.period}
          </p>
        </div>
        <p className="text-sm text-slate-600">{experience.company}</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {experience.summary}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
