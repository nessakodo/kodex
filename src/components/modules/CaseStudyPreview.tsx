import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import quantumImg from "@/assets/case-study-quantum.jpg";
import aiImg from "@/assets/case-study-ai.jpg";
import healthImg from "@/assets/case-study-health.jpg";

const caseStudies = [
  {
    slug: "cryptiq",
    category: "CRYPTOGRAPHY",
    title: "Post-Quantum Encryption Suite",
    image: quantumImg,
    metrics: [
      { value: "99%", label: "Risk Reduction" },
      { value: "<40ms", label: "Latency" },
    ],
    summary:
      "Implemented NIST-approved post-quantum algorithms for financial infrastructure handling $2B+ daily transactions.",
    tech: ["Rust", "WebAssembly", "Kyber", "Dilithium"],
  },
  {
    slug: "phishguard",
    category: "AI/ML SECURITY",
    title: "Automated Threat Detection",
    image: aiImg,
    metrics: [
      { value: "82%", label: "Attack Prevention" },
      { value: "45min", label: "Response Time" },
    ],
    summary:
      "NLP-based email analysis pipeline with automated threat classification for regional healthcare system.",
    tech: ["Python", "Transformers", "Redis", "Graph API"],
  },
  {
    slug: "caresense",
    category: "HEALTHCARE",
    title: "HIPAA-Compliant Triage System",
    image: healthImg,
    metrics: [
      { value: "63%", label: "Faster Intake" },
      { value: "12", label: "Locations" },
    ],
    summary:
      "AI triage assistant with EHR integration and clinical decision support across multi-site urgent care network.",
    tech: ["FastAPI", "FHIR", "Azure Health", "scikit-learn"],
  },
  {
    slug: "verdant",
    category: "ENVIRONMENTAL AI / IOT",
    title: "VERDANT — Living Sensor Platform",
    image: quantumImg,
    metrics: [
      { value: "4km", label: "Mesh Range" },
      { value: "12+", label: "Sensor Modules" },
    ],
    summary:
      "Modular drone system blending bioelectric sensing, LoRa mesh networking, and edge AI for environmental awareness.",
    tech: ["ESP32", "LoRa", "TensorFlow Lite", "Arduino"],
  },
];

export function CaseStudyPreview() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <Container>
        <header className="text-center mb-16 animate-fade-in">
          <h2 className="h2 mb-4">
            <span className="gradient-accent-text">SELECTED WORK</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Real-world deployments solving critical security challenges for enterprise clients.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Link
              key={study.slug}
              to={`/showcase/${study.slug}`}
              className="group relative bg-card border border-neutral-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-0 via-neutral-0/50 to-transparent" />
                <span className="absolute top-4 left-4 text-xs font-bold tracking-widest text-cyan-400 bg-neutral-0/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {study.category}
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-neutral-950 group-hover:gradient-accent-text transition-all">
                  {study.title}
                </h3>

                <div className="flex gap-8 mb-6">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-2xl font-bold gradient-text mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-neutral-500 uppercase tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
                  {study.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-neutral-600 border border-neutral-200 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-cyan-400 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link to="/showcase">
              View All Showcase
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
