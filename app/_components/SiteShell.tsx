"use client";

import { usePathname } from "next/navigation";
import Nav from "./Nav";
import Footer from "./Footer";

const ROUTE_META: Record<string, { num: string; name: string; route: string }> = {
  "/": { num: "01", name: "Le livre", route: "livre" },
  "/conferences": { num: "02", name: "Conférences", route: "conferences" },
  "/apropos": { num: "03", name: "À propos", route: "apropos" },
  "/contact": { num: "04", name: "Contact", route: "contact" },
};

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const meta = ROUTE_META[pathname] ?? ROUTE_META["/"];

  return (
    <div className="page-frame">
      <div className="page-meta-tl">[ {meta.num} / 04 ]</div>
      <div className="page-meta-tr">{meta.name}</div>
      <div className="page-meta-bl">L&apos;Harmattan · 2025</div>
      <div className="page-meta-br">Régis Pio</div>
      <Nav route={meta.route} />
      {children}
      <Footer />
    </div>
  );
}
