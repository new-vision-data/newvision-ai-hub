import { ClipboardCheck, GraduationCap, Search, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Analyse vor Ort",
    text: "Wir schauen uns Ihre Abläufe an – nicht zuerst Ihre Server. Wo geht Zeit verloren? Wo wiederholt sich Arbeit? Daraus entsteht Ihre Potenzial-Landkarte.",
    tags: ["Ist-Aufnahme", "Zeitfresser", "Potenzial"],
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Neutrale Tool-Auswahl",
    text: "Wir vergleichen herstellerunabhängig, was zu Ihnen passt – und sagen klar, was Sie nicht brauchen. Wir verdienen an keiner Empfehlung mit.",
    tags: ["Vergleich", "Nutzen", "Klartext"],
  },
  {
    icon: Wrench,
    step: "03",
    title: "Sichere Integration",
    text: "Wir binden die Lösung DSGVO-konform in Ihre bestehende IT ein – auf Wunsch komplett im eigenen Haus betrieben.",
    tags: ["DSGVO", "Integration", "On-Prem"],
  },
  {
    icon: GraduationCap,
    step: "04",
    title: "Schulung & Betreuung",
    text: "Ihr Team lernt souverän damit zu arbeiten – ohne Fachchinesisch. Wir bleiben ansprechbar, wenn Fragen kommen oder sich Ihr Bedarf ändert.",
    tags: ["Training", "Praxis", "Support"],
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
          eyebrow="So arbeiten wir"
          title="In vier Schritten zu Prozessen,"
          titleAccent="die Zeit und Kosten sparen."
          subtitle="Kein Projekt von der Stange. Wir schauen zuerst auf Ihre Abläufe – und erst danach auf Technik."
        />

        <div className="relative">
          <div
            aria-hidden
            className="absolute top-8 left-0 hidden h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:block"
          />

          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 110} className="h-full">
                <li className="group relative h-full">
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
                    <p className="mt-2 flex flex-1 items-end text-sm leading-snug text-muted-foreground">
                      {s.text}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-brand-soft/50 px-2 py-0.5 text-[10px] font-medium tracking-wide text-navy-light/80"
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
