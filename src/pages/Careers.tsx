import { Container } from "@/components/layout/Container";
import { Helmet } from "react-helmet";
import { Mail, MapPin } from "lucide-react";

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

      <div className="pt-16 pb-24">
        <Container size="narrow">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <p className="text-overline mb-4">CAREERS</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-lead max-w-2xl mx-auto">
              We're building the future of security infrastructure. Work with cutting-edge technology
              on projects that matter.
            </p>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 md:mb-16">
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
              <div key={value.title} className="bg-black/30 border border-neutral-200 rounded-xl p-6 text-center">
                <h3 className="text-lg md:text-xl font-bold mb-3 gradient-accent-text">{value.title}</h3>
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Open Positions */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
              <span className="gradient-accent-text">OPEN POSITIONS</span>
            </h2>

            <div className="space-y-6">
              {positions.map((position) => (
                <div
                  key={position.title}
                  className="bg-black/30 border border-neutral-200 rounded-xl p-6 md:p-8 hover:border-transparent hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative"
                >
                  {/* Gradient background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 via-transparent to-deep-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Animated border gradient on hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                    background: 'linear-gradient(135deg, rgba(182, 218, 255, 0.4) 0%, rgba(167, 232, 237, 0.4) 33%, rgba(135, 194, 255, 0.4) 66%, rgba(194, 232, 255, 0.3) 100%)',
                    padding: '1px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude'
                  }} />

                  <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-neutral-950 mb-2">
                        {position.title}
                      </h3>
                      <p className="text-sm md:text-base text-neutral-600 mb-3 leading-relaxed">
                        {position.description}
                      </p>
                      <div className="flex flex-wrap gap-3 md:gap-4 text-sm text-neutral-500">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {position.location}
                        </span>
                        <span className="px-3 py-1 bg-neutral-100/10 border border-neutral-200 rounded-full text-xs md:text-sm">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <a
                      href="mailto:contact.kodexstudio@gmail.com"
                      className="group relative inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-neutral-950 bg-black/30 border border-neutral-200 rounded-md hover:border-transparent hover:shadow-xl transition-all duration-300 whitespace-nowrap overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 via-transparent to-deep-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                        background: 'linear-gradient(135deg, rgba(182, 218, 255, 0.4) 0%, rgba(167, 232, 237, 0.4) 33%, rgba(135, 194, 255, 0.4) 66%, rgba(194, 232, 255, 0.3) 100%)',
                        padding: '1px',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude'
                      }} />
                      <span className="relative z-10">Apply Now</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="text-center bg-black/30 border border-neutral-200 rounded-xl p-8 md:p-12">
            <Mail className="h-10 w-10 md:h-12 md:w-12 mx-auto mb-4 text-cyan-400" />
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-neutral-950">Don't See a Fit?</h3>
            <p className="text-sm md:text-base text-neutral-600 mb-6 max-w-xl mx-auto leading-relaxed">
              We're always looking for exceptional talent. Send us your resume and
              let us know how you can contribute.
            </p>
            <a
              href="mailto:contact.kodexstudio@gmail.com"
              className="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-neutral-950 bg-black/30 border border-neutral-200 rounded-md hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 via-transparent to-deep-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                background: 'linear-gradient(135deg, rgba(182, 218, 255, 0.4) 0%, rgba(167, 232, 237, 0.4) 33%, rgba(135, 194, 255, 0.4) 66%, rgba(194, 232, 255, 0.3) 100%)',
                padding: '1px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude'
              }} />
              <span className="relative z-10">Contact Us</span>
            </a>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Careers;
