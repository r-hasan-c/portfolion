"use client";

import { motion } from "framer-motion";

const ITEMS = [
  {
    id: "caretutors",
    role: "Certified Tutor",
    org: "Caretutors",
    period: "Ongoing",
    location: "Remote",
    desc: "Personalized academic tutoring in mathematics, programming, and computer science fundamentals to students at various levels.",
    logo: "/logos/caretutors.png",
  },
  {
    id: "nsu",
    role: "Student Mentor",
    org: "North South University — Research Assistantship",
    period: "Aug 2023 – Mar 2024",
    location: "Dhaka, Bangladesh",
    desc: "Guided 20+ undergraduate students in AI, computing concepts, and research methodology during Research Assistantship.",
    logo: "/logos/nsu.png",
  },
];

function LogoBox({ src, alt }: { src?: string; alt: string }) {
  const initial = alt.charAt(0).toUpperCase();
  return (
    <div className="w-11 h-11 rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--bg-alt)] flex items-center justify-center">
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-contain p-1.5" />
      ) : (
        <span className="text-sm font-semibold text-[var(--fg-faint)] select-none">{initial}</span>
      )}
    </div>
  );
}

export default function Teaching() {
  return (
    <section id="teaching" className="section-gap bg-[var(--bg)]">
      <div className="page-container">
        <h2 className="section-title">Teaching & Mentorship</h2>

        <div>
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="row-hover flex gap-5 px-3 py-5 -mx-3 border-b border-[var(--border-light)] last:border-0"
            >
              {/* Left column: logo → period → location */}
              <div className="flex flex-col items-center flex-shrink-0 w-32 pt-1 gap-1">
                <LogoBox src={item.logo} alt={item.org} />
                <span className="text-[0.65rem] font-mono text-[var(--fg-faint)] text-center whitespace-nowrap">
                  {item.period}
                </span>
                <span className="text-[0.65rem] text-[var(--fg-faint)] text-center whitespace-nowrap">
                  {item.location}
                </span>
              </div>

              {/* Right: content */}
              <div className="flex-1 pt-0.5">
                <p className="font-serif text-[0.95rem] font-medium text-[var(--fg)] mb-0.5">{item.role}</p>
                <p className="text-sm text-[var(--accent)] mb-1.5">{item.org}</p>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
