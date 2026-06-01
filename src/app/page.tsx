import Link from "next/link";
import Hero          from "@/components/sections/Hero";
import About         from "@/components/sections/About";
import News          from "@/components/sections/News";
import ResearchTeaser from "@/components/sections/ResearchTeaser";
import PubsPreview   from "@/components/sections/PubsPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <ResearchTeaser />
      <PubsPreview />
      <News />
    </main>
  );
}
