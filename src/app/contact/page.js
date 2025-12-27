import Header from "../components/Header";
import { contact } from "../data/portfolio";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#f7f9fb] text-slate-800 tech-bg">
      <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col gap-8 px-4 pb-16 pt-8 sm:px-8">
        <Header />

        <section className="relative overflow-hidden rounded-3xl contact-aurora p-6 text-sm text-slate-700 shadow-md animate-fade-up">
          <div className="contact-bubble" />
          <div className="contact-bubble" />
          <div className="contact-bubble" />
          <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Contact</p>
              <h1 className="text-2xl font-semibold text-slate-900">
                {contact.headline}
              </h1>
              <p className="max-w-2xl text-slate-600">{contact.description}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="contact-pill inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#f4f2ff] text-[#7f5af0]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2.5" />
                    <path d="M4 7.5 11.55 12a1 1 0 0 0 .9 0L20 7.5" />
                  </svg>
                </span>
                <span>Email me</span>
              </a>
              <a
                href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                className="contact-pill inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#8c7bff] via-[#6a7cff] to-[#00d8ff] px-5 py-3 text-sm font-semibold text-white shadow-lg"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M6.5 4.5 9 5.5c.3.1.5.3.6.6l1.1 2.8c.1.3 0 .7-.2.9L9.2 11a9.5 9.5 0 0 0 4.7 4.7l1.2-1.3c.2-.2.6-.3.9-.2l2.8 1.1c.3.1.5.3.6.6l1 2.5c.1.3 0 .7-.2.9l-1.6 1.6c-.4.4-1 .6-1.6.5a14.5 14.5 0 0 1-8.6-4.1A14.5 14.5 0 0 1 4.4 7.9c-.1-.6.1-1.2.5-1.6l1.6-1.6c.2-.2.6-.3.9-.2Z" />
                  </svg>
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