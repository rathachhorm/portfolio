import Header from "../components/Header";
import { contact } from "../data/portfolio";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#f7f9fb] text-slate-800 tech-bg">
      <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col gap-8 px-4 pb-16 pt-8 sm:px-8">
        <Header />

        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-[#f8f4ff] via-white to-[#e6f7ff] p-6 text-sm text-slate-700 shadow-md animate-fade-up">
          <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-[#ff5fb0]/15 via-[#9a4dff]/12 to-[#00d8ff]/15 blur-3xl" />
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Contact
              </p>
              <h1 className="text-2xl font-semibold text-slate-900">
                {contact.headline}
              </h1>
              <p className="max-w-2xl text-slate-600">
                {contact.description}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-[#7f5af0] hover:text-[#7f5af0]"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#f4f2ff] text-[#7f5af0]">
                  ✉️
                </span>
                <span>Email me</span>
              </a>
              <a
                href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#8c7bff] via-[#6a7cff] to-[#00d8ff] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white">
                  📞
                </span>
                <span className="whitespace-nowrap">Call {contact.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
