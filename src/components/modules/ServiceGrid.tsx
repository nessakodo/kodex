import { Container } from "@/components/layout/Container";
import { Shield, Lock, Server, Code, Database, Cloud } from "lucide-react";

const services = [
  {
    icon: Shield,
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
    icon: Lock,
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
    icon: Server,
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
    icon: Code,
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
    icon: Database,
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
    icon: Cloud,
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
    <section id="services" className="py-24 md:py-32 bg-gradient-subtle relative">
      <Container>
        <header className="text-center mb-16 animate-fade-in">
          <h2 className="h2 mb-4">
            <span className="gradient-accent-text">CAPABILITIES</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Three core competencies built on two decades of combined experience in cybersecurity and software engineering.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative bg-card border border-neutral-200 rounded-xl p-8 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />
              
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-lg bg-gradient-accent">
                  <service.icon className="h-7 w-7 text-neutral-950" strokeWidth={1.5} />
                </div>
                
                <h3 className="h3 mb-3 text-neutral-950 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-neutral-500 flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
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
