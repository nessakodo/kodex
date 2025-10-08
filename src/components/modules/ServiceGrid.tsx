import { Container } from "@/components/layout/Container";

const services = [
  {
    title: "Security Architecture",
    description:
      "Threat modeling, defense-in-depth design, and zero-trust implementation for cloud-native systems.",
    deliverables: [
      "Threat modeling workshops",
      "Architecture review & remediation",
      "Security control implementation",
    ],
  },
  {
    title: "Cryptography & Identity",
    description:
      "Post-quantum encryption, key management systems, and enterprise IAM solutions.",
    deliverables: [
      "Encryption implementation",
      "Key management strategy",
      "IAM system design",
    ],
  },
  {
    title: "Infrastructure Security",
    description:
      "Kubernetes hardening, cloud security posture management, and infrastructure as code security.",
    deliverables: [
      "Cloud security audit",
      "K8s cluster hardening",
      "IaC security scanning",
    ],
  },
  {
    title: "Application Security",
    description:
      "Secure SDLC implementation, code review, and automated security testing pipelines.",
    deliverables: [
      "SAST/DAST integration",
      "Security code review",
      "DevSecOps pipeline",
    ],
  },
  {
    title: "Data Protection",
    description:
      "Database security, data classification, encryption at rest and in transit, DLP implementation.",
    deliverables: [
      "Database hardening",
      "Encryption strategy",
      "Data loss prevention",
    ],
  },
  {
    title: "Compliance & Governance",
    description:
      "SOC 2, ISO 27001, HIPAA, and PCI-DSS compliance auditing and implementation support.",
    deliverables: [
      "Compliance gap analysis",
      "Policy documentation",
      "Audit readiness",
    ],
  },
];

export function ServiceGrid() {
  return (
    <section id="services" className="py-24 md:py-32 bg-black/30 relative">
      <Container>
        <header className="text-center mb-16 animate-fade-in">
          <h2 className="h2 mb-4">
            <span className="gradient-accent-text">SPECIALTIES</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Enterprise security capabilities built on deep technical expertise and proven production experience.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative bg-black/30 border border-neutral-200 rounded-lg p-6 transition-all duration-300 hover:border-transparent hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Gradient background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 via-transparent to-deep-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Animated border gradient on hover */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                background: 'linear-gradient(135deg, rgba(182, 218, 255, 0.4) 0%, rgba(167, 232, 237, 0.4) 33%, rgba(135, 194, 255, 0.4) 66%, rgba(194, 232, 255, 0.3) 100%)',
                padding: '1px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude'
              }} />

              <div className="relative">
                <div className="border-l-2 pl-4 mb-4" style={{
                  borderImage: 'linear-gradient(180deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%) 1'
                }}>
                  <h3 className="text-lg font-bold text-neutral-950 mb-2 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm text-neutral-600 mb-5 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-neutral-500 flex items-start gap-2"
                    >
                      <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{
                        background: 'linear-gradient(135deg, rgba(182, 218, 255, 1) 0%, rgba(167, 232, 237, 1) 100%)'
                      }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
