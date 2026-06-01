"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/",             label: "About" },
  { href: "/cv",           label: "Experience" },
  { href: "/publications", label: "Publications" },
  { href: "/projects",     label: "Projects" },
  { href: "/people",       label: "People" },
  { href: "/blog",         label: "Achievement" },
  { href: "/contact",      label: "Contact" },
];

export default function Navbar() {
  const pathname  = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Close menu the instant the user scrolls or swipes — capture phase so
  // nothing in the tree can block it, and passive so scroll isn't delayed.
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    document.addEventListener("scroll",    close, { passive: true, capture: true });
    document.addEventListener("touchmove", close, { passive: true, capture: true });
    return () => {
      document.removeEventListener("scroll",    close, { capture: true });
      document.removeEventListener("touchmove", close, { capture: true });
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0e1f54] border-b border-[#1e3d8c]/60 shadow-[0_2px_24px_rgba(14,31,84,0.6)]"
            : "bg-transparent border-b border-white/5"
        }`}
        style={{ height: "var(--nav-h)" }}
      >
        {/* Subtle navy accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: "linear-gradient(90deg, #0B0F19 0%, #1e3d8c 30%, #4d7dd4 50%, #1e3d8c 70%, #0B0F19 100%)",
          }}
        />

        <div className="page-container h-full flex items-center justify-between gap-3">

          {/* Brand */}
          <Link
            href="/"
            className="no-hl font-serif text-[0.88rem] font-medium text-[#E2E8F0] hover:text-[#22D3EE] transition-colors flex-shrink-0 whitespace-nowrap"
            style={{ textDecoration: "none" }}
          >
            Mohammed Rakibul Hasan
          </Link>

          {/* Separator */}
          <div className="hidden md:block h-4 w-px bg-white/15 flex-shrink-0" />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5 flex-1">
            {NAV_LINKS.map(({ href, label }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href}
                  style={{ textDecoration: "none" }}
                  className={`px-2.5 py-1.5 text-[0.8rem] font-medium rounded-full transition-all duration-150 whitespace-nowrap ${
                    active
                      ? "bg-[rgba(6,182,212,0.13)] text-[#06B6D4] ring-1 ring-[rgba(6,182,212,0.25)] underline decoration-[#06B6D4]/40 underline-offset-[3px]"
                      : "text-[#E2E8F0] hover:text-[#22D3EE] hover:bg-[rgba(34,211,238,0.08)]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden text-xs font-medium tracking-wide text-[#E2E8F0] hover:text-[#22D3EE] transition-colors px-2 py-1.5 rounded border border-[#E2E8F0]/20 hover:border-[#22D3EE]"
            aria-label="Toggle menu"
          >
            {menuOpen ? "close" : "menu"}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed top-[var(--nav-h)] inset-x-0 z-40 md:hidden"
            style={{
              background: "rgba(11, 18, 40, 0.92)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <nav className="flex flex-col px-6 py-2">
              {NAV_LINKS.map(({ href, label }, i) => {
                const active = isActive(href);
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.16, ease: "easeOut" }}
                  >
                    <Link
                      href={href}
                      className={`flex items-center justify-between py-4 transition-colors duration-150 ${
                        active ? "text-[#22D3EE]" : "text-white/75 hover:text-white"
                      }`}
                      style={{
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <span className={`text-[1rem] ${active ? "font-semibold" : "font-normal"}`}>
                        {label}
                      </span>
                      <ChevronRight
                        size={15}
                        strokeWidth={1.5}
                        style={{ opacity: active ? 1 : 0.25, color: active ? "#22D3EE" : "white" }}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
