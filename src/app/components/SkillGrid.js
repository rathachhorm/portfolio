import SkillBadge, { skillLogos } from "./SkillBadge";
import SectionHeader from "./SectionHeader";

export default function SkillGrid({
  title,
  description,
  items,
  showDescription = true,
  limit,
  footer,
  columns = "grid-cols-2 sm:grid-cols-3",
}) {
  return (
    <section className="relative overflow-hidden flex h-full flex-col rounded-3xl border border-slate-200 bg-gradient-to-r from-[#f8f4ff] via-white to-[#e6f7ff] p-6 shadow-md animate-fade-up">
      <div className="pointer-events-none absolute -left-14 -top-10 h-36 w-36 rounded-full bg-gradient-to-br from-[#ff5fb0]/12 via-[#9a4dff]/12 to-[#00d8ff]/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-gradient-to-br from-[#00d8ff]/12 via-[#6a7cff]/12 to-[#ff5fb0]/10 blur-3xl" />
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between relative z-10">
        <SectionHeader eyebrow="Skills" title={title} description={description} />
      </div>
      <div className={`mt-6 grid flex-1 gap-4 ${columns} relative z-10`}>
        {(limit ? items.slice(0, limit) : items).map((skill) => {
          const key = skill.name.toLowerCase().replace(/\s+/g, "");
          const normalizedKey = skill.name.toLowerCase().replace(/[^a-z0-9]/g, "");
          const icon = skillLogos[key] || skillLogos[normalizedKey];
          const initials = skill.name.slice(0, 2).toUpperCase();
          return (
            <div
              key={skill.name}
              className="group relative flex h-full flex-col items-center gap-3 overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-slate-50">
                {icon ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={icon}
                    alt={skill.name}
                    className="h-8 w-8 object-contain"
                  />
                ) : (
                  <span className="text-sm font-bold text-slate-800">
                    {initials}
                  </span>
                )}
              </div>
              <div className="text-sm font-semibold text-slate-900">
                {skill.name}
              </div>
              {showDescription ? (
                <p className="text-xs text-slate-500">{skill.description}</p>
              ) : null}
            </div>
          );
        })}
      </div>
      {footer ? <div className="mt-6">{footer}</div> : null}
    </section>
  );
}
