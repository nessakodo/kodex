import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "SERVICES", href: "/services" },
  { name: "INSIGHTS", href: "/insights" },
  { name: "SHOWCASE", href: "/showcase" },
  { name: "CONTACT", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHome
          ? scrolled
            ? "bg-black/90 backdrop-blur-md"
            : "bg-black/60 backdrop-blur-sm"
          : "bg-black/90"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 h-20">
        <Link to="/" className="flex items-center group">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-neutral-950">KODEX</span>
            <span className="text-cyan-400 ml-1">STUDIO</span>
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
                className={`text-xs font-semibold tracking-widest transition-colors uppercase ${
                  isActive
                    ? "text-cyan-400"
                    : "text-neutral-950 hover:text-cyan-400"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 text-neutral-950 hover:text-cyan-400 transition-colors relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            <Menu
              className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${
                mobileMenuOpen
                  ? 'opacity-0 rotate-90 scale-50'
                  : 'opacity-100 rotate-0 scale-100'
              }`}
            />
            <X
              className={`h-6 w-6 absolute inset-0 transition-all duration-300 ${
                mobileMenuOpen
                  ? 'opacity-100 rotate-0 scale-100'
                  : 'opacity-0 -rotate-90 scale-50'
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-black/95 backdrop-blur-md z-40 animate-fade-in">
          <div className="flex flex-col items-center px-6 py-8 gap-8">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-lg font-semibold tracking-widest transition-colors uppercase ${
                    isActive
                      ? "text-cyan-400"
                      : "text-neutral-950 hover:text-cyan-400"
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
