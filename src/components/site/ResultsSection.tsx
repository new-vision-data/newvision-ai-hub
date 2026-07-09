import { FileSearch, Gauge, Timer } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const results = [
  {
    icon: Timer,
    value: "5–8",
    unit: "Std./Woche",
    label: "weniger Routinearbeit",
    text: "durch automatisierte E-Mail-Bearbeitung, Dokumentenablage und wiederkehrende Aufgaben.",
  },
  {
    icon: Gauge,
    value: "bis 60",
    unit: "%",
    label: "schnellere Angebotserstellung",
    text: "wenn Vorlagen, Stammdaten und Texte automatisch vorbereitet werden.",
  },
  {
    icon: FileSearch,
    value: "deutlich",
    unit: "",
    label: "weniger Suchzeit bei internen Infos",
    text: "durch durchsuchbare Wissensdatenbanken, die Ihr Team wirklich nutzt.",
  },
];

export function ResultsSection() {
  return (
    <section id="beispiele" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Ergebnis-Potenziale"
          title="Was Automatisierung"
          titleAccent="im Alltag bewirken kann."
          subtitle="Typische Potenziale aus Projekten und Analysen im deutschen Mittelstand – kein Marketing-Versprechen, sondern Erfahrungswerte."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {results.map((r, i) => (
            <Reveal key={r.label} delay={i * 130} variant="scale">
              <div className="group relative h-full overflow-hidden rounded-[1.5rem] bg-gradient-cta p-8 text-primary-foreground shadow-elevated shadow-inner-hi">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-noise opacity-25"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-gradient-to-br from-accent/40 to-transparent opacity-60 blur-3xl transition-transform duration-700 group-hover:scale-125"
                />

                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-primary-foreground/15 backdrop-blur">
                  <r.icon className="h-5 w-5" />
                </span>

                <p className="relative mt-8 flex items-baseline gap-2 font-display text-[3.4rem] leading-none font-semibold tracking-tight">
                  {r.value}
                  {r.unit && (
                    <span className="text-2xl font-medium text-primary-foreground/70">
                      {r.unit}
                    </span>
                  )}
                </p>

                <p className="relative mt-3 font-serif text-xl italic font-normal">{r.label}</p>
                <p className="relative mt-4 text-sm leading-relaxed text-primary-foreground/75">
                  {r.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={240}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Beispielhafte Potenziale – konkrete Ergebnisse hängen vom jeweiligen Betrieb und
            Prozess ab.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
