import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import dennisAsset from "@/assets/dennis.png.asset.json";
import mauriceAsset from "@/assets/maurice.png.asset.json";

const founders = [
  {
    name: "Dennis Schmidt Gantikow",
    role: "Geschäftsführer | KI- & Prozessberatung",
    image: dennisAsset.url,
    objectPosition: "50% 20%",
  },
  {
    name: "Maurice Schmidt",
    role: "Entwicklung | Automatisierung & KI-Lösungen",
    image: mauriceAsset.url,
    objectPosition: "50% 20%",
  },
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

        <div className="mx-auto max-w-2xl space-y-6 text-[15px] leading-[1.8] text-muted-foreground md:text-lg md:leading-[1.8]">
          <Reveal delay={80}>
            <p>
              Wir haben NewVisionData gegründet, weil wir immer wieder dasselbe gesehen haben:
              solide Betriebe, die zwischen KI-Hype und Hilflosigkeit feststecken. Auf der einen
              Seite Berater mit Buzzword-Präsentationen, auf der anderen Software-Anbieter, die
              vor allem verkaufen wollen. Dazwischen: der Mittelstand, der einfach nur wissen
              will, was funktioniert.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p>
              Unser Ansatz ist ein anderer: Wir hören zu, schauen uns Ihre Abläufe an und
              empfehlen nur, was sich für Sie rechnet. Manchmal ist das ein neues Werkzeug, das
              Ihrem Team Routinearbeit abnimmt. Manchmal ist es der Satz: „Das brauchen Sie
              nicht." Beides ist gute Beratung.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              Wir bringen langjährige Erfahrung aus IT, Prozessgestaltung und Zusammenarbeit mit
              mittelständischen Betrieben mit und arbeiten bewusst herstellerunabhängig, damit
              unsere Empfehlung immer nur eines im Blick hat: Ihren Betrieb.
            </p>
          </Reveal>
        </div>

        {/* Team – nahtloser Abschluss */}
        <div className="mx-auto mt-20 max-w-3xl">
          <Reveal variant="fade">
            <div className="mb-8 text-center">
              <h3 className="font-display text-2xl font-semibold text-primary md:text-3xl">
                Ihre Ansprechpartner
              </h3>
            </div>
          </Reveal>

          <div className="mx-auto grid max-w-lg grid-cols-2 gap-5">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 120} variant="scale">
                <div className="card-luxe flex h-full flex-col p-5 text-center">
                  <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-xl shadow-brand-glow">
                    <img
                      src={f.image}
                      alt={`Porträt von ${f.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      style={{ objectPosition: f.objectPosition }}
                    />
                  </div>
                  <p className="mt-4 font-display font-semibold text-primary">{f.name}</p>
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
