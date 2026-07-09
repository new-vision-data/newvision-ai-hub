import { ArrowRight, Gift, GraduationCap, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

const packages = [
  {
    icon: Gift,
    badge: "Der Einstieg",
    title: "Kostenloser AI-Check",
    text: "Der niederschwellige Einstieg ohne Risiko: Wir prüfen gemeinsam, wo AI in Ihrem Unternehmen sinnvoll sein könnte – und wo nicht. Ehrlich und unverbindlich.",
    features: [
      "Ca. 45 Minuten, remote oder vor Ort",
      "Konkrete erste Einschätzung",
      "Klare Empfehlung: lohnt sich / lohnt sich nicht",
    ],
    cta: "AI-Check anfragen",
    highlighted: false,
  },
  {
    icon: Workflow,
    badge: "Am meisten gefragt",
    title: "AI-Integration & Automatisierung",
    text: "Für Unternehmen, die konkrete Prozesse verbessern wollen – sauber integriert in Ihre bestehenden Systeme.",
    features: [
      "E-Mail-Automatisierung & Kundenanfragen",
      "Dokumentenanalyse & Datenaufbereitung",
      "Interne Wissensdatenbanken",
      "Angebotsprozesse beschleunigen",
    ],
    cta: "Projekt besprechen",
    highlighted: true,
  },
  {
    icon: GraduationCap,
    badge: "Für Ihr Team",
    title: "Schulung & Begleitung",
    text: "Für Teams, die AI sicher und produktiv nutzen wollen. Praxisnahe Schulungen ohne Fachchinesisch – angepasst an Rollen und Arbeitsalltag.",
    features: [
      "Praxisbeispiele aus Ihrem Betrieb",
      "Sicherer Umgang mit Daten & Tools",
      "Begleitung nach der Einführung",
    ],
    cta: "Schulung planen",
    highlighted: false,
  },
];

export function ServicesSection() {
  return (
    <section id="leistungen" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Leistungen"
          title="Drei klare Wege,"
          titleAccent="mit AI zu starten."
          subtitle="Vom unverbindlichen Erstgespräch bis zur fertig integrierten Lösung – Sie entscheiden, wie weit Sie gehen."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.title} delay={i * 130} className="h-full">
              <div
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] p-7 shadow-card shadow-inner-hi transition-all duration-500 hover:-translate-y-1 hover:shadow-elevated md:p-8",
                  pkg.highlighted
                    ? "border border-transparent bg-gradient-cta text-primary-foreground shadow-brand-glow"
                    : "card-luxe",
                )}
              >
                {/* Dekorativer Glow im Hover */}
                {!pkg.highlighted && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-gradient-to-br from-accent/25 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                )}
                {pkg.highlighted && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-noise opacity-20"
                  />
                )}

                <span
                  className={cn(
                    "absolute top-6 right-6 rounded-full px-3 py-1 text-[10px] font-bold tracking-wider uppercase",
                    pkg.highlighted
                      ? "bg-primary-foreground/15 text-primary-foreground backdrop-blur"
                      : "border border-border bg-secondary text-primary",
                  )}
                >
                  {pkg.badge}
                </span>

                <span
                  className={cn(
                    "relative grid h-14 w-14 place-items-center rounded-2xl transition-all duration-500",
                    pkg.highlighted
                      ? "bg-primary-foreground/15 text-primary-foreground backdrop-blur"
                      : "bg-brand-soft text-accent group-hover:bg-gradient-brand group-hover:text-primary-foreground",
                  )}
                >
                  <pkg.icon className="h-6 w-6" />
                </span>

                <h3
                  className={cn(
                    "relative mt-6 text-2xl font-semibold tracking-tight",
                    pkg.highlighted ? "text-primary-foreground" : "text-primary",
                  )}
                >
                  {pkg.title}
                </h3>
                <p
                  className={cn(
                    "relative mt-3 text-sm leading-relaxed",
                    pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground",
                  )}
                >
                  {pkg.text}
                </p>

                <ul className="relative mt-6 mb-8 space-y-2.5">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className={cn(
                        "flex items-start gap-2.5 text-sm",
                        pkg.highlighted ? "text-primary-foreground/95" : "text-foreground",
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full",
                          pkg.highlighted ? "bg-primary-foreground" : "bg-accent",
                        )}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={pkg.highlighted ? "secondary" : "outline"}
                  className={cn(
                    "relative mt-auto rounded-full",
                    pkg.highlighted
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      : "border-border",
                  )}
                >
                  <a href="#ai-check">
                    {pkg.cta}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
