import type { Metadata } from "next";
import SubPageHeader from "@/components/layout/SubPageHeader";
import Teaching      from "@/components/sections/Teaching";

export const metadata: Metadata = {
  title: "Teaching",
  description: "Teaching and mentorship experience.",
};

export default function TeachingPage() {
  return (
    <main>
      <SubPageHeader
        title="Teaching & Mentorship"
        description="Sharing knowledge through tutoring, mentorship, and academic guidance."
      />
      <Teaching />
    </main>
  );
}
