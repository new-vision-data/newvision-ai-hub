import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionLink } from "./SectionLink";
import logoAsset from "@/assets/nvd-logo-lang.png.asset.json";



const navLinks = [
  { label: "So arbeiten wir", hash: "ablauf" },
  { label: "Beispiele", hash: "beispiele" },
  { label: "Ergebnisse", hash: "ergebnisse" },
  { label: "Über uns", hash: "ueber-uns" },
  { label: "FAQ", hash: "faq" },
];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "pt-3" : "pt-0",
      )}
    >
      <nav
        aria-label="Hauptnavigation"
        className={cn(
          "mx-auto flex items-center justify-between transition-all duration-500",
          scrolled
            ? "mx-3 max-w-6xl rounded-full border border-border/70 bg-background/80 px-4 py-2 shadow-elevated backdrop-blur-xl md:mx-auto md:px-5"
            : "h-20 max-w-6xl px-4 md:px-6",
        )}
      >
        <Link
          to="/"
          className="flex items-center bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 rounded-sm"
          aria-label="NewVisionData – Startseite"
          onClick={() => setOpen(false)}
        >
          <img
            src={logoAsset.url}
            alt="NewVisionData – Beraten. Umsetzen. Schulen. Zukunft gestalten."
            className="block h-10 w-auto object-contain sm:h-11 md:h-12"
            loading="eager"
            decoding="async"
          />
        </Link>


        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            size="sm"
            className="ml-3 rounded-full bg-gradient-brand pl-4 shadow-brand-glow transition-transform hover:scale-[1.03]"
          >
            <a href="#ai-check">
              KI-Check starten
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-primary transition-colors hover:bg-secondary lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-3 mt-2 rounded-2xl border border-border/70 bg-background/95 shadow-elevated backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1 p-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2 rounded-full bg-gradient-brand">
              <a href="#ai-check" onClick={() => setOpen(false)}>
                Kostenlosen KI-Check buchen
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
