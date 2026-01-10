import { Target, Heart, Lightbulb, TrendingUp } from "lucide-react";

const valores = [
  {
    icon: <Target className="w-6 h-6" />,
    titulo: "Enfoque en resultados",
    descripcion: "Cada proyecto está orientado a generar impacto real en tu negocio.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    titulo: "Compromiso genuino",
    descripcion: "Nos involucramos con tu visión como si fuera nuestra.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    titulo: "Innovación accesible",
    descripcion: "Tecnología de vanguardia adaptada a tu presupuesto.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    titulo: "Crecimiento conjunto",
    descripcion: "Tu éxito es nuestro éxito. Crecemos contigo.",
  },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/3 -left-32 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm text-muted-foreground mb-6">
            <Heart className="w-4 h-4 text-primary" />
            Sobre Nosotros
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Un equipo{" "}
            <span className="text-gradient">joven y apasionado</span>{" "}
            por la tecnología
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos <span className="text-foreground font-semibold">Hydreon Studios</span>, un equipo de desarrollo emergente con una misión clara: 
              <span className="text-primary font-medium"> democratizar el acceso a soluciones tecnológicas de calidad</span> para microempresas y negocios locales.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Entendemos que muchos emprendedores y pequeños empresarios tienen grandes ideas pero recursos limitados. 
              Por eso, ofrecemos servicios profesionales con un enfoque personalizado, precios justos y un compromiso genuino con el éxito de cada proyecto.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestra juventud no es una limitación, es nuestra fortaleza. Traemos ideas frescas, 
              dominamos las tecnologías más actuales y tenemos la energía para ir más allá en cada entrega.
            </p>

            {/* Highlight Box */}
            <div className="p-6 rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <p className="text-foreground font-medium text-lg">
                "Creemos que cada negocio, sin importar su tamaño, merece una presencia digital profesional y herramientas tecnológicas que impulsen su crecimiento."
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform duration-300">
                  {valor.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{valor.titulo}</h3>
                <p className="text-sm text-muted-foreground">{valor.descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-muted-foreground text-lg mb-2">
            ¿Listo para dar el siguiente paso?
          </p>
          <p className="text-foreground text-xl font-medium">
            Conversemos sobre cómo podemos ayudarte a{" "}
            <span className="text-gradient">hacer crecer tu negocio</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
