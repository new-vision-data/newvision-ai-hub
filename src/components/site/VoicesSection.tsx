import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const voices = [
  {
    quote: "Endlich hat uns jemand verständlich erklärt, was KI für uns bedeutet – ohne Fachchinesisch.",
    context: "Geschäftsführer, Handwerksbetrieb",
  },
  {
    quote: "Ich war skeptisch – noch ein Berater, der Software andrehen will. Es kam anders: erst zuhören, dann Vorschläge.",
    context: "Kanzleileitung, Steuerbüro",
  },
  {
    quote: "Wir wollten keine Spielerei, sondern echte Entlastung im Alltag. Genau das haben wir bekommen.",
    context: "Inhaberin, Immobilienverwaltung",
  },
];

export function VoicesSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/60 via-background to-background"
      />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Das sagen Unternehmer"
          title="Vertrauen entsteht durch"
          titleAccent="gehaltene Versprechen."
          subtitle="Auszüge aus Erstgesprächen und Rückmeldungen – anonymisiert, aber im Wortlaut."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {voices.map((v, i) => (
            <Reveal key={v.quote} delay={i * 110}>
              <figure className="card-luxe relative flex h-full flex-col p-7">
                <span
                  aria-hidden
                  className="absolute -top-4 left-6 grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-brand-glow"
                >
                  <Quote className="h-4 w-4" />
                </span>
                <blockquote className="mt-4 font-serif text-xl leading-snug font-normal text-primary italic">
                  „{v.quote}"
                </blockquote>
                <figcaption className="mt-auto pt-6 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {v.context}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
