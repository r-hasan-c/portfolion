"use client";

import { useState, useEffect } from "react";

interface Props {
  phrases: string[];
  className?: string;
}

export default function TypewriterEffect({ phrases, className = "" }: Props) {
  const [idx,        setIdx]        = useState(0);
  const [text,       setText]       = useState("");
  const [deleting,   setDeleting]   = useState(false);

  useEffect(() => {
    const phrase = phrases[idx];
    const speed  = deleting ? 45 : 85;

    const t = setTimeout(() => {
      if (!deleting) {
        if (text.length < phrase.length) {
          setText(phrase.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1800);
        }
      } else {
        if (text.length > 0) {
          setText(phrase.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setIdx(i => (i + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [text, deleting, idx, phrases]);

  return <span className={className}>{text}<span className="cursor" /></span>;
}
