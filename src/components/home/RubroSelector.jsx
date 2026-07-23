import { rubros } from "../../data/mockData";
import RubroCard from "../ui/RubroCard";

export default function RubroSelector() {
  return (
    <section className="container-inna py-16 sm:py-20">
      <div className="mb-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-violet-600">Elegí tu rubro</span>
        <h2 className="!m-0 mt-2 !text-2xl font-semibold sm:!text-3xl">¿Qué estás buscando hoy?</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-neutral-500">
          Empezá por tu especialidad y accedé al catálogo completo de marcas y categorías.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {rubros.map((r) => (
          <RubroCard key={r.id} rubro={r} />
        ))}
      </div>
    </section>
  );
}
