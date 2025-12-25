export default function Sidebar({ navLinks, socials, contact }) {
  return (
    <aside className="glass relative isolate w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-sm shadow-2xl backdrop-blur-xl lg:sticky lg:top-8 lg:max-w-xs">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/0" />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-slate-300/80">
            Portfolio
          </p>
          <p className="mt-1 text-xl font-semibold text-white">Ratha</p>
          <p className="text-slate-300/80">Product-Focused Engineer</p>
        </div>
        <span className="rounded-full bg-gradient-to-r from-[#8c7bff] via-[#9a4dff] to-[#00d8ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-lg shadow-[#8c7bff]/40">
          Open
        </span>
      </div>

      <div className="relative mt-4 flex flex-wrap gap-2 text-xs text-slate-200/90">
        <span className="rounded-full bg-white/10 px-3 py-1">Remote first</span>
        <span className="rounded-full bg-white/10 px-3 py-1">
          UX + Engineering
        </span>
        <span className="rounded-full bg-white/10 px-3 py-1">Available now</span>
      </div>

      <nav className="relative mt-6 space-y-1">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group flex items-center justify-between rounded-xl px-3 py-2 text-[15px] text-slate-100 transition hover:bg-white/10"
          >
            <span>{link.label}</span>
            <span className="text-xs text-slate-400 transition group-hover:translate-x-1">
              {">"}
            </span>
          </a>
        ))}
      </nav>

      <div className="relative mt-6 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
        <p className="text-[13px] uppercase tracking-[0.25em] text-slate-400">
          Quick links
        </p>
        <div className="grid gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-xl px-3 py-2 transition hover:bg-white/10"
            >
              <div>
                <p className="text-sm text-white">{social.label}</p>
                <p className="text-xs text-slate-400">{social.subtle}</p>
              </div>
              <span className="text-xs text-slate-400 transition group-hover:translate-x-1">
                {">"}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="relative mt-6 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4">
        <p className="text-[13px] uppercase tracking-[0.25em] text-slate-400">
          Contact
        </p>
        <div className="space-y-2 text-sm text-slate-200/90">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 transition hover:bg-white/10"
          >
            <span>{contact.email}</span>
            <span className="text-xs text-slate-400">Email</span>
          </a>
          <a
            href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
            className="flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 transition hover:bg-white/10"
          >
            <span>{contact.phone}</span>
            <span className="text-xs text-slate-400">Call</span>
          </a>
          <a
            href={contact.resume}
            className="group flex items-center justify-between rounded-xl bg-gradient-to-r from-[#8c7bff] via-[#9a4dff] to-[#00d8ff] px-3 py-2 font-medium text-white shadow-lg shadow-[#8c7bff]/40 transition hover:shadow-[#9a4dff]/60"
          >
            <span>Download CV</span>
            <span className="text-xs transition group-hover:translate-x-1">
              {">"}
            </span>
          </a>
        </div>
      </div>
    </aside>
  );
}
