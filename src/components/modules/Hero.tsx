import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <Container size="narrow" className="relative z-10 pt-32 pb-20">
        <div className="text-center animate-fade-in">
          <p className="text-overline mb-6">KODEX STUDIO</p>
          <h1 className="text-display mb-6 text-neutral-950">
            Security Infrastructure for{" "}
            <span className="hero-gradient-text">Modern Software</span>
          </h1>
          <p className="text-lead mb-12 mx-auto max-w-2xl">
            We build and secure production systems for organizations that can't
            afford compromise. Enterprise-grade solutions powered by cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 border border-neutral-200 bg-black/30 text-neutral-950 text-sm font-medium rounded-md hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden hidden sm:inline-flex"
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
                Get Started
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="/showcase"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 border border-neutral-200 bg-black/30 text-neutral-950 text-sm font-medium rounded-md hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
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
                Explore Projects
                <ArrowRight className="h-4 w-4 sm:hidden group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </Container>

      {/* Scroll indicator - hidden on mobile */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-gradient-accent rounded-full" />
        </div>
      </div>
    </section>
  );
}
