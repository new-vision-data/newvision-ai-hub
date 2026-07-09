import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Vorteile", href: "#vorteile" },
  { label: "Beispiele", href: "#beispiele" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#ai-check" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border bg-background/90 shadow-card backdrop-blur-lg"
          : "bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-[4.5rem] md:px-6"
        aria-label="Hauptnavigation"
      >
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-primary"
          onClick={() => setOpen(false)}
        >
          <span aria-hidden className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand font-display text-sm font-extrabold text-primary-foreground">
            N
          </span>
          NewVision<span className="text-accent">Data</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="ml-3 bg-gradient-brand shadow-brand-glow transition-transform hover:scale-[1.03]">
            <a href="#ai-check">Kostenlosen AI-Check buchen</a>
          </Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md text-primary transition-colors hover:bg-secondary lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-lg lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-2 bg-gradient-brand">
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
