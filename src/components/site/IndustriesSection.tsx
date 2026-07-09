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
    <section id="branchen" className="relative py-20 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/50 to-background"
      />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Branchen-Fokus"
          title="Wir kennen"
          titleAccent="den Alltag im Mittelstand."
          subtitle="Eine gute Lösung muss nicht nur technisch funktionieren, sondern in den Arbeitsalltag passen."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((ind, i) => (
            <Reveal key={ind.label} delay={i * 70}>
              <div className="card-luxe group flex h-full flex-col items-center gap-3 p-5 text-center">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-accent transition-all duration-500 group-hover:rotate-[-4deg] group-hover:bg-gradient-brand group-hover:text-primary-foreground group-hover:shadow-brand-glow">
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
