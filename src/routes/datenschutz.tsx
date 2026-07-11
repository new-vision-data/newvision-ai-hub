import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz | NewVisionData GmbH" },
      {
        name: "description",
        content:
          "Datenschutzerklärung der NewVisionData GmbH – Informationen zur Verarbeitung personenbezogener Daten.",
      },
      { property: "og:title", content: "Datenschutz | NewVisionData GmbH" },
      { property: "og:description", content: "Datenschutzerklärung der NewVisionData GmbH." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 pt-28 pb-16 md:px-6 md:pt-36 md:pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>
        <h1 className="mt-6 text-3xl font-bold text-primary md:text-4xl">Datenschutzerklärung</h1>

        <div className="mt-8 space-y-8">
          <section>
            <h2 className="text-lg font-bold text-primary">1. Verantwortliche Stelle</h2>
            <p className="mt-3 leading-relaxed">
              NewVisionData GmbH
              <br />
              Lindenallee 13
              <br />
              16831 Rheinsberg
              <br />
              Telefon:{" "}
              <a href="tel:+4915565000062" className="text-accent hover:underline">
                +49 (0) 155 65 000 062
              </a>
              <br />
              E-Mail:{" "}
              <a href="mailto:info@newvisiondata.de" className="text-accent hover:underline">
                info@newvisiondata.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary">2. Allgemeine Hinweise</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln
              Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
              Datenschutzvorschriften (insbesondere DSGVO) sowie dieser Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary">3. Datenerfassung auf dieser Website</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch technische
              Informationen (z. B. IP-Adresse, Browsertyp, Uhrzeit des Zugriffs) in Server-Logfiles
              erfasst. Diese Daten dienen der Sicherstellung eines störungsfreien Betriebs und
              werden nicht mit anderen Datenquellen zusammengeführt.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary">4. Kontakt- und Anfrageformular</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Wenn Sie uns über das Formular „Kostenloser AI-Check“ kontaktieren, verarbeiten wir
              die von Ihnen angegebenen Daten (z. B. Name, Firma, E-Mail-Adresse, Telefonnummer
              sowie Angaben zu Ihrem Unternehmen) ausschließlich zur Bearbeitung Ihrer Anfrage und
              zur Vorbereitung des Erstgesprächs. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
              (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
              an der Beantwortung von Anfragen). Ihre Daten werden nicht ohne Ihre Einwilligung an
              Dritte weitergegeben.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary">5. Speicherdauer</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Wir speichern personenbezogene Daten nur so lange, wie es für die genannten Zwecke
              erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen. Danach werden die
              Daten gelöscht.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary">6. Ihre Rechte</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Sie haben jederzeit das Recht auf Auskunft über Ihre bei uns gespeicherten
              personenbezogenen Daten sowie auf Berichtigung, Löschung, Einschränkung der
              Verarbeitung, Datenübertragbarkeit und Widerspruch gegen die Verarbeitung. Zudem
              steht Ihnen ein Beschwerderecht bei der zuständigen Datenschutz-Aufsichtsbehörde zu.
              Wenden Sie sich hierzu gerne an{" "}
              <a href="mailto:info@newvisiondata.de" className="text-accent hover:underline">
                info@newvisiondata.de
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary">7. Cookies und Tracking</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Diese Website verwendet derzeit keine Tracking- oder Analyse-Cookies. Sollte sich
              dies ändern, informieren wir Sie an dieser Stelle und holen – soweit erforderlich –
              Ihre Einwilligung ein.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
