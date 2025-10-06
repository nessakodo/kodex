import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Services", href: "/services" },
    { name: "Insights", href: "/insights" },
    { name: "Showcase", href: "/showcase" },
    { name: "Contact", href: "/contact" },
  ],
  company: [
    { name: "Mission", href: "/mission" },
    { name: "Careers", href: "/careers" },
  ],
  legal: [
    { name: "Privacy", href: "/security" },
    { name: "Terms", href: "/terms" },
    { name: "Security", href: "/security" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "GitHub", href: "#", icon: Github },
  { name: "Email", href: "mailto:info@kodexstudio.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 py-16 relative">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-neutral-950">KODEX</span>
                <span className="gradient-accent-text ml-1">STUDIO</span>
              </span>
            </Link>
            <p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
              Security infrastructure for modern software deployment.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-800 mb-4">
              PRODUCT
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-neutral-500 hover:text-cyan-400 transition-colors-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-800 mb-4">
              COMPANY
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-neutral-500 hover:text-cyan-400 transition-colors-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-800 mb-4">
              LEGAL
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-neutral-500 hover:text-cyan-400 transition-colors-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-12 flex gap-6">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-neutral-500 hover:text-cyan-400 transition-colors-smooth"
              aria-label={item.name}
            >
              <item.icon className="h-5 w-5" strokeWidth={1.5} />
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-sm text-neutral-500">
            © 2025 KODEX STUDIO · Littleton, CO · Engineered for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
