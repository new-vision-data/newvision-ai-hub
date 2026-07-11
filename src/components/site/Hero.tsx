import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

const aiTools = [
  "ChatGPT",
  "Microsoft Copilot",
  "Gemini",
  "Claude",
  "Mistral",
  "Perplexity",
  "Midjourney",
  "Notion AI",
  "Zapier AI",
  "DeepL",
  "Fireflies",
  "Jasper",
  "Synthesia",
  "n8n",
  "Llama",
  "Stable Diffusion",
];

const trustBullets = [
  "100 % herstellerunabhängig",
  "DSGVO-konform – Daten bleiben im Haus",
  "Für den deutschen Mittelstand gemacht",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-aurora pt-32 pb-16 md:pt-44 md:pb-24">
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-subtle [mask-image:radial-gradient(ellipse_75%_65%_at_50%_20%,black,transparent)]"
      />
      <div
        aria-hidden
        className="absolute -top-24 -left-24 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-accent/25 via-brand-glow/20 to-transparent blur-3xl animate-float-slow"
      />
      <div
        aria-hidden
        className="absolute top-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-ember/25 via-brand-soft/60 to-transparent blur-3xl animate-float-slower"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-noise opacity-[0.22]" />

      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
        <Reveal variant="fade">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/70 px-4 py-1.5 text-xs font-semibold text-primary shadow-card backdrop-blur md:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-accent/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <ShieldCheck className="h-4 w-4 text-accent" />
            Unabhängige KI-Beratung für den Mittelstand
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-[2.4rem] leading-[1.15] font-semibold tracking-tight text-primary md:text-[3.4rem] lg:text-[3.8rem]">
            KI, die zu Ihrem Betrieb passt
            <span className="font-serif text-[1.05em] font-bold italic text-gradient-brand inline-block pl-[0.15em] pb-[0.12em] align-baseline">
              Nicht umgekehrt.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Hunderte Tools, jede Woche neue Versprechen – und keine Zeit, das alles zu prüfen? Wir
            finden heraus, wo Ihr Betrieb Zeit und Kosten sparen kann, wählen das passende Werkzeug
            aus – und integrieren es sicher und DSGVO-konform in Ihr Firmennetzwerk.
          </p>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-gradient-brand text-base shadow-brand-glow transition-transform hover:scale-[1.02]"
            >
              <a href="#ai-check">
                Kostenlosen KI-Check starten
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border/80 bg-background/60 text-base backdrop-blur"
            >
              <a href="#ablauf">So arbeiten wir</a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={360}>
          <ul className="mx-auto mt-9 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {trustBullets.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Marquee KI-Tools */}
      <div className="relative mt-24 md:mt-32">
        <p className="mb-8 text-center text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase md:mb-10">
          Hunderte KI-Werkzeuge am Markt – wir behalten den Überblick
        </p>
        <div className="pointer-events-none absolute inset-y-14 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-14 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex overflow-hidden">
          <ul className="flex shrink-0 animate-marquee items-center gap-10 pr-10 text-sm font-medium text-muted-foreground">
            {[...aiTools, ...aiTools].map((tool, i) => (
              <li key={`${tool}-${i}`} className="flex items-center gap-3 whitespace-nowrap">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                {tool}
              </li>
            ))}
          </ul>
          <ul
            aria-hidden
            className="flex shrink-0 animate-marquee items-center gap-10 pr-10 text-sm font-medium text-muted-foreground"
          >
            {[...aiTools, ...aiTools].map((tool, i) => (
              <li key={`${tool}-b-${i}`} className="flex items-center gap-3 whitespace-nowrap">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                {tool}
              </li>
            ))}
          </ul>
        </div>
        <p className="mx-auto mt-10 max-w-2xl px-4 text-center text-sm text-muted-foreground md:px-6">
          … und jede Woche kommen neue dazu. Niemand kann das nebenbei überblicken. Müssen Sie auch
          nicht – genau dafür gibt es uns.
        </p>
      </div>
    </section>
  );
}
