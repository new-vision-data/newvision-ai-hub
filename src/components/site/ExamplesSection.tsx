import {
  BarChart3,
  FileSearch,
  FileText,
  FolderKanban,
  Globe,
  Headphones,
  Mail,
  Receipt,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const examples = [
  {
    icon: Mail,
    title: "E-Mail-Automatisierung & Kundenanfragen",
    text: "Anfragen werden sortiert, zugeordnet und mit Antwortentwurf vorbereitet.",
  },
  {
    icon: FileText,
    title: "Dokumentenanalyse & Datenaufbereitung",
    text: "Angebote, Rechnungen und Verträge werden ausgelesen und übernommen.",
  },
  {
    icon: FolderKanban,
    title: "Interne Wissensdatenbank",
    text: "Datenblätter, Anleitungen und Altprojekte per intelligenter Suche in Sekunden.",
  },
  {
    icon: FileSearch,
    title: "Angebotsprozess beschleunigen",
    text: "Aus früheren Kalkulationen entstehen erste Angebotsentwürfe automatisch.",
  },
  {
    icon: Receipt,
    title: "Rechnungs- & Belegprüfung",
    text: "Belege werden automatisch geprüft, kontiert und im System abgelegt.",
  },
  {
    icon: Headphones,
    title: "KI-gestützter Kundenservice",
    text: "Häufige Fragen beantworten sich selbst – rund um die Uhr, in Ihrem Ton.",
  },
  {
    icon: Globe,
    title: "KI-gestützte Weblösungen",
    text: "Von der professionellen Unternehmenswebsite bis zur individuellen Webanwendung: Wir entwickeln digitale Lösungen mit modernsten KI-Technologien und automatisieren Prozesse direkt im Web.",
  },
  {
    icon: BarChart3,
    title: "Reporting & Auswertungen",
    text: "Zahlen aus mehreren Systemen werden zu klaren Wochenberichten verdichtet.",
  },
];

export function ExamplesSection() {
  return (
    <section id="beispiele" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Beispiele für den Mittelstand"
          title="Wo KI im Alltag"
          titleAccent="tatsächlich hilft."
          subtitle="Konkrete Ansatzpunkte für Geschäftsführung, IT-Verantwortliche und Teams – statt Buzzwords."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {examples.map((ex, i) => (
            <Reveal key={ex.title} delay={(i % 4) * 90}>
              <div className="card-luxe group h-full p-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-accent transition-all duration-500 group-hover:rotate-[-4deg] group-hover:bg-gradient-brand group-hover:text-primary-foreground group-hover:shadow-brand-glow">
                  <ex.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-primary">{ex.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ex.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
