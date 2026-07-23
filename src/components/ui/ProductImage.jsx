import {
  Scissors,
  Sparkles,
  Hand,
  Axe,
  PackageOpen,
} from "lucide-react";

const ICONS = {
  peluqueria: Scissors,
  estetica: Sparkles,
  "manicuria-pedicuria": Hand,
  barberia: Axe,
  otros: PackageOpen,
};

const GRADIENTS = {
  peluqueria: "from-violet-200 via-violet-100 to-white",
  estetica: "from-fuchsia-200 via-violet-100 to-white",
  "manicuria-pedicuria": "from-rose-200 via-violet-100 to-white",
  barberia: "from-slate-300 via-violet-100 to-white",
  otros: "from-indigo-200 via-violet-100 to-white",
};

export default function ProductImage({ rubro, className = "", iconClassName = "" }) {
  const Icon = ICONS[rubro] || PackageOpen;
  const gradient = GRADIENTS[rubro] || GRADIENTS.otros;

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #4c1d95 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />
      <Icon className={`relative text-violet-700/40 ${iconClassName || "h-14 w-14"}`} strokeWidth={1.25} />
    </div>
  );
}
