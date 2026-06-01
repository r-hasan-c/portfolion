"use client";

import { motion } from "framer-motion";
import { GithubIcon } from "@/components/ui/Icons";
import { SKILLS, SITE_CONFIG } from "@/data";

const CATS = [
  { key: "language", label: "Languages" },
  { key: "ml",       label: "ML / AI" },
  { key: "quantum",  label: "Quantum" },
  { key: "system",   label: "Systems" },
  { key: "devops",   label: "DevOps" },
];

export default function GitHubSection() {
  const cats = CATS
    .map(c => ({ ...c, skills: SKILLS.filter(s => s.category === c.key) }))
    .filter(c => c.skills.length > 0);

  return (
    <section id="github" className="section-gap bg-[var(--bg)]">
      <div className="page-container">
        <h2 className="section-title">Skills & Code</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Skill bars */}
          <div className="space-y-8">
            {cats.map(cat => (
              <div key={cat.key}>
                <p className="text-xs font-medium uppercase tracking-widest text-[var(--fg-faint)] mb-3">
                  {cat.label}
                </p>
                <div className="space-y-2.5">
                  {cat.skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-[var(--fg-muted)]">{skill.name}</span>
                        <span className="text-[var(--fg-faint)] font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-1 rounded-full bg-[var(--border-light)]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: i * 0.06, ease: "easeOut" }}
                          className="h-full rounded-full bg-[var(--accent)]"
                          style={{ opacity: 0.75 + (skill.level / 100) * 0.25 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* GitHub activity */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--fg-faint)] mb-3">
              Contribution Activity
            </p>

            {/* Heatmap */}
            <div
              className="grid gap-[3px] mb-3"
              style={{ gridTemplateColumns: "repeat(52, 1fr)" }}
            >
              {Array.from({ length: 52 * 7 }).map((_, i) => {
                const v = Math.random();
                const op = v < 0.5 ? 0.06 : v < 0.7 ? 0.2 : v < 0.85 ? 0.45 : 0.72;
                return (
                  <div
                    key={i}
                    className="aspect-square rounded-[2px] transition-opacity hover:opacity-100"
                    style={{ backgroundColor: `rgba(30, 61, 140, ${op})` }}
                  />
                );
              })}
            </div>
            <p className="text-xs text-[var(--fg-faint)] mb-6 font-mono">
              contribution graph · github.com/r-hasan-c
            </p>

            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="no-hl inline-flex items-center gap-2 text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
              style={{ textDecoration: "none" }}
            >
              <GithubIcon className="w-4 h-4" />
              View profile →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
