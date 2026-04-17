import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import hydreonLogo from "@/assets/hydreon-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Servicios", href: "/#servicios" },
    { name: "Portafolio", href: "/#portafolio" },
    { name: "Nosotros", href: "/#nosotros" },
    { name: "Contacto", href: "/#contacto" },
  ];

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("/#", ""));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const id = href.replace("/#", "");
    const element = document.getElementById(id);
    if (!element) return;
    e.preventDefault();
    element.scrollIntoView({ behavior: "smooth" });
  };

  const linkClass = (id: string) =>
    `transition-colors duration-300 font-medium ${
      activeSection === id
        ? "text-primary"
        : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-primary/60 transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img
              src={hydreonLogo}
              alt="Hydreon Logo"
              className="h-12 w-12 rounded-lg object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-2xl font-bold text-gradient">Hydreon</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.replace("/#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleHashClick(e, link.href)}
                  className={linkClass(id)}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <a href="https://wa.me/573234519204" target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <Button variant="hero" size="lg">
              Empezar Proyecto
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const id = link.href.replace("/#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`${linkClass(id)} py-2`}
                    onClick={(e) => { handleHashClick(e, link.href); setIsOpen(false); }}
                  >
                    {link.name}
                  </a>
                );
              })}
              <Button variant="hero" size="lg" className="mt-2">
                Empezar Proyecto
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
