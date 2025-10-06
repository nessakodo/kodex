import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Mission", href: "/mission" },
  { name: "Services", href: "/services" },
  { name: "Insights", href: "/insights" },
  { name: "Showcase", href: "/showcase" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`sticky top-0 z-50 transition-smooth ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-neutral-200 shadow-sm"
          : "bg-white border-b border-neutral-200"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 h-16">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold tracking-tight text-neutral-950">
            KODEX STUDIO
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors-smooth relative ${
                  isActive
                    ? "text-neutral-950"
                    : "text-neutral-700 hover:text-neutral-950"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-accent" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-neutral-700"
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
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40">
          <div className="flex flex-col px-6 py-8 gap-6">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-lg font-medium py-2 ${
                    isActive
                      ? "text-accent"
                      : "text-neutral-700 hover:text-neutral-950"
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
