import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ProblemSection } from "@/components/site/ProblemSection";
import { ApproachSection } from "@/components/site/ApproachSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { BenefitsSection } from "@/components/site/BenefitsSection";
import { ResultsSection } from "@/components/site/ResultsSection";
import { IndustriesSection } from "@/components/site/IndustriesSection";
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
        <ServicesSection />
        <BenefitsSection />
        <ResultsSection />
        <IndustriesSection />
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
