"use client";

import { motion } from "framer-motion";

const ITEMS = [
  {
    id: "rtp",
    role: "Wing Member → Associate Wing Leader → Wing Leader",
    org: "Right to Peace",
    period: "Jan 2020 – Jun 2023",
    duration: "3 yrs 6 mos",
    logo: "/images/r2p.png",
  },
  {
    id: "nsu-acm",
    role: "General Member → Provisional Member",
    org: "NSU ACM Student Chapter",
    period: "Sep 2019 – Mar 2020",
    duration: "7 mos",
    logo: "/images/acm.png",
  },
];

function LogoBox({ src, alt }: { src?: string; alt: string }) {
  const initial = alt.charAt(0).toUpperCase();
  return (
    <div className="w-11 h-11 rounded-lg overflow-hidden border border-[var(--border)] bg-[var(--bg-alt)] flex items-center justify-center">
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-contain p-1.5" />
      ) : (
        <span className="text-sm font-semibold text-[var(--fg-faint)] select-none">{initial}</span>
      )}
    </div>
  );
}

export default function Volunteering() {
  return (
    <section id="volunteering" className="section-gap bg-[var(--bg)]">
      <div className="page-container">
        <h2 className="section-title">Volunteering</h2>

        <div>
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="row-hover flex gap-5 px-3 py-5 -mx-3 border-b border-[var(--border-light)] last:border-0"
            >
              {/* Left column: logo → period → duration */}
              <div className="flex flex-col items-center flex-shrink-0 w-32 pt-1 gap-1">
                <LogoBox src={item.logo} alt={item.org} />
                <span className="text-[0.65rem] font-mono text-[var(--fg-faint)] text-center whitespace-nowrap">
                  {item.period}
                </span>
                <span className="text-[0.65rem] text-[var(--fg-faint)] text-center whitespace-nowrap">
                  {item.duration}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-0.5">
                <p className="font-serif text-[0.95rem] font-medium text-[var(--fg)] mb-0.5">
                  {item.role}
                </p>
                <p className="text-sm text-[var(--accent)]">{item.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
