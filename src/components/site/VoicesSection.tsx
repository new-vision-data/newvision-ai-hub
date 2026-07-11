import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const voices = [
  {
    quote: "Endlich hat uns jemand verständlich erklärt, was KI für uns kann — und was nicht. Keine Verkaufsshow, sondern Klartext. Das erste Projekt hat sich nach drei Monaten bezahlt gemacht.",
    name: "Max Mustermann",
    role: "Geschäftsführer, Mustermann Metallbau GmbH",
  },
  {
    quote: "Ich war skeptisch — noch ein Berater, der uns Software andrehen will. Das Gegenteil war der Fall: Von drei Ideen haben sie uns von einer sogar abgeraten. Genau deshalb arbeiten wir weiter zusammen.",
    name: "Sabine Beispiel",
    role: "Inhaberin, Kanzlei Beispiel & Partner",
  },
  {
    quote: "Unsere Daten bleiben bei uns im Haus — das war die Bedingung. NewVisionData hat eine Lösung gebaut, die genau das leistet. Das Team nutzt sie inzwischen täglich, ganz ohne Berührungsängste.",
    name: "Thomas Wagner",
    role: "Geschäftsführer, Wagner Kunststofftechnik",
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
                <figcaption className="mt-auto pt-6">
                  <div className="text-sm font-semibold text-primary">{v.name}</div>
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
