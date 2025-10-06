import { Container } from "@/components/layout/Container";
import { ShieldCheck, Lock, Activity, Code, Cloud, Search } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
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
    icon: Lock,
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
    icon: Activity,
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
    icon: Code,
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
    icon: Cloud,
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
    icon: Search,
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
    <div className="py-24">
      <Container>
        <header className="mb-16 max-w-2xl">
          <p className="text-overline mb-2">SERVICES</p>
          <h1 className="h1 mb-6">Security Capabilities</h1>
          <p className="text-lead">
            Comprehensive security services designed for organizations that demand
            excellence in protecting their digital infrastructure.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <article
              key={idx}
              className="border border-neutral-200 rounded-lg p-8 bg-white hover:border-neutral-300 hover:shadow-sm transition-smooth"
            >
              <div className="w-12 h-12 rounded-full bg-accent-subtle flex items-center justify-center mb-6">
                <service.icon
                  className="h-6 w-6 text-accent"
                  strokeWidth={1.5}
                />
              </div>
              <h2 className="h3 mb-3">{service.title}</h2>
              <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.offerings.map((offering, i) => (
                  <li key={i} className="flex items-start text-sm text-neutral-600">
                    <span className="inline-block w-1 h-1 rounded-full bg-neutral-400 mt-2 mr-3 flex-shrink-0" />
                    <span className="leading-relaxed">{offering}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 bg-neutral-50 border border-neutral-200 rounded-lg p-8">
          <h2 className="h3 mb-4">Engagement Model</h2>
          <p className="text-neutral-600 mb-6 leading-relaxed">
            We offer flexible engagement models to meet your organization's needs:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-neutral-950 mb-2">Project-Based</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Fixed-scope engagements with defined deliverables and timelines.
                Ideal for specific security initiatives.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-950 mb-2">Retainer</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Ongoing security support with allocated hours per month. Perfect
                for continuous improvement.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-950 mb-2">Embedded</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
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
