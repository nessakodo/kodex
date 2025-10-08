import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

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
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nessamadison/", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/nessakodo", icon: Github },
  {
    name: "Dev.to",
    href: "https://dev.to/vanessamadison",
    icon: () => (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/>
      </svg>
    )
  },
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
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-cyan-400 transition-colors-smooth"
                aria-label={item.name}
              >
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </a>
            );
          })}
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
