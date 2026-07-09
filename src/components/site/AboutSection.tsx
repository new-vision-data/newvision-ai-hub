import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const founders = [
  { name: "Dennis Schmidt Gantikow", role: "Geschäftsführer", initials: "DS" },
  { name: "Viola Schmidt Gantikow", role: "Geschäftsführerin", initials: "VS" },
];

export function AboutSection() {
  return (
    <section id="ueber-uns" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Über uns"
              title="Ehrlicher Zugang zu AI – ohne Tool-Trends."
            />
            <Reveal delay={100}>
              <p className="-mt-6 max-w-xl leading-relaxed text-muted-foreground md:text-lg">
                NewVisionData GmbH wird von Dennis Schmidt Gantikow und Viola Schmidt Gantikow
                geführt. Unser Anspruch ist es, kleinen und mittelständischen Unternehmen einen
                ehrlichen, verständlichen und sicheren Zugang zu AI und Automatisierung zu
                ermöglichen. Wir verkaufen keine Tool-Trends, sondern prüfen, welche Lösungen
                wirklich zum Betrieb passen – und setzen diese praxisnah um.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-8 flex flex-wrap gap-3">
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
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 120}>
                <div className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
                  {/* Team-Platzhalter: später durch echte Fotos ersetzen */}
                  <div
                    aria-hidden
                    className="mx-auto grid h-28 w-28 place-items-center rounded-2xl bg-gradient-brand font-display text-3xl font-extrabold text-primary-foreground shadow-brand-glow"
                  >
                    {f.initials}
                  </div>
                  <p className="mt-5 font-bold text-primary">{f.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{f.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
