import { MessageCircle, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
  {
    name: "WhatsApp",
    icon: <MessageCircle className="w-6 h-6" />,
    href: "https://wa.me/573234519204",
    color: "hover:bg-green-500/20 hover:text-green-400 hover:border-green-500/50",
    description: "Escríbenos por WhatsApp",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-6 h-6" />,
    href: "https://www.instagram.com/hydreon.co/",
    color: "hover:bg-pink-500/20 hover:text-pink-400 hover:border-pink-500/50",
    description: "Síguenos en Instagram",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6" />,
    href: "https://linkedin.com/company/hydreon",
    color: "hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/50",
    description: "Conéctate en LinkedIn",
  },
];

const ContactSection = () => {
  return (
    <section id="contacto" className="relative py-24 px-4 overflow-hidden">
      {/* Background matching hero */}
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm text-muted-foreground mb-6">
            <Mail className="w-4 h-4 text-primary" />
            Contáctanos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Listo para{" "}
            <span className="text-gradient">comenzar tu proyecto</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos a través de cualquiera de nuestros canales.
          </p>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm text-center transition-all duration-300 hover:-translate-y-2 ${social.color}`}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {social.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{social.name}</h3>
              <p className="text-muted-foreground text-sm">{social.description}</p>
            </a>
          ))}
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Correo</p>
              <p className="text-foreground font-medium">studioshydreon@gmail.com</p>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Ubicación</p>
              <p className="text-foreground font-medium">Medellín, Antioquia, Colombia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
