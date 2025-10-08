import { Container } from "@/components/layout/Container";

const metrics = [
  { value: "127+", label: "Projects Delivered" },
  { value: "15K+", label: "Vulnerabilities Fixed" },
  { value: "99.8%", label: "Uptime Maintained" },
  { value: "$2B+", label: "Transactions Secured" },
];

export function TrustIndicators() {
  return (
    <section className="py-16 bg-transparent relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 gradient-text">
                {metric.value}
              </div>
              <div className="text-sm text-neutral-600 uppercase tracking-wider font-semibold">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
