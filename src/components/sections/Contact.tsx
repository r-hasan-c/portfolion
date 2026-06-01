"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/data";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export default function Contact() {
  const [form, setForm]   = useState({ name: "", email: "", message: "" });
  const [sent, setSent]   = useState(false);
  const [busy, setBusy]   = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    await new Promise(r => setTimeout(r, 1000));
    setBusy(false);
    setSent(true);
  };

  return (
    <section id="contact" className="section-gap bg-[var(--bg-alt)]">
      <div className="page-container ">
        <h2 className="section-title">Contact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <p className="prose-body mb-6">
              I am happy to discuss research collaboration, PhD opportunities, or anything
              related to quantum communication and AI. Feel free to reach out.
            </p>

            <div className="space-y-3 text-sm text-[var(--fg-muted)]">
              <div>
                <span className="font-medium text-[var(--fg)]">Email</span>
                <br />
                <a href={SITE_CONFIG.email}>rakibpsp@gmail.com</a>
              </div>
              <div>
                <span className="font-medium text-[var(--fg)]">Location</span>
                <br />
                Dhaka, Bangladesh · Joining Huntsville, AL (Fall 2026)
              </div>
              <div className="pt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer"
                  className="no-hl flex items-center gap-1.5 text-[var(--fg-muted)] hover:text-[var(--accent)]"
                  style={{ textDecoration: "none" }}>
                  <GithubIcon className="w-3.5 h-3.5" /> GitHub
                </a>
                <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer"
                  className="no-hl flex items-center gap-1.5 text-[var(--fg-muted)] hover:text-[var(--accent)]"
                  style={{ textDecoration: "none" }}>
                  <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
                </a>
                <a href={SITE_CONFIG.googleScholar}
                  className="text-[var(--fg-muted)] hover:text-[var(--accent)]"
                  style={{ textDecoration: "none" }}>
                  Google Scholar
                </a>
                <a href={SITE_CONFIG.orcid}
                  className="text-[var(--fg-muted)] hover:text-[var(--accent)]"
                  style={{ textDecoration: "none" }}>
                  ORCID
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {sent ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-[var(--fg-muted)] border border-[var(--border)] rounded-md p-6"
              >
                <p className="font-serif text-base text-[var(--fg)] mb-1">Message sent.</p>
                <p>Thank you — I will get back to you soon.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-3 text-sm text-[var(--accent)] hover:text-[var(--accent-h)]"
                >
                  Send another →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                {[
                  { key: "name",  label: "Name",    type: "text",  ph: "Your name" },
                  { key: "email", label: "Email",   type: "email", ph: "you@example.com" },
                ].map(f => (
                  <div key={f.key}>
                    <label className="block text-sm text-[var(--fg-muted)] mb-1">{f.label}</label>
                    <input
                      type={f.type}
                      required
                      placeholder={f.ph}
                      value={(form as Record<string, string>)[f.key]}
                      onChange={e => setForm(s => ({ ...s, [f.key]: e.target.value }))}
                      className="w-full px-3 py-2 text-sm border border-[var(--border)] rounded-md bg-[var(--bg)] text-[var(--fg)] placeholder:text-[var(--fg-faint)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm text-[var(--fg-muted)] mb-1">Message</label>
                  <textarea
                    required rows={5}
                    placeholder="Your message…"
                    value={form.message}
                    onChange={e => setForm(s => ({ ...s, message: e.target.value }))}
                    className="w-full px-3 py-2 text-sm border border-[var(--border)] rounded-md bg-[var(--bg)] text-[var(--fg)] placeholder:text-[var(--fg-faint)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit" disabled={busy}
                  className="px-5 py-2 text-sm font-medium rounded-md bg-[var(--accent)] text-white hover:bg-[var(--accent-h)] disabled:opacity-60 transition-colors"
                >
                  {busy ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
