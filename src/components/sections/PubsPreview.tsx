"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PUBLICATIONS } from "@/data";

const STATUS_CLS: Record<string, string> = {
  published:      "tag-green",
  accepted:       "tag",
  "under-review": "tag-amber",
  thesis:         "tag-muted",
};

const JOURNAL_SHORT: Record<string, string> = {
  "qsit-2025":       "IET QC",
  "rag-thesis-2023": "B.Sc.",
  "bangla-vqa-2025": "LRE",
  "disaster-2026":   "IEEE",
};

export default function PubsPreview() {
  const selected = PUBLICATIONS.slice(0, 3);

  return (
    <section className="section-gap bg-[var(--bg)]">
      <div className="page-container">
        <div className="flex items-baseline justify-between mb-7">
          <h2 className="section-title" style={{ marginBottom: 0 }}>Selected Publications</h2>
          <Link
            href="/publications"
            className="text-xs text-[var(--fg-faint)] hover:text-[var(--accent)] transition-colors"
            style={{ textDecoration: "none" }}
          >
            all publications →
          </Link>
        </div>

        <div className="space-y-0">
          {selected.map((pub, i) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: i * 0.07 }}
              className="row-hover flex gap-4 px-3 py-5 -mx-3 border-b border-[var(--border-light)] last:border-0"
            >
              {/* Badge */}
              <div className="pub-thumb hidden sm:flex flex-col items-center justify-center gap-1.5">
                <span className="journal-badge">{JOURNAL_SHORT[pub.id] ?? "pub"}</span>
                <span className="text-[10px] text-[var(--fg-faint)]">{pub.year}</span>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-1.5 mb-1.5">
                  <span className={`tag ${STATUS_CLS[pub.status]}`}>
                    {pub.status === "under-review" ? "under review" : pub.status}
                  </span>
                  {pub.tags.slice(0, 2).map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <h3 className="font-serif text-[0.93rem] font-medium text-[var(--fg)] leading-snug mb-0.5">
                  {pub.title}
                </h3>
                <p className="text-sm text-[var(--fg-muted)] italic">{pub.venue}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href="/publications"
            className="text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-h)] transition-colors"
          >
            View all {PUBLICATIONS.length} publications →
          </Link>
        </div>
      </div>
    </section>
  );
}
