import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-violet-800 via-violet-700 to-violet-900">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-violet-500/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="container-inna relative flex flex-col items-start gap-6 py-20 sm:py-28 lg:py-32">
        <span className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-violet-100 ring-1 ring-white/15">
          <ShieldCheck className="h-3.5 w-3.5" />
          Distribuidora oficial para profesionales
        </span>
        <h1 className="animate-fade-up !m-0 max-w-2xl text-balance !text-4xl font-semibold leading-[1.1] text-white sm:!text-5xl lg:!text-6xl" style={{ animationDelay: "0.08s" }}>
          Insumos profesionales para el rubro de la estética
        </h1>
        <p className="animate-fade-up max-w-lg text-balance text-base text-violet-200 sm:text-lg" style={{ animationDelay: "0.16s" }}>
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
