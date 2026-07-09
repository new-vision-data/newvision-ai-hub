import { Briefcase, Building2, Factory, FolderCog, HardHat, Scale } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const industries = [
  { icon: Building2, label: "Immobilien & Hausverwaltung" },
  { icon: HardHat, label: "Handwerk & Bau" },
  { icon: Briefcase, label: "Dienstleistung" },
  { icon: Factory, label: "Produktion" },
  { icon: Scale, label: "Kanzleien & Büros" },
  { icon: FolderCog, label: "Verwaltung & Backoffice" },
];

export function IndustriesSection() {
  return (
    <section id="branchen" className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Branchen-Fokus"
          title="Wir kennen den Alltag im Mittelstand."
          subtitle="Eine gute Lösung muss nicht nur technisch funktionieren, sondern in den Arbeitsalltag passen."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((ind, i) => (
            <Reveal key={ind.label} delay={i * 60}>
              <div className="flex h-full flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center shadow-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-elevated">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-accent">
                  <ind.icon className="h-5 w-5" />
                </span>
                <span className="text-xs leading-snug font-semibold text-primary md:text-sm">
                  {ind.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
