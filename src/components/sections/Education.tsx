"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/data";

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

export default function Education() {
  return (
    <section id="education" className="section-gap bg-[var(--bg-alt)]">
      <div className="page-container">
        <h2 className="section-title">Education</h2>

        <div>
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="row-hover flex gap-5 px-3 py-5 -mx-3 border-b border-[var(--border-light)] last:border-0"
            >
              {/* Left column: logo → period → location */}
              <div className="flex flex-col items-center flex-shrink-0 w-32 pt-1 gap-1">
                <LogoBox src={edu.logo} alt={edu.institution} />
                <span className="text-[0.65rem] font-mono text-[var(--fg-faint)] text-center whitespace-nowrap">
                  {edu.period}
                </span>
                {edu.location && (
                  <span className="text-[0.65rem] text-[var(--fg-faint)] text-center whitespace-nowrap">
                    {edu.location}
                  </span>
                )}
              </div>

              {/* Right: content */}
              <div className="flex-1 pt-0.5">
                <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
                  <span className="font-serif text-[0.95rem] font-medium text-[var(--fg)]">
                    {edu.degree}
                  </span>
                  <span className={`tag ${
                    edu.status === "current"  ? "tag-green" :
                    edu.status === "upcoming" ? ""          : "tag-muted"
                  }`}>
                    {edu.status.charAt(0).toUpperCase() + edu.status.slice(1)}
                  </span>
                </div>
                <p className="text-sm text-[var(--fg-muted)] mb-0.5">
                  {edu.id === "hsc" ? `Faculty: ${edu.field}` : edu.field}
                </p>
                <p className="text-sm text-[var(--fg-muted)]">{edu.institution}</p>
                {edu.supervisor && (
                  <p className="text-sm text-[var(--fg-muted)] mt-1">
                    Advisor:{" "}
                    {edu.supervisorUrl ? (
                      <a href={edu.supervisorUrl} target="_blank" rel="noopener noreferrer">
                        {edu.supervisor}
                      </a>
                    ) : (
                      edu.supervisor
                    )}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
