import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter Régis Pio pour une conférence, une intervention ou une dédicace. Formulaire de contact direct.",
  alternates: {
    canonical: "https://www.universalismenoir.com/contact",
  },
  openGraph: {
    title: "Contact — Régis Pio",
    description: "Contacter Régis Pio pour une conférence ou une intervention.",
    url: "https://www.universalismenoir.com/contact",
  },
};

import Script from "next/script";
import { OrnLines, OrnBlock } from "../_components/Ornaments";

export default function PageContact() {
  return (
    <div data-screen-label="04 Contact">
      <section className="contact-hero" style={{ position: "relative", overflow: "hidden" }}>
        <OrnLines className="orn-tr" count={6} />
        <OrnBlock className="orn-block-bl" color="red" skew={2} />
        <div
          className="bracket"
          style={{ display: "block", maxWidth: "var(--max)", margin: "0 auto", color: "var(--ink-soft)" }}
        >
          [ 04 / Contact ]
        </div>
        <h1>
          Demande<em>de devis</em>
        </h1>
        <p
          style={{
            fontFamily: "var(--f-serif)",
            fontSize: 19,
            lineHeight: 1.5,
            color: "var(--ink-soft)",
            maxWidth: 640,
            margin: "32px auto 0",
          }}
        >
          <span style={{ display: "block", maxWidth: "var(--max)", margin: "32px auto 0" }}>
            Quelques lignes pour que je puisse préparer une proposition adaptée — format, public, territoire.
          </span>
        </p>
      </section>

      <div className="container">
        <div className="contact-grid">
          <div className="form">
            <iframe
              data-tally-src="https://tally.so/embed/5BeKgb?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="200"
              style={{ border: "none" }}
              title="Demande de devis"
            ></iframe>
            <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
          </div>

          <aside className="contact-side">
            <div className="contact-side__block">
              <div className="contact-side__label">[ Me joindre directement ]</div>
              <a href="mailto:devis@universalismenoir.com" className="contact-side__email">
                devis<em>@</em>universalismenoir.com
              </a>
            </div>
            <div className="contact-side__block">
              <div className="contact-side__label">[ Délai de réponse ]</div>
              <p
                className="contact-side__quote"
                style={{
                  borderLeft: 0,
                  padding: 0,
                  fontStyle: "normal",
                  fontFamily: "var(--f-mono)",
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Sous 3 à 5 jours ouvrés
              </p>
            </div>
            <div className="contact-side__block">
              <div className="contact-side__label">[ Pied de page ]</div>
              <p className="contact-side__quote">
                « À toutes les personnes qui auront lu ce livre, en espérant qu&apos;il vous aura fait passer un bon
                moment et appris deux ou trois choses. »
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
