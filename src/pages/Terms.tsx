import { Container } from "@/components/layout/Container";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - KODEX STUDIO</title>
        <meta name="description" content="KODEX STUDIO terms of service and legal agreements." />
      </Helmet>

      <div className="pt-32 pb-20">
        <Container size="narrow">
          <div className="mb-16 animate-fade-in">
            <p className="text-overline mb-4">LEGAL</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-neutral-600">Last updated: January 2025</p>
          </div>

          <div className="prose prose-neutral max-w-none">
            <div className="bg-card border border-neutral-200 rounded-xl p-8 mb-8">
              <h2 className="h2 mb-6">1. AGREEMENT TO TERMS</h2>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                By accessing or using KODEX STUDIO services, you agree to be bound by these Terms of Service. 
                If you disagree with any part of the terms, you may not access our services.
              </p>
            </div>

            <div className="bg-card border border-neutral-200 rounded-xl p-8 mb-8">
              <h2 className="h2 mb-6">2. SERVICES DESCRIPTION</h2>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                KODEX STUDIO provides security architecture, cryptography implementation, infrastructure 
                hardening, and related cybersecurity consulting services. All services are provided on a 
                professional services basis under individual Statement of Work agreements.
              </p>
            </div>

            <div className="bg-card border border-neutral-200 rounded-xl p-8 mb-8">
              <h2 className="h2 mb-6">3. INTELLECTUAL PROPERTY</h2>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                All deliverables, documentation, and code produced under engagement are licensed to the 
                client upon full payment. KODEX STUDIO retains the right to use non-confidential 
                methodologies and frameworks across client engagements.
              </p>
            </div>

            <div className="bg-card border border-neutral-200 rounded-xl p-8 mb-8">
              <h2 className="h2 mb-6">4. CONFIDENTIALITY</h2>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                All client data, system architectures, and security findings are treated as strictly 
                confidential under NDA. We maintain SOC 2 Type II compliance for data handling.
              </p>
            </div>

            <div className="bg-card border border-neutral-200 rounded-xl p-8 mb-8">
              <h2 className="h2 mb-6">5. LIABILITY LIMITATIONS</h2>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                KODEX STUDIO provides security recommendations based on industry best practices and 
                technical analysis. Implementation and ongoing security posture remain the responsibility 
                of the client organization. Our liability is limited to fees paid for services.
              </p>
            </div>

            <div className="bg-card border border-neutral-200 rounded-xl p-8 mb-8">
              <h2 className="h2 mb-6">6. PAYMENT TERMS</h2>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Payment terms are net 30 from invoice date unless otherwise specified in the Statement 
                of Work. Late payments may result in suspension of services and interest charges.
              </p>
            </div>

            <div className="bg-card border border-neutral-200 rounded-xl p-8 mb-8">
              <h2 className="h2 mb-6">7. TERMINATION</h2>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Either party may terminate an engagement with 30 days written notice. Client remains 
                responsible for fees for work completed through the termination date.
              </p>
            </div>

            <div className="bg-card border border-neutral-200 rounded-xl p-8">
              <h2 className="h2 mb-6">8. GOVERNING LAW</h2>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                These terms are governed by the laws of the State of Colorado. Any disputes shall be 
                resolved through binding arbitration in Denver, Colorado.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-600">
              Questions about our terms?{" "}
              <a href="mailto:legal@kodexstudio.com" className="text-cyan-400 hover:underline font-semibold">
                Contact our legal team
              </a>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Terms;
