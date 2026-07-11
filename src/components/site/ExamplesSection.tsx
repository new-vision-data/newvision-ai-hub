import {
  FileSearch,
  FileText,
  FolderKanban,
  Mail,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const examples = [
  {
    icon: Mail,
    title: "E-Mail-Automatisierung & Kundenanfragen",
    text: "Anfragen werden automatisch sortiert, dem richtigen Ansprechpartner zugeordnet und mit einem Antwortentwurf vorbereitet. Ihr Team prüft und sendet – in Sekunden statt Minuten.",
  },
  {
    icon: FileText,
    title: "Dokumentenanalyse & Datenaufbereitung",
    text: "Angebote, Rechnungen, Verträge oder Lieferscheine werden ausgelesen, geprüft und in Ihre Systeme übergeben – ohne manuelles Abtippen.",
  },
  {
    icon: FolderKanban,
    title: "Interne Wissensdatenbank",
    text: "Datenblätter, Anleitungen, Altprojekte oder Handbücher werden per intelligenter Suche in Sekunden auffindbar – auch für neue Mitarbeiter im Onboarding.",
  },
  {
    icon: FileSearch,
    title: "Angebotsprozess beschleunigen",
    text: "Auf Basis früherer Kalkulationen und Vorlagen entstehen erste Angebotsentwürfe automatisch – Sie prüfen, feilen nach und senden.",
  },
];

const flowSteps = [
  {
    icon: Mail,
    label: "Anfrage geht ein",
    detail: "Kunden-Mail landet im Postfach",
    time: "0:00",
  },
  {
    icon: Sparkles,
    label: "KI sortiert & beantwortet vor",
    detail: "Kategorie, Kunde und Entwurf werden erkannt",
    time: "0:03",
  },
  {
    icon: FileText,
    label: "Ihr Team prüft & sendet",
    detail: "Ein Klick – die Antwort ist raus",
    time: "0:45",
  },
];

export function ExamplesSection() {
  return (
    <section id="beispiele" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Beispiele für den Mittelstand"
          title="Wo KI im Alltag"
          titleAccent="tatsächlich hilft."
          subtitle="Kleine Denkanstöße für Geschäftsführung, IT-Verantwortliche und Teams – konkrete Ansatzpunkte statt Buzzwords."
        />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="grid gap-5 sm:grid-cols-2">
            {examples.map((ex, i) => (
              <Reveal key={ex.title} delay={i * 100}>
                <div className="card-luxe group h-full p-6">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-accent transition-all duration-500 group-hover:rotate-[-4deg] group-hover:bg-gradient-brand group-hover:text-primary-foreground group-hover:shadow-brand-glow">
                    <ex.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-primary">{ex.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ex.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220} variant="scale">
            <div className="relative mx-auto w-full max-w-md lg:sticky lg:top-24">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2rem] bg-gradient-brand opacity-[0.09] blur-3xl"
              />
              <div
                aria-hidden
                className="absolute -top-6 -left-6 hidden rounded-2xl border border-border/70 bg-background/80 px-3 py-2 text-xs font-semibold text-primary shadow-card backdrop-blur md:block animate-float-slower"
              >
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                Live-Beispiel
              </div>
              <div
                aria-hidden
                className="absolute -right-4 top-24 hidden rounded-2xl border border-border/70 bg-background/80 px-3 py-2 text-xs font-semibold text-primary shadow-card backdrop-blur md:block animate-float-slow"
              >
                45 Min. pro Tag zurück
              </div>

              <div className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/95 p-6 shadow-elevated shadow-inner-hi backdrop-blur">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-x-4 top-0 h-24 bg-gradient-to-b from-white/60 via-white/0 to-transparent animate-shimmer-line"
                />

                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-primary-foreground shadow-brand-glow">
                      <Workflow className="h-4 w-4" />
                    </span>
                    Posteingang-Automation
                  </div>
                  <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-bold tracking-wider text-accent uppercase">
                    Live
                  </span>
                </div>

                <ol className="space-y-3">
                  {flowSteps.map((step, i) => (
                    <li
                      key={step.label}
                      className="relative flex items-start gap-4 rounded-2xl border border-border/70 bg-background/80 p-4 shadow-inner-hi"
                    >
                      {i < flowSteps.length - 1 && (
                        <span
                          aria-hidden
                          className="absolute left-[2.15rem] top-full h-3 w-px bg-gradient-to-b from-accent/60 to-transparent"
                        />
                      )}
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-accent">
                        <step.icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-baseline justify-between gap-2">
                          <span className="text-sm font-semibold text-primary">{step.label}</span>
                          <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                            {step.time}
                          </span>
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">
                          {step.detail}
                        </span>
                      </span>
                      <svg
                        aria-hidden
                        className="mt-2 h-4 w-4 shrink-0 text-accent"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12l4 4L19 6" className="animate-tick" />
                      </svg>
                    </li>
                  ))}
                </ol>

                <div className="mt-5 flex items-center justify-between rounded-2xl bg-gradient-cta px-4 py-3 shadow-brand-glow">
                  <span className="text-xs font-medium text-primary-foreground/75">
                    Ergebnis im Alltag
                  </span>
                  <span className="text-sm font-bold text-primary-foreground">
                    ~ 45 Min. weniger pro Tag*
                  </span>
                </div>
                <p className="mt-3 text-[11px] text-muted-foreground">
                  *Beispielhafter Wert – abhängig von Prozess und Aufkommen.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
