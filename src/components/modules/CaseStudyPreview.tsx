import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import quantumImg from "@/assets/case-study-quantum.jpg";
import droneImg from "@/assets/case-study-drone.jpg";
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
    image: droneImg,
    metrics: [
      { value: "4km", label: "Mesh Range" },
      { value: "12+", label: "Sensor Modules" },
    ],
    summary:
      "Modular drone system blending bioelectric sensing, LoRa mesh networking, and edge AI for environmental awareness.",
    tech: ["ESP32", "LoRa", "TensorFlow Lite", "Arduino"],
  },
];

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (imageLoaded) {
      const timer = setTimeout(() => setShow(true), index * 150);
      return () => clearTimeout(timer);
    }
  }, [imageLoaded, index]);

  return (
    <Link
      to={`/showcase/${study.slug}`}
      className={`group relative bg-black/30 border border-neutral-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-transparent hover:shadow-2xl hover:-translate-y-1 ${
        show ? "animate-fade-in" : "opacity-0"
      }`}
    >
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 via-transparent to-deep-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

      {/* Animated border gradient on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" style={{
        background: 'linear-gradient(135deg, rgba(182, 218, 255, 0.4) 0%, rgba(167, 232, 237, 0.4) 33%, rgba(135, 194, 255, 0.4) 66%, rgba(194, 232, 255, 0.3) 100%)',
        padding: '1px',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude'
      }} />
      <div className="relative h-64 overflow-hidden bg-neutral-100 z-0">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 via-neutral-50 to-neutral-100 animate-[shimmer_1.5s_ease-in-out_infinite] bg-[length:200%_100%]" />
        )}
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onLoad={() => setImageLoaded(true)}
          loading="eager"
          decoding="async"
          style={{ visibility: imageLoaded ? "visible" : "hidden" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-0 via-neutral-0/50 to-transparent" />
        <span className="absolute top-4 left-4 text-xs font-bold tracking-widest text-cyan-400 bg-neutral-0/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
          {study.category}
        </span>
      </div>

      <div className="relative p-6 lg:p-8 z-20">
        <h3 className="text-xl lg:text-2xl font-bold mb-4 text-neutral-950 group-hover:text-accent transition-colors duration-300">
          {study.title}
        </h3>

        <div className="flex gap-6 lg:gap-8 mb-6">
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
  );
}

export function CaseStudyPreview() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <Container>
        <header className="text-center mb-16 animate-fade-in">
          <h2 className="h2 mb-4">
            <span className="gradient-accent-text">FEATURED PROJECTS</span>
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Real-world deployments solving critical security challenges for enterprise clients.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.slug} study={study} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/showcase"
            className="group relative inline-flex items-center justify-center gap-2 h-11 px-6 border border-neutral-200 bg-black/30 text-neutral-950 text-sm font-medium rounded-md hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Gradient background overlay */}
            <span className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 via-transparent to-deep-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-md" />

            {/* Animated border gradient on hover */}
            <span
              className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, rgba(182, 218, 255, 0.4) 0%, rgba(167, 232, 237, 0.4) 33%, rgba(135, 194, 255, 0.4) 66%, rgba(194, 232, 255, 0.3) 100%)',
                padding: '1px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
              }}
            />

            <span className="relative z-10 flex items-center gap-2">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
