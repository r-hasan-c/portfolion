"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface Props {
  title: string;
  description?: string;
}

export default function SubPageHeader({ title, description }: Props) {
  return (
    <div className="subpage-header">
      <div className="page-container">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/"
            className="no-hl inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-[#4d7dd4] transition-colors mb-6"
            style={{ textDecoration: "none" }}
          >
            <ArrowLeft size={12} strokeWidth={2} />
            home
          </Link>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="font-serif text-[1.7rem] md:text-[1.9rem] font-medium tracking-[-0.02em] mb-2 text-white"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="text-sm leading-relaxed max-w-xl text-white/65"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
