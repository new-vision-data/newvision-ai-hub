import { MapPin, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const founders = [
  { name: "Dennis Schmidt Gantikow", role: "Geschäftsführer", initials: "DS" },
  { name: "Viola Schmidt Gantikow", role: "Geschäftsführerin", initials: "VS" },
];

export function AboutSection() {
  return (
    <section id="ueber-uns" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Über uns"
              title="Ehrlicher Zugang zu AI –"
              titleAccent="ohne Tool-Trends."
            />
            <Reveal delay={100}>
              <p className="-mt-10 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-lg">
                NewVisionData GmbH wird von Dennis Schmidt Gantikow und Viola Schmidt Gantikow
                geführt. Unser Anspruch ist es, kleinen und mittelständischen Unternehmen einen
                ehrlichen, verständlichen und sicheren Zugang zu AI und Automatisierung zu
                ermöglichen. Wir verkaufen keine Tool-Trends, sondern prüfen, welche Lösungen
                wirklich zum Betrieb passen – und setzen diese praxisnah um.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {["Beraten", "Umsetzen", "Schulen", "Zukunft gestalten"].map((word) => (
                  <span
                    key={word}
                    className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-semibold text-primary shadow-card"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                Lindenallee 13, 16831 Rheinsberg
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-soft/70 via-transparent to-ember-soft/50 blur-2xl"
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {founders.map((f, i) => (
                <Reveal key={f.name} delay={i * 140} variant="scale">
                  <div className="card-luxe relative overflow-hidden p-6 text-center">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-brand-soft/60 to-transparent"
                    />
                    <div
                      aria-hidden
                      className="relative mx-auto grid h-28 w-28 place-items-center overflow-hidden rounded-2xl bg-gradient-brand font-display text-3xl font-extrabold text-primary-foreground shadow-brand-glow"
                    >
                      <span className="relative z-10">{f.initials}</span>
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/25 to-white/0"
                      />
                    </div>
                    <p className="relative mt-5 font-semibold text-primary">{f.name}</p>
                    <p className="relative mt-1 text-sm text-muted-foreground">{f.role}</p>
                    <span className="relative mt-4 inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider text-accent uppercase">
                      <Sparkles className="h-3 w-3" />
                      Gründung
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
