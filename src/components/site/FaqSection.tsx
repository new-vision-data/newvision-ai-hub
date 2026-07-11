import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "Was kostet mich das?",
    a: "Der erste KI-Check ist kostenlos und unverbindlich – Sie gehen kein Risiko ein. Danach erhalten Sie für jedes Projekt ein Festpreis-Angebot, bevor irgendetwas startet. Keine versteckten Kosten, keine Abo-Fallen.",
  },
  {
    q: "Lohnt sich KI überhaupt für einen Betrieb unserer Größe?",
    a: "Oft ja – aber nicht immer, und genau das prüfen wir zuerst. Gerade kleinere Betriebe profitieren bei wiederkehrenden Aufgaben: Angebote, E-Mails, Dokumentation, Recherche. Wenn sich bei Ihnen aktuell nichts rechnet, sagen wir Ihnen das klar. Dann haben Sie Gewissheit statt schlechtem Gewissen.",
  },
  {
    q: "Was passiert mit unseren Daten?",
    a: "Ihre Daten bleiben Ihre Daten. Wir setzen bevorzugt auf Lösungen, die in Ihrem Firmennetzwerk oder in europäischen Rechenzentren laufen. Jede Empfehlung wird auf DSGVO-Konformität geprüft, der EU AI Act ist mitgedacht. Nichts wird ohne Ihre Freigabe an Dritte übertragen.",
  },
  {
    q: "Wie viel Zeit müssen wir selbst investieren?",
    a: "Weniger, als Sie denken. Für den KI-Check reichen zwei bis drei Stunden mit Ihnen oder einer verantwortlichen Person. Bei der Umsetzung übernehmen wir die Arbeit – Ihr Team wird nur dort eingebunden, wo es um seine eigenen Abläufe geht. Ihr Tagesgeschäft läuft normal weiter.",
  },
  {
    q: "Sind Sie an bestimmte Hersteller gebunden?",
    a: "Nein. Wir verkaufen keine Software, erhalten keine Provisionen und haben keine Partnerverträge, die unsere Empfehlung beeinflussen. Wir vergleichen den Markt neutral und empfehlen, was zu Ihrem Betrieb passt – das ist unser einziges Kriterium.",
  },
  {
    q: "Unser Team hat wenig Technik-Erfahrung. Funktioniert das trotzdem?",
    a: "Ja – das ist sogar der Normalfall. Wir wählen Lösungen, die sich in bestehende Arbeitsweisen einfügen, und schulen Ihr Team praxisnah an den eigenen Aufgaben, nicht mit Theorie-Folien. Erfahrungsgemäß sind gerade skeptische Mitarbeiter nach der ersten gesparten Stunde die größten Fürsprecher.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Häufige Fragen"
          title="Berechtigte Bedenken,"
          titleAccent="ehrliche Antworten."
        />
        <Reveal>
          <Accordion
            type="single"
            collapsible
            className="card-luxe divide-y divide-border px-6"
          >
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`faq-${i}`} className="border-0">
                <AccordionTrigger className="text-left text-base font-semibold text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
