import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroBgMobile from "../../assets/hero-bg-mobile.webp";
import heroBgDesktop from "../../assets/hero-bg-desktop.webp";

export default function Hero() {
  return (
    <section className="relative flex min-h-[520px] items-center overflow-hidden sm:min-h-[560px] lg:min-h-[640px]">
      <picture>
        <source media="(min-width: 640px)" srcSet={heroBgDesktop} />
        <img
          src={heroBgMobile}
          alt=""
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </picture>

      {/* Contrast overlay — stronger on mobile where the text column takes the full width */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/85 via-violet-900/75 to-violet-950/85 sm:bg-gradient-to-r sm:from-violet-950/90 sm:via-violet-900/60 sm:to-violet-900/20" />

      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="container-inna relative flex flex-col items-start gap-6 py-20 sm:py-28 lg:py-32">
        <span className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-violet-100 ring-1 ring-white/20 backdrop-blur-sm">
          <ShieldCheck className="h-3.5 w-3.5" />
          Distribuidora oficial para profesionales
        </span>
        <h1 className="animate-fade-up !m-0 max-w-2xl text-balance !text-4xl font-semibold leading-[1.1] text-white drop-shadow-sm sm:!text-5xl lg:!text-6xl" style={{ animationDelay: "0.08s" }}>
          Insumos profesionales para el rubro de la estética
        </h1>
        <p className="animate-fade-up max-w-lg text-balance text-base text-violet-100 drop-shadow-sm sm:text-lg" style={{ animationDelay: "0.16s" }}>
          Peluquería, estética, manicuría y barbería en un solo lugar. Stock real, marcas reconocidas y atención directa.
        </p>
        <Link
          to="/catalogo/peluqueria"
          className="animate-fade-up group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-violet-800 shadow-lg shadow-violet-950/30 transition-transform hover:-translate-y-0.5"
          style={{ animationDelay: "0.24s" }}
        >
          Ver catálogo
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
