"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, GoogleScholarIcon } from "@/components/ui/Icons";
import TypewriterEffect from "@/components/ui/TypewriterEffect";
import { SITE_CONFIG, TYPING_PHRASES } from "@/data";

export default function Hero() {
  const [showHi, setShowHi] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => setShowHi(true), 1000);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    if (!showHi) return;
    const dismiss = setTimeout(() => setShowHi(false), 2000);
    return () => clearTimeout(dismiss);
  }, [showHi]);

  return (
    <>
      {/* ── "Hi!" modal ── */}
      <AnimatePresence>
        {showHi && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer"
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              background: "rgba(10, 22, 70, 0.65)",
            }}
            onClick={() => setShowHi(false)}
          >
            <motion.div
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.2, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="flex flex-col items-center gap-5"
              onClick={e => e.stopPropagation()}
            >
              <motion.span
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ delay: 0.25, duration: 0.35, ease: "easeOut" }}
                className="font-serif text-6xl md:text-7xl font-semibold text-white tracking-wide select-none"
              >
                Hi!
              </motion.span>
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-[#4d7dd4] shadow-[0_0_48px_rgba(77,125,212,0.5)]">
                <img src="/images/Me.png" alt="Mohammed Rakibul Hasan" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section
        id="about"
        className="min-h-[100svh] md:min-h-0 pb-16 subpage-header"
        style={{ paddingTop: "calc(var(--nav-h) + 3.5rem)" }}
      >
        <div className="page-container">
          <div className="flex flex-col-reverse md:flex-row items-start gap-8 md:gap-14">

            {/* ── Text column ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 min-w-0"
            >
              {/* Name */}
              <h1 className="font-serif text-[1.55rem] md:text-[1.8rem] font-medium leading-tight mb-1 tracking-[-0.02em] text-white">
                Mohammed Rakibul Hasan
              </h1>

              {/* Dynamic subtitle */}
              <p className="text-base font-medium mb-3" style={{ color: "#F3F4F6" }}>
                 Researcher  ·{" "}
                <span className="text-[#67E8F9]">
                  <TypewriterEffect phrases={TYPING_PHRASES} className="cursor" />
                </span>
              </p>

              {/* Status line — colour forced to match h1 (#F3F4F6) */}
              <p className="font-serif text-[0.95rem] font-medium tracking-[-0.01em] mb-4 leading-snug" style={{ color: "#F3F4F6" }}>
                PhD student & Graduate Research Assistant, {" "}
                <a
                  href="https://www.uah.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-hl text-[#67E8F9] hover:text-white transition-colors"
                  style={{ textDecoration: "none" }}
                >
                  University of Alabama in Huntsville.
                </a>{" "}
              </p>

              {/* Bio */}
              <p
                className="text-sm text-white/65 mb-5 max-w-xl"
                style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', serif", lineHeight: "1.6", textAlign: "justify" }}
              >
                I work at the intersection of quantum information science and artificial intelligence
                — designing secure quantum communication protocols, advancing QKD systems, and
                building AI-driven approaches for radar sensing and signal processing. I completed
                my B.Sc. in Computer Science and Engineering in 2023 and have since contributed to
                peer-reviewed research in quantum cryptography, NLP, and computer vision.
              </p>

              {/* Action links */}
              <div
                className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"
                style={{ fontFamily: "Cambria, Georgia, 'Times New Roman', serif" }}
              >
                <a
                  href={SITE_CONFIG.email}
                  className="no-hl inline-flex items-center gap-1.5 font-medium hover:text-white transition-colors"
                  style={{ textDecoration: "none", color: "#67E8F9" }}
                >
                  Email <ArrowRight size={13} strokeWidth={2} />
                </a>
                <a
                  href={SITE_CONFIG.cvUrl}
                  className="no-hl inline-flex items-center gap-1.5 font-medium hover:text-white transition-colors"
                  style={{ textDecoration: "none", color: "#67E8F9" }}
                >
                  <Download size={13} strokeWidth={1.8} /> CV
                </a>
                <a
                  href={SITE_CONFIG.googleScholar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-hl inline-flex items-center gap-1.5 font-medium hover:text-white transition-colors"
                  style={{ textDecoration: "none", color: "#67E8F9" }}
                >
                  Google Scholar <ArrowRight size={13} strokeWidth={2} />
                </a>
              </div>
            </motion.div>

            {/* ── Photo column ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="flex-shrink-0 flex flex-col items-center gap-3 md:pt-1"
            >
              {/* Avatar */}
              <div
                className="relative w-36 h-36 md:w-32 md:h-32 rounded-full overflow-hidden border border-white hover:border-[#4d7dd4] transition-all duration-300 hover:shadow-[0_0_14px_rgba(77,125,212,0.45)] cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleMouseEnter}
                onTouchEnd={handleMouseLeave}
                onTouchCancel={handleMouseLeave}
              >
                <img
                  src="/images/Me.png"
                  alt="Mohammed Rakibul Hasan"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Location */}
              <div className="text-center text-[0.7rem] text-white/70 leading-relaxed">
                <div>Huntsville, AL, USA</div>
              
              </div>

              {/* Social icons: Google Scholar · LinkedIn · GitHub · X */}
              <div className="flex items-center gap-6 md:gap-4">
                <a
                  href={SITE_CONFIG.googleScholar}
                  target="_blank" rel="noopener noreferrer"
                  className="no-hl text-white hover:text-[#22D3EE] transition-colors"
                  style={{ textDecoration: "none" }}
                  title="Google Scholar"
                >
                  <GoogleScholarIcon className="w-6 h-6 md:w-4 md:h-4" />
                </a>
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank" rel="noopener noreferrer"
                  className="no-hl text-white hover:text-[#22D3EE] transition-colors"
                  style={{ textDecoration: "none" }}
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-6 h-6 md:w-4 md:h-4" />
                </a>
                <a
                  href={SITE_CONFIG.github}
                  target="_blank" rel="noopener noreferrer"
                  className="no-hl text-white hover:text-[#22D3EE] transition-colors"
                  style={{ textDecoration: "none" }}
                  title="GitHub"
                >
                  <GithubIcon className="w-6 h-6 md:w-4 md:h-4" />
                </a>
                <a
                  href={SITE_CONFIG.twitter}
                  target="_blank" rel="noopener noreferrer"
                  className="no-hl text-white hover:text-[#22D3EE] transition-colors"
                  style={{ textDecoration: "none" }}
                  title="X (Twitter)"
                >
                  <XIcon className="w-6 h-6 md:w-4 md:h-4" />
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
