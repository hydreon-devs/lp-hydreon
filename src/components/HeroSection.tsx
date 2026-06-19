import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const DOTS = [
  { top: "6%",  left: "8%",  size: 2, opacity: 0.5 },
  { top: "11%", left: "23%", size: 3, opacity: 0.7 },
  { top: "8%",  left: "52%", size: 2, opacity: 0.4 },
  { top: "14%", left: "74%", size: 3, opacity: 0.6 },
  { top: "7%",  left: "91%", size: 2, opacity: 0.5 },
  { top: "22%", left: "4%",  size: 2, opacity: 0.6 },
  { top: "28%", left: "37%", size: 2, opacity: 0.4 },
  { top: "19%", left: "63%", size: 3, opacity: 0.7 },
  { top: "32%", left: "85%", size: 2, opacity: 0.5 },
  { top: "40%", left: "14%", size: 3, opacity: 0.6 },
  { top: "38%", left: "58%", size: 2, opacity: 0.4 },
  { top: "45%", left: "92%", size: 2, opacity: 0.5 },
  { top: "52%", left: "7%",  size: 2, opacity: 0.7 },
  { top: "55%", left: "44%", size: 3, opacity: 0.5 },
  { top: "58%", left: "79%", size: 2, opacity: 0.6 },
  { top: "65%", left: "27%", size: 2, opacity: 0.4 },
  { top: "68%", left: "66%", size: 3, opacity: 0.7 },
  { top: "72%", left: "90%", size: 2, opacity: 0.5 },
  { top: "78%", left: "18%", size: 3, opacity: 0.6 },
  { top: "82%", left: "50%", size: 2, opacity: 0.4 },
  { top: "85%", left: "82%", size: 2, opacity: 0.6 },
  { top: "91%", left: "11%", size: 3, opacity: 0.5 },
  { top: "88%", left: "40%", size: 2, opacity: 0.7 },
  { top: "93%", left: "70%", size: 2, opacity: 0.4 },
  { top: "25%", left: "95%", size: 2, opacity: 0.6 },
  { top: "48%", left: "30%", size: 3, opacity: 0.5 },
  { top: "16%", left: "46%", size: 2, opacity: 0.4 },
  { top: "62%", left: "54%", size: 2, opacity: 0.6 },
  { top: "74%", left: "3%",  size: 3, opacity: 0.5 },
  { top: "35%", left: "72%", size: 2, opacity: 0.7 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden pt-20">
      {/* Scattered dots */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {DOTS.map((dot, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary"
            style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size, opacity: dot.opacity }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-1xl mx-auto px-4">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8 animate-fade-in">
          Menos tiempo en tareas
          <br />
          <span className="text-gradient">Más tiempo en lo que importa</span>
        </h1>

        <p
          className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto mb-12 animate-fade-in"
          style={{ animationDelay: "0.15s", opacity: 0 }}
        >
          Desarrollamos plataformas web, sistemas de gestión y automatizaciones
          que reducen costos y hacen crecer tu empresa.
        </p>

        <a
          href="https://wa.me/573132359756"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block animate-fade-in"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          <Button
            variant="hero"
            size="xl"
            className="rounded-full px-10 group shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow duration-300"
          >
            Hablemos de tu proyecto
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </a>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
