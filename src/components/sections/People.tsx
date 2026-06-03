"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PEOPLE } from "@/data";

/*
  To add a real photo:
    1. Drop the image into /public/people/<id>.jpg  (e.g. /public/people/blakely.jpg)
    2. Set imageUrl in src/data/index.ts for that person
*/

const FALLBACK_COLORS = [
  { bg: "#e6ecf8", fg: "#1e3d8c" },   /* navy */
  { bg: "#D1FAE5", fg: "#065F46" },   /* emerald */
  { bg: "#FEF3C7", fg: "#92400E" },   /* amber */
  { bg: "#EDE9FE", fg: "#5B21B6" },   /* violet */
  { bg: "#FFE4E6", fg: "#9F1239" },   /* rose */
  { bg: "#CCFBF1", fg: "#0F766E" },   /* teal */
  { bg: "#FCE7F3", fg: "#9D174D" },   /* pink */
  { bg: "#ECFCCB", fg: "#3F6212" },   /* lime */
];

function PersonCard({
  person,
  idx,
}: {
  person: (typeof PEOPLE)[0];
  idx: number;
}) {
  const initials = person.name
    .split(" ")
    .map(n => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const col = FALLBACK_COLORS[idx % FALLBACK_COLORS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: idx * 0.05 }}
      className="flex flex-col items-center text-center gap-2.5 group"
    >
      {/* Photo circle */}
      <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden border border-[var(--border)] transition-shadow duration-200 group-hover:shadow-md">
        {person.imageUrl ? (
          <Image
            src={person.imageUrl}
            alt={person.name}
            fill
            className="object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center font-serif text-lg font-medium select-none"
            style={{ background: col.bg, color: col.fg }}
          >
            {initials}
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        {person.url ? (
          <a
            href={person.url}
            target={person.url.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="link-underline text-sm font-medium block"
          >
            {person.name}
          </a>
        ) : (
          <p className="text-sm font-medium text-[var(--fg)]">{person.name}</p>
        )}
        <p className="text-xs text-[var(--fg-muted)] leading-snug mt-0.5">{person.role}</p>
        <p className="text-xs text-[var(--fg-faint)] leading-snug">{person.affiliation}</p>
      </div>
    </motion.div>
  );
}

export default function People() {
  const supervisors   = PEOPLE.filter(p => p.category === "supervisor");
  const collaborators = PEOPLE.filter(p => p.category === "collaborator");

  return (
    <section id="people" className="section-gap bg-[var(--bg-alt)]">
      <div className="page-container">
        <h2 className="section-title">People</h2>

        {/* Supervisors */}
        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--fg-faint)] mb-7">
            Supervisors & Mentors
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {supervisors.map((p, i) => (
              <PersonCard key={p.id} person={p} idx={i} />
            ))}
          </div>
        </div>

        {/* Collaborators */}
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--fg-faint)] mb-7">
            Co-authors & Collaborators
          </p>
          {/* Row 1 — first 3 */}
          <div className="grid grid-cols-3 gap-8 mb-8">
            {collaborators.slice(0, 3).map((p, i) => (
              <PersonCard key={p.id} person={p} idx={i + supervisors.length} />
            ))}
          </div>
          {/* Row 2 — last 2 centred */}
          <div className="flex justify-center gap-32">
            {collaborators.slice(3).map((p, i) => (
              <PersonCard key={p.id} person={p} idx={i + supervisors.length + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
