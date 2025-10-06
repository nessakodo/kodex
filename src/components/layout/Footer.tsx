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
    { name: "Careers", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "/security" },
    { name: "Terms", href: "#" },
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
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-lg font-bold tracking-tight text-neutral-950">
                KODEX STUDIO
              </span>
            </Link>
            <p className="mt-4 text-sm text-neutral-600 max-w-xs">
              Security infrastructure for modern software.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-950 mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-neutral-600 hover:text-neutral-950 transition-colors-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-950 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-neutral-600 hover:text-neutral-950 transition-colors-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-950 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-neutral-600 hover:text-neutral-950 transition-colors-smooth"
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
              className="text-neutral-600 hover:text-neutral-950 transition-colors-smooth"
              aria-label={item.name}
            >
              <item.icon className="h-5 w-5" strokeWidth={1.5} />
            </a>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-neutral-200">
          <p className="text-sm text-neutral-600">
            © 2025 KODEX STUDIO · Littleton, CO
          </p>
        </div>
      </div>
    </footer>
  );
}
