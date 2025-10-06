import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "MISSION", href: "/mission" },
  { name: "SERVICES", href: "/services" },
  { name: "INSIGHTS", href: "/insights" },
  { name: "SHOWCASE", href: "/showcase" },
  { name: "CONTACT", href: "/contact" },
];

const homeNavigation = [
  { name: "SERVICES", href: "#services" },
  { name: "PROJECTS", href: "#projects" },
  { name: "INSIGHTS", href: "/insights" },
  { name: "CONTACT", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const currentNav = isHome ? homeNavigation : navigation;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-0/90 backdrop-blur-xl border-b border-neutral-200 shadow-lg shadow-cyan-500/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 h-20">
        <Link to="/" className="flex items-center group">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-neutral-950">KODEX</span>
            <span className="gradient-accent-text ml-1">STUDIO</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:gap-x-8">
          {currentNav.map((item) => {
            const isActive = location.pathname === item.href;
            const isHashLink = item.href.startsWith("#");
            
            if (isHashLink && isHome) {
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-xs font-semibold tracking-widest text-neutral-600 hover:text-cyan-400 transition-colors-smooth uppercase"
                >
                  {item.name}
                </button>
              );
            }
            
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`text-xs font-semibold tracking-widest transition-colors-smooth uppercase relative ${
                  isActive
                    ? "text-cyan-400"
                    : "text-neutral-600 hover:text-cyan-400"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-[25px] left-0 right-0 h-0.5 bg-gradient-accent" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-neutral-600 hover:text-cyan-400 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-neutral-0/95 backdrop-blur-xl z-40 animate-fade-in">
          <div className="flex flex-col px-6 py-8 gap-6">
            {currentNav.map((item) => {
              const isActive = location.pathname === item.href;
              const isHashLink = item.href.startsWith("#");
              
              if (isHashLink && isHome) {
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleNavClick(item.href);
                      setMobileMenuOpen(false);
                    }}
                    className="text-lg font-bold uppercase tracking-wider py-2 text-neutral-600 hover:text-cyan-400 text-left"
                  >
                    {item.name}
                  </button>
                );
              }
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-lg font-bold uppercase tracking-wider py-2 ${
                    isActive
                      ? "gradient-accent-text"
                      : "text-neutral-600 hover:text-cyan-400"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
