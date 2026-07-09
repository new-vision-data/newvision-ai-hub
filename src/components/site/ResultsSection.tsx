import { FileSearch, Gauge, Timer } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const results = [
  {
    icon: Timer,
    value: "5–8 Std.",
    label: "pro Woche weniger Routinearbeit",
    text: "durch automatisierte E-Mail-Bearbeitung, Dokumentenablage und wiederkehrende Aufgaben.",
  },
  {
    icon: Gauge,
    value: "bis zu 60 %",
    label: "schnellere Angebotserstellung",
    text: "wenn Vorlagen, Stammdaten und Texte automatisch vorbereitet werden.",
  },
  {
    icon: FileSearch,
    value: "Deutlich",
    label: "weniger Suchzeit bei internen Informationen",
    text: "durch durchsuchbare Wissensdatenbanken, die Ihr Team wirklich nutzt.",
  },
];

export function ResultsSection() {
  return (
    <section id="beispiele" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Ergebnisbeispiele"
          title="Was Automatisierung im Alltag bewirken kann."
          subtitle="Typische Potenziale aus Projekten und Analysen im Mittelstand."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {results.map((r, i) => (
            <Reveal key={r.label} delay={i * 100}>
              <div className="h-full rounded-2xl bg-gradient-cta p-7 text-primary-foreground shadow-elevated">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-foreground/10">
                  <r.icon className="h-5 w-5" />
                </span>
                <p className="mt-5 font-display text-3xl font-extrabold">{r.value}</p>
                <p className="mt-1 font-semibold">{r.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Beispielhafte Potenziale – konkrete Ergebnisse hängen vom jeweiligen Betrieb und Prozess ab.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
