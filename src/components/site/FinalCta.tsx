import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-cta px-6 py-14 text-center shadow-elevated md:px-12 md:py-20">
            <div aria-hidden className="absolute inset-0 bg-grid-subtle opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold text-primary-foreground md:text-4xl">
                Lassen Sie uns herausfinden, wo AI in Ihrem Unternehmen wirklich Sinn ergibt.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70 md:text-lg">
                Kostenlos, unverbindlich und ehrlich – auch wenn das Ergebnis lautet: noch nicht.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="mt-8 bg-card text-base font-semibold text-primary transition-transform hover:scale-[1.03]"
              >
                <a href="#ai-check">
                  Kostenlosen AI-Check starten
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
