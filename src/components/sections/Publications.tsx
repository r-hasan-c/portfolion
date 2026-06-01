"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PUBLICATIONS, SITE_CONFIG } from "@/data";
import type { Publication } from "@/types";

const FILTERS = ["all", "journal", "conference", "thesis", "preprint"] as const;
type Filter = (typeof FILTERS)[number];

const STATUS_CFG: Record<Publication["status"], { label: string; cls: string }> = {
  published:      { label: "Published",    cls: "tag-green" },
  accepted:       { label: "Accepted",     cls: "tag" },
  "under-review": { label: "Under Review", cls: "tag-amber" },
  thesis:         { label: "Thesis",       cls: "tag-muted" },
};

const TYPE_LABEL: Record<Publication["type"], string> = {
  journal:    "Journal",
  conference: "Conference",
  thesis:     "Thesis",
  preprint:   "Preprint",
};

/* Short badge labels shown in the dark box */
const JOURNAL_SHORT: Record<string, string> = {
  "qsit-2025":        "IET QC",
  "rag-thesis-2023":  "B.Sc.",
  "bangla-vqa-2025":  "LRE",
  "disaster-2026":    "IEEE",
};

function PubRow({ pub, index }: { pub: Publication; index: number }) {
  const [open, setOpen] = useState(false);
  const st = STATUS_CFG[pub.status];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="row-hover flex gap-4 px-3 py-5 -mx-3 border-b border-[var(--border-light)] last:border-0"
    >
      {/* Thumbnail */}
      <div className="pub-thumb hidden sm:flex flex-col items-center justify-center gap-1.5">
        <span className="journal-badge">{JOURNAL_SHORT[pub.id] ?? "pub"}</span>
        <span className="text-[10px] text-[var(--fg-faint)] leading-tight text-center">
          {pub.year}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Badges row */}
        <div className="flex flex-wrap gap-1.5 mb-1.5">
          <span className="tag tag-muted">{TYPE_LABEL[pub.type]}</span>
          <span className={`tag ${st.cls}`}>{st.label}</span>
          {pub.tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>

        {/* Title */}
        <h3 className="font-serif text-[0.95rem] font-medium text-[var(--fg)] leading-snug mb-0.5">
          {pub.title}
        </h3>

        {/* Venue */}
        <p className="text-sm text-[var(--fg-muted)] italic mb-2">{pub.venue}</p>

        {/* Links */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {pub.paperUrl && (
            <a href={pub.paperUrl} target="_blank" rel="noopener noreferrer" className="font-medium">
              paper
            </a>
          )}
          {pub.citeUrl && (
            <a href={pub.citeUrl} className="text-[var(--fg-muted)] hover:text-[var(--fg)]">
              bib
            </a>
          )}
          {pub.abstract && (
            <button
              onClick={() => setOpen(v => !v)}
              className="text-[var(--fg-faint)] hover:text-[var(--fg)] text-sm transition-colors"
            >
              {open ? "▲ abstract" : "▼ abstract"}
            </button>
          )}
        </div>

        {/* Abstract */}
        <AnimatePresence>
          {open && pub.abstract && (
            <motion.p
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: "0.75rem" }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.25 }}
              className="text-sm text-[var(--fg-muted)] leading-relaxed border-l-2 border-[var(--accent)] pl-3 bg-[var(--accent-pale)] rounded-r-md pr-3 py-2"
            >
              {pub.abstract}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Publications() {
  const [filter, setFilter] = useState<Filter>("all");

  const shown = filter === "all"
    ? PUBLICATIONS
    : PUBLICATIONS.filter(p => p.type === filter);

  return (
    <section id="publications" className="section-gap bg-[var(--bg-alt)]">
      <div className="page-container">
        <h2 className="section-title">Publications</h2>

        {/* Filter row */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-xs px-3 py-1 rounded-full border font-medium transition-all ${
                filter === f
                  ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-pale)]"
                  : "border-[var(--border)] text-[var(--fg-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-pale)]"
              }`}
            >
              {f === "all" ? "all" : TYPE_LABEL[f as Publication["type"]].toLowerCase()}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={filter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            {shown.map((pub, i) => <PubRow key={pub.id} pub={pub} index={i} />)}
          </motion.div>
        </AnimatePresence>

        <p className="mt-6 text-sm text-[var(--fg-faint)]">
          Full list on{" "}
          <a href={SITE_CONFIG.googleScholar ?? "#"} target="_blank" rel="noopener noreferrer" className="font-medium">Google Scholar</a>.
        </p>
      </div>
    </section>
  );
}
