import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { SITE_CONFIG } from "@/data";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)]" style={{ borderTop: "2px solid transparent", borderImage: "linear-gradient(90deg, transparent 0%, var(--accent) 30%, #4d7dd4 70%, transparent 100%) 1" }}>
      <div className="page-container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Social links */}
        <div className="flex items-center gap-5 text-sm text-[var(--fg-faint)]">
          <a href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer"
            className="no-hl flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
            style={{ textDecoration: "none" }}>
            <GithubIcon className="w-4 h-4" />
            <span>github</span>
          </a>
          <a href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer"
            className="no-hl flex items-center gap-1.5 hover:text-[var(--accent)] transition-colors"
            style={{ textDecoration: "none" }}>
            <LinkedinIcon className="w-4 h-4" />
            <span>linkedin</span>
          </a>
          <a href={SITE_CONFIG.email}
            className="no-hl hover:text-[var(--accent)] transition-colors"
            style={{ textDecoration: "none" }}>
            email
          </a>
          <a href={SITE_CONFIG.googleScholar}
            className="no-hl hover:text-[var(--accent)] transition-colors"
            style={{ textDecoration: "none" }}>
            scholar
          </a>
        </div>

        {/* Credit */}
        <p className="text-xs text-[var(--fg-faint)]">
          Built with curiosity, research, and engineering. ·{" "}
          © {new Date().getFullYear()} Mohammed Rakibul Hasan
        </p>
      </div>
    </footer>
  );
}
