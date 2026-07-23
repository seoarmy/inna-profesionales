import { Link } from "react-router-dom";
import { Scissors, Sparkles, Hand, Axe, PackageOpen, ArrowUpRight } from "lucide-react";

const ICONS = {
  Scissors,
  Sparkles,
  Hand,
  Axe,
  PackageOpen,
};

export default function RubroCard({ rubro }) {
  const Icon = ICONS[rubro.icon] || PackageOpen;

  return (
    <Link
      to={`/catalogo/${rubro.id}`}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br from-violet-700 to-violet-900 p-6 text-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-900/20 sm:aspect-square"
    >
      <div
        className="absolute inset-0 opacity-[0.08] transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10 transition-transform duration-500 group-hover:scale-125" />

      <Icon className="relative mb-4 h-9 w-9 text-violet-200 transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={1.5} />
      <h3 className="!m-0 relative font-display !text-lg font-semibold text-white sm:!text-xl">
        {rubro.nombre}
      </h3>
      <p className="relative mt-1 text-xs text-violet-200 sm:text-sm">{rubro.descripcion}</p>

      <span className="relative mt-4 inline-flex items-center gap-1 text-xs font-semibold text-white">
        Ver catálogo
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
