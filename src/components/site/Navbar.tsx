import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Vorteile", href: "#vorteile" },
  { label: "Ergebnisse", href: "#beispiele" },
  { label: "FAQ", href: "#faq" },
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
            ? "mx-3 max-w-6xl rounded-full border border-border/70 bg-background/80 px-4 py-2.5 shadow-elevated backdrop-blur-xl md:mx-auto md:px-5"
            : "h-[4.5rem] max-w-6xl px-4 md:px-6",
        )}
      >
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-primary"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden
            className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-xl bg-gradient-brand font-display text-sm font-extrabold text-primary-foreground shadow-brand-glow"
          >
            <span className="relative z-10">N</span>
            <span className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/25 to-white/0" />
          </span>
          NewVision<span className="text-accent">Data</span>
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
              AI-Check starten
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
                Kostenlosen AI-Check buchen
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
