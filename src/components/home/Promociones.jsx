import { Link } from "react-router-dom";
import { Percent, Truck } from "lucide-react";

export default function Promociones() {
  return (
    <section className="container-inna py-16 sm:py-20">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl bg-violet-50 p-8 sm:p-10">
          <Percent className="h-9 w-9 text-violet-600" strokeWidth={1.5} />
          <h3 className="!m-0 mt-4 !text-xl font-semibold text-violet-900 sm:!text-2xl">
            Hasta 20% OFF en tinturas y tratamientos
          </h3>
          <p className="mt-2 max-w-sm text-sm text-violet-700/80">
            Aprovechá descuentos en primeras marcas seleccionadas para peluquería, por tiempo limitado.
          </p>
          <Link
            to="/catalogo/peluqueria"
            className="mt-5 inline-flex rounded-full bg-violet-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-800"
          >
            Ver promociones
          </Link>
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-200/60" />
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-neutral-900 p-8 text-white sm:p-10">
          <Truck className="h-9 w-9 text-violet-300" strokeWidth={1.5} />
          <h3 className="!m-0 mt-4 !text-xl font-semibold sm:!text-2xl">
            Envíos a todo el país
          </h3>
          <p className="mt-2 max-w-sm text-sm text-neutral-300">
            Comprá desde tu salón o local y recibí tu pedido con seguimiento en tiempo real.
          </p>
          <Link
            to="/contacto"
            className="mt-5 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-violet-100"
          >
            Consultar envío
          </Link>
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
        </div>
      </div>
    </section>
  );
}
