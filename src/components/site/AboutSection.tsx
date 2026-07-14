import { ShieldCheck, Workflow, Zap, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import dennisAsset from "@/assets/dennis.png.asset.json";
import mauriceAsset from "@/assets/maurice.png.asset.json";

const founders = [
  {
    name: "Dennis Schmidt",
    role: "Gründer & Geschäftsführer",
    image: dennisAsset.url,
    objectPosition: "50% 20%",
  },
  {
    name: "Maurice Schmidt",
    role: "Gründer",
    image: mauriceAsset.url,
    objectPosition: "50% 20%",
  },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "Herstellerunabhängige Beratung",
    text: "Wir empfehlen die Lösung, die zu Ihrem Unternehmen passt, unabhängig von bestimmten Anbietern oder Verkaufsinteressen.",
  },
  {
    icon: Workflow,
    title: "Praxis statt Theorie",
    text: "Unsere Empfehlungen entstehen aus konkreten Abläufen und Herausforderungen Ihres Unternehmens, nicht aus allgemeinen Präsentationen.",
  },
  {
    icon: Zap,
    title: "Automatisierung mit echtem Mehrwert",
    text: "Wir automatisieren dort, wo sich Arbeitsaufwand reduzieren, Zeit sparen und Prozesse nachhaltig verbessern lassen.",
  },
  {
    icon: Sparkles,
    title: "Individuelle KI-Lösungen für den Mittelstand",
    text: "Keine Standardlösung für alle, sondern eine Umsetzung, die zu Ihren Strukturen, Zielen und vorhandenen Systemen passt.",
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

        <div className="mx-auto max-w-2xl space-y-5 text-[15px] leading-relaxed text-muted-foreground md:text-lg">
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} variant="scale">
              <div className="card-luxe group flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1">
                <div
                  aria-hidden
                  className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-brand-glow"
                >
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-16 grid max-w-md grid-cols-2 gap-5 sm:max-w-lg">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 120} variant="scale">
                <div className="card-luxe relative overflow-hidden p-5 text-center">
                  <div className="relative mx-auto aspect-square w-full max-w-[11rem] overflow-hidden rounded-2xl shadow-brand-glow">
                    <img
                      src={f.image}
                      alt={`Porträt von ${f.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      style={{ objectPosition: f.objectPosition }}
                    />
                  </div>
                  <p className="mt-4 font-semibold text-primary">{f.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{f.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
