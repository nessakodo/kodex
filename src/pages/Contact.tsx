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
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
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

    toast.success("Message sent successfully. We'll be in touch soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="py-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:items-start">
          <div>
            <header className="mb-8">
              <p className="text-overline mb-2">CONTACT</p>
              <h1 className="h1 mb-6">Let's Discuss Your Security Needs</h1>
              <p className="text-lead">
                Whether you're starting a new project or need to strengthen
                existing systems, we're here to help.
              </p>
            </header>

            <div className="space-y-6">
              <div>
                <h2 className="h3 mb-3">What to Expect</h2>
                <ul className="space-y-3">
                  <li className="flex items-start text-sm text-muted-foreground">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 mr-3 flex-shrink-0" />
                    <span className="leading-relaxed">
                      <strong className="text-foreground font-medium">Initial consultation:</strong> 30-minute
                      discussion to understand your needs and challenges.
                    </span>
                  </li>
                  <li className="flex items-start text-sm text-muted-foreground">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 mr-3 flex-shrink-0" />
                    <span className="leading-relaxed">
                      <strong className="text-foreground font-medium">Scoping document:</strong> Detailed proposal
                      with approach, timeline, and investment required.
                    </span>
                  </li>
                  <li className="flex items-start text-sm text-muted-foreground">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 mr-3 flex-shrink-0" />
                    <span className="leading-relaxed">
                      <strong className="text-foreground font-medium">Clear communication:</strong> No sales
                      pressure, just honest assessment of how we can help.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-card/50 border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We respond to all inquiries within 24 hours during business
                  days. For urgent security concerns, please indicate in your
                  message.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:pt-8">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  rows={6}
                  className="w-full resize-none"
                  placeholder="Tell us about your security needs and challenges..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
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
