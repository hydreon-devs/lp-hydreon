import { useState, useEffect } from "react";
import { ExternalLink, Layers, ChevronLeft, ChevronRight } from "lucide-react";
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

interface Project {
  title: string;
  client: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  image: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    title: "Plataforma de Gestión de cotizaciones",
    client: "CJ Producciones",
    shortDescription: "Sistema web para administración de cotizaciones y clientes en tiempo real.",
    fullDescription:
      "Desarrollamos una plataforma web completa de gestión de cotizaciones para el uso interno del equipo de CJ Producciones. La solución redujo en un 70% el tiempo administrativo.",
    tags: ["React", "Vite", "Supabase"],
    image: "/src/assets/gestor-cotizaciones.png",
    demoUrl: "https://cotizaciones-demo.hydreon.com.co/login",
  }
];

const ProjectCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "group relative w-full overflow-hidden rounded-2xl cursor-pointer text-left",
      "border border-border/40 transition-all duration-500",
      "hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/40",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
    )}
    style={{ aspectRatio: "16/10" }}
  >
    <img
      src={project.image}
      alt={project.title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = "none";
        target.nextElementSibling?.classList.remove("hidden");
      }}
    />

    <div className="hidden absolute inset-0 bg-gradient-to-br from-card/80 to-background/90 flex items-center justify-center">
      <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-primary-foreground opacity-40">
        <Layers className="w-8 h-8" />
      </div>
    </div>

    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/30" />

    <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col gap-2.5">
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-white/10 text-white/80 backdrop-blur-sm border border-white/15"
          >
            {tag}
          </span>
        ))}
      </div>

      <div>
        <p className="text-white/60 text-xs font-medium uppercase tracking-widest mb-0.5">
          {project.client}
        </p>
        <h3 className="text-white text-lg font-semibold leading-tight">
          {project.title}
        </h3>
      </div>

      <div className="flex items-center gap-1.5 text-primary text-sm font-medium translate-y-1 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <span>Ver proyecto</span>
        <ExternalLink className="w-3.5 h-3.5" />
      </div>
    </div>

    <div className="absolute inset-0 rounded-2xl ring-0 transition-all duration-500 group-hover:ring-1 group-hover:ring-primary/30" />
  </button>
);

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section id="portafolio" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
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

        {projects.length <= 3 ? (
          <div
            className={cn(
              "grid gap-5 py-4 mx-auto",
              projects.length === 1 && "grid-cols-1 max-w-md",
              projects.length === 2 && "grid-cols-1 md:grid-cols-2 max-w-2xl",
              projects.length === 3 && "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
            )}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        ) : (
          <>
            <Carousel
              setApi={setApi}
              opts={{ loop: true, align: "start" }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 py-4">
                {projects.map((project, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <ProjectCard
                      project={project}
                      onClick={() => setSelectedProject(project)}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

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
          </>
        )}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="sm:max-w-lg bg-card border-border/50 p-0 overflow-hidden gap-0">
          {selectedProject && (
            <>
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.nextElementSibling?.classList.remove("hidden");
                  }}
                />
                <div className="hidden w-full h-full bg-gradient-to-br from-card to-background/80 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-primary flex items-center justify-center text-primary-foreground opacity-30">
                    <Layers className="w-10 h-10" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <DialogHeader className="space-y-1">
                  <p className="text-primary text-xs font-semibold uppercase tracking-widest">
                    {selectedProject.client}
                  </p>
                  <DialogTitle className="text-2xl font-bold text-foreground">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

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

                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                <div className="pt-2">
                  <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                      Ver demo
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
