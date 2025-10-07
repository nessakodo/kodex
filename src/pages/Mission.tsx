import { Container } from "@/components/layout/Container";

const Mission = () => {
  return (
    <div className="py-24">
      <Container size="narrow">
        <header className="mb-12 text-center animate-fade-in">
          <p className="text-overline mb-4">MISSION</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Building Security at <span className="gradient-text">Scale</span>
          </h1>
          <p className="text-lead max-w-2xl mx-auto">
            KODEX STUDIO exists to help organizations build and operate secure
            systems that protect what matters most.
          </p>
        </header>

        <div className="prose prose-neutral max-w-none">
          <h2 className="h2 mb-4 mt-12">What We Believe</h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            Security is not a feature—it's a foundation. In an era where digital
            infrastructure underpins critical operations, organizations cannot
            afford reactive approaches to security. We believe in defense-in-depth,
            zero-trust architectures, and continuous validation.
          </p>

          <h2 className="h2 mb-4 mt-12">How We Work</h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            We partner with organizations to design, implement, and operate
            security infrastructure that scales. Our approach combines threat
            modeling, secure architecture design, and hands-on implementation—no
            theoretical frameworks without practical execution.
          </p>

          <h2 className="h2 mb-4 mt-12">Who We Serve</h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            Our clients range from healthcare systems protecting patient data to
            financial infrastructure handling billions in daily transactions. What
            they share: a recognition that security cannot be an afterthought, and
            a commitment to doing things correctly.
          </p>

          <div className="bg-card/50 border border-border rounded-lg p-8 mt-12">
            <h3 className="h3 mb-4">Our Standards</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 mr-4 flex-shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground font-medium">Evidence-based security:</strong> Every
                  recommendation backed by threat modeling and risk analysis.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 mr-4 flex-shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground font-medium">Production-ready implementation:</strong> Code
                  that ships, not proof-of-concepts that stall.
                </span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 mr-4 flex-shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground font-medium">Transparent communication:</strong> Clear
                  documentation, measurable outcomes, no security theater.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Mission;
