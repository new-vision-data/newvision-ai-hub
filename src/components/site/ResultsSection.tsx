import { FileSearch, Gauge, Timer } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const results = [
  {
    icon: Gauge,
    value: "bis 60",
    unit: "%",
    label: "schnellere Angebotserstellung",
    text: "Ein Metallbau-Betrieb erstellt Angebote automatisiert auf Basis früherer Kalkulationen – statt jedes Mal bei null anzufangen.",
    context: "Handwerk · 12 Mitarbeiter",
  },
  {
    icon: Timer,
    value: "5–8",
    unit: "Std./Woche",
    label: "Routinearbeit zurückgewonnen",
    text: "Eine Steuerkanzlei lässt E-Mails und Belege automatisch vorsortieren – die Zeit fließt zurück in die Mandantenberatung.",
    context: "Kanzlei · 8 Mitarbeiter",
  },
  {
    icon: FileSearch,
    value: "deutlich",
    unit: "",
    label: "weniger Suchzeit im Betrieb",
    text: "Ein Produktionsbetrieb macht internes Wissen per intelligenter Suche auffindbar – Datenblätter, Anleitungen und Altprojekte in Sekunden statt Minuten.",
    context: "Produktion · 45 Mitarbeiter",
  },
];

export function ResultsSection() {
  return (
    <section id="ergebnisse" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Ergebnisse"
          title="Keine leeren Versprechen."
          titleAccent="Gesparte Stunden."
          subtitle="So sieht es aus, wenn Abläufe im Mittelstand gezielt verschlankt werden – typische Potenziale aus Projekten im deutschen Mittelstand."
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

                <p className="relative mt-8 flex items-baseline gap-2 font-display text-[3rem] leading-none font-semibold tracking-tight">
                  {r.value}
                  {r.unit && (
                    <span className="text-xl font-medium text-primary-foreground/70">
                      {r.unit}
                    </span>
                  )}
                </p>

                <p className="relative mt-3 font-serif text-xl italic font-normal">{r.label}</p>
                <p className="relative mt-4 text-sm leading-relaxed text-primary-foreground/80">
                  {r.text}
                </p>
                <p className="relative mt-5 text-[11px] font-semibold tracking-wider text-primary-foreground/70 uppercase">
                  {r.context}
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
