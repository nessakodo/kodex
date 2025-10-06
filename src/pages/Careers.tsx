import { Container } from "@/components/layout/Container";
import { Helmet } from "react-helmet";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const positions = [
  {
    title: "Senior Security Engineer",
    type: "Full-time",
    location: "Remote (US)",
    description: "Lead security architecture and implementation for enterprise clients.",
  },
  {
    title: "Cryptography Specialist",
    type: "Contract",
    location: "Remote",
    description: "Design and implement post-quantum cryptographic solutions.",
  },
  {
    title: "Cloud Security Architect",
    type: "Full-time",
    location: "Hybrid (Littleton, CO)",
    description: "Design secure cloud infrastructure for regulated industries.",
  },
];

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers - KODEX STUDIO</title>
        <meta name="description" content="Join KODEX STUDIO and work on cutting-edge security infrastructure projects." />
      </Helmet>

      <div className="pt-32 pb-20">
        <Container size="narrow">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-overline mb-4">CAREERS</p>
            <h1 className="text-display mb-6">
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto">
              We're building the future of security infrastructure. Work with cutting-edge technology 
              on projects that matter.
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Innovation First",
                description: "Work with the latest security technologies and methodologies.",
              },
              {
                title: "Impact Driven",
                description: "Your work protects critical systems for organizations worldwide.",
              },
              {
                title: "Growth Focused",
                description: "Continuous learning with training budget and conference attendance.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="h3 mb-3 gradient-accent-text">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="h2 text-center mb-12">
              <span className="gradient-accent-text">OPEN POSITIONS</span>
            </h2>
            
            <div className="space-y-4">
              {positions.map((position) => (
                <div
                  key={position.title}
                  className="bg-card border border-neutral-200 rounded-xl p-6 hover:border-cyan-400/50 hover:shadow-lg transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-950 mb-2 group-hover:gradient-accent-text transition-all">
                        {position.title}
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3">
                        {position.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </span>
                        <span className="px-3 py-1 bg-neutral-100 rounded-full">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center bg-gradient-subtle border border-neutral-200 rounded-xl p-12">
            <Mail className="h-12 w-12 mx-auto mb-4 text-cyan-400" />
            <h3 className="h3 mb-4">Don't See a Fit?</h3>
            <p className="text-neutral-600 mb-6 max-w-xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and 
              let us know how you can contribute.
            </p>
            <Button asChild>
              <a href="mailto:careers@kodexstudio.com">
                Contact Us
              </a>
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Careers;
