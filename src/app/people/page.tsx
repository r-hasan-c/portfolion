import type { Metadata } from "next";
import SubPageHeader from "@/components/layout/SubPageHeader";
import People        from "@/components/sections/People";

export const metadata: Metadata = {
  title: "People",
  description: "Supervisors, mentors, and research collaborators.",
};

export default function PeoplePage() {
  return (
    <main>
      <SubPageHeader
        title="People"
        description="The supervisors, mentors, and co-authors who make this research possible."
      />
      <People />
    </main>
  );
}
