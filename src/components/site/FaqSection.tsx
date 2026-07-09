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
    q: "Lohnt sich AI überhaupt für kleine Unternehmen?",
    a: "Häufig ja – aber nicht überall. Gerade wiederkehrende Aufgaben wie E-Mail-Bearbeitung, Dokumentenablage oder Angebotserstellung lassen sich oft mit überschaubarem Aufwand automatisieren. Ob es sich in Ihrem Fall lohnt, prüfen wir ehrlich im kostenlosen AI-Check. Wenn es sich nicht lohnt, sagen wir Ihnen das genauso klar.",
  },
  {
    q: "Was kostet eine Zusammenarbeit?",
    a: "Der AI-Check ist kostenlos und unverbindlich. Danach hängt der Aufwand vom Projekt ab: Eine einzelne Automatisierung ist deutlich günstiger als eine umfassende Integration. Sie erhalten vor jedem Schritt ein transparentes Angebot mit festem Umfang – ohne versteckte Kosten.",
  },
  {
    q: "Wie läuft der kostenlose AI-Check ab?",
    a: "Sie füllen das Formular auf dieser Seite aus, wir melden uns kurzfristig für einen Termin. Im Gespräch (ca. 45 Minuten, remote oder vor Ort) schauen wir uns Ihre Abläufe an und geben eine erste ehrliche Einschätzung, wo AI oder Automatisierung Nutzen bringen kann – und wo nicht.",
  },
  {
    q: "Was ist mit Datenschutz und DSGVO?",
    a: "Datenschutz denken wir von Anfang an mit. Wir bevorzugen, wo möglich, Lösungen mit Datenverarbeitung in der EU, klären Auftragsverarbeitung sauber und achten darauf, dass sensible Daten nicht unkontrolliert an Dritte fließen. Auch die Anforderungen des EU AI Act fließen in unsere Empfehlungen ein.",
  },
  {
    q: "Müssen unsere Mitarbeiter programmieren können?",
    a: "Nein. Die Lösungen, die wir einführen, sind für den normalen Arbeitsalltag gemacht. In unseren Schulungen lernt Ihr Team den sicheren Umgang – verständlich, praxisnah und ohne Fachchinesisch.",
  },
  {
    q: "Können bestehende Systeme eingebunden werden?",
    a: "In den meisten Fällen ja. Ob Microsoft 365, Google Workspace, DATEV, CRM-, ERP- oder Hausverwaltungssoftware: Wir prüfen die vorhandenen Schnittstellen und integrieren neue Lösungen so, dass Ihre gewohnten Abläufe erhalten bleiben.",
  },
  {
    q: "Wie schnell sieht man erste Ergebnisse?",
    a: "Kleinere Automatisierungen sind oft innerhalb weniger Wochen produktiv. Größere Integrationen planen wir in klaren Etappen, sodass Sie früh erste Ergebnisse im Alltag sehen – nicht erst am Ende des Projekts.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Häufige Fragen – klar beantwortet."
        />
        <Reveal>
          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-6 shadow-card">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`faq-${i}`} className={i === faqs.length - 1 ? "border-b-0" : ""}>
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
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
