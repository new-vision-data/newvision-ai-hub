import { Handshake, Hammer, HeartHandshake, MessageSquareText, Scale, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const benefits = [
  {
    icon: Scale,
    title: "Herstellerunabhängig",
    text: "Wir empfehlen, was zu Ihrem Betrieb passt – nicht, was Provision bringt.",
  },
  {
    icon: MessageSquareText,
    title: "Ehrlich",
    text: "Wenn AI für einen Prozess keinen Sinn ergibt, sagen wir das klar – und sparen Ihnen Geld.",
  },
  {
    icon: ShieldCheck,
    title: "Sicher",
    text: "Datenschutz, DSGVO und der EU AI Act werden von Anfang an mitgedacht.",
  },
  {
    icon: HeartHandshake,
    title: "Praxisnah",
    text: "Konkrete Entlastung im Alltag statt Zukunftsmusik und Konzeptpapieren.",
  },
  {
    icon: Hammer,
    title: "Umsetzung statt Folien",
    text: "Wir beraten nicht nur – wir bauen, integrieren und bleiben ansprechbar.",
  },
  {
    icon: Handshake,
    title: "Mittelstandsnah",
    text: "Verständlich, direkt und auf Augenhöhe – ohne Konzern-Theater.",
  },
];

export function BenefitsSection() {
  return (
    <section id="vorteile" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/40 to-background"
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-soft/50 via-transparent to-ember-soft/40 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Warum NewVisionData"
          title="Ein Partner,"
          titleAccent="der Ihre Sprache spricht."
          subtitle="Sechs Gründe, warum mittelständische Unternehmen mit uns arbeiten."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="card-luxe group relative h-full overflow-hidden p-6">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-gradient-to-br from-accent/20 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-accent transition-all duration-500 group-hover:rotate-[-6deg] group-hover:bg-gradient-brand group-hover:text-primary-foreground group-hover:shadow-brand-glow">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-primary">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
