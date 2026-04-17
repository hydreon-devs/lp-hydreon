import { useState, useEffect, useRef } from "react";
import { ExternalLink, Layers, ChevronLeft, ChevronRight } from "lucide-react";

const portfolioImages = import.meta.glob("../assets/portfolio/**/*.{png,jpg,webp}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function getProjectImages(projectFolder: string): string[] {
  return Object.entries(portfolioImages)
    .filter(([path]) => path.includes(`/portfolio/${projectFolder}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, url]) => url);
}

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "573234519204";

interface Project {
  title: string;
  client: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  images: string[];
  impact?: { value: string; label: string };
}

const projects: Project[] = [
  {
    title: "Gestor de Cotizaciones",
    client: "CJ Producciones",
    shortDescription: "Sistema web para administración de cotizaciones y clientes.",
    fullDescription:
      "Desarrollamos una plataforma web completa de gestión de cotizaciones para el uso interno del equipo de CJ Producciones. La solución redujo en un 80% el tiempo administrativo del personal encargado en la creación de cotizaciones para sus clientes.",
    tags: ["React", "Vite", "Supabase"],
    images: getProjectImages("gestor-cotizaciones"),
    impact: { value: "80%", label: "menos tiempo administrativo" },
  }
];

const ProjectImageCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full h-full">
        <CarouselContent className="h-full ml-0">
          {images.map((src, i) => (
            <CarouselItem key={i} className="h-full pl-0">
              <img
                src={src}
                alt={`${title} - imagen ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <button
        onClick={() => api?.scrollPrev()}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <button
        onClick={() => api?.scrollNext()}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
        aria-label="Imagen siguiente"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "rounded-full transition-all duration-300",
              i === current ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50 hover:bg-white/75"
            )}
            aria-label={`Ir a imagen ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent pointer-events-none" />
    </div>
  );
};

const ProjectFeatureCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "group w-full overflow-hidden rounded-2xl text-left cursor-pointer",
      "border border-border/40 bg-card/30 backdrop-blur-sm",
      "flex flex-col md:flex-row",
      "transition-all duration-150 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
    )}
  >
    {/* Image */}
    <div className="relative w-full md:w-1/2 shrink-0 overflow-hidden" style={{ aspectRatio: "16/10" }}>
      <img
        src={project.images[0]}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          (target.nextElementSibling as HTMLElement)?.classList.remove("hidden");
        }}
      />
      <div className="hidden absolute inset-0 bg-gradient-to-br from-card/80 to-background/90 items-center justify-center">
        <Layers className="w-10 h-10 text-primary/40" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/60 hidden md:block" />
    </div>

    {/* Content */}
    <div className="flex flex-col justify-center gap-5 p-8 md:w-1/2">
      <p className="text-primary text-xs font-semibold uppercase tracking-widest">
        {project.client}
      </p>

      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-2">
          {project.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {project.shortDescription}
        </p>
      </div>

      {project.impact && (
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-primary">{project.impact.value}</span>
          <span className="text-muted-foreground text-sm">{project.impact.label}</span>
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-1.5 text-primary text-sm font-medium opacity-70 transition-opacity duration-300 group-hover:opacity-100">
        <span>Ver proyecto</span>
        <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </div>
  </button>
);

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="portafolio" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nuestro Trabajo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Proyectos que{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              hablan por sí solos
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explora algunos de los proyectos que desarrollamos para nuestros clientes. Cada solución, diseñada a medida.
          </p>
        </div>

        <div
          className={cn(
            "transition-all duration-700 delay-300",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "center" }}
          className="w-full"
        >
          <CarouselContent className="py-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="basis-full">
                <ProjectFeatureCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        </div>

        {projects.length > 1 && (
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => api?.scrollPrev()}
              className="w-10 h-10 rounded-full border border-border/50 bg-card/40 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-card/70 transition-all duration-300"
              aria-label="Proyecto anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    i === current
                      ? "w-6 h-2 bg-primary"
                      : "w-2 h-2 bg-border hover:bg-muted-foreground"
                  )}
                  aria-label={`Ir al proyecto ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => api?.scrollNext()}
              className="w-10 h-10 rounded-full border border-border/50 bg-card/40 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-card/70 transition-all duration-300"
              aria-label="Proyecto siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="w-[calc(100%-2rem)] sm:max-w-2xl bg-card border-border/50 p-0 gap-0 max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <ProjectImageCarousel
                images={selectedProject.images}
                title={selectedProject.title}
              />

              {/* Separator with gradient */}
              <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <div className="p-6 space-y-4">
                <DialogHeader className="space-y-1">
                  <p className="text-primary text-xs font-semibold uppercase tracking-widest">
                    {selectedProject.client}
                  </p>
                  <DialogTitle className="text-2xl font-bold text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                {selectedProject.impact && (
                  <div className="flex items-baseline gap-2 py-1">
                    <span className="text-3xl font-bold text-primary">{selectedProject.impact.value}</span>
                    <span className="text-muted-foreground text-sm">{selectedProject.impact.label}</span>
                  </div>
                )}

                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA — full width, prominent */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola, quiero solicitar la demo del proyecto ${selectedProject.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="hero" size="lg" className="group w-full">
                      Quiero algo así para mi negocio
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Button>
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PortfolioSection;
