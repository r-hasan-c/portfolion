"use client";

import { motion } from "framer-motion";
import { RESEARCH_INTERESTS } from "@/data";

/* One subtle color per card — very muted, academic palette */
const ACCENT_BORDERS = [
  "#06B6D4", "#0EA5E9", "#10B981", "#8B5CF6",
  "#F59E0B", "#14B8A6", "#EC4899", "#84CC16",
];

export default function Research() {
  return (
    <section id="research" className="section-gap bg-[var(--bg)]">
      <div className="page-container">
        <h2 className="section-title">Research Interests</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {RESEARCH_INTERESTS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="card p-5 group"
              style={{ borderTopColor: ACCENT_BORDERS[i % ACCENT_BORDERS.length], borderTopWidth: "2px" }}
            >
              <h3 className="font-serif text-[0.95rem] font-medium text-[var(--fg)] mb-1.5 group-hover:text-[var(--accent)] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-3">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.technologies.map(t => (
                  <span key={t} className="tag tag-muted">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
