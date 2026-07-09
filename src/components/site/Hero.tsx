import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Mail,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const flowSteps = [
  {
    icon: Mail,
    label: "Anfrage geht ein",
    detail: "Kunden-Mail landet im Postfach",
    time: "0:00",
  },
  {
    icon: Sparkles,
    label: "AI sortiert & beantwortet vor",
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

const trustPills = [
  "Herstellerunabhängig",
  "DSGVO-bewusst",
  "EU AI Act ready",
  "Umsetzung statt Folien",
  "Made in Rheinsberg",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-aurora pt-32 pb-16 md:pt-44 md:pb-28">
      {/* Layer 1: dezentes Raster */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-subtle [mask-image:radial-gradient(ellipse_75%_65%_at_50%_20%,black,transparent)]"
      />
      {/* Layer 2: schwebende Farb-Blobs */}
      <div
        aria-hidden
        className="absolute -top-24 -left-24 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-accent/25 via-brand-glow/20 to-transparent blur-3xl animate-float-slow"
      />
      <div
        aria-hidden
        className="absolute top-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-ember/25 via-brand-soft/60 to-transparent blur-3xl animate-float-slower"
      />
      {/* Layer 3: feine Grain-Textur */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-noise opacity-[0.22]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <Reveal variant="fade">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/70 px-4 py-1.5 text-xs font-semibold text-primary shadow-card backdrop-blur md:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <ShieldCheck className="h-4 w-4 text-accent" />
              AI-Beratung &amp; Umsetzung für den Mittelstand
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-[2.4rem] leading-[1.02] font-semibold tracking-tight text-primary md:text-[3.4rem] lg:text-[3.8rem]">
              AI, die Ihrem Betrieb{" "}
              <span className="font-serif text-[1.08em] font-normal italic text-gradient-brand">
                wirklich hilft
              </span>{" "}
              – nicht nur beeindruckend klingt.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Wir helfen mittelständischen Unternehmen, sinnvolle AI- und Automatisierungslösungen
              zu finden, sicher einzuführen und messbar im Alltag einzusetzen – ehrlich,
              herstellerunabhängig und bis in den Betrieb hinein.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group rounded-full bg-gradient-brand text-base shadow-brand-glow transition-transform hover:scale-[1.02]"
              >
                <a href="#ai-check">
                  Kostenlosen AI-Check starten
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-border/80 bg-background/60 text-base backdrop-blur"
              >
                <a href="#leistungen">Leistungen ansehen</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["Herstellerunabhängig", "DSGVO-bewusst", "Umsetzung statt Folien"].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Automatisierungs-Flow (visuelle Idee) */}
        <Reveal delay={220} variant="scale" className="hidden sm:block">
          <div className="relative mx-auto max-w-md">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2rem] bg-gradient-brand opacity-[0.09] blur-3xl"
            />
            {/* Kleine schwebende Badges */}
            <div
              aria-hidden
              className="absolute -top-6 -left-6 hidden rounded-2xl border border-border/70 bg-background/80 px-3 py-2 text-xs font-semibold text-primary shadow-card backdrop-blur md:block animate-float-slower"
            >
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              Live automatisiert
            </div>
            <div
              aria-hidden
              className="absolute -right-4 top-24 hidden rounded-2xl border border-border/70 bg-background/80 px-3 py-2 text-xs font-semibold text-primary shadow-card backdrop-blur md:block animate-float-slow"
            >
              45 Min. pro Tag zurück
            </div>

            <div className="relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/95 p-6 shadow-elevated shadow-inner-hi backdrop-blur">
              {/* Shimmer */}
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

      {/* Marquee-Trust-Leiste */}
      <div className="relative mt-16 md:mt-24">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex overflow-hidden">
          <ul className="flex shrink-0 animate-marquee items-center gap-10 pr-10 text-sm font-medium text-muted-foreground">
            {[...trustPills, ...trustPills, ...trustPills].map((pill, i) => (
              <li key={`${pill}-${i}`} className="flex items-center gap-3 whitespace-nowrap">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                {pill}
              </li>
            ))}
          </ul>
          <ul
            aria-hidden
            className="flex shrink-0 animate-marquee items-center gap-10 pr-10 text-sm font-medium text-muted-foreground"
          >
            {[...trustPills, ...trustPills, ...trustPills].map((pill, i) => (
              <li key={`${pill}-b-${i}`} className="flex items-center gap-3 whitespace-nowrap">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                {pill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
