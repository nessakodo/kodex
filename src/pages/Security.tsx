import { Container } from "@/components/layout/Container";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";

const securityPractices = [
  {
    icon: Shield,
    title: "Data Protection",
    description:
      "All client data is encrypted at rest and in transit using industry-standard protocols (AES-256, TLS 1.3).",
  },
  {
    icon: Lock,
    title: "Access Control",
    description:
      "Principle of least privilege enforced across all systems with multi-factor authentication required.",
  },
  {
    icon: Eye,
    title: "Monitoring",
    description:
      "Continuous security monitoring with automated alerting and incident response procedures.",
  },
  {
    icon: FileCheck,
    title: "Compliance",
    description:
      "SOC 2 Type II compliant operations with regular third-party security audits.",
  },
];

const Security = () => {
  return (
    <div className="pt-16 pb-24">
      <Container size="narrow">
        <header className="mb-12 md:mb-16 text-center animate-fade-in">
          <p className="text-overline mb-4">SECURITY</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Security & <span className="gradient-text">Privacy</span>
          </h1>
          <p className="text-lead max-w-2xl mx-auto">
            Our commitment to protecting client data and maintaining the highest
            security standards.
          </p>
        </header>

        <section className="mb-12 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-neutral-950">Security Practices</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {securityPractices.map((practice, idx) => (
              <div
                key={idx}
                className="bg-black/30 border border-neutral-200 rounded-xl p-6 md:p-8"
              >
                <div className="w-10 h-10 rounded-full bg-accent-subtle flex items-center justify-center mb-4">
                  <practice.icon
                    className="h-5 w-5 text-accent"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-semibold text-neutral-950 mb-2">
                  {practice.title}
                </h3>
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                  {practice.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <div className="bg-black/30 border border-neutral-200 rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-neutral-950">Data Handling</h2>
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
              We collect and process only the minimum data necessary to provide
              our services. Client data is never shared with third parties without
              explicit consent, except where required by law.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                  background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                }} />
                <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                  <strong className="text-neutral-950 font-semibold">Data minimization:</strong> We collect only what we need
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                  background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                }} />
                <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                  <strong className="text-neutral-950 font-semibold">Purpose limitation:</strong> Data used only for stated purposes
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                  background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                }} />
                <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                  <strong className="text-neutral-950 font-semibold">Retention limits:</strong> Data deleted when no longer needed
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-4 flex-shrink-0" style={{
                  background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                }} />
                <span className="text-sm md:text-base text-neutral-600 leading-relaxed">
                  <strong className="text-neutral-950 font-semibold">User rights:</strong> Access, correction, and deletion requests honored
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <div className="bg-black/30 border border-neutral-200 rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-neutral-950">Vulnerability Disclosure</h2>
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-4">
              We welcome responsible disclosure of security vulnerabilities. If
              you discover a security issue, please contact us at:
            </p>
            <p className="font-mono text-sm text-neutral-950 bg-black/20 border border-neutral-200 rounded-lg px-4 py-3 mb-4">
              security@kodexstudio.com
            </p>
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
              We commit to acknowledging receipt within 24 hours and providing a
              detailed response within 72 hours.
            </p>
          </div>
        </section>

        <section>
          <div className="bg-black/30 border border-neutral-200 rounded-xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-neutral-950">Compliance & Certifications</h2>
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
              KODEX STUDIO maintains compliance with relevant security frameworks
              and standards:
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-black/20 border border-neutral-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutral-950 mb-2">SOC 2 Type II</h3>
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                  Annual third-party audit of security, availability, and
                  confidentiality controls.
                </p>
              </div>
              <div className="bg-black/20 border border-neutral-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutral-950 mb-2">HIPAA</h3>
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                  Business Associate Agreements available for healthcare clients
                  requiring PHI protection.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Security;
