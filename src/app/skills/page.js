import Header from "../components/Header";
import SkillGrid from "../components/SkillGrid";
import { skills } from "../data/portfolio";

export default function SkillsPage() {
  return (
    <div className="relative bg-[#f7f9fb] text-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 pt-8 sm:px-8">
        <Header />

        <SkillGrid
          title="Technologies and tools"
          description=""
          items={skills}
        />
      </div>
    </div>
  );
}
