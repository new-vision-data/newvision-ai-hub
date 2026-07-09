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
    <section id="vorteile" className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Warum NewVisionData"
          title="Ein Partner, der Ihre Sprache spricht."
          subtitle="Sechs Gründe, warum mittelständische Unternehmen mit uns arbeiten."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 70}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-accent transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-primary">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
