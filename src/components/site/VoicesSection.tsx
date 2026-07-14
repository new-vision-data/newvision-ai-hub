import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const voices = [
  {
    quote: "Was uns überzeugt hat: Die Beratung war von Anfang an verständlich. Keine Technik-Schau, sondern ein klarer Plan, der zu unserem Betrieb passt. So stellen wir uns KI vor.",
    role: "Geschäftsführung Floor 21 GmbH",
  },
  {
    quote: "Wir haben vorher Geld für Software ausgegeben, die wir kaum nutzen. NewVisionData hat uns gezeigt, wie wir mit weniger Werkzeug mehr erreichen. Das macht den Unterschied.",
    role: "Geschäftsführung Familienrösterei & Chocolaterie Pape",
  },
  {
    quote: "Von drei vorgeschlagenen Ansätzen haben sie uns von einer Variante abgeraten – weil sie für uns nicht sinnvoll war. Diese Ehrlichkeit hat uns das Vertrauen gegeben, weiter zusammenzuarbeiten.",
    role: "Geschäftsführung ProNova GmbH",
  },
  {
    quote: "Wir wollten KI nicht um jeden Preis, sondern dort, wo sie wirklich hilft. Die Lösung läuft mittlerweile in unserem Alltag und spart uns täglich wertvolle Zeit.",
    role: "Geschäftsführung Kuleana Hausverwaltung GmbH",
  },
];

export function VoicesSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/60 via-background to-background"
      />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Das sagen Unternehmer"
          title="Vertrauen entsteht durch"
          titleAccent="gehaltene Versprechen."
          subtitle="Auszüge aus Gesprächen und Rückmeldungen unserer Kunden – mit deren Zustimmung veröffentlicht."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {voices.map((v, i) => (
            <Reveal key={v.quote} delay={i * 100}>
              <figure className="card-luxe relative flex h-full flex-col p-5 md:p-6">
                <span
                  aria-hidden
                  className="absolute -top-4 left-6 grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-brand-glow"
                >
                  <Quote className="h-4 w-4" />
                </span>
                <blockquote className="mt-4 font-serif text-lg leading-snug font-normal text-primary italic">
                  „{v.quote}"
                </blockquote>
                <figcaption className="mt-auto pt-6">
                  <div className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {v.role}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

