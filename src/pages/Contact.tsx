import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "ba3e7ed4-d765-414d-8960-b4dcb45ca368",
          name: formData.name,
          email: formData.email,
          company: formData.company || "Not provided",
          category: formData.category || "General Inquiry",
          message: formData.message,
          subject: `New Contact Form: ${formData.category || "General Inquiry"} - ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully. We'll be in touch soon.");
        setFormData({ name: "", email: "", company: "", category: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again or email us directly.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again or email us directly.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="pt-16 pb-24">
      <Container>
        <header className="mb-12 max-w-2xl text-center mx-auto animate-fade-in">
          <p className="text-overline mb-4">CONTACT</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's Discuss Your Security <span className="gradient-text">Needs</span>
          </h1>
          <p className="text-lead">
            Whether you're starting a new project or need to strengthen
            existing systems, we're here to help.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-4 text-neutral-950">Enterprise Security Engineering</h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Production-grade security solutions protecting billions in daily transactions across financial services, healthcare systems, and critical infrastructure.
              </p>
            </div>

            <div className="space-y-5">
              <div className="border-l-2 border-cyan-400 pl-4">
                <h3 className="text-sm font-semibold text-neutral-950 mb-1.5">
                  Post-Quantum Cryptography
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  NIST-approved quantum-resistant algorithms, hybrid key exchange, sub-40ms encryption at scale
                </p>
              </div>

              <div className="border-l-2 border-cyan-400 pl-4">
                <h3 className="text-sm font-semibold text-neutral-950 mb-1.5">
                  AI Security Automation
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Intelligent threat detection, SOC automation, 82% attack reduction through ML-driven analysis
                </p>
              </div>

              <div className="border-l-2 border-cyan-400 pl-4">
                <h3 className="text-sm font-semibold text-neutral-950 mb-1.5">
                  Compliance & Architecture
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  HIPAA, SOC 2, zero-trust design, cloud security hardening, regulatory compliance implementation
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-cyan-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-950 mb-1">24-Hour Response</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    All inquiries receive expert assessment within one business day. Security incidents prioritized for immediate triage.
                  </p>
                </div>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Trusted by financial services, healthcare organizations, and technology companies requiring uncompromising security standards.
                </p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-lg p-6 lg:p-8">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground"
                >
                  Full Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-foreground"
                >
                  Company
                </label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full"
                  placeholder="Acme Corporation"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-foreground"
                >
                  Inquiry Type *
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">Select inquiry type...</option>
                  <option value="Security Consulting">Security Consulting & Architecture</option>
                  <option value="Threat Detection">AI/ML Security & Threat Detection</option>
                  <option value="Compliance">Compliance & Regulatory (HIPAA, SOC 2)</option>
                  <option value="Custom Development">Custom Development Project</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground"
                >
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none"
                  placeholder="Tell us about your project requirements and challenges..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              <p className="text-xs text-neutral-500 text-center">
                By submitting this form, you agree to our privacy policy and
                consent to being contacted regarding your inquiry.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
