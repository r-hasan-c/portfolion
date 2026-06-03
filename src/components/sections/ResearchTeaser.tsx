"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RESEARCH_INTERESTS } from "@/data";

const ACCENT_BORDERS = [
  "#06B6D4", "#0EA5E9", "#10B981", "#8B5CF6",
  "#F59E0B", "#14B8A6", "#EC4899", "#84CC16",
];

export default function ResearchTeaser() {
  return (
    <section className="section-gap bg-[var(--bg-alt)]">
      <div className="page-container">
        <div className="flex items-baseline justify-between mb-7">
          <h2 className="section-title" style={{ marginBottom: 0 }}>Research</h2>
          <Link
            href="/cv#research"
            className="text-xs text-[var(--fg-faint)] hover:text-[var(--accent)] transition-colors"
            style={{ textDecoration: "none" }}
          >
            All Interests →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {RESEARCH_INTERESTS.slice(0, 4).map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: i * 0.07 }}
              className="card p-5 group cursor-default hover:ring-1 hover:ring-[var(--accent)] hover:ring-offset-0"
              style={{ borderTopColor: ACCENT_BORDERS[i], borderTopWidth: "2px" }}
            >
              <h3 className="font-serif text-[0.93rem] font-medium text-[var(--fg)] mb-1.5 group-hover:text-[var(--accent)] transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-3 line-clamp-2">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.technologies.slice(0, 3).map(t => (
                  <span key={t} className="tag tag-muted">{t}</span>
                ))}
                {item.technologies.length > 3 && (
                  <span className="tag tag-muted">+{item.technologies.length - 3}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
