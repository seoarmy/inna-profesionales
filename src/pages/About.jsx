import { Award, Users, Package, Truck } from "lucide-react";
import Breadcrumb from "../components/ui/Breadcrumb";

const valores = [
  { icon: Package, title: "Stock real", desc: "Trabajamos con disponibilidad actualizada para que compres con seguridad." },
  { icon: Users, title: "Cercanía profesional", desc: "Asesoramos a cada salón según sus necesidades particulares." },
  { icon: Award, title: "Marcas reconocidas", desc: "Seleccionamos proveedores con trayectoria comprobada en el sector." },
  { icon: Truck, title: "Logística confiable", desc: "Envíos a todo el país con seguimiento del pedido." },
];

export default function About() {
  return (
    <div className="container-inna py-8 sm:py-12">
      <Breadcrumb items={[{ label: "Nosotros" }]} />

      <div className="mt-6 grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-violet-600">Nosotros</span>
          <h1 className="!m-0 mt-2 !text-3xl font-semibold sm:!text-4xl">
            Más de una década distribuyendo insumos para la estética profesional
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-neutral-600 sm:text-base">
            INNA Profesional nació en Gral. Pacheco con un objetivo claro: acercar a peluqueros, esteticistas,
            manicuristas y barberos los insumos que necesitan para trabajar, sin intermediarios y con atención
            directa. Hoy distribuimos más de una decena de marcas reconocidas del sector, con foco en la calidad,
            el stock disponible y la confianza de quienes vuelven a comprar mes a mes.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
            Creemos que el crecimiento de cada salón depende también de contar con un proveedor que entienda su
            oficio. Por eso, además de la venta online, ofrecemos asesoramiento personalizado por WhatsApp para
            resolver dudas de producto, stock y compatibilidad entre líneas.
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-violet-700 to-violet-900">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
            <span className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Distribuidora INNA Profesional
            </span>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {valores.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl bg-neutral-50 p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h3 className="!m-0 mt-4 !text-sm font-semibold">{title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-neutral-500">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
