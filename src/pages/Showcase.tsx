import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";

const caseStudies = [
  {
    slug: "cryptiq",
    category: "Cryptography",
    title: "CRYPTIQ — Post-Quantum Encryption Suite",
    client: "Financial Infrastructure Provider",
    metrics: [
      { value: "99%", label: "Risk Reduction" },
      { value: "<40ms", label: "Key Exchange Latency" },
      { value: "$2B+", label: "Daily Transaction Volume" },
    ],
    summary:
      "Implemented NIST-approved post-quantum algorithms (Kyber-1024, Dilithium-5) in Rust microservices for financial infrastructure handling billions in daily transactions.",
    techStack: ["Rust", "WebAssembly", "Kyber", "Dilithium", "Supabase"],
    problem:
      "Legacy encryption vulnerable to quantum computing advances, requiring migration to post-quantum cryptography without service interruption.",
  },
  {
    slug: "phishguard",
    category: "Threat Detection",
    title: "PHISHGUARD — AI-Powered Phishing Detection",
    client: "Regional Healthcare System",
    metrics: [
      { value: "82%", label: "Attack Reduction" },
      { value: "45min", label: "Mean Response Time" },
      { value: "0", label: "False Positives (Q2 2024)" },
    ],
    summary:
      "NLP-based email analysis pipeline with automated threat classification and response workflows for healthcare security operations.",
    techStack: ["Python", "spaCy", "Transformers", "Microsoft Graph API", "Redis"],
    problem:
      "200+ phishing attempts monthly overwhelming security team with 12-hour average response times.",
  },
  {
    slug: "caresense",
    category: "Healthcare",
    title: "CARESENSE — Ethical AI Healthcare Triage",
    client: "Multi-site Urgent Care Network",
    metrics: [
      { value: "63%", label: "Faster Patient Intake" },
      { value: "40%", label: "Routing Accuracy Improvement" },
      { value: "12", label: "Deployed Locations" },
    ],
    summary:
      "HIPAA-compliant AI triage assistant with EHR integration and clinical decision support for urgent care patient routing.",
    techStack: ["Python", "FastAPI", "scikit-learn", "FHIR API", "Azure Health"],
    problem:
      "4-hour average patient wait times with inconsistent triage quality across multiple care sites.",
  },
  {
    slug: "verdant",
    category: "Environmental AI / IoT",
    title: "VERDANT — Living Sensor Drone Platform",
    client: "Personal R&D Project",
    metrics: [
      { value: "4km", label: "LoRa Mesh Range" },
      { value: "12+", label: "Sensor Modules" },
      { value: "100%", label: "Edge Encryption Coverage" },
    ],
    summary:
      "Modular drone system blending bioelectric sensing, LoRa mesh networking, and edge AI for environmental awareness and data sovereignty.",
    techStack: ["ESP32", "LoRa SX1276", "TensorFlow Lite", "Arduino", "Python"],
    problem:
      "Environmental monitoring systems are often centralized, expensive, and insecure. VERDANT provides a decentralized, encrypted, and bio-integrated alternative.",
  },
];

const Showcase = () => {
  return (
    <div className="pt-16 pb-24">
      <Container>
        <header className="mb-16 max-w-2xl text-center mx-auto animate-fade-in">
          <p className="text-overline mb-4">SHOWCASE</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Case <span className="gradient-text">Studies</span>
          </h1>
          <p className="text-lead">
            Production systems built for organizations that demand excellence in
            security and reliability.
          </p>
        </header>

        <div className="space-y-6 lg:space-y-8">
          {caseStudies.map((study) => (
            <article
              key={study.slug}
              className="relative border border-neutral-200 rounded-xl p-6 lg:p-12 bg-gradient-to-br from-card to-neutral-50/50 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              {/* Gradient background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative grid lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2">
                  <header className="mb-6">
                    <span className="inline-block text-xs font-medium uppercase tracking-wider text-accent bg-accent-subtle px-3 py-1 rounded mb-4">
                      {study.category}
                    </span>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 leading-tight tracking-tight">{study.title}</h2>
                    <p className="text-sm text-neutral-600">{study.client}</p>
                  </header>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-neutral-950 mb-2">
                      Challenge
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {study.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-neutral-600 border border-neutral-200 px-3 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/showcase/${study.slug}`}
                    className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover transition-colors-smooth"
                  >
                    Read Full Case Study →
                  </Link>
                </div>

                <div className="lg:border-l lg:border-neutral-200 lg:pl-8">
                  <h3 className="text-sm font-semibold text-neutral-950 mb-6">
                    Key Results
                  </h3>
                  <div className="space-y-6">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx}>
                        <span className="block text-3xl font-bold text-neutral-950 mb-1">
                          {metric.value}
                        </span>
                        <span className="text-sm text-neutral-600">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Showcase;
