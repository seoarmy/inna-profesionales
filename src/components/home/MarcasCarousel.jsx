import { marcas } from "../../data/mockData";

export default function MarcasCarousel() {
  const loop = [...marcas, ...marcas];

  return (
    <section className="border-y border-neutral-100 bg-neutral-50 py-10">
      <p className="container-inna mb-6 text-center text-xs font-semibold uppercase tracking-widest text-neutral-400">
        Marcas que distribuimos
      </p>
      <div className="scrollbar-none relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 px-6">
          {loop.map((m, idx) => (
            <span
              key={`${m.id}-${idx}`}
              className="flex h-14 shrink-0 items-center justify-center rounded-xl border border-neutral-200 bg-white px-8 font-display text-sm font-semibold text-neutral-400"
            >
              {m.nombre}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
