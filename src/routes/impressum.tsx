import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | NewVisionData GmbH" },
      {
        name: "description",
        content:
          "Impressum der NewVisionData GmbH – AI- und Automatisierungslösungen für den deutschen Mittelstand.",
      },
      { property: "og:title", content: "Impressum | NewVisionData GmbH" },
      { property: "og:description", content: "Impressum der NewVisionData GmbH." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Impressum,
});

function Impressum() {
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
        <h1 className="mt-6 text-3xl font-bold text-primary md:text-4xl">Impressum</h1>

        <div className="mt-8 space-y-8 text-foreground">
          <section>
            <h2 className="text-lg font-bold text-primary">Angaben gemäß § 5 TMG</h2>
            <p className="mt-3 leading-relaxed">
              NewVisionData GmbH
              <br />
              Hügelstr. 11a
              <br />
              49179 Ostercappeln
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary">Vertreten durch</h2>
            <p className="mt-3 leading-relaxed">
              Geschäftsführer: Dennis Schmidt Gantikow und Viola Schmidt Gantikow
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary">Kontakt</h2>
            <p className="mt-3 leading-relaxed">
              Telefon:{" "}
              <a href="tel:+4915565000062" className="text-accent hover:underline">
                +49 (0) 155 65 0000 62
              </a>
              <br />
              E-Mail:{" "}
              <a href="mailto:info@newvisiondata.de" className="text-accent hover:underline">
                info@newvisiondata.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="mt-3 leading-relaxed">
              Dennis Schmidt Gantikow und Viola Schmidt Gantikow
              <br />
              Hügelstr. 11a
              <br />
              49179 Ostercappeln
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary">Haftung für Inhalte</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-primary">Haftung für Links</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Unser Angebot enthält gegebenenfalls Links zu externen Websites Dritter, auf deren
              Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
              keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der
              jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
