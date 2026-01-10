import { useState } from "react";
import { Code, Database, Shield, Zap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Service {
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Desarrollo Web",
    shortDescription: "Aplicaciones web modernas y escalables con las últimas tecnologías.",
    fullDescription: "Creamos aplicaciones web de alto rendimiento utilizando frameworks modernos como React, Next.js y Vue.js. Nuestro enfoque se centra en la experiencia del usuario, el rendimiento y la escalabilidad.",
    features: [
      "Aplicaciones SPA y SSR",
      "Diseño responsive y accesible",
      "Integración con APIs y servicios",
      "Optimización del SEO",
    ],
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Bases de Datos",
    shortDescription: "Diseño y optimización de sistemas de datos.",
    fullDescription: "Implementamos soluciones de datos escalables y eficientes. Desde bases de datos relacionales hasta NoSQL, diseñamos la arquitectura perfecta para tus necesidades.",
    features: [
      "PostgreSQL, MySQL, MongoDB",
      "Migración de datos",
      "Optimización de queries",
      "Backup y recuperación",
    ],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Ciberseguridad",
    shortDescription: "Protección integral de tus sistemas y datos.",
    fullDescription: "Protegemos tu negocio con las mejores prácticas de seguridad. Realizamos auditorías, implementamos protocolos de seguridad y mantenemos tus sistemas protegidos.",
    features: [
      "Auditorías de seguridad",
      "Encriptación de datos",
      "Autenticación y autorización",
      "Cumplimiento normativo",
    ],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Automatización",
    shortDescription: "Optimiza procesos con soluciones inteligentes.",
    fullDescription: "Automatizamos procesos empresariales para aumentar la eficiencia y reducir errores. Implementamos workflows inteligentes y sistemas de integración empresarial.",
    features: [
      "RPA (Robotic Process Automation)",
      "Integración de sistemas",
      "Workflows automatizados",
      "Reportes automáticos",
    ],
  },
];

const ServiceCard = ({ service, onClick }: { service: Service; onClick: () => void }) => (
  <div
    onClick={onClick}
    className="group relative p-6 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:bg-card/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1"
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    <div className="relative z-10 text-center">
      <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
        {service.icon}
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{service.shortDescription}</p>
      
      <div className="mt-4 flex items-center justify-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Ver más detalles
        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
      </div>
    </div>
  </div>
);

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="servicios" className="py-24 px-4 relative overflow-hidden">
      {/* Background matching hero */}
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Soluciones que{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              impulsan tu negocio
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ofrecemos servicios integrales de desarrollo y tecnología para llevar tu empresa al siguiente nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="sm:max-w-lg bg-card border-border/50">
          {selectedService && (
            <>
              <DialogHeader>
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground mb-4">
                  {selectedService.icon}
                </div>
                <DialogTitle className="text-2xl">{selectedService.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground text-base leading-relaxed">
                  {selectedService.fullDescription}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                  Características principales
                </h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-gradient-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
