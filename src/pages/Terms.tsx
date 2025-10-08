import { Container } from "@/components/layout/Container";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - KODEX STUDIO</title>
        <meta name="description" content="KODEX STUDIO terms of service and legal agreements." />
      </Helmet>

      <div className="pt-16 pb-24">
        <Container size="narrow">
          <header className="mb-12 md:mb-16 text-center animate-fade-in">
            <p className="text-overline mb-4">LEGAL</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto">
              Last updated: January 2025
            </p>
          </header>

          <div className="space-y-8">
            <div className="bg-black/30 border border-neutral-200 rounded-xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-neutral-950">1. Agreement to Terms</h2>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                By accessing or using KODEX STUDIO services, you agree to be bound by these Terms of Service.
                If you disagree with any part of the terms, you may not access our services.
              </p>
            </div>

            <div className="bg-black/30 border border-neutral-200 rounded-xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-neutral-950">2. Services Description</h2>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                KODEX STUDIO provides security architecture, cryptography implementation, infrastructure
                hardening, and related cybersecurity consulting services. All services are provided on a
                professional services basis under individual Statement of Work agreements.
              </p>
            </div>

            <div className="bg-black/30 border border-neutral-200 rounded-xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-neutral-950">3. Intellectual Property</h2>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-4">
                All deliverables, documentation, and code produced under engagement are licensed to the
                client upon full payment. KODEX STUDIO retains the right to use non-confidential
                methodologies and frameworks across client engagements.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                  }} />
                  <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    Client-specific code and documentation transferred upon payment
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                  }} />
                  <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    KODEX STUDIO retains rights to general methodologies and frameworks
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-black/30 border border-neutral-200 rounded-xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-neutral-950">4. Confidentiality</h2>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-4">
                All client data, system architectures, and security findings are treated as strictly
                confidential under NDA. We maintain SOC 2 Type II compliance for data handling.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                  }} />
                  <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    All engagements covered by mutual NDA
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                  }} />
                  <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    Security findings shared only with authorized client personnel
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                  }} />
                  <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    SOC 2 Type II certified data handling procedures
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-black/30 border border-neutral-200 rounded-xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-neutral-950">5. Liability Limitations</h2>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-4">
                KODEX STUDIO provides security recommendations based on industry best practices and
                technical analysis. Implementation and ongoing security posture remain the responsibility
                of the client organization. Our liability is limited to fees paid for services.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                  }} />
                  <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    Professional recommendations based on current threat landscape
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                  }} />
                  <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    Client responsible for implementation and ongoing maintenance
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                  }} />
                  <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    Liability capped at total fees paid for engagement
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-black/30 border border-neutral-200 rounded-xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-neutral-950">6. Payment Terms</h2>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-4">
                Payment terms are net 30 from invoice date unless otherwise specified in the Statement
                of Work. Late payments may result in suspension of services and interest charges.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                  }} />
                  <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    Net 30 payment terms from invoice date
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                  }} />
                  <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    Late payment interest at 1.5% per month
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                  }} />
                  <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    Services may be suspended for accounts over 60 days past due
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-black/30 border border-neutral-200 rounded-xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-neutral-950">7. Termination</h2>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-4">
                Either party may terminate an engagement with 30 days written notice. Client remains
                responsible for fees for work completed through the termination date.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                  }} />
                  <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    30-day written notice required from either party
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                  }} />
                  <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    Client billed for work completed through termination date
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                  }} />
                  <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    Deliverables up to termination date transferred to client
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-black/30 border border-neutral-200 rounded-xl p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-neutral-950">8. Governing Law</h2>
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-4">
                These terms are governed by the laws of the State of Colorado. Any disputes shall be
                resolved through binding arbitration in Denver, Colorado.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                  }} />
                  <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    Governed by Colorado state law
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                  }} />
                  <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    Binding arbitration in Denver, Colorado
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                    background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                  }} />
                  <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    American Arbitration Association rules apply
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 md:mt-16 bg-black/30 border border-neutral-200 rounded-xl p-6 md:p-8 text-center">
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
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
