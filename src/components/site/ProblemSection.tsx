import { AlertCircle, Clock, HelpCircle, Layers, ShieldQuestion } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const problems = [
  {
    icon: Layers,
    text: "Jeden Tag erscheinen neue AI-Tools – welches davon ist für Ihren Betrieb relevant?",
  },
  {
    icon: AlertCircle,
    text: "Viele Anbieter verkaufen Lösungen, bevor sie das eigentliche Problem verstanden haben.",
  },
  {
    icon: ShieldQuestion,
    text: "Datenschutz, Sicherheit und die Integration in bestehende Systeme bleiben oft unklar.",
  },
  {
    icon: Clock,
    text: "Im Tagesgeschäft fehlt schlicht die Zeit, alles selbst zu prüfen und zu vergleichen.",
  },
  {
    icon: HelpCircle,
    text: "Viele Unternehmen wissen: AI wird wichtig – aber nicht, wo sie sinnvoll anfangen sollen.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Die Ausgangslage"
          title="Zu viele Tools. Zu viele Versprechen. Zu wenig Klarheit."
          subtitle="Kommt Ihnen das bekannt vor? Damit sind Sie nicht allein – so geht es den meisten Unternehmen, mit denen wir sprechen."
        />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {problems.map((p, i) => (
            <Reveal key={p.text} delay={i * 70} className={i === problems.length - 1 ? "sm:col-span-2" : ""}>
              <div className="flex h-full items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-elevated">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-accent">
                  <p.icon className="h-5 w-5" />
                </span>
                <p className="text-sm leading-relaxed text-foreground md:text-[15px]">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
