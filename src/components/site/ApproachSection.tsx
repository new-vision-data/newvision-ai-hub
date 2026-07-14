import { ClipboardCheck, GraduationCap, Search, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Analyse vor Ort",
    text: "Wir schauen uns Ihre Abläufe an – nicht zuerst Ihre Server. Wo geht Zeit verloren? Wo wiederholt sich Arbeit? Daraus entsteht Ihre Potenzial-Landkarte.",
    tags: ["Ist-Aufnahme", "Potenzial"],
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Neutrale Tool-Auswahl",
    text: "Wir vergleichen herstellerunabhängig, was zu Ihnen passt – und sagen klar, was Sie nicht brauchen. Wir verdienen an keiner Empfehlung mit.",
    tags: ["Herstellerneutral", "Klartext"],
  },
  {
    icon: Wrench,
    step: "03",
    title: "Sichere Integration",
    text: "Wir binden die Lösung DSGVO-konform in Ihre bestehende IT ein – auf Wunsch vollständig im eigenen Haus betrieben, ohne Daten in externe Clouds zu geben.",
    tags: ["DSGVO-konform", "On-Premise"],
  },
  {
    icon: GraduationCap,
    step: "04",
    title: "Schulung & Betreuung",
    text: "Ihr Team lernt souverän damit zu arbeiten – ohne Fachchinesisch. Wir bleiben ansprechbar, wenn Fragen kommen oder sich Ihr Bedarf ändert.",
    tags: ["Training", "Support"],
  },
];

export function ApproachSection() {
  return (
    <section id="ablauf" className="relative py-16 md:py-24">
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

          <ol className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.step} delay={i * 110} className="h-full">
                <li className="group relative h-full">
                  <span
                    aria-hidden
                    className="absolute top-[1.85rem] left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-background bg-gradient-brand shadow-brand-glow lg:block"
                  />
                  <div className="card-luxe mt-12 flex h-full flex-col pt-2.5 px-3 pb-2 lg:mt-12">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-1.5">
                        <span className="font-serif text-2xl leading-none font-normal text-brand-soft/70 italic select-none transition-colors group-hover:text-accent/30">
                          {s.step}
                        </span>
                        <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-brand text-primary-foreground shadow-brand-glow">
                          <s.icon className="h-4 w-4" />
                        </span>
                        <h3 className="text-base font-semibold text-primary">{s.title}</h3>
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">{s.text}</p>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-1.5">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-gradient-to-br from-brand-soft/90 to-brand-soft/50 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-primary"
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
