import { MessageCircle, Instagram, Linkedin } from "lucide-react";
import hydreonLogo from "@/assets/hydreon-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { name: "Desarrollo Web", href: "#servicios" },
      { name: "Base de datos", href: "#servicios" },
      { name: "Automatización", href: "#servicios" },
      { name: "Ciberseguridad", href: "#servicios" },
    ],
    empresa: [
      { name: "Sobre Nosotros", href: "#nosotros" },
      { name: "Contacto", href: "#contacto" },
    ],
    legal: [
      { name: "Política de Privacidad", href: "#" },
      { name: "Términos de Servicio", href: "#" },
      { name: "Cookies", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: <MessageCircle className="w-5 h-5" />, href: "https://wa.me/573234519204", label: "WhatsApp" },
    { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/hydreon.co/", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com/company/hydreon", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-background border-t border-border/50">
      {/* Gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={hydreonLogo} alt="Hydreon" className="h-10 w-auto rounded-lg" />
              <span className="text-xl font-bold text-foreground">Hydreon</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Transformamos ideas en experiencias digitales extraordinarias. Somos tu socio tecnológico para llevar tu negocio al siguiente nivel.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-card/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Servicios
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Hydreon. Todos los derechos reservados.
            </p>
            <p className="text-muted-foreground text-sm">
              Hecho con{" "}
              <span className="text-primary">❤</span>{" "}
              en Colombia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
