import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="py-24 md:py-32">
      <Container size="narrow">
        <div className="text-center">
          <p className="text-overline mb-2 text-neutral-500">KODEX STUDIO</p>
          <h1 className="text-display mb-4 text-neutral-950">
            Security Infrastructure for Modern Software
          </h1>
          <p className="text-lead mb-8 mx-auto" style={{ maxWidth: "700px" }}>
            We build and secure production systems for organizations that can't
            afford compromise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/showcase">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
