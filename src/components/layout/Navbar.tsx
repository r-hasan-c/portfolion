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

  // Close menu when user starts scrolling
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
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
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[var(--nav-h)] inset-x-0 z-40 bg-[#0D1424] border-b border-[#1E2A3D] shadow-2xl md:hidden"
          >
            <nav className="page-container py-2 flex flex-col">
              {NAV_LINKS.map(({ href, label }, i) => {
                const active = isActive(href);
                return (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.18 }}
                  >
                    <Link
                      href={href}
                      style={{ textDecoration: "none" }}
                      className={`flex items-center justify-between py-3.5 border-b border-white/[0.06] transition-colors duration-150 ${
                        active
                          ? "text-[#22D3EE]"
                          : "text-[#E2E8F0] hover:text-[#22D3EE]"
                      }`}
                    >
                      <span className={`text-[0.95rem] font-medium ${active ? "font-semibold" : ""}`}>
                        {label}
                      </span>
                      <ChevronRight
                        size={15}
                        strokeWidth={2}
                        className={active ? "text-[#22D3EE]" : "text-white/25"}
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
