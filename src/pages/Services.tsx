import { Container } from "@/components/layout/Container";

const services = [
  {
    title: "Security Architecture",
    description:
      "Design and implementation of secure system architectures using defense-in-depth and zero-trust principles.",
    offerings: [
      "Threat modeling and risk assessment",
      "Security architecture review and remediation",
      "Zero-trust network design",
      "Security control implementation",
      "Compliance framework mapping",
    ],
  },
  {
    title: "Application Security",
    description:
      "Comprehensive application security from code to deployment, ensuring secure software development lifecycles.",
    offerings: [
      "Security code review (manual & automated)",
      "Penetration testing and vulnerability assessment",
      "SAST/DAST integration",
      "Secure development training",
      "Security regression testing",
    ],
  },
  {
    title: "Security Operations",
    description:
      "Continuous security monitoring, incident response, and operational security management.",
    offerings: [
      "SOC design and implementation",
      "Incident response planning and execution",
      "Security monitoring and alerting",
      "Log aggregation and SIEM integration",
      "Security metrics and reporting",
    ],
  },
  {
    title: "Secure Development",
    description:
      "Embedding security into the development process with tooling, automation, and best practices.",
    offerings: [
      "CI/CD security integration",
      "Secret management implementation",
      "Dependency scanning and management",
      "Container security hardening",
      "Infrastructure as Code security",
    ],
  },
  {
    title: "Cloud Security",
    description:
      "Cloud-native security implementation across AWS, Azure, and GCP with focus on scalability and compliance.",
    offerings: [
      "Cloud architecture security review",
      "IAM and access control implementation",
      "Network segmentation and VPC design",
      "Cloud workload protection",
      "Multi-cloud security strategy",
    ],
  },
  {
    title: "Security Assessment",
    description:
      "Comprehensive security evaluations to identify vulnerabilities and provide actionable remediation guidance.",
    offerings: [
      "Penetration testing (network, web, mobile)",
      "Red team exercises",
      "Security posture assessment",
      "Compliance gap analysis",
      "Third-party risk assessment",
    ],
  },
];

const Services = () => {
  return (
    <div className="pt-16 pb-24">
      <Container>
        <header className="mb-16 max-w-2xl text-center mx-auto animate-fade-in">
          <p className="text-overline mb-4">SERVICES</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Security <span className="gradient-text">Capabilities</span>
          </h1>
          <p className="text-lead">
            Comprehensive security services designed for organizations that demand
            excellence in protecting their digital infrastructure.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => (
            <article
              key={idx}
              className="relative border border-neutral-200 rounded-xl p-8 bg-gradient-to-br from-card to-neutral-50/50 hover:border-transparent hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
              style={{
                '--hover-glow': 'drop-shadow(0 0 20px rgba(182, 218, 255, 0.3))'
              } as React.CSSProperties}
            >
              {/* Gradient background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 via-transparent to-periwinkle/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Animated border gradient on hover */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                background: 'linear-gradient(135deg, rgba(182, 218, 255, 0.4) 0%, rgba(167, 232, 237, 0.4) 25%, rgba(154, 140, 255, 0.4) 50%, rgba(199, 196, 255, 0.3) 100%)',
                padding: '1px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude'
              }} />

              <div className="relative">
                <h2 className="text-xl font-bold text-neutral-950 mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h2>

                <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2.5 pt-6 border-t border-neutral-200/50">
                  {service.offerings.map((offering, i) => (
                    <div key={i} className="flex items-start text-sm text-neutral-600 leading-relaxed">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{
                        background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                      }} />
                      <span>{offering}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-card/50 border border-border rounded-lg p-6 lg:p-8">
          <h2 className="h3 mb-4 text-center lg:text-left">Engagement Model</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed text-center lg:text-left">
            We offer flexible engagement models to meet your organization's needs:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Project-Based</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Fixed-scope engagements with defined deliverables and timelines.
                Ideal for specific security initiatives.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Retainer</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ongoing security support with allocated hours per month. Perfect
                for continuous improvement.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Embedded</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Full-time integration with your team for long-term security
                transformation initiatives.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
