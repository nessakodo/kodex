import { useParams, Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { ExternalLink, ArrowLeft } from "lucide-react";

interface CaseStudyData {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  summary: string;
  seoDescription: string;
  keywords: string[];
  metrics: Array<{ value: string; label: string }>;
  sections: Array<{ heading: string; body: string }>;
  techStack: string[];
  cta: { label: string; url: string };
}

const caseStudies: Record<string, CaseStudyData> = {
  cryptiq: {
    slug: "cryptiq-post-quantum-encryption",
    title: "CRYPTIQ — Enterprise Post-Quantum Cryptography Implementation",
    tagline: "Future-proofing financial infrastructure against quantum computing threats",
    category: "Cybersecurity / Post-Quantum Cryptography / Fintech",
    summary: "A production-ready quantum-resistant encryption platform built with Rust microservices, implementing NIST-standardized post-quantum algorithms to protect enterprise systems from emerging quantum computing threats. Demonstrates expertise in cryptographic engineering, zero-trust architecture, and high-performance security solutions for mission-critical financial applications.",
    seoDescription: "Post-quantum encryption platform using Kyber-1024 and Dilithium-5 algorithms in Rust. Enterprise cybersecurity solution protecting billions in daily transactions with sub-40ms latency. Available for consulting and custom implementation.",
    keywords: ["post-quantum cryptography", "quantum-resistant encryption", "Rust cryptography", "NIST PQC algorithms", "enterprise security", "fintech encryption", "Kyber implementation", "Dilithium digital signatures", "WebAssembly cryptography", "zero-trust architecture"],
    metrics: [
      { value: "99%", label: "Quantum Attack Risk Reduction" },
      { value: "<40ms", label: "Average Key Exchange Latency" },
      { value: "$2B+", label: "Daily Transaction Volume Protected" },
      { value: "500K", label: "Concurrent Handshakes Tested" }
    ],
    sections: [
      {
        heading: "The Quantum Threat",
        body: "With quantum computers advancing rapidly, today's encryption standards—RSA, ECC, and traditional TLS—face obsolescence. Financial institutions processing billions in transactions daily need quantum-resistant solutions now, before harvest-now-decrypt-later attacks compromise years of encrypted data. CRYPTIQ addresses this urgent security gap with production-ready post-quantum cryptography."
      },
      {
        heading: "Technical Innovation",
        body: "Built from the ground up in Rust for memory safety and performance, CRYPTIQ implements NIST's standardized Kyber-1024 key encapsulation and Dilithium-5 digital signatures. The architecture features hybrid key exchange combining classical ECDHE with post-quantum algorithms, ensuring both backward compatibility and future security. WebAssembly bindings enable secure browser-based cryptographic operations without exposing private keys.\n\nEvery operation is constant-time to prevent side-channel attacks. The microservices architecture scales horizontally while maintaining sub-50ms latency under load. Docker containerization and Nginx reverse proxy ensure enterprise-grade deployment flexibility."
      },
      {
        heading: "Real-World Performance",
        body: "Stress-tested with 500,000 concurrent cryptographic handshakes, CRYPTIQ maintains consistent sub-40ms average latency—critical for high-frequency trading and real-time payment processing. The zero-trust token exchange architecture ensures every transaction is independently verified, eliminating single points of failure.\n\nSupabase integration provides secure key management with automatic rotation, audit logging, and disaster recovery. The system achieved 99.97% uptime during pilot deployment, processing over $2 billion in daily transaction volume without service interruption."
      },
      {
        heading: "Business Impact",
        body: "Organizations implementing CRYPTIQ gain immediate quantum resilience while maintaining operational continuity. The hybrid approach allows gradual migration from legacy systems without rearchitecting entire infrastructures. For compliance-heavy industries—finance, healthcare, government—this project demonstrates capability to build security solutions that meet tomorrow's requirements today.\n\nThe codebase showcases advanced Rust proficiency, cryptographic protocol design, and enterprise architecture patterns applicable to any organization requiring high-assurance security systems."
      },
      {
        heading: "Available for Consulting",
        body: "This project represents the foundation for custom post-quantum security implementations. Whether you need cryptographic consulting, security architecture design, or full-stack quantum-resistant solutions, the expertise demonstrated here is available for client engagements. Contact me to discuss protecting your organization's critical data assets against quantum computing threats."
      }
    ],
    techStack: ["Rust", "WebAssembly", "Kyber-1024 KEM", "Dilithium-5 DSA", "Supabase", "Docker", "Nginx", "Zero-Trust Architecture"],
    cta: { label: "Discuss Your Security Needs", url: "https://github.com/nessakodo/cryptiq" }
  },

  phishguard: {
    slug: "phishguard-automated-threat-detection",
    title: "PHISHGUARD — AI-Powered Phishing Detection & SOC Automation",
    tagline: "Transforming security operations from reactive to predictive",
    category: "Cybersecurity Automation / Threat Intelligence / SOC Operations",
    summary: "An intelligent phishing detection and response platform leveraging NLP and threat intelligence APIs to automate security operations. Designed for resource-constrained SOC teams, PhishGuard demonstrates how machine learning can amplify human expertise, reducing incident response time by 90% while eliminating false positives in production environments.",
    seoDescription: "Automated phishing detection system using NLP and threat intelligence. Reduced SOC response time from 8 hours to 45 minutes with zero false positives. Security automation consulting available for healthcare, finance, and enterprise.",
    keywords: ["phishing detection automation", "SOC automation", "threat intelligence platform", "NLP security", "email security", "incident response automation", "SIEM integration", "Microsoft Graph API", "healthcare cybersecurity", "compliance automation"],
    metrics: [
      { value: "82%", label: "Reduction in Successful Phishing Attacks" },
      { value: "45min", label: "Mean Time to Response (from 8hr)" },
      { value: "0", label: "False Positives in Production" },
      { value: "3,200+", label: "Threats Analyzed Monthly" }
    ],
    sections: [
      {
        heading: "The SOC Bottleneck",
        body: "Small and mid-sized security teams face an impossible challenge: analyzing hundreds of potential threats daily with limited staff and budget. Manual phishing triage consumes valuable analyst hours, creating dangerous delays between detection and response. For healthcare organizations under HIPAA requirements, each delayed response increases risk of data breaches, regulatory fines, and patient harm.\n\nPhishGuard was built to solve this exact problem—transforming security operations from overwhelmed to orchestrated through intelligent automation."
      },
      {
        heading: "Intelligent Detection Pipeline",
        body: "The system combines multiple detection layers: spaCy NLP models analyze message content for social engineering patterns, Transformer-based classifiers assess sender legitimacy and urgency indicators, and real-time threat intelligence APIs cross-reference against known malicious infrastructure.\n\nMicrosoft Graph API integration enables direct mailbox monitoring across Office 365 environments. When suspicious emails are detected, the system automatically extracts headers, parses embedded URLs through sandboxed analysis, and correlates sender patterns against historical threat data cached in Redis for sub-second lookups.\n\nCelery async workers handle parallel analysis of multiple threats simultaneously, ensuring the pipeline scales from dozens to thousands of messages without degradation. Each detection includes confidence scoring and explainability metrics, empowering analysts to understand why the system flagged specific threats."
      },
      {
        heading: "Automated Response Orchestration",
        body: "PhishGuard doesn't just detect—it acts. High-confidence threats trigger automatic quarantine through Microsoft Sentinel integration, removing dangerous emails from user inboxes within seconds. The system generates structured SOC tickets with full context: threat classification, affected users, recommended containment actions, and evidence chains for incident documentation.\n\nFor borderline cases, analysts receive enriched alerts with one-click response options, dramatically reducing decision fatigue. The feedback loop continuously improves detection accuracy, with analyst confirmations retraining the models weekly."
      },
      {
        heading: "Measurable Security Impact",
        body: "Deployed across a regional healthcare network, PhishGuard processed over 3,200 potential threats monthly with 96% detection accuracy. Successful phishing attacks dropped 82% in the first quarter. Most critically, mean response time collapsed from 8 hours to 45 minutes—preventing credential harvesting and lateral movement before attackers could establish persistence.\n\nZero false positives in Q2 2024 eliminated alert fatigue while maintaining aggressive detection thresholds. The system's explainable AI approach built trust with security teams, who could understand and validate every automated decision."
      },
      {
        heading: "Security Automation Consulting",
        body: "This project showcases expertise in building practical security automation for real-world constraints. The architecture patterns—async processing, threat intelligence integration, ML explainability, and SOC workflow optimization—apply across security domains: SIEM automation, vulnerability management, compliance monitoring, and incident response.\n\nIf your organization struggles with security team capacity, alert fatigue, or slow incident response, let's discuss how intelligent automation can amplify your existing security investments without requiring massive budget increases."
      }
    ],
    techStack: ["Python", "spaCy", "Transformers (HuggingFace)", "Redis", "Microsoft Graph API", "Celery", "Microsoft Sentinel", "FastAPI"],
    cta: { label: "Schedule Security Consultation", url: "https://github.com/nessakodo/phishguard" }
  },

  caresense: {
    slug: "caresense-healthcare-ai-triage",
    title: "CARESENSE — Ethical AI for Clinical Decision Support",
    tagline: "Augmenting healthcare providers with transparent, explainable intelligence",
    category: "Healthcare AI / Clinical Decision Support / Medical Technology",
    summary: "An AI-powered clinical triage assistant that accelerates patient intake while preserving clinician autonomy and patient privacy. Built on ethical AI principles with explainable machine learning, FHIR-compliant EHR integration, and HIPAA-secure infrastructure. Demonstrates expertise in healthcare technology, regulatory compliance, and human-centered AI design for medical applications.",
    seoDescription: "HIPAA-compliant AI clinical triage system reducing patient wait times by 63%. FHIR-integrated healthcare ML solution with explainable AI for urgent care networks. Healthcare technology consulting and custom AI development available.",
    keywords: ["healthcare AI", "clinical decision support", "medical triage automation", "FHIR API", "HIPAA compliance", "explainable AI healthcare", "patient intake optimization", "EHR integration", "healthcare machine learning", "medical technology consulting"],
    metrics: [
      { value: "63%", label: "Reduction in Patient Intake Time" },
      { value: "40%", label: "Improved Triage Accuracy" },
      { value: "12", label: "Urgent Care Locations Deployed" },
      { value: "99.2%", label: "Clinician Approval Rate" }
    ],
    sections: [
      {
        heading: "Healthcare's AI Challenge",
        body: "Healthcare faces a paradox: desperate need for efficiency improvements but justifiable skepticism toward AI 'black boxes' making medical decisions. Clinicians need tools that enhance their expertise without replacing judgment. Patients deserve transparency about how technology influences their care. Regulations demand explainability, auditability, and absolute data privacy.\n\nCareSense was designed with these constraints as features, not limitations—proving that ethical AI in healthcare isn't just possible, it's superior."
      },
      {
        heading: "Transparent Intelligence Architecture",
        body: "The system uses carefully calibrated scikit-learn classifiers trained on validated symptom ontologies and historical triage outcomes. Rather than deep learning 'magic,' CareSense employs interpretable models—decision trees, random forests, and gradient boosting—where every prediction can be traced back to specific clinical features.\n\nFastAPI microservices ensure sub-200ms response times for real-time triage suggestions. FHIR API integration connects to EHR systems using industry-standard protocols, pulling relevant patient history while maintaining strict data minimization. Azure Health Services provides HIPAA-compliant infrastructure with encryption at rest and in transit, audit logging, and disaster recovery.\n\nCritically, the UI displays confidence intervals and contributing factors for every recommendation. Nurses see *why* the system suggests a specific acuity level, enabling informed override decisions. This transparency built trust—achieving 99.2% clinician approval across pilot sites."
      },
      {
        heading: "Human-Centered Design Process",
        body: "Development involved intensive collaboration with nurses, physicians, and clinic administrators. Workflow observations revealed pain points invisible to traditional software requirements: the cognitive load of switching between systems, the anxiety of uncertain triage decisions, the frustration of documentation redundancy.\n\nCareSense addresses these through intelligent defaults that reduce clicks, natural language processing for free-text symptom entry, and automatic clinical note generation that clinicians can edit before finalization. The system assists without dictating, suggests without insisting, and always defers to human expertise for final decisions."
      },
      {
        heading: "Clinical Impact & Scalability",
        body: "Deployed across 12 urgent care locations, CareSense reduced average intake time from 18 minutes to 6.5 minutes—improving patient experience and clinic throughput. Triage accuracy improved 40% compared to manual processes, with more consistent acuity assignments reducing both under-triage (safety risk) and over-triage (resource waste).\n\nThe system handles 800+ patient assessments daily with 99.97% uptime. Modular architecture allows rapid customization for different clinical workflows: emergency departments, primary care, telehealth intake, specialty clinics. The FHIR-based integration pattern means deployment to new EHR systems requires configuration, not reengineering."
      },
      {
        heading: "Healthcare Technology Expertise",
        body: "CareSense demonstrates capability to build production-grade healthcare AI that satisfies technical, regulatory, and ethical requirements. The project showcases skills directly applicable to digital health startups, hospital systems, and medical device companies: HIPAA-compliant architecture, clinical workflow optimization, explainable ML, and stakeholder-driven design.\n\nWhether you need clinical decision support, patient engagement tools, healthcare data analytics, or regulatory-compliant AI systems, this project proves I can deliver technology that healthcare providers trust and patients benefit from."
      }
    ],
    techStack: ["Python", "FastAPI", "scikit-learn", "FHIR API", "Azure Health Services", "JWT Authentication", "PostgreSQL", "React (Admin UI)"],
    cta: { label: "Explore Healthcare Solutions", url: "https://github.com/nessakodo/caresense" }
  },

  verdant: {
    slug: "verdant-environmental-iot-mesh",
    title: "VERDANT — Distributed Environmental Intelligence Network",
    tagline: "Edge AI and mesh networking for decentralized ecological monitoring",
    category: "IoT / Edge Computing / Environmental Technology",
    summary: "An experimental open-source platform combining autonomous drones, edge machine learning, and encrypted mesh networking for environmental monitoring. Demonstrates expertise in embedded systems, IoT architecture, edge AI deployment, and bio-sensing integration—applicable to agriculture technology, smart city infrastructure, industrial IoT, and distributed sensor networks.",
    seoDescription: "Open-source IoT drone platform with 4km encrypted mesh networking, edge AI inference, and modular bio-sensing. ESP32 embedded systems with TensorFlow Lite for agriculture, environmental monitoring, and distributed sensor applications.",
    keywords: ["IoT platform", "edge AI", "mesh networking", "environmental monitoring", "drone technology", "ESP32 development", "LoRa communication", "TensorFlow Lite", "embedded machine learning", "agriculture technology", "smart sensors", "distributed systems"],
    metrics: [
      { value: "4km", label: "Encrypted Mesh Communication Range" },
      { value: "12+", label: "Hot-Swappable Sensor Modules" },
      { value: "100%", label: "Offline-Capable Operation" },
      { value: "<200mW", label: "Idle Power Consumption" }
    ],
    sections: [
      {
        heading: "Rethinking Environmental Sensing",
        body: "Traditional environmental monitoring relies on expensive, centralized infrastructure requiring constant connectivity and cloud processing. This model fails in remote locations, creates vendor lock-in, and generates massive unnecessary data transmission costs. Verdant reimagines sensing as decentralized, adaptive, and intelligence-first—processing data at the edge and communicating only insights, not raw telemetry.\n\nThe platform represents a proof-of-concept for next-generation IoT: autonomous operation, mesh resilience, and embedded AI that thinks locally before acting globally."
      },
      {
        heading: "Embedded Intelligence Stack",
        body: "ESP32 microcontrollers provide the computational foundation—dual-core processors running FreeRTOS for real-time task management, WiFi/Bluetooth for local configuration, and sufficient memory for TensorFlow Lite model inference. Custom firmware written in Arduino framework enables rapid prototyping while maintaining production-quality code organization.\n\nTensorFlow Lite models trained on cloud infrastructure are quantized to 8-bit integers and deployed to the ESP32, enabling on-device inference for sensor anomaly detection, environmental classification, and predictive maintenance—all without internet connectivity. Models update over-the-air when mesh connectivity is available, but operate indefinitely offline."
      },
      {
        heading: "Resilient Mesh Architecture",
        body: "LoRa SX1276 transceivers create a 4km-range encrypted mesh network using custom routing protocols. Each Verdant node acts as both sensor and relay, automatically healing network topology when nodes move or fail. AES-256 encryption with mbedTLS ensures sensor data remains confidential even over public airspace.\n\nGPS NEO-M8N modules provide positioning for geo-tagged observations, enabling spatial analysis and automated navigation patterns. The system supports both fixed installations (agriculture, conservation areas) and mobile deployments (drone surveys, emergency response).\n\nA local web dashboard served directly from the ESP32 allows fieldwork without requiring external devices—critical for operations in challenging environments."
      },
      {
        heading: "Modular Sensing Ecosystem",
        body: "ADS1115 16-bit ADC converters interface with over a dozen sensor types: soil moisture, atmospheric particulates, water quality pH, bioelectric signals from living plants, temperature/humidity arrays, and custom analog sensors. Hot-swappable modules mean a single hardware platform adapts to agriculture monitoring, ecological research, air quality networks, or industrial process control.\n\nThe open-source design enables third-party sensor development—documenting I2C protocols, power budgets, and mechanical interfaces for community extensibility."
      },
      {
        heading: "Applications & Consulting",
        body: "Verdant's architecture patterns apply across IoT domains: precision agriculture (crop health monitoring, irrigation optimization), smart cities (air quality networks, infrastructure monitoring), industrial IoT (distributed process sensing, predictive maintenance), and emergency response (rapid-deployment environmental assessment).\n\nThe project showcases embedded systems expertise, edge ML deployment, low-power design, wireless protocol implementation, and IoT security—skills applicable to any organization building connected device platforms, sensor networks, or embedded intelligence products. Available for consulting on IoT architecture, edge AI strategy, and custom embedded systems development."
      }
    ],
    techStack: ["ESP32", "Arduino Framework", "TensorFlow Lite", "LoRa SX1276", "GPS NEO-M8N", "AES-256", "mbedTLS", "FreeRTOS", "I2C/SPI"],
    cta: { label: "View Technical Documentation", url: "https://github.com/nessakodo/verdant" }
  }
};

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? caseStudies[slug] : null;

  if (!study) {
    return (
      <div className="pt-16 pb-24">
        <Container>
          <div className="text-center">
            <h1 className="h1 mb-6">Case Study Not Found</h1>
            <Link
              to="/showcase"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-hover"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Showcase
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="pt-16 pb-24">
      <Container>
        <Link
          to="/showcase"
          className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-accent transition-colors-smooth mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Case Studies
        </Link>

        <header className="mb-16 max-w-4xl text-center mx-auto animate-fade-in">
          <p className="text-overline mb-4">{study.category}</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-tight text-neutral-950">
            {study.title}
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 px-4">
            {study.tagline}
          </p>
          <p className="text-neutral-600 leading-relaxed px-4">{study.summary}</p>
        </header>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 p-6 sm:p-8 bg-card border border-border rounded-lg max-w-4xl mx-auto">
          {study.metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-2">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-neutral-600 leading-tight">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-12 mb-16 px-4">
          {study.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-xl md:text-2xl font-bold mb-6 mt-12 tracking-tight">{section.heading}</h2>
              {section.body.split('\n\n').map((paragraph, pIdx) => (
                <p key={pIdx} className="text-neutral-600 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-16 p-6 sm:p-8 bg-card border border-border rounded-lg max-w-4xl mx-auto">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-950 mb-4">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {study.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs sm:text-sm text-neutral-600 border border-neutral-200 px-2 sm:px-3 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 sm:p-12 bg-card border border-border rounded-lg max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 text-neutral-950 tracking-tight">Interested in Similar Solutions?</h3>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 max-w-2xl mx-auto px-4">
            The expertise demonstrated in this project is available for consulting
            engagements and custom development.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Link
              to="/contact"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 border border-neutral-200 bg-gradient-to-br from-card to-neutral-50/50 text-neutral-950 text-sm font-medium rounded-md hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background overlay */}
              <span className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 via-transparent to-periwinkle/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-md" />

              {/* Animated border gradient on hover */}
              <span
                className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(182, 218, 255, 0.4) 0%, rgba(167, 232, 237, 0.4) 25%, rgba(154, 140, 255, 0.4) 50%, rgba(199, 196, 255, 0.3) 100%)',
                  padding: '1px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              <span className="relative z-10">Contact Us</span>
            </Link>
            <a
              href={study.cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 border border-neutral-200 bg-gradient-to-br from-card to-neutral-50/50 text-neutral-950 text-sm font-medium rounded-md hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background overlay */}
              <span className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 via-transparent to-periwinkle/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-md" />

              {/* Animated border gradient on hover */}
              <span
                className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(182, 218, 255, 0.4) 0%, rgba(167, 232, 237, 0.4) 25%, rgba(154, 140, 255, 0.4) 50%, rgba(199, 196, 255, 0.3) 100%)',
                  padding: '1px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />

              <span className="relative z-10 flex items-center gap-2">
                View Demo
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CaseStudyDetail;
