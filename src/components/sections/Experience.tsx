"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data";

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

export default function Experience() {
  return (
    <section id="experience" className="section-gap bg-[var(--bg)]">
      <div className="page-container">
        <h2 className="section-title">Experience</h2>

        <div>
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="row-hover flex gap-5 px-3 py-5 -mx-3 border-b border-[var(--border-light)] last:border-0"
            >
              {/* Left column: logo → period → location */}
              <div className="flex flex-col items-center flex-shrink-0 w-32 pt-1 gap-1">
                <LogoBox src={exp.logo} alt={exp.company} />
                <span className="text-[0.65rem] font-mono text-[var(--fg-faint)] text-center whitespace-nowrap">
                  {exp.period}
                </span>
                <span className="text-[0.65rem] text-[var(--fg-faint)] text-center whitespace-nowrap">
                  {exp.location}
                </span>
              </div>

              {/* Right: content */}
              <div className="flex-1 pt-0.5">
                <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
                  <span className="font-serif text-[0.95rem] font-medium text-[var(--fg)]">
                    {exp.role}
                  </span>
                  {exp.current && <span className="tag tag-green">current</span>}
                </div>
                <p className="text-sm text-[var(--accent)] mb-1.5">{exp.company}</p>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
