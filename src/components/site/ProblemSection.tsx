import { AlertCircle, Layers, ShieldQuestion, Timer } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const problems = [
  {
    icon: Layers,
    title: 'Jede Woche ein neues „Wunder-Tool"',
    text: "Newsletter, LinkedIn, Messen: Überall heißt es, ohne KI verlieren Sie den Anschluss. Aber welches der hunderten Tools ist für Ihren Betrieb das richtige – und welches nur teures Spielzeug?",
  },
  {
    icon: Timer,
    title: "Keine Zeit, das alles zu bewerten",
    text: "Ihr Tagesgeschäft läuft auf Hochtouren. Wer soll nebenbei Tools testen, Anbieter vergleichen, Verträge prüfen und Datenschutzfragen klären? Genau: niemand.",
  },
  {
    icon: AlertCircle,
    title: "Angst vor der Fehlinvestition",
    text: "Software gekauft, nie richtig genutzt – das kennen viele Betriebe. Beim nächsten Digitalisierungsschritt soll Ihnen das nicht passieren. Sie wollen wissen, was es bringt, bevor Sie investieren.",
  },
  {
    icon: ShieldQuestion,
    title: "Bauchschmerzen beim Datenschutz",
    text: "Kundendaten und Betriebswissen in irgendeine Cloud schicken? DSGVO, EU AI Act, Haftung – Ihre Vorsicht ist berechtigt. Und trotzdem kein Grund, Effizienzpotenzial liegen zu lassen.",
  },
];

export function ProblemSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-dot-grid opacity-[0.55] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Kommt Ihnen das bekannt vor?"
          title="Alle reden von KI."
          titleAccent="Aber wer sagt Ihnen, was Ihr Betrieb davon hat?"
          subtitle="Sie führen ein Unternehmen – Sie haben keine Zeit für Hype. Und trotzdem holt Sie das Thema jede Woche wieder ein."
        />
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="group card-luxe flex h-full flex-col gap-3 p-6 md:p-7">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-accent transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-primary">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
