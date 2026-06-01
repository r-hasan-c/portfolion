import type { Metadata } from "next";
import SubPageHeader from "@/components/layout/SubPageHeader";
import Publications  from "@/components/sections/Publications";

export const metadata: Metadata = {
  title: "Publications",
  description: "Peer-reviewed research in quantum cryptography, AI, NLP, and computer vision.",
};

export default function PublicationsPage() {
  return (
    <main>
      <SubPageHeader
        title="Publications"
        description="Peer-reviewed research spanning quantum cryptography, natural language processing, and computer vision."
      />
      <Publications />
    </main>
  );
}
