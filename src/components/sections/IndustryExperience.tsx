"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/data";

function LogoBox({ src, alt }: { src?: string; alt: string }) {
  const initial = alt.charAt(0).toUpperCase();
  return (
    <div className="w-11 h-11 rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--bg-alt)] flex items-center justify-center flex-shrink-0">
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-contain p-1.5" />
      ) : (
        <span className="text-sm font-semibold text-[var(--fg-faint)] select-none">{initial}</span>
      )}
    </div>
  );
}

export default function IndustryExperience() {
  const items = EXPERIENCES.filter(e => e.type === "industry");

  // Group by company
  const grouped = items.reduce<Record<string, typeof items>>((acc, exp) => {
    if (!acc[exp.company]) acc[exp.company] = [];
    acc[exp.company].push(exp);
    return acc;
  }, {});

  const companies = Object.entries(grouped);

  return (
    <section id="industry-experience" className="section-gap bg-[var(--bg)]">
      <div className="page-container">
        <h2 className="section-title">Industry Experience</h2>
        <p className="text-xs text-[var(--fg-faint)] uppercase tracking-widest mb-6">Applied R&amp;D</p>

        <div className="space-y-0">
          {companies.map(([company, roles], gi) => {
            const rep = roles[0]; // representative entry for logo/location
            return (
              <motion.div
                key={company}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: gi * 0.08 }}
                className="row-hover flex gap-5 px-3 py-5 -mx-3 border-b border-[var(--border-light)] last:border-0"
              >
                {/* Left: logo */}
                <div className="flex flex-col items-center flex-shrink-0 w-32 pt-1 gap-1">
                  <LogoBox src={rep.logo} alt={company} />
                  <span className="text-[0.65rem] text-[var(--fg-faint)] text-center whitespace-nowrap">
                    {rep.location}
                  </span>
                </div>

                {/* Right: company + stacked roles */}
                <div className="flex-1 pt-0.5">
                  {/* Company name */}
                  <p className="text-sm font-semibold text-[var(--accent)] mb-3">{company}</p>

                  {/* Roles — each its own sub-row */}
                  <div className="space-y-4">
                    {roles.map((exp, ri) => (
                      <div key={exp.id} className={ri !== 0 ? "border-t border-[var(--border-light)] pt-4" : ""}>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 mb-1">
                          <span className="font-serif text-[0.9rem] font-medium text-[var(--fg)]">
                            {exp.role}
                          </span>
                          <span className="text-[0.65rem] font-mono text-[var(--fg-faint)] whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                        {exp.current && (
                          <span className="tag tag-green text-[0.6rem] mb-1 inline-block">current</span>
                        )}
                        <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
