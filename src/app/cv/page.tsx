import type { Metadata } from "next";
import SubPageHeader       from "@/components/layout/SubPageHeader";
import Education           from "@/components/sections/Education";
import ResearchExperience  from "@/components/sections/ResearchExperience";
import Research            from "@/components/sections/Research";
import TechnicalSkills     from "@/components/sections/TechnicalSkills";
import IndustryExperience  from "@/components/sections/IndustryExperience";
import Volunteering        from "@/components/sections/Volunteering";

export const metadata: Metadata = {
  title: "Experience",
  description: "Research experience, education, and technical skills.",
};

export default function CVPage() {
  return (
    <main>
      <SubPageHeader
        title="Experience"
        description="Research experience, education, and technical skills."
      />

      {/* 1 — Education */}
      <Education />

      {/* 2 — Research Experience (NSU RA + Mentor) */}
      <ResearchExperience />

      {/* 3 — Research Interests */}
      <div id="research-interests">
        <Research />
      </div>

      {/* 4 — Technical Skills */}
      <TechnicalSkills />

      {/* 5 — Industry Experience (Applied R&D) */}
      <IndustryExperience />

      {/* 6 — Volunteering & Leadership */}
      <Volunteering />
    </main>
  );
}
