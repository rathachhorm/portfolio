import Header from "../components/Header";
import SkillsBoard from "../components/SkillsBoard";
import { skillCategories, skills, skillsSection } from "../data/portfolio";

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen bg-[#f7f9fb] text-slate-800 tech-bg">
      <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col gap-8 px-4 pb-16 pt-8 sm:px-8">
        <Header />

        <SkillsBoard
          section={skillsSection}
          categories={skillCategories}
          skills={skills}
        />
      </div>
    </div>
  );
}
