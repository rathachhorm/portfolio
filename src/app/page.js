import Image from "next/image";
import Link from "next/link";
import ExperienceItem from "./components/ExperienceItem";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import Reveal from "./components/Reveal";
import SectionHeader from "./components/SectionHeader";
import SkillGrid from "./components/SkillGrid";
import {
  about,
  contact,
  experiences,
  hero,
  highlights,
  profile,
  projects,
  skills,
} from "./data/portfolio";

export default function Home() {
  return (
    <div className="relative bg-[#f7f9fb] text-slate-800 tech-bg" suppressHydrationWarning>
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-8 sm:px-8">
        <Header />

        <section
          id="overview"
          className="relative overflow-hidden grid items-center gap-10 rounded-3xl border border-slate-200 bg-gradient-to-r from-[#f8f4ff] via-white to-[#e6f7ff] px-4 py-6 shadow-sm sm:px-8 sm:py-10 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="pointer-events-none absolute -left-16 -top-20 h-48 w-48 rounded-full bg-gradient-to-br from-[#ff5fb0]/15 via-[#9a4dff]/12 to-[#00d8ff]/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 -bottom-16 h-52 w-52 rounded-full bg-gradient-to-br from-[#00d8ff]/14 via-[#6a7cff]/12 to-[#ff5fb0]/10 blur-3xl" />
          <Reveal delay={50}>
            <div className="grid place-items-center animate-float">
              <div className="relative inline-block">
                <div className="absolute inset-[-8px] rounded-full bg-gradient-to-br from-[#ff5fb0] via-[#9a4dff] to-[#6a7cff] p-[3px]">
                  <div className="h-40 w-40 rounded-full bg-white sm:h-44 sm:w-44" />
                </div>
                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white sm:h-44 sm:w-44">
                  <Image
                    src={profile.image}
                    alt="Profile"
                    fill
                    sizes="(max-width: 640px) 160px, 176px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-4 text-left">
              <p
                className="text-2xl font-semibold text-slate-700 sm:text-3xl animate-fade-up animate-slide-loop"
                style={{ animationDelay: "120ms" }}
              >
                {hero.greeting}
              </p>
              <div className="space-y-3">
                <p
                  className="text-3xl font-bold text-slate-800 sm:text-4xl animate-fade-up animate-slide-loop"
                  style={{ animationDelay: "160ms" }}
                >
                  {hero.intro}
                </p>
                <p
                  className="text-3xl font-bold sm:text-5xl animate-fade-up animate-slide-loop"
                  style={{ animationDelay: "200ms" }}
                >
                  <span className="text-[#0ea5e9]">{profile.name}</span>{" "}
                  <span className="text-[#7f5af0]">{profile.title}</span>
                </p>
                <p
                  className="text-3xl font-bold text-slate-800 sm:text-4xl animate-fade-up animate-slide-loop"
                  style={{ animationDelay: "240ms" }}
                >
                  {hero.headline}
                </p>
              </div>
              <div
                className="flex flex-col gap-3 pt-2 animate-fade-up sm:flex-row sm:items-center"
                style={{ animationDelay: "280ms" }}
              >
                <Link
                  href="/projects"
                  className="btn-glow sheen rounded-full bg-gradient-to-r from-[#8c7bff] via-[#9a4dff] to-[#00d8ff] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#8c7bff]/40 transition hover:-translate-y-0.5 hover:shadow-[#9a4dff]/60"
                >
                  {hero.ctaPrimary}
                </Link>
                <Link
                  href="/contact"
                  className="btn-glow rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#7f5af0] hover:text-[#7f5af0]"
                >
                  {hero.ctaSecondary}
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        <div className="grid gap-6 lg:grid-cols-2 items-stretch">
          <Reveal>
            <section
              id="about"
              className="relative overflow-hidden flex h-full flex-col rounded-3xl border border-slate-200 bg-gradient-to-r from-[#f8f4ff] via-white to-[#e6f7ff] px-6 py-7 shadow-md sm:px-8 w-full"
            >
              <div className="pointer-events-none absolute -left-14 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-[#ff5fb0]/14 via-[#9a4dff]/12 to-[#00d8ff]/14 blur-3xl" />
              <div className="pointer-events-none absolute -right-16 -bottom-12 h-48 w-48 rounded-full bg-gradient-to-br from-[#00d8ff]/12 via-[#6a7cff]/12 to-[#ff5fb0]/10 blur-3xl" />
              <SectionHeader
                eyebrow="About"
                title={about.title}
                description=""
              />
              <div className="mt-4 grid gap-4 md:grid-cols-2 flex-1">
                <p className="text-sm leading-relaxed text-slate-600">{about.description}</p>
                <div className="grid gap-2 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  {highlights.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-xl bg-white px-3 py-2"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                          {item.label}
                        </p>
                        <p className="text-sm text-slate-500">{item.note}</p>
                      </div>
                      <p className="text-xl font-semibold text-slate-800">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex h-full w-full flex-col">
              <SkillGrid
                title="Technologies and tools"
                description=""
                items={skills}
                limit={6}
                columns="grid-cols-3"
                footer={
                  <Link
                    href="/skills"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#8c7bff] to-[#00d8ff] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    See more
                  </Link>
                }
                showDescription={false}
              />
            </div>
          </Reveal>
        </div>

        <Reveal>
          <section
            id="projects"
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-[#f8f4ff] via-white to-[#e6f7ff] p-6 shadow-md"
          >
            <div className="pointer-events-none absolute -left-16 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-[#ff5fb0]/12 via-[#9a4dff]/12 to-[#00d8ff]/12 blur-3xl" />
            <div className="pointer-events-none absolute -right-14 -bottom-12 h-48 w-48 rounded-full bg-gradient-to-br from-[#00d8ff]/12 via-[#6a7cff]/12 to-[#ff5fb0]/10 blur-3xl" />
            <SectionHeader
              eyebrow="Projects"
              title="Selected work"
              description=""
            />
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={60}>
          <section
            id="experience"
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-[#f8f4ff] via-white to-[#e6f7ff] p-6 shadow-md"
          >
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
        </Reveal>

        <Reveal delay={40}>
          <section
            id="contact"
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-[#f8f4ff] via-white to-[#e6f7ff] p-6 text-sm text-slate-700 shadow-md"
          >
            <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-[#ff5fb0]/15 via-[#9a4dff]/12 to-[#00d8ff]/15 blur-3xl" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  Contact
                </p>
                <h3 className="text-xl font-semibold text-slate-800">
                  {contact.headline}
                </h3>
                <p className="max-w-2xl text-sm text-slate-600">
                  {contact.description}
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-[#7f5af0] hover:text-[#7f5af0]"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#f4f2ff] text-[#7f5af0]">✉️</span>
                  Email me
                </a>
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8c7bff] to-[#00d8ff] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-white">📞</span>
                  Call {contact.phone}
                </a>
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
