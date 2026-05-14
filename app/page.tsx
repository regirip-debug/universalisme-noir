import Image from "next/image";
import { OrnLines, OrnBlock } from "./_components/Ornaments";

export default function PageLivre() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Book",
        "@id": "https://www.universalismenoir.com/#book",
        "name": "Universalisme Noir",
        "author": {
          "@type": "Person",
          "@id": "https://www.universalismenoir.com/#author",
          "name": "Régis Pio",
          "url": "https://www.universalismenoir.com/apropos",
        },
        "publisher": {
          "@type": "Organization",
          "name": "L'Harmattan",
          "url": "https://www.editions-harmattan.fr",
        },
        "datePublished": "2025",
        "isbn": "978-2-336-55770-0",
        "inLanguage": "fr",
        "numberOfPages": 226,
        "genre": "Fiction / Roman",
        "description":
          "Du quartier au monde, comment penser l'universalisme depuis l'expérience des diasporas noires en France ?",
        "url": "https://www.universalismenoir.com",
        "image": "https://www.universalismenoir.com/assets/cover.jpg",
        "offers": [
          {
            "@type": "Offer",
            "price": "21.00",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "url": "https://www.editions-harmattan.fr/catalogue/livre/universalisme-noir/79640",
            "name": "Édition papier",
          },
          {
            "@type": "Offer",
            "price": "15.99",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "url": "https://liseuse.harmattan.fr/9782336557700",
            "name": "Édition numérique",
          },
        ],
      },
      {
        "@type": "Person",
        "@id": "https://www.universalismenoir.com/#author",
        "name": "Régis Pio",
        "url": "https://www.universalismenoir.com/apropos",
        "jobTitle": "Auteur, fondateur d'Horizons Communs",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.universalismenoir.com/#website",
        "url": "https://www.universalismenoir.com",
        "name": "Universalisme Noir",
        "inLanguage": "fr",
      },
    ],
  };

  return (
    <div data-screen-label="01 Le livre">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* HERO */}
      <section className="hero">
        <div className="hero__lines">
          <span /><span /><span /><span /><span /><span />
        </div>
        <div className="hero__topleft">
          <div className="hero__author" style={{ marginBottom: 64 }}>
            Régis Pio · Auteur, conférencier
          </div>
          <div
            className="hero__meta"
            style={{
              marginTop: 0,
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 8,
              marginBottom: 8,
            }}
          >
            <span className="pill">Roman</span>
            <span>Premier roman</span>
            <span>L&apos;Harmattan, 2025</span>
            <span>226 pages</span>
          </div>
          <div
            className="hero__ctas"
            style={{
              marginTop: 0,
              flexDirection: "column",
              alignItems: "stretch",
              gap: 10,
            }}
          >
            <a className="btn" href="https://www.editions-harmattan.fr/catalogue/livre/universalisme-noir/79640" target="_blank" rel="noopener">
              Commander le livre <span className="arrow" />
            </a>
            <a className="btn btn--ghost" href="https://liseuse.harmattan.fr/9782336557700" target="_blank" rel="noopener">
              Lire l&apos;extrait <span className="arrow" />
            </a>
          </div>
        </div>
        <div className="hero__grid hero__grid--centered">
          <div className="hero__lockup hero__lockup--left">
            <h1 className="hero__title">
              <span className="word-1">Universalisme</span>
              <span className="word-2">noir</span>
            </h1>
          </div>
          <div className="hero__collage">
            <div className="hero__block-blue" />
            <div className="hero__block-red" />
            <div className="hero__cover-shadow" />
            <Image
              className="hero__cover"
              src="/assets/cover.jpg"
              alt="Couverture du roman Universalisme noir"
              fill
              sizes="(max-width: 980px) 80vw, 32vw"
              priority
            />
          </div>
          <div className="hero__lockup hero__lockup--right" />
        </div>
        <div className="hero__bottombar">
          <span>[ 01 / Le livre ]</span>
          <span>ISBN 978-2-336-55770-0</span>
          <span className="scroll">Lire le synopsis</span>
        </div>
      </section>

      {/* RÉCIT */}
      <section className="section hairline-top" id="extrait">
        <OrnLines className="orn-tr" count={5} />
        <OrnBlock className="orn-block-bl" color="red" skew={2} />
        <div className="section__head">
          <div className="section__num">
            [ <strong>02</strong> ] Synopsis
          </div>
          <h2 className="section__title">
            Le <em>récit</em>
          </h2>
        </div>
        <div className="recit">
          <aside className="recit__aside">
            <div className="recit__aside-block">
              <div className="recit__aside-label">Genre</div>
              <div className="recit__aside-value">Roman · Premier roman</div>
            </div>
            <div className="recit__aside-block">
              <div className="recit__aside-label">Cadre</div>
              <div className="recit__aside-value">Fontenay-sous-Bois · Quatre continents</div>
            </div>
            <div className="recit__aside-block">
              <div className="recit__aside-label">Boussole</div>
              <div className="recit__aside-value">Frantz Fanon</div>
            </div>
            <div className="recit__aside-block">
              <div className="recit__aside-label">Pages</div>
              <div className="recit__aside-value">226 p.</div>
            </div>
          </aside>
          <div className="recit__body">
            <p>
              Universalisme noir suit la voix d&apos;un narrateur engagé, originaire de Fontenay-sous-Bois,
              qui cherche à comprendre ce que signifie être Noir dans la France d&apos;aujourd&apos;hui. Porté
              par ses amis Junon, Sabrina et Bakary, il se lance dans la création du Centre culturel et
              entrepreneurial Frantz Fanon, dans le quartier des Larris, pour donner corps à ses convictions.
            </p>
            <p>
              Le récit alterne chroniques urbaines et voyages, avec, à chaque étape, la pensée de Frantz
              Fanon comme boussole pour interroger le racisme, le postcolonialisme et les masques sociaux.
            </p>

            <blockquote className="pullquote">
              Frantz Fanon comme boussole pour interroger le racisme, le postcolonialisme et les masques sociaux.
            </blockquote>

            <p>
              L&apos;écriture devient alors son refuge : fragments de vie et réflexions politiques s&apos;y
              entremêlent sans didactisme. <em>Universalisme noir</em> mêle récit intime, analyse sociologique
              et carnet de route sur quatre continents, pour dresser le portrait nuancé d&apos;une génération
              en quête d&apos;émancipation.
            </p>
            <p>
              Un livre essentiel pour celles et ceux qui s&apos;interrogent sur l&apos;identité,
              l&apos;universalisme et la place des diasporas postcoloniales dans le monde contemporain.
            </p>
          </div>
        </div>
      </section>

      {/* THÈMES */}
      <section className="section hairline-top">
        <OrnLines className="orn-bl" count={6} red />
        <div className="section__head">
          <div className="section__num">
            [ <strong>03</strong> ] Thèmes
          </div>
          <h2 className="section__title">
            Ce que le livre <em>traverse</em>
          </h2>
        </div>
        <div className="themes">
          {[
            "Identité noire en France",
            "Frantz Fanon",
            "Diasporas postcoloniales",
            "Banlieue",
            "Centre culturel et entrepreneurial",
            "Universalisme",
            "Émancipation",
            "Quatre continents",
          ].map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ACHETER */}
      <section className="section hairline-top" id="acheter">
        <OrnBlock className="orn-block-tr" color="blue" skew={1} />
        <div className="section__head">
          <div className="section__num">
            [ <strong>04</strong> ] Acheter
          </div>
          <h2 className="section__title">
            Disponible <em>maintenant</em>
          </h2>
        </div>
        <div className="buy">
          {/* CARTE 1 – Papier */}
          <div className="buy__card">
            <div className="label">Édition papier</div>
            <div className="price">
              21<em>€</em>
            </div>
            <div className="desc">
              Format broché, 226 pages. Édité par L&apos;Harmattan dans la collection Rue des Écoles / Littérature.
            </div>
            <a className="btn" href="https://www.editions-harmattan.fr/catalogue/livre/universalisme-noir/79640" target="_blank" rel="noopener">
              Commander le papier <span className="arrow" />
            </a>
          </div>

          {/* CARTE 2 – Numérique */}
          <div className="buy__card is-accent">
            <div className="label">Édition numérique</div>
            <div className="price">
              15,99<em>€</em>
            </div>
            <div className="desc">
              Téléchargement immédiat. EPUB et PDF sans DRM, lisibles sur liseuse, tablette et smartphone.
            </div>
            <a className="btn" href="https://liseuse.harmattan.fr/9782336557700" target="_blank" rel="noopener">
              Lire l&apos;extrait / commander <span className="arrow" />
            </a>
          </div>

          {/* CARTE 3 – Conférences */}
          <div className="buy__card is-conference">
            <div className="label">Conférences &amp; interventions</div>
            <div className="price">
              Sur devis
              <em>tarif personnalisé</em>
            </div>
            <ul className="feature-list">
              <li>Conférence grand public ou universitaire</li>
              <li>Table ronde &amp; débat littéraire</li>
              <li>Intervention en milieu scolaire</li>
              <li>Dédicace &amp; rencontre auteur</li>
            </ul>
            <a className="btn" href="/contact">
              Demander un devis <span className="arrow" />
            </a>
          </div>
        </div>
        <div className="isbn-strip">
          <span>ISBN 978-2-336-55770-0</span>
          <span>·</span>
          <span>Collection Rue des Écoles</span>
          <span>·</span>
          <span>Littérature</span>
          <span>·</span>
          <span>L&apos;Harmattan, 2025</span>
        </div>
      </section>

      {/* DEDICACE */}
      <section className="dedicace">
        <div className="dedicace__lines">
          <span /><span /><span /><span />
        </div>
        <div className="dedicace__inner">
          <div className="dedicace__label">[ Dédicace ]</div>
          <p className="dedicace__quote">
            « À toutes les personnes qui auront lu ce livre, en espérant qu&apos;il vous aura fait passer un bon
            moment et appris deux ou trois choses. »
          </p>
          <div className="dedicace__attr">— Régis Pio</div>
        </div>
      </section>
    </div>
  );
}
