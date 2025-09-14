import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import FeaturesProof from "@/components/FeaturesProof";
import TrustCredibility from "@/components/TrustCredibility";
import EngagementSection from "@/components/EngagementSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueProposition />
      <FeaturesProof />
      <TrustCredibility />
      <EngagementSection />
      <Footer />
    </main>
  );
};

export default Index;
