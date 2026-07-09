import { ClipboardCheck, GraduationCap, Search, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Analyse",
    text: "Wir verstehen Ihre Prozesse, Engpässe und Ziele – bevor wir über Technik sprechen.",
    tags: ["Ist-Aufnahme", "Zeitfresser", "Ziele"],
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Bewertung",
    text: "Wir prüfen ehrlich, wo AI oder Automatisierung wirklich Nutzen bringt – und wo nicht.",
    tags: ["Nutzen", "Aufwand", "Risiko"],
  },
  {
    icon: Wrench,
    step: "03",
    title: "Umsetzung",
    text: "Wir integrieren passende Lösungen sauber in Ihre bestehenden Abläufe und Systeme.",
    tags: ["Integration", "Tests", "Rollout"],
  },
  {
    icon: GraduationCap,
    step: "04",
    title: "Schulung & Betreuung",
    text: "Wir sorgen dafür, dass Ihr Team die Lösungen versteht, akzeptiert und täglich nutzt.",
    tags: ["Training", "Doku", "Support"],
  },
];

export function ApproachSection() {
  return (
    <section id="ablauf" className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/60 via-background to-background"
      />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Unser Ansatz"
          title="Vom Prozess zur Wirkung –"
          titleAccent="in vier klaren Schritten."
          subtitle="Kein Tool-Verkauf, kein Blindflug. Sondern ein Weg, der zeigt, wo AI im Alltag wirklich trägt."
        />

        <div className="relative">
          {/* Timeline-Rail */}
          <div
            aria-hidden
            className="absolute top-8 left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:block"
          />

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 110}>
                <li className="group relative h-full">
                  {/* Punkt auf der Rail */}
                  <span
                    aria-hidden
                    className="absolute top-[1.85rem] left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-background bg-gradient-brand shadow-brand-glow lg:block"
                  />
                  <div className="card-luxe mt-16 flex h-full flex-col p-6 lg:mt-16">
                    <div className="flex items-start justify-between">
                      <span className="font-serif text-[3.2rem] leading-none font-normal text-brand-soft italic select-none group-hover:text-accent/40">
                        {s.step}
                      </span>
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-brand-glow">
                        <s.icon className="h-5 w-5" />
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-primary">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-background/70 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
