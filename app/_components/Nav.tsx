import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { route: "livre", href: "/", label: "Le livre" },
  { route: "conferences", href: "/conferences", label: "Conférences" },
  { route: "apropos", href: "/apropos", label: "À propos" },
  { route: "contact", href: "/contact", label: "Contact" },
];

export default function Nav({ route }: { route: string }) {
  return (
    <nav className="nav">
      <Link href="/" className="nav__brand">
        <span className="nav__brand-mark">
          <Image src="/assets/cover.jpg" alt="Universalisme noir" width={30} height={42} style={{ objectFit: "cover", display: "block", width: "100%", height: "100%" }} />
        </span>
        <span>Régis Pio</span>
      </Link>
      <div className="nav__links">
        {LINKS.map((l) => (
          <Link
            key={l.route}
            href={l.href}
            className={`nav__link ${route === l.route ? "is-active" : ""}`}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <div className="nav__right">
        <div className="nav__social">
          <a
            className="nav__social-btn"
            href="https://facebook.com"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8.1V14h2.4v7h3z" />
            </svg>
          </a>
          <a
            className="nav__social-btn"
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
              <circle cx="12" cy="12" r="3.6" />
              <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            className="nav__social-btn"
            href="https://www.linkedin.com/in/regis-pio-240664400/?skipRedirect=true"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
              <path d="M6.94 5a1.94 1.94 0 11-3.88 0 1.94 1.94 0 013.88 0zM3.5 8.4h3.4V21H3.5V8.4zM10.4 8.4h3.25v1.74h.05c.45-.84 1.55-1.74 3.2-1.74 3.42 0 4.05 2.25 4.05 5.18V21h-3.4v-6.5c0-1.55-.03-3.55-2.16-3.55-2.17 0-2.5 1.7-2.5 3.44V21h-3.4V8.4z" />
            </svg>
          </a>
          <a
            className="nav__social-btn"
            href="https://twitter.com"
            target="_blank"
            rel="noopener"
            aria-label="Twitter / X"
          >
            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
              <path d="M17.5 3h3.1l-6.8 7.8L22 21h-6.3l-4.9-6.5L5 21H1.9l7.3-8.3L1.5 3H8l4.4 5.9L17.5 3zm-1.1 16.1h1.7L7.7 4.8H5.9l10.5 14.3z" />
            </svg>
          </a>
        </div>
        <Link href="/contact" className="nav__cta">
          Demander un devis
          <span
            className="arrow"
            style={{
              width: 10,
              height: 10,
              borderRight: "1px solid currentColor",
              borderTop: "1px solid currentColor",
              transform: "rotate(45deg)",
            }}
          />
        </Link>
      </div>
    </nav>
  );
}
