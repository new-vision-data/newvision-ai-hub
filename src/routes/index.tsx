import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ProblemSection } from "@/components/site/ProblemSection";
import { ApproachSection } from "@/components/site/ApproachSection";
import { ExamplesSection } from "@/components/site/ExamplesSection";
import { ResultsSection } from "@/components/site/ResultsSection";
import { AboutSection } from "@/components/site/AboutSection";
import { VoicesSection } from "@/components/site/VoicesSection";
import { FaqSection } from "@/components/site/FaqSection";
import { AiCheckForm } from "@/components/site/AiCheckForm";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ApproachSection />
        <ExamplesSection />
        <ResultsSection />
        <AboutSection />
        <VoicesSection />
        <FaqSection />
        <AiCheckForm />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
