import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[70rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand-soft/70 to-transparent blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-primary">
              <span
                aria-hidden
                className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand font-display text-sm font-extrabold text-primary-foreground shadow-brand-glow"
              >
                N
              </span>
              NewVision<span className="text-accent">Data</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              AI- und Automatisierungslösungen für den deutschen Mittelstand. Beraten, umsetzen,
              schulen – seit dem Tag, an dem AI im Alltag wirklich ankommt.
            </p>
            <a
              href="#ai-check"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-primary"
            >
              Kostenlosen AI-Check starten
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.22em] text-primary uppercase">Kontakt</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  NewVisionData GmbH
                  <br />
                  Lindenallee 13
                  <br />
                  16831 Rheinsberg
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href="tel:+4915565000062" className="transition-colors hover:text-primary">
                  015565000062
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a
                  href="mailto:info@newvisiondata.de"
                  className="transition-colors hover:text-primary"
                >
                  info@newvisiondata.de
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.22em] text-primary uppercase">
              Rechtliches
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/impressum" className="transition-colors hover:text-primary">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="transition-colors hover:text-primary">
                  Datenschutz
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Geschäftsführung:
              <br />
              Dennis Schmidt Gantikow
              <br />
              Viola Schmidt Gantikow
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} NewVisionData GmbH. Alle Rechte vorbehalten.</p>
          <p className="font-serif italic">Beraten. Umsetzen. Schulen. Zukunft gestalten.</p>
        </div>
      </div>
    </footer>
  );
}
