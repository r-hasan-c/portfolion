import type { Metadata } from "next";
import SubPageHeader from "@/components/layout/SubPageHeader";
import Projects      from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Quantum computing, AI research, and engineering projects.",
};

export default function ProjectsPage() {
  return (
    <main>
      <SubPageHeader
        title="Projects"
        description="Research prototypes, AI systems, and quantum computing experiments."
      />
      <Projects />
    </main>
  );
}
