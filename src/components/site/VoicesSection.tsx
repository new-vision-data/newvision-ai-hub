import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const voices = [
  "Wir wissen, dass AI wichtig wird – aber nicht, wo wir anfangen sollen.",
  "Uns fehlt jemand, der die Tools neutral bewertet.",
  "Wir wollen keine Spielerei, sondern echte Entlastung im Alltag.",
];

export function VoicesSection() {
  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Aus der Praxis"
          title="Typische Rückmeldungen aus Erstgesprächen."
          subtitle="Diese Aussagen hören wir immer wieder – vielleicht erkennen Sie sich darin wieder."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {voices.map((v, i) => (
            <Reveal key={v} delay={i * 100}>
              <figure className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
                <Quote aria-hidden className="h-6 w-6 text-accent" />
                <blockquote className="mt-4 leading-relaxed font-medium text-primary">
                  „{v}“
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
