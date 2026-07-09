import { ArrowRight, Gift, GraduationCap, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const packages = [
  {
    icon: Gift,
    badge: "Der Einstieg",
    title: "Kostenloser AI-Check",
    text: "Der niederschwellige Einstieg ohne Risiko: Wir prüfen gemeinsam, wo AI in Ihrem Unternehmen sinnvoll sein könnte – und wo nicht. Ehrlich und unverbindlich.",
    features: ["Ca. 45 Minuten, remote oder vor Ort", "Konkrete erste Einschätzung", "Klare Empfehlung: lohnt sich / lohnt sich nicht"],
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
    features: ["Praxisbeispiele aus Ihrem Betrieb", "Sicherer Umgang mit Daten & Tools", "Begleitung nach der Einführung"],
    cta: "Schulung planen",
    highlighted: false,
  },
];

export function ServicesSection() {
  return (
    <section id="leistungen" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Leistungen"
          title="Drei klare Wege, mit AI zu starten."
          subtitle="Vom unverbindlichen Erstgespräch bis zur fertig integrierten Lösung – Sie entscheiden, wie weit Sie gehen."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.title} delay={i * 100} className="h-full">
              <div
                className={
                  pkg.highlighted
                    ? "relative flex h-full flex-col rounded-2xl border-2 border-accent bg-card p-7 shadow-elevated"
                    : "relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-card transition-shadow hover:shadow-elevated"
                }
              >
                <span
                  className={
                    pkg.highlighted
                      ? "absolute -top-3 left-6 rounded-full bg-gradient-brand px-3 py-1 text-xs font-bold text-primary-foreground shadow-brand-glow"
                      : "absolute -top-3 left-6 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-semibold text-primary"
                  }
                >
                  {pkg.badge}
                </span>
                <span className="mt-2 grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-accent">
                  <pkg.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-primary">{pkg.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pkg.text}</p>
                <ul className="mt-5 mb-8 space-y-2.5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={pkg.highlighted ? "default" : "outline"}
                  className={pkg.highlighted ? "mt-auto bg-gradient-brand shadow-brand-glow" : "mt-auto"}
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
