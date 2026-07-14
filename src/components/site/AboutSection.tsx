import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import dennisUrl from "@/assets/dennis.png";
import mauriceUrl from "@/assets/maurice.png";

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
              Wir haben NewVisionData gegründet, weil wir im Berufsalltag immer wieder dasselbe
              Bild gesehen haben. Solide Mittelstandsbetriebe stehen zwischen KI-Hype und
              Hilflosigkeit – zwischen Beratern, die mit Fachbegriffen glänzen wollen, und
              Software-Anbietern, die vor allem eines im Kopf haben: den nächsten Verkauf.
              Dazwischen stehen Unternehmer, die einfach nur wissen wollen, was wirklich
              funktioniert.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p>
              Unser Ansatz ist daher ein anderer. Wir hören zuerst zu, verstehen Ihre Abläufe und
              empfehlen nur das, was sich für Ihren Betrieb auch rechnet. Manchmal ist das ein
              Werkzeug, das Ihrem Team Routineaufgaben abnimmt. Manchmal ist es der ehrliche
              Satz, dass etwas gerade nicht nötig ist – denn beides gehört für uns zu guter
              Beratung.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              Wir bringen langjährige Erfahrung aus IT, Prozessgestaltung und der Zusammenarbeit
              mit mittelständischen Betrieben mit. Und wir arbeiten bewusst herstellerunabhängig,
              weil unsere Empfehlung nicht an einen Anbieter gebunden sein soll, sondern an eines –
              Ihren Betrieb.
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
