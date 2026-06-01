"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeader({
  tag,
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("mb-14", centered ? "text-center" : "text-left", className)}
    >
      {tag && (
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
          {tag}
        </span>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-bold font-serif text-[var(--foreground)]",
          centered ? "section-underline" : "section-underline-left"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[var(--muted)] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
