import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, CheckCircle, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero flex items-center overflow-hidden pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Innovación en cada línea de código</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Transformamos ideas en{" "}
            <span className="text-gradient">experiencias digitales</span>{" "}
            extraordinarias
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Somos expertos en desarrollo de software a medida. Creamos soluciones tecnológicas que impulsan tu negocio al siguiente nivel.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a href="https://wa.me/573234519204" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="xl" className="group">
                Comienza tu proyecto
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <Button variant="heroOutline" size="xl">
              Ver portafolio
            </Button>
          </div>
          {/* Stats / Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground text-sm sm:text-base">Entrega rápida de proyectos</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground text-sm sm:text-base">Equipo capacitado</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground text-sm sm:text-base">Experiencia comprobada</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
