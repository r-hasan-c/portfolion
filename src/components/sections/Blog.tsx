"use client";

import { motion } from "framer-motion";

const ACHIEVEMENTS = [
  {
    id: "innovation",
    title: "Top 10 of 102 Teams",
    subtitle: "Innovation Challenge Season 13",
    org: "NSU ACM",
    year: "2023",
    detail: "Ranked in the top 10 out of 102 competing teams in the national-level innovation challenge.",
  },
  {
    id: "ielts",
    title: "IELTS Band 7.0 — C1 Level",
    subtitle: "International English Language Testing System",
    org: "British Council",
    year: "2024",
    detail: "Band: 7 (C1 academic proficiency)",
  },
  {
    id: "gre",
    title: "Graduate Record Examination",
    subtitle: "Quantitative Reasoning 159 / 170",
    org: "ETS",
    year: "2023",
    detail: "Scored 159 out of 170 in the quantitative reasoning section.",
  },
];

export default function Blog() {
  return (
    <section id="achievements" className="section-gap bg-[var(--bg-alt)]">
      <div className="page-container">
        <h2 className="section-title">Achievements &amp; Certifications</h2>

        <div>
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: i * 0.08 }}
              className="row-hover flex flex-col sm:flex-row gap-1 sm:gap-8 px-3 py-5 -mx-3 border-b border-[var(--border-light)] last:border-0"
            >
              {/* Year + org */}
              <div className="sm:w-36 flex-shrink-0 sm:text-right text-xs text-[var(--fg-faint)] font-mono pt-0.5 leading-relaxed">
                <div>{item.year}</div>
                <div className="mt-0.5">{item.org}</div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="font-serif text-[0.95rem] font-medium text-[var(--fg)] mb-0.5">
                  {item.title}
                </p>
                <p className="text-sm text-[var(--accent)] mb-1.5">{item.subtitle}</p>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
