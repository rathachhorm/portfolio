export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
        {eyebrow}
      </p>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
        <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-xl text-sm text-slate-600 sm:text-right">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
