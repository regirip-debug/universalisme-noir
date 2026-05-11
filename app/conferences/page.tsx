import Link from "next/link";
import { OrnLines, OrnBlock } from "../_components/Ornaments";

const FORMATS = [
  {
    roman: "I.",
    title: "Universalisme noir : identité et émancipation",
    desc:
      "Du quartier au monde, comment penser l'universalisme depuis l'expérience des diasporas noires en France ? Lecture, récit personnel et débat.",
    duration: "1 h 30",
    audience: "Public mixte",
    format: "Conférence + Q&R",
  },
  {
    roman: "II.",
    title: "Frantz Fanon comme boussole contemporaine",
    desc:
      "Relire Peau noire, masques blancs et Les Damnés de la terre à l'aune du XXIᵉ siècle : racisme, postcolonialisme, masques sociaux et émancipation.",
    duration: "1 h 30",
    audience: "Étudiant·e·s, public engagé",
    format: "Conférence + débat",
  },
  {
    roman: "III.",
    title: "Centre culturel et entrepreneurial & ESS",
    desc:
      "Comment un centre culturel et entrepreneurial devient un laboratoire d'émancipation locale ? Retour d'expérience d'un fondateur, du quartier au territoire.",
    duration: "1 h",
    audience: "Acteur·rice·s ESS, élu·e·s",
    format: "Témoignage + table ronde",
  },
  {
    roman: "IV.",
    title: "Banlieue, diaspora, mondes pluriels",
    desc:
      "Récit de quatre continents, mémoire des Larris, Fontenay-sous-Bois : faire dialoguer les territoires et les imaginaires.",
    duration: "1 h 30",
    audience: "Lycées, médiathèques, festivals",
    format: "Lecture + conférence",
  },
];

export default function PageConferences() {
  return (
    <div data-screen-label="02 Conférences">
      <section className="conf-hero">
        <div
          className="hero__lines"
          style={{ left: "6%", right: "auto", width: "12%", opacity: 0.4 }}
        >
          <span /><span /><span /><span />
        </div>
        <div className="conf-hero__inner">
          <div>
            <div className="eyebrow" style={{ marginBottom: 28 }}>
              <span className="dot" />
              <span>
                [ <span className="num">02</span> / Conférences ]
              </span>
            </div>
            <h1>
              L&apos;auteur en<em>conférence</em>
            </h1>
          </div>
          <div className="conf-hero__quote">
            « Penser l&apos;universalisme depuis nos quartiers, nos diasporas, nos voyages. »
          </div>
        </div>
      </section>

      <section className="section">
        <OrnLines className="orn-tr" count={5} />
        <div className="section__head">
          <div className="section__num">
            [ <strong>I</strong> ] Pour qui
          </div>
          <h2 className="section__title">
            Quatre <em>publics</em>
          </h2>
        </div>
        <div className="audiences">
          <div className="audience">
            <div className="audience__num">A.01 — Lycées</div>
            <h3 className="audience__title">Lycées</h3>
            <div className="audience__desc">
              Interventions en lien avec les programmes (HLP, EMC, histoire, lettres) et les semaines thématiques.
            </div>
          </div>
          <div className="audience">
            <div className="audience__num">A.02 — Sup</div>
            <h3 className="audience__title">Universités &amp; écoles</h3>
            <div className="audience__desc">
              Conférences et séminaires en sciences sociales, études postcoloniales, sociologie et littérature.
            </div>
          </div>
          <div className="audience">
            <div className="audience__num">A.03 — Pros</div>
            <h3 className="audience__title">Entreprises</h3>
            <div className="audience__desc">
              Sessions sur la diversité, l&apos;inclusion et les angles morts du discours universaliste en milieu professionnel.
            </div>
          </div>
          <div className="audience">
            <div className="audience__num">A.04 — Public</div>
            <h3 className="audience__title">Institutions publiques</h3>
            <div className="audience__desc">
              Tables rondes pour collectivités, services culturels, ESS et politiques de la ville.
            </div>
          </div>
        </div>
      </section>

      <section className="section hairline-top">
        <OrnBlock className="orn-block-bl" color="red" skew={2} />
        <div className="section__head">
          <div className="section__num">
            [ <strong>II</strong> ] Programme
          </div>
          <h2 className="section__title">
            Quatre <em>formats</em>
          </h2>
        </div>
        <div className="formats">
          {FORMATS.map((f) => (
            <div className="format" key={f.roman}>
              <div className="format__roman">{f.roman}</div>
              <h3 className="format__title">{f.title}</h3>
              <div className="format__desc">{f.desc}</div>
              <div className="format__meta">
                <span>{f.duration}</span>
                <span>{f.audience}</span>
                <span>{f.format}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <OrnLines className="orn-bl" count={6} />
        <div className="section__head">
          <div className="section__num">
            [ <strong>III</strong> ] Modalités
          </div>
          <h2 className="section__title">
            Trois <em>formules</em>
          </h2>
        </div>
        <div className="modalites">
          <div className="modalite">
            <div className="bracket">Format A</div>
            <h3 className="modalite__name">Conférence</h3>
            <div className="modalite__desc">1 h à 1 h 30, format magistral suivi de questions et réponses.</div>
          </div>
          <div className="modalite">
            <div className="bracket">Format B</div>
            <h3 className="modalite__name">Table ronde</h3>
            <div className="modalite__desc">
              1 h 30, dialogue avec un·e modérateur·rice ou un·e autre intervenant·e.
            </div>
          </div>
          <div className="modalite">
            <div className="bracket">Format C</div>
            <h3 className="modalite__name">Masterclass</h3>
            <div className="modalite__desc">
              Demi-journée, format approfondi avec lectures, exercices et discussion.
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band__inner">
          <h2>
            Inviter Régis Pio<em>chez vous</em>
          </h2>
          <div>
            <p className="cta-band__sub">
              Tarif sur devis selon le format, le public et le territoire. Réponse sous quelques jours.
            </p>
            <Link className="btn" href="/contact">
              Demander un devis <span className="arrow" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
