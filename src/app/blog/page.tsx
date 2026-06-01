import type { Metadata } from "next";
import SubPageHeader from "@/components/layout/SubPageHeader";
import Blog          from "@/components/sections/Blog";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Achievements, certifications, and academic honours.",
};

export default function BlogPage() {
  return (
    <main>
      <SubPageHeader
        title="Achievements & Certifications"
        description="Competition results, language certifications, and standardised test scores."
      />
      <Blog />
    </main>
  );
}
