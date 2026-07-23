import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { productos } from "../../data/mockData";
import ProductCard from "../ui/ProductCard";

export default function ProductosDestacados() {
  const destacados = productos.slice(0, 8);

  return (
    <section className="container-inna py-16 sm:py-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-600">Lo más elegido</span>
          <h2 className="!m-0 mt-2 !text-2xl font-semibold sm:!text-3xl">Productos destacados</h2>
        </div>
        <Link to="/catalogo/peluqueria" className="flex items-center gap-1.5 text-sm font-semibold text-violet-700 hover:text-violet-800">
          Ver todo el catálogo <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {destacados.map((p) => (
          <ProductCard key={p.id} producto={p} />
        ))}
      </div>
    </section>
  );
}
