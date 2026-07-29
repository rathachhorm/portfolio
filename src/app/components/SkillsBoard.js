"use client";

import { useMemo } from "react";
import { skillLogos } from "./SkillBadge";

function getSkillIcon(name) {
  const key = name.toLowerCase().replace(/\s+/g, "");
  const normalizedKey = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  return skillLogos[key] || skillLogos[normalizedKey];
}

function CategoryIcon({ type }) {
  const iconClass = "h-4 w-4 text-[#7f5af0]";

  const icons = {
    fullstack: (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M8 6h8M8 12h8M8 18h5" />
        <path d="M6 4h12v16H6z" />
      </svg>
    ),
    frontend: (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
      </svg>
    ),
    backend: (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="4" width="18" height="6" rx="2" />
        <rect x="3" y="14" width="18" height="6" rx="2" />
      </svg>
    ),
    database: (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
        <ellipse cx="12" cy="6" rx="7" ry="2.5" />
        <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      </svg>
    ),
    devops: (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" />
        <path d="M4 7l8 4 8-4M12 11v10" />
      </svg>
    ),
    automation: (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="5" y="4" width="14" height="12" rx="2" />
        <path d="M9 20h6M12 16v4" />
        <path d="M9 9h2M13 9h2M9 12h6" />
      </svg>
    ),
    tools: (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-3.3-3.3 2.1-2.1Z" />
      </svg>
    ),
  };

  return icons[type] ?? icons.tools;
}

function SkillTag({ name, level, emoji }) {
  const icon = emoji ? null : getSkillIcon(name);
  const initials = name.slice(0, 2).toUpperCase();

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1.5 text-xs text-slate-700 ring-1 ring-slate-100">
      {emoji ? (
        <span aria-hidden="true" className="text-sm leading-none">
          {emoji}
        </span>
      ) : icon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={icon} alt="" className="h-3.5 w-3.5 object-contain" />
      ) : (
        <span className="text-[9px] font-semibold text-slate-500">{initials}</span>
      )}
      <span>{name}</span>
      {level != null ? (
        <span className="font-medium tabular-nums text-slate-400">{level}%</span>
      ) : null}
    </span>
  );
}

export default function SkillsBoard({ section, categories, skills }) {
  const skillsByName = useMemo(
    () => new Map(skills.map((skill) => [skill.name, skill])),
    [skills],
  );

  const categoryIconMap = {
    fullstack: "fullstack",
    frontend: "frontend",
    backend: "backend",
    database: "database",
    devops: "devops",
    automation: "automation",
    tools: "tools",
  };

  return (
    <section>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {section.title}
        </h2>
        <p className="mt-2 text-sm text-slate-500 sm:text-base">{section.description}</p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const categoryItems = category.stacks
            ? category.stacks
            : (category.skillNames ?? [])
                .map((name) => skillsByName.get(name))
                .filter(Boolean);

          return (
            <article
              key={category.id}
              className="rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-2">
                <CategoryIcon type={categoryIconMap[category.id]} />
                <h3 className="text-sm font-semibold text-slate-900">{category.label}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {categoryItems.map((item) => (
                  <SkillTag
                    key={item.name}
                    name={item.name}
                    level={item.level}
                    emoji={item.emoji}
                  />
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
