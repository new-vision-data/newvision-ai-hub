import { MapPin, Sparkles, User } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const founders = [
  { name: "Dennis Schmidt", role: "Gründer & Geschäftsführer", initials: "DS" },
  { name: "Maurice Schmidt", role: "Gründer & Geschäftsführer", initials: "MS" },
];

export function AboutSection() {
  return (
    <section id="ueber-uns" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Über NewVisionData"
              title="Beratung von jemandem,"
              titleAccent="der Ihre Sprache spricht."
            />
            <Reveal delay={100}>
              <p className="-mt-10 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-lg">
                Wir haben NewVisionData gegründet, weil wir immer wieder dasselbe gesehen haben:
                solide Betriebe, die zwischen KI-Hype und Hilflosigkeit feststecken. Auf der einen
                Seite Berater mit Buzzword-Präsentationen, auf der anderen Software-Anbieter, die
                vor allem verkaufen wollen. Dazwischen: der Mittelstand, der einfach nur wissen
                will, was funktioniert.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-lg">
                Unser Ansatz ist ein anderer: Wir hören zu, schauen uns Ihre Abläufe an und
                empfehlen nur, was sich für Sie rechnet. Manchmal ist das ein neues Werkzeug, das
                Ihrem Team Routinearbeit abnimmt. Manchmal ist es der Satz: „Das brauchen Sie
                nicht." Beides ist gute Beratung.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-lg">
                Wir bringen langjährige Erfahrung aus IT, Prozessgestaltung und Zusammenarbeit mit
                mittelständischen Betrieben mit – und arbeiten bewusst herstellerunabhängig, damit
                unsere Empfehlung immer nur eines im Blick hat: Ihren Betrieb.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {["Herstellerunabhängig", "DSGVO-konform", "Umsetzung statt Folien", "Made in Rheinsberg"].map(
                  (word) => (
                    <span
                      key={word}
                      className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-semibold text-primary shadow-card"
                    >
                      {word}
                    </span>
                  ),
                )}
              </div>
            </Reveal>
            <Reveal delay={340}>
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
                      className="relative mx-auto grid h-32 w-32 place-items-center overflow-hidden rounded-2xl bg-gradient-brand text-primary-foreground shadow-brand-glow"
                    >
                      <User className="relative z-10 h-14 w-14 opacity-80" />
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/25 to-white/0"
                      />
                      <span className="absolute bottom-2 right-2 rounded-md bg-background/25 px-1.5 py-0.5 font-display text-[10px] font-bold tracking-wider text-primary-foreground backdrop-blur">
                        {f.initials}
                      </span>
                    </div>
                    <p className="relative mt-5 font-semibold text-primary">{f.name}</p>
                    <p className="relative mt-1 text-sm text-muted-foreground">{f.role}</p>
                    <span className="relative mt-4 inline-flex items-center gap-1 text-[11px] font-semibold tracking-wider text-accent uppercase">
                      <Sparkles className="h-3 w-3" />
                      NewVisionData
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
