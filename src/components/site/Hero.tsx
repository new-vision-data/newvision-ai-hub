import { ArrowRight, CheckCircle2, FileText, Mail, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const flowSteps = [
  { icon: Mail, label: "Anfrage geht ein", detail: "E-Mail wird automatisch erkannt" },
  { icon: Sparkles, label: "AI sortiert & bereitet vor", detail: "Entwurf liegt in Sekunden bereit" },
  { icon: FileText, label: "Ihr Team prüft & sendet", detail: "Volle Kontrolle bleibt bei Ihnen" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-28 pb-16 md:pt-40 md:pb-24">
      <div aria-hidden className="absolute inset-0 bg-grid-subtle [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-primary shadow-card md:text-sm">
              <ShieldCheck className="h-4 w-4 text-accent" />
              AI-Beratung &amp; Umsetzung für den Mittelstand
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="text-4xl leading-[1.1] font-bold text-primary md:text-5xl lg:text-[3.4rem]">
              AI, die Ihrem Betrieb wirklich hilft – <span className="text-gradient-brand">nicht nur beeindruckend klingt.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              Wir helfen mittelständischen Unternehmen, sinnvolle AI- und Automatisierungslösungen
              zu finden, sicher einzuführen und messbar im Alltag einzusetzen.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-gradient-brand text-base shadow-brand-glow transition-transform hover:scale-[1.02]">
                <a href="#ai-check">
                  Kostenlosen AI-Check buchen
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <a href="#leistungen">Leistungen ansehen</a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["Herstellerunabhängig", "DSGVO-bewusst", "Umsetzung statt Folien"].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Automatisierungs-Flow als visuelle Idee */}
        <Reveal delay={200} className="hidden sm:block">
          <div className="relative mx-auto max-w-md">
            <div aria-hidden className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-[0.07] blur-2xl" />
            <div className="relative rounded-2xl border border-border bg-card p-6 shadow-elevated">
              <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-primary">
                <Workflow className="h-4 w-4 text-accent" />
                Beispiel: Automatisierter Posteingang
              </div>
              <ol className="space-y-3">
                {flowSteps.map((step, i) => (
                  <li key={step.label} className="relative flex items-start gap-4 rounded-xl border border-border bg-background p-4">
                    {i < flowSteps.length - 1 && (
                      <span aria-hidden className="absolute top-full left-[2.15rem] h-3 w-px bg-border" />
                    )}
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-accent">
                      <step.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-primary">{step.label}</span>
                      <span className="block text-xs text-muted-foreground">{step.detail}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-5 flex items-center justify-between rounded-xl bg-gradient-cta px-4 py-3">
                <span className="text-xs font-medium text-primary-foreground/80">Ergebnis im Alltag</span>
                <span className="text-sm font-bold text-primary-foreground">~ 45 Min. weniger pro Tag*</span>
              </div>
              <p className="mt-3 text-[11px] text-muted-foreground">
                *Beispielhafter Wert – abhängig von Prozess und Aufkommen.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
