"use client";

import { useState } from "react";
import { OrnLines, OrnBlock } from "../_components/Ornaments";

export default function PageContact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        data-screen-label="04 Contact"
        style={{ minHeight: "60vh", display: "grid", placeItems: "center", padding: "120px 24px" }}
      >
        <div style={{ maxWidth: 640, textAlign: "center" }}>
          <div className="bracket" style={{ color: "var(--accent)", marginBottom: 24 }}>
            Demande envoyée
          </div>
          <h1
            style={{
              fontFamily: "var(--f-display)",
              fontSize: "clamp(56px, 8vw, 120px)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Merci !
          </h1>
          <p
            style={{
              fontFamily: "var(--f-serif)",
              fontSize: 19,
              lineHeight: 1.5,
              marginTop: 24,
              color: "var(--ink-soft)",
            }}
          >
            Votre demande de devis a bien été envoyée. Vous recevrez une réponse dans les jours qui viennent.
          </p>
          <button className="btn" onClick={() => setSubmitted(false)} style={{ marginTop: 32 }}>
            Nouvelle demande{" "}
            <span
              className="arrow"
              style={{
                width: 12,
                height: 12,
                borderRight: "1px solid currentColor",
                borderTop: "1px solid currentColor",
                transform: "rotate(45deg)",
              }}
            />
          </button>
        </div>
      </div>
    );
  }

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
          <form className="form" onSubmit={onSubmit}>
            <div className="field">
              <div className="field__label">
                <span>Nom &amp; prénom</span>
                <span className="required">requis</span>
              </div>
              <input type="text" required minLength={2} placeholder="Marie Dupont" />
            </div>
            <div className="field">
              <div className="field__label">
                <span>Structure / institution</span>
                <span className="required">requis</span>
              </div>
              <input type="text" required placeholder="Lycée Jean-Jaurès" />
            </div>
            <div className="field">
              <div className="field__label">
                <span>Email</span>
                <span className="required">requis</span>
              </div>
              <input type="email" required placeholder="marie@exemple.fr" />
            </div>
            <div className="field">
              <div className="field__label">
                <span>Téléphone</span>
                <span>facultatif</span>
              </div>
              <input type="tel" placeholder="06 00 00 00 00" />
            </div>
            <div className="field">
              <div className="field__label">
                <span>Type de structure</span>
                <span className="required">requis</span>
              </div>
              <select required defaultValue="">
                <option value="" disabled>
                  Sélectionner…
                </option>
                <option>Lycée</option>
                <option>Université</option>
                <option>Entreprise</option>
                <option>Institution publique</option>
                <option>Autre</option>
              </select>
            </div>
            <div className="field">
              <div className="field__label">
                <span>Format souhaité</span>
                <span className="required">requis</span>
              </div>
              <select required defaultValue="">
                <option value="" disabled>
                  Sélectionner…
                </option>
                <option>Conférence</option>
                <option>Table ronde</option>
                <option>Masterclass</option>
                <option>À discuter</option>
              </select>
            </div>
            <div className="field">
              <div className="field__label">
                <span>Date envisagée</span>
                <span>facultatif</span>
              </div>
              <input type="date" />
            </div>
            <div className="field">
              <div className="field__label">
                <span>Public estimé</span>
                <span>facultatif</span>
              </div>
              <input type="number" min={0} placeholder="80" />
            </div>
            <div className="field field--full">
              <div className="field__label">
                <span>Message</span>
                <span className="required">requis · 20–5000 car.</span>
              </div>
              <textarea
                required
                minLength={20}
                maxLength={5000}
                placeholder="Contexte, public, attentes, contraintes de calendrier…"
              />
            </div>
            <button type="submit" className="form__submit">
              <span>Envoyer la demande</span>
              <span
                className="arrow"
                style={{
                  width: 12,
                  height: 12,
                  borderRight: "1px solid currentColor",
                  borderTop: "1px solid currentColor",
                  transform: "rotate(45deg)",
                }}
              />
            </button>
          </form>

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
