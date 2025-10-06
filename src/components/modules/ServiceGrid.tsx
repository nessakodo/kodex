import { ShieldCheck, Lock, Activity } from "lucide-react";
import { Container } from "@/components/layout/Container";

const services = [
  {
    icon: ShieldCheck,
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
    title: "Application Security",
    description:
      "Code review, penetration testing, and secure development lifecycle integration.",
    deliverables: [
      "Security code review",
      "Penetration testing",
      "SAST/DAST integration",
    ],
  },
  {
    icon: Activity,
    title: "Security Operations",
    description:
      "Incident response, security monitoring, and continuous compliance management.",
    deliverables: [
      "SOC implementation",
      "Incident response planning",
      "Compliance automation",
    ],
  },
];

export function ServiceGrid() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <header className="mb-16 max-w-2xl">
          <h2 className="h2 mb-4">Capabilities</h2>
          <p className="text-lead">
            Three core competencies built on two decades of combined experience.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <article
              key={idx}
              className="border border-neutral-200 rounded-lg p-6 bg-white hover:border-neutral-300 hover:shadow-sm transition-smooth"
            >
              <div className="w-12 h-12 rounded-full bg-accent-subtle flex items-center justify-center mb-4">
                <service.icon
                  className="h-6 w-6 text-accent"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="h3 mb-3">{service.title}</h3>
              <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-neutral-600">
                    <span className="inline-block w-1 h-1 rounded-full bg-neutral-400 mt-2 mr-3 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
