"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { PROJECTS } from "@/data";
import type { Project } from "@/types";

const CAT_LABELS: Record<Project["category"] | "all", string> = {
  all: "All", ai: "AI", quantum: "Quantum", research: "Research", software: "Software",
};

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="row-hover flex flex-col sm:flex-row gap-3 sm:gap-6 px-3 py-5 -mx-3 border-b border-[var(--border-light)] last:border-0"
    >
      {/* Category badge — left column */}
      <div className="sm:w-20 flex-shrink-0 sm:text-right pt-0.5">
        <span className="tag tag-muted">{CAT_LABELS[project.category]}</span>
        {project.featured && (
          <div className="mt-1">
            <span className="tag">Featured</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="font-serif text-[0.95rem] font-medium text-[var(--fg)] mb-0.5">
          {project.title}
        </p>
        <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-2.5">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-2.5">
          {project.technologies.map(t => (
            <span key={t} className="tag tag-muted">{t}</span>
          ))}
        </div>
        <div className="flex gap-4 text-sm">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="no-hl flex items-center gap-1.5 text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
              style={{ textDecoration: "none" }}
            >
              <GithubIcon className="w-3.5 h-3.5" /> code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="no-hl flex items-center gap-1.5 text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
              style={{ textDecoration: "none" }}
            >
              <ExternalLink size={13} strokeWidth={1.5} /> demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [cat, setCat] = useState<Project["category"] | "all">("all");
  const shown = cat === "all" ? PROJECTS : PROJECTS.filter(p => p.category === cat);

  return (
    <section id="projects" className="section-gap bg-[var(--bg)]">
      <div className="page-container">
        <h2 className="section-title">Projects</h2>

        <div className="flex flex-wrap gap-2 mb-8">
          {(Object.keys(CAT_LABELS) as (keyof typeof CAT_LABELS)[]).map(c => (
            <button
              key={c}
              onClick={() => setCat(c as Project["category"] | "all")}
              className={`text-xs px-3 py-1 rounded-full border font-medium transition-all ${
                cat === c
                  ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-pale)]"
                  : "border-[var(--border)] text-[var(--fg-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-pale)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={cat} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            {shown.map((p, i) => <ProjectRow key={p.id} project={p} index={i} />)}
          </motion.div>
        </AnimatePresence>

        <p className="mt-6 text-sm text-[var(--fg-faint)]">
          More on{" "}
          <a href="https://github.com/r-hasan-c" target="_blank" rel="noopener noreferrer" className="font-medium">
            GitHub
          </a>.
        </p>
      </div>
    </section>
  );
}
