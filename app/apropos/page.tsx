import Image from "next/image";
import { OrnLines, OrnBlock } from "../_components/Ornaments";

export default function PageApropos() {
  return (
    <div data-screen-label="03 À propos">
      <section className="about-hero">
        <div className="about-hero__inner">
          <div>
            <div className="bracket">À propos</div>
            <h1 className="about-hero__title">
              Régis
              <br />
              Pio
            </h1>
            <div className="about-hero__sub">
              <span>Auteur</span>
              <span>Acteur de l&apos;ESS</span>
              <span>Centre culturel et entrepreneurial</span>
            </div>
          </div>
          <div className="about-portrait">
            <div className="splash" />
            <Image
              className="about-portrait__img"
              src="/assets/portrait.jpg"
              alt="Portrait de Régis Pio"
              fill
              sizes="(max-width: 980px) 100vw, 45vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section">
        <OrnLines className="orn-tr" count={5} />
        <div className="section__head">
          <div className="section__num">
            [ <strong>01</strong> ] Bio
          </div>
          <h2 className="section__title">
            Une <em>conviction</em>
          </h2>
        </div>
        <div className="about-bio">
          <aside className="about-bio__aside">
            <div>
              <strong>20+</strong>
              ans d&apos;engagement
            </div>
            <div style={{ marginTop: 24 }}>
              <strong>04</strong>
              continents traversés
            </div>
            <div style={{ marginTop: 24 }}>
              <strong>01</strong>
              roman publié
            </div>
          </aside>
          <div className="about-bio__body">
            <p>
              Régis Pio est fondateur et directeur de l&apos;agence <strong>Horizons Communs</strong>,
              située à Fontenay-sous-Bois. Plus de vingt ans dans l&apos;associatif et l&apos;institutionnel
              l&apos;ont mené à piloter des projets d&apos;économie sociale et solidaire — de la solidarité
              locale, ancrée dans les quartiers, à des engagements internationaux qui prolongent une même
              conviction : nos émancipations s&apos;articulent.
            </p>
            <p>
              Artisan d&apos;un centre culturel et entrepreneurial, il y fait dialoguer création artistique
              et innovation citoyenne. <em>Universalisme noir</em>, son premier roman publié chez L&apos;Harmattan
              en 2025, prolonge cette pratique dans le récit : un narrateur de Fontenay-sous-Bois, une bande
              d&apos;amis, un Centre culturel et entrepreneurial Frantz Fanon dans le quartier des Larris,
              et la pensée de Fanon comme boussole d&apos;une génération en quête d&apos;émancipation.
            </p>
            <p>
              Voyageur passionné, Régis Pio nourrit ses textes de ses traversées sur quatre continents. Il
              intervient régulièrement en lycées, universités, entreprises et institutions publiques pour
              mettre en discussion l&apos;universalisme noir, les diasporas postcoloniales et les modèles
              d&apos;organisation sociale qui en découlent.
            </p>
          </div>
        </div>
      </section>

      <section className="section hairline-top">
        <OrnBlock className="orn-block-tr" color="red" skew={1} />
        <div className="section__head">
          <div className="section__num">
            [ <strong>02</strong> ] Repères
          </div>
          <h2 className="section__title">
            Quelques <em>jalons</em>
          </h2>
        </div>
        <div className="timeline">
          <div className="tl-item">
            <div className="tl-item__year is-text">Aujourd&apos;hui</div>
            <div className="tl-item__text">
              Fondateur et directeur de l&apos;agence <strong>Horizons Communs</strong>, Fontenay-sous-Bois.
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-item__year">20+</div>
            <div className="tl-item__text">Années dans l&apos;associatif et l&apos;institutionnel.</div>
          </div>
          <div className="tl-item">
            <div className="tl-item__year is-text">ESS</div>
            <div className="tl-item__text">Pilotage de projets d&apos;économie sociale et solidaire.</div>
          </div>
          <div className="tl-item">
            <div className="tl-item__year is-text">Centre culturel</div>
            <div className="tl-item__text">Artisan d&apos;un centre culturel et entrepreneurial.</div>
          </div>
          <div className="tl-item">
            <div className="tl-item__year">2025</div>
            <div className="tl-item__text">
              Parution d&apos;<em>Universalisme noir</em> chez L&apos;Harmattan.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <OrnLines className="orn-bl" count={6} red />
        <div className="section__head">
          <div className="section__num">
            [ <strong>03</strong> ] Boussole
          </div>
          <h2 className="section__title">
            Ce qui me met en <em>mouvement</em>
          </h2>
        </div>
        <div className="values">
          <div className="value">
            <div className="value__num">V.01</div>
            <h3 className="value__name">Universalisme</h3>
            <div className="value__desc">
              Penser un universel qui ne gomme pas les expériences situées, mais s&apos;écrit depuis elles.
            </div>
          </div>
          <div className="value">
            <div className="value__num">V.02</div>
            <h3 className="value__name">Transmission</h3>
            <div className="value__desc">
              Mettre les outils — Fanon, l&apos;écriture, l&apos;ESS — au service des plus jeunes et des moins
              entendu·e·s.
            </div>
          </div>
          <div className="value">
            <div className="value__num">V.03</div>
            <h3 className="value__name">Création</h3>
            <div className="value__desc">
              Faire dialoguer pratique artistique, action sociale et travail intellectuel dans un centre culturel
              et entrepreneurial ouvert.
            </div>
          </div>
          <div className="value">
            <div className="value__num">V.04</div>
            <h3 className="value__name">Voyage</h3>
            <div className="value__desc">
              Quatre continents comme école de l&apos;altérité et matière première du récit.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
