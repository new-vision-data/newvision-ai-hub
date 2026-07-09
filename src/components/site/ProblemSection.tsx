import { AlertCircle, Clock, HelpCircle, Layers, ShieldQuestion } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const problems = [
  {
    icon: Layers,
    text: "Jeden Tag erscheinen neue AI-Tools – welches davon ist für Ihren Betrieb wirklich relevant?",
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
    <section className="relative py-20 md:py-28">
      <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-[0.55] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Die Ausgangslage"
          title="Zu viele Tools. Zu viele Versprechen."
          titleAccent="Zu wenig Klarheit."
          subtitle="Kommt Ihnen das bekannt vor? Damit sind Sie nicht allein – so geht es den meisten Unternehmen, mit denen wir sprechen."
        />
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {problems.map((p, i) => (
            <Reveal
              key={p.text}
              delay={i * 90}
              className={i === problems.length - 1 ? "sm:col-span-2" : ""}
            >
              <div className="group card-luxe flex h-full items-start gap-4 p-5 md:p-6">
                <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-accent transition-colors group-hover:bg-gradient-brand group-hover:text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </span>
                <p className="text-[15px] leading-relaxed text-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
