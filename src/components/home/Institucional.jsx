import { Link } from "react-router-dom";
import { Award, Users, Package } from "lucide-react";

const stats = [
  { icon: Package, value: "+500", label: "Productos en catálogo" },
  { icon: Users, value: "+17", label: "Marcas distribuidas" },
  { icon: Award, value: "+10", label: "Años en el rubro" },
];

export default function Institucional() {
  return (
    <section className="container-inna py-16 sm:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-600">Sobre INNA</span>
          <h2 className="!m-0 mt-2 !text-2xl font-semibold sm:!text-3xl">
            Distribuidora de confianza para el rubro de la estética
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Desde Gral. Pacheco, acompañamos a peluqueros, esteticistas, manicuristas y barberos de todo el país
            con insumos de primeras marcas, stock real y atención directa. Nuestro compromiso es simplificar el
            abastecimiento de los profesionales de la belleza para que puedan enfocarse en lo que mejor saben hacer.
          </p>
          <Link
            to="/nosotros"
            className="mt-6 inline-flex rounded-full border border-violet-700 px-5 py-2.5 text-sm font-semibold text-violet-700 hover:bg-violet-50"
          >
            Conocer más
          </Link>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label}>
                <Icon className="h-5 w-5 text-violet-600" strokeWidth={1.5} />
                <p className="!m-0 mt-2 font-display text-xl font-semibold text-neutral-900 sm:text-2xl">{value}</p>
                <p className="text-xs text-neutral-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-violet-100 via-violet-50 to-white ring-1 ring-neutral-100">
          <div
            className="absolute inset-0 opacity-[0.1]"
            style={{
              backgroundImage: "radial-gradient(circle, #4c1d95 1.5px, transparent 1.5px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-3xl font-semibold text-violet-300 sm:text-4xl">INNA Profesional</span>
          </div>
        </div>
      </div>
    </section>
  );
}
