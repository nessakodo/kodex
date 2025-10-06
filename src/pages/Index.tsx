import { Hero } from "@/components/modules/Hero";
import { ServiceGrid } from "@/components/modules/ServiceGrid";
import { TrustIndicators } from "@/components/modules/TrustIndicators";
import { CaseStudyPreview } from "@/components/modules/CaseStudyPreview";

const Index = () => {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <ServiceGrid />
      <CaseStudyPreview />
    </>
  );
};

export default Index;
