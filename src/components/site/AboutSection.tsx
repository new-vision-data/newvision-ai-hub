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
    title: "Herstellerunabhängig",
    text: "Wir empfehlen die Lösung, die zu Ihrem Unternehmen passt – unabhängig von Anbietern oder Verkaufsinteressen.",
  },
  {
    icon: Workflow,
    title: "Praxis statt Theorie",
    text: "Unsere Empfehlungen entstehen aus konkreten Abläufen Ihres Unternehmens, nicht aus allgemeinen Präsentationen.",
  },
  {
    icon: Zap,
    title: "Echter Mehrwert",
    text: "Wir automatisieren dort, wo sich Aufwand reduzieren, Zeit sparen und Prozesse nachhaltig verbessern lassen.",
  },
  {
    icon: Sparkles,
    title: "Für den Mittelstand",
    text: "Keine Standardlösung, sondern eine Umsetzung, die zu Ihren Strukturen, Zielen und Systemen passt.",
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

        {/* Vorteilskarten – kompakter, direkter am Text */}
        <div className="mx-auto mt-12 max-w-3xl">
          <Reveal variant="fade">
            <p className="mb-5 text-center text-[11px] font-semibold tracking-[0.22em] text-accent uppercase">
              <span aria-hidden className="mr-2 inline-block h-px w-6 align-middle bg-accent/60" />
              Was uns ausmacht
            </p>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} variant="scale">
                <div className="card-luxe group flex h-full items-start gap-3.5 p-4 transition-transform duration-300 hover:-translate-y-0.5">
                  <div
                    aria-hidden
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-brand text-primary-foreground shadow-brand-glow"
                  >
                    <p.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-[0.95rem] font-semibold leading-tight text-primary">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
                      {p.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Team – nahtloser Abschluss */}
        <div className="mx-auto mt-16 max-w-3xl">
          <Reveal variant="fade">
            <div className="mb-8 text-center">
              <p className="mb-3 inline-flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-accent uppercase">
                <span aria-hidden className="inline-block h-px w-6 bg-accent/60" />
                Unser Team
              </p>
              <h3 className="font-display text-2xl font-semibold text-primary md:text-3xl">
                Die Menschen hinter{" "}
                <span className="font-serif text-[1.12em] font-normal italic text-gradient-brand">
                  NewVisionData
                </span>
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
