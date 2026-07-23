import { ShoppingBag, MessageCircle, PackageCheck, UserCheck } from "lucide-react";

const beneficios = [
  { icon: ShoppingBag, title: "Compra directa online", desc: "Pedí tus insumos sin intermediarios, las 24 horas." },
  { icon: MessageCircle, title: "Consulta rápida por WhatsApp", desc: "Resolvemos tus dudas de stock y precios al instante." },
  { icon: PackageCheck, title: "Stock actualizado", desc: "Disponibilidad real, sin sorpresas al momento de comprar." },
  { icon: UserCheck, title: "Atención profesional", desc: "Asesoramiento pensado para salones y estudios." },
];

export default function Beneficios() {
  return (
    <section className="bg-neutral-50 py-16 sm:py-20">
      <div className="container-inna grid grid-cols-2 gap-6 lg:grid-cols-4">
        {beneficios.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex flex-col items-start gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <h3 className="!m-0 !text-sm font-semibold text-neutral-800">{title}</h3>
            <p className="text-xs leading-relaxed text-neutral-500">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
