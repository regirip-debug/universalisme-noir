import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <div className="footer__brand">Régis Pio</div>
          <p
            style={{
              fontFamily: "var(--f-serif)",
              fontSize: 15,
              lineHeight: 1.5,
              textTransform: "none",
              letterSpacing: 0,
              fontStyle: "italic",
              color: "var(--ink-soft)",
              maxWidth: 380,
              marginTop: 16,
            }}
          >
            « À toutes les personnes qui auront lu ce livre, en espérant qu&apos;il vous aura fait passer un bon moment et appris deux ou trois choses. »
          </p>
        </div>
        <div className="footer__col">
          <div className="footer__col-label">Le livre</div>
          <a href="https://www.editions-harmattan.fr" target="_blank" rel="noopener">
            Acheter sur L&apos;Harmattan ↗
          </a>
          <Link href="/">Synopsis</Link>
          <Link href="/#extrait">Extrait</Link>
        </div>
        <div className="footer__col">
          <div className="footer__col-label">Conférences</div>
          <Link href="/conferences">Quatre formats</Link>
          <Link href="/conferences">Modalités</Link>
          <Link href="/contact">Demander un devis</Link>
        </div>
        <div className="footer__col">
          <div className="footer__col-label">Contact</div>
          <a href="mailto:contact@universalismenoir.com">contact@universalismenoir.com</a>
          <Link href="/apropos">À propos</Link>
        </div>
      </div>
      <div className="footer__copy">
        <span>© 2025 Régis Pio · Site personnel</span>
        <span>Universalisme noir · L&apos;Harmattan, 2025 · ISBN 978-2-336-55770-0</span>
      </div>
    </footer>
  );
}
