import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-cta px-6 py-16 text-center shadow-elevated shadow-inner-hi md:px-12 md:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-grid-subtle opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-noise opacity-25"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-accent/50 to-transparent blur-3xl animate-float-slow"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-ember/40 to-transparent blur-3xl animate-float-slower"
            />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold text-primary-foreground/90 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                Kostenlos &amp; unverbindlich
              </span>
              <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl leading-[1.1] font-semibold text-primary-foreground md:text-5xl">
                Lassen Sie uns herausfinden, wo AI in Ihrem Unternehmen{" "}
                <span className="font-serif text-[1.1em] font-normal italic text-primary-foreground/90">
                  wirklich Sinn ergibt.
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-primary-foreground/75 md:text-lg">
                Kostenlos, unverbindlich und ehrlich – auch wenn das Ergebnis lautet: noch nicht.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-primary-foreground text-base font-semibold text-primary transition-transform hover:scale-[1.03] hover:bg-primary-foreground/90"
                >
                  <a href="#ai-check">
                    Kostenlosen AI-Check starten
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary-foreground/30 bg-transparent text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <a href="tel:+4915565000062">
                    <Phone className="mr-1 h-4 w-4" />
                    015565000062
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
