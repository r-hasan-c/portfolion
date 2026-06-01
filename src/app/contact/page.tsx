import type { Metadata } from "next";
import SubPageHeader from "@/components/layout/SubPageHeader";
import Contact       from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for research collaboration, PhD inquiries, or anything else.",
};

export default function ContactPage() {
  return (
    <main>
      <SubPageHeader
        title="Contact"
        description="I'm happy to discuss research collaboration, PhD inquiries, or anything related to quantum communication and AI."
      />
      <Contact />
    </main>
  );
}
