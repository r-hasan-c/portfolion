"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/data";

export default function About() {
  return (
    <section className="section-gap-sm bg-[var(--bg-alt)]">
      <div className="page-container">
        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {STATS.map(s => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-2xl font-medium text-[var(--accent)] mb-0.5">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-xs text-[var(--fg-faint)] uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
