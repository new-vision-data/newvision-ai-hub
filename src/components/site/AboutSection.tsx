import { User } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const founders = [
  { name: "Dennis Schmidt", role: "Gründer & Geschäftsführer", initials: "DS" },
  { name: "Maurice Schmidt", role: "Gründer", initials: "MS" },
];

export function AboutSection() {
  return (
    <section id="ueber-uns" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Über NewVisionData"
          title="Beratung von jemandem,"
          titleAccent="der Ihre Sprache spricht."
        />

        <Reveal delay={80}>
          <div className="mx-auto grid max-w-md grid-cols-2 gap-5 sm:max-w-lg">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 120} variant="scale">
                <div className="card-luxe relative overflow-hidden p-5 text-center">
                  <div
                    aria-hidden
                    className="relative mx-auto grid h-28 w-28 place-items-center overflow-hidden rounded-2xl bg-gradient-brand text-primary-foreground shadow-brand-glow"
                  >
                    <User className="relative z-10 h-12 w-12 opacity-80" />
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/25 to-white/0"
                    />
                    <span className="absolute bottom-2 right-2 rounded-md bg-background/25 px-1.5 py-0.5 font-display text-[10px] font-bold tracking-wider text-primary-foreground backdrop-blur">
                      {f.initials}
                    </span>
                  </div>
                  <p className="mt-4 font-semibold text-primary">{f.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{f.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <div className="mx-auto mt-12 max-w-2xl space-y-5 text-[15px] leading-relaxed text-muted-foreground md:text-lg">
          <Reveal delay={120}>
            <p>
              Wir haben NewVisionData gegründet, weil wir immer wieder dasselbe gesehen haben:
              solide Betriebe, die zwischen KI-Hype und Hilflosigkeit feststecken. Auf der einen
              Seite Berater mit Buzzword-Präsentationen, auf der anderen Software-Anbieter, die
              vor allem verkaufen wollen. Dazwischen: der Mittelstand, der einfach nur wissen
              will, was funktioniert.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p>
              Unser Ansatz ist ein anderer: Wir hören zu, schauen uns Ihre Abläufe an und
              empfehlen nur, was sich für Sie rechnet. Manchmal ist das ein neues Werkzeug, das
              Ihrem Team Routinearbeit abnimmt. Manchmal ist es der Satz: „Das brauchen Sie
              nicht." Beides ist gute Beratung.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p>
              Wir bringen langjährige Erfahrung aus IT, Prozessgestaltung und Zusammenarbeit mit
              mittelständischen Betrieben mit – und arbeiten bewusst herstellerunabhängig, damit
              unsere Empfehlung immer nur eines im Blick hat: Ihren Betrieb.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
