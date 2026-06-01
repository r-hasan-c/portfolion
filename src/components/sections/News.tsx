"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NEWS } from "@/data/news";

const SHOW_DEFAULT = 4;

export default function News() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? NEWS : NEWS.slice(0, SHOW_DEFAULT);

  return (
    <section id="news" className="section-gap-sm bg-[var(--bg)] border-t border-[var(--border-light)]">
      <div className="page-container">
        <h2 className="section-title">News</h2>

        <div className="space-y-0">
          {visible.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="row-hover flex gap-4 sm:gap-8 px-3 py-4 -mx-3"
            >
              {/* Date column */}
              <div className="w-20 sm:w-24 flex-shrink-0 text-xs text-[var(--fg-faint)] pt-[3px] text-right font-mono">
                {item.date}
              </div>

              {/* Dot + content */}
              <div className="flex gap-3 flex-1 min-w-0">
                <div className="news-dot mt-[5px]" />
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                  {item.content}
                  {item.link && item.linkLabel && (
                    <>
                      {" "}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium"
                      >
                        [{item.linkLabel}]
                      </a>
                    </>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {NEWS.length > SHOW_DEFAULT && (
          <button
            onClick={() => setExpanded(v => !v)}
            className="mt-4 text-sm text-[var(--fg-faint)] hover:text-[var(--accent)] transition-colors"
          >
            {expanded
              ? "↑ show less"
              : `↓ show ${NEWS.length - SHOW_DEFAULT} more`}
          </button>
        )}
      </div>
    </section>
  );
}
