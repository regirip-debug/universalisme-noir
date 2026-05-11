# Universalisme noir — Régis Pio

Site officiel de **Régis Pio**, auteur de *Universalisme noir* (L'Harmattan, 2025).

Version **Next.js 16** (App Router, TypeScript) du site initial React/CDN — pixel‑identique au visuel original, mais production‑ready : pas de Babel‑in‑browser, polices optimisées via `next/font`, images via `next/image`, prérendu statique de chaque page.

## Démarrage

```bash
npm install
npm run dev          # http://localhost:3001
npm run build        # build de prod
npm run start        # serveur de prod
```

## Structure

```
universalisme-noir/
├── app/
│   ├── layout.tsx              # racine, chargement fonts + SiteShell
│   ├── globals.css             # toutes les styles (vars CSS, sections, responsive)
│   ├── page.tsx                # 01 — Le livre
│   ├── conferences/page.tsx    # 02 — Conférences
│   ├── apropos/page.tsx        # 03 — À propos
│   ├── contact/page.tsx        # 04 — Contact (client component, formulaire)
│   └── _components/
│       ├── SiteShell.tsx       # page-frame + meta + Nav + Footer
│       ├── Nav.tsx
│       ├── Footer.tsx
│       └── Ornaments.tsx       # OrnLines, OrnBlock
├── public/assets/
│   ├── cover.jpg
│   ├── hero-bg.jpg
│   └── portrait.jpg
└── package.json
```

## Polices

Chargées via `next/font/google` avec variables CSS :

- **Anton** → `--font-anton` (titres XL display)
- **Alfa Slab One** → `--font-alfa-slab` (accents lowercase)
- **JetBrains Mono** → `--font-jetbrains-mono` (méta, labels)
- **Newsreader** → `--font-newsreader` (corps de texte)

Les variables sont relayées dans `globals.css` sur `--f-display`, `--f-slab`, `--f-mono`, `--f-serif`.

## Couleurs

```
--paper:    #ffffff   (fond)
--ink:      #0e0e0e   (texte principal)
--accent:   #da3f2b   (rouge)
--accent-2: #1fa0dc   (bleu)
```

## Modifier le contenu

| Pour changer… | Ouvrir | Repère |
|---|---|---|
| Titre / sous-titre du hero | `app/page.tsx` | `.hero` |
| Synopsis | `app/page.tsx` | section `id="extrait"` |
| Les 4 formats de conférence | `app/conferences/page.tsx` | constante `FORMATS` |
| Bio | `app/apropos/page.tsx` | `.about-bio__body` |
| Email général | `app/_components/Footer.tsx` | `mailto:contact@...` |
| Email devis | `app/contact/page.tsx` | `mailto:devis@...` |
| Couleurs | `app/globals.css` | variables `--accent`, `--accent-2`, `--ink`… |
| Liens réseaux | `app/_components/Nav.tsx` | bloc `nav__social` |

## Déploiement

Recommandé : **Vercel** (provider natif Next.js).

```bash
npm i -g vercel
vercel
vercel --prod
```

Aucune variable d'environnement requise. Le site est entièrement statique (les 4 routes sont prérendues).

## Crédits

- Roman *Universalisme noir* — © 2025 Régis Pio · L'Harmattan · ISBN 978-2-336-55770-0
- Site et code — © 2025 Régis Pio

