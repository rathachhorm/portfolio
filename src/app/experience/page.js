import ExperienceItem from "../components/ExperienceItem";
import Header from "../components/Header";
import SectionHeader from "../components/SectionHeader";
import { experiences } from "../data/portfolio";

export default function ExperiencePage() {
  return (
    <div className="relative min-h-screen bg-[#f7f9fb] text-slate-800 tech-bg">
      <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col gap-8 px-4 pb-16 pt-8 sm:px-8">
        <Header />

        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-[#f8f4ff] via-white to-[#e6f7ff] p-6 shadow-md animate-fade-up">
          <div className="pointer-events-none absolute -left-16 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-[#ff5fb0]/12 via-[#9a4dff]/12 to-[#00d8ff]/12 blur-3xl" />
          <div className="pointer-events-none absolute -right-14 -bottom-12 h-48 w-48 rounded-full bg-gradient-to-br from-[#00d8ff]/12 via-[#6a7cff]/12 to-[#ff5fb0]/10 blur-3xl" />
          <SectionHeader
            eyebrow="Experience"
            title="Roles that blend UX, code, and delivery"
            description=""
          />
          <div className="relative mt-6 space-y-6 pl-2 sm:pl-4">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200" />
            {experiences.map((experience) => (
              <ExperienceItem key={experience.company} experience={experience} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
