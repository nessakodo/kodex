import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-0 via-neutral-0/95 to-neutral-0" />
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-40 parallax"
          style={{ transform: 'translateZ(0)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-0 via-transparent to-transparent" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1s' }} />

      <Container size="narrow" className="relative z-10 pt-32 pb-20">
        <div className="text-center animate-fade-in">
          <p className="text-overline mb-6">KODEX STUDIO</p>
          <h1 className="text-display mb-6 text-neutral-950">
            Security Infrastructure for{" "}
            <span className="gradient-text">Modern Software</span>
          </h1>
          <p className="text-lead mb-12 mx-auto max-w-2xl">
            We build and secure production systems for organizations that can't
            afford compromise. Enterprise-grade solutions powered by cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button asChild size="lg" className="group hidden sm:inline-flex">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/showcase">
                Explore Projects
                <ArrowRight className="ml-2 h-4 w-4 sm:hidden group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
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
