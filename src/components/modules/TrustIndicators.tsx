import { Container } from "@/components/layout/Container";

const metrics = [
  { value: "127", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Combined Experience" },
  { value: "24/7", label: "Security Monitoring" },
];

export function TrustIndicators() {
  return (
    <section className="py-12 bg-neutral-50">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <span className="block text-4xl font-bold text-neutral-950 mb-2">
                {metric.value}
              </span>
              <span className="text-sm text-neutral-600">{metric.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
