import type { Metadata } from "next";
import { Anton, Alfa_Slab_One, JetBrains_Mono, Newsreader } from "next/font/google";
import SiteShell from "./_components/SiteShell";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const alfaSlab = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alfa-slab",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const newsreader = Newsreader({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const SITE_URL = "https://www.universalismenoir.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Universalisme Noir — Régis Pio",
    template: "%s — Régis Pio",
  },
  description:
    "Roman de Régis Pio paru chez L'Harmattan (2025). Universalisme noir explore identité, diaspora noire et émancipation — du quartier au monde. Disponible en librairie et en numérique.",
  keywords: [
    "Universalisme noir",
    "Régis Pio",
    "roman",
    "L'Harmattan 2025",
    "diaspora",
    "identité noire",
    "émancipation",
    "postcolonialisme",
    "conférence littéraire",
    "auteur français",
    "littérature africaine",
    "Frantz Fanon",
  ],
  authors: [{ name: "Régis Pio", url: SITE_URL }],
  creator: "Régis Pio",
  publisher: "L'Harmattan",
  openGraph: {
    type: "book",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Universalisme Noir",
    title: "Universalisme Noir — Régis Pio",
    description:
      "Roman de Régis Pio paru chez L'Harmattan (2025). Identité, diaspora et émancipation — du quartier au monde.",
    images: [
      {
        url: "/assets/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Couverture du roman Universalisme Noir de Régis Pio — L'Harmattan 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Universalisme Noir — Régis Pio",
    description:
      "Roman paru chez L'Harmattan (2025). Identité, diaspora et émancipation.",
    images: ["/assets/cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${anton.variable} ${alfaSlab.variable} ${jetbrainsMono.variable} ${newsreader.variable}`}
    >
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
