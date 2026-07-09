import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logoAsset from "@/assets/nvd-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <img
              src={logoAsset.url}
              alt="NewVisionData GmbH – Beraten. Umsetzen. Schulen. Zukunft gestalten."
              className="h-24 w-auto rounded-lg"
              loading="lazy"
              width={384}
              height={256}
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              AI- und Automatisierungslösungen für den deutschen Mittelstand.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-wide text-primary uppercase">Kontakt</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
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
            <h3 className="text-sm font-bold tracking-wide text-primary uppercase">Rechtliches</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
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

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} NewVisionData GmbH. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
