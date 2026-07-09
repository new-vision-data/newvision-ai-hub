import { ClipboardCheck, GraduationCap, Search, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Analyse",
    text: "Wir verstehen Ihre Prozesse, Engpässe und Ziele – bevor wir über Technik sprechen.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Bewertung",
    text: "Wir prüfen ehrlich, wo AI oder Automatisierung wirklich Nutzen bringt – und wo nicht.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Umsetzung",
    text: "Wir integrieren passende Lösungen sauber in Ihre bestehenden Abläufe und Systeme.",
  },
  {
    icon: GraduationCap,
    step: "04",
    title: "Schulung & Betreuung",
    text: "Wir sorgen dafür, dass Ihr Team die Lösungen versteht, akzeptiert und täglich nutzt.",
  },
];

export function ApproachSection() {
  return (
    <section id="ablauf" className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Unser Ansatz"
          title="Wir machen AI für Ihr Unternehmen greifbar."
          subtitle="Kein Tool-Verkauf, kein Blindflug: In vier klaren Schritten von der Analyse bis zum Alltag."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 90}>
              <div className="relative h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elevated">
                <span className="font-display text-4xl font-extrabold text-brand-soft select-none">
                  {s.step}
                </span>
                <span className="absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-brand-glow">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
