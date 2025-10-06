import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    slug: "cryptiq",
    category: "Cryptography",
    title: "Post-Quantum Encryption Suite",
    metrics: [
      { value: "99%", label: "Risk Reduction" },
      { value: "<40ms", label: "Latency" },
    ],
    summary:
      "Implemented NIST-approved post-quantum algorithms for financial infrastructure handling $2B+ daily transactions.",
    techStack: ["Rust", "WebAssembly", "Kyber", "Dilithium"],
  },
  {
    slug: "phishguard",
    category: "Threat Detection",
    title: "Automated Threat Detection",
    metrics: [
      { value: "82%", label: "Attack Reduction" },
      { value: "45min", label: "Response Time" },
    ],
    summary:
      "NLP-based email analysis pipeline with automated threat classification for regional healthcare system.",
    techStack: ["Python", "spaCy", "Transformers", "Redis"],
  },
];

export function CaseStudyPreview() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <header className="mb-16 max-w-2xl">
          <h2 className="h2 mb-4">Featured Work</h2>
          <p className="text-lead">
            Production systems built for organizations that demand excellence.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {caseStudies.map((study) => (
            <article
              key={study.slug}
              className="border border-neutral-200 rounded-lg p-8 bg-white hover:border-neutral-300 hover:shadow-sm transition-smooth"
            >
              <header className="mb-6">
                <span className="inline-block text-xs font-medium uppercase tracking-wider text-accent bg-accent-subtle px-3 py-1 rounded mb-3">
                  {study.category}
                </span>
                <h3 className="h3">{study.title}</h3>
              </header>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {study.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <span className="block text-2xl font-bold text-neutral-950 mb-1">
                      {metric.value}
                    </span>
                    <span className="text-sm text-neutral-600">{metric.label}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                {study.summary}
              </p>

              <footer className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {study.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs text-neutral-600 border border-neutral-200 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/showcase/${study.slug}`}
                  className="text-sm font-medium text-accent hover:text-accent-hover transition-colors-smooth"
                >
                  View Case Study →
                </Link>
              </footer>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline">
            <Link to="/showcase">View All Case Studies</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
