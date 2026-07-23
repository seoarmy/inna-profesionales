import { useState } from "react";
import { ChevronDown } from "lucide-react";

function Accordion({ title, options, selected, onToggle }) {
  const [open, setOpen] = useState(true);
  if (!options.length) return null;

  return (
    <div className="border-b border-neutral-100 py-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-sm font-semibold text-neutral-800"
      >
        {title}
        <ChevronDown className={`h-4 w-4 text-neutral-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="mt-3 flex flex-col gap-2.5">
          {options.map((opt) => (
            <label key={opt.id} className="flex cursor-pointer items-center gap-2.5 text-sm text-neutral-600">
              <input
                type="checkbox"
                checked={selected.includes(opt.id)}
                onChange={() => onToggle(opt.id)}
                className="h-4 w-4 rounded border-neutral-300 text-violet-700 focus:ring-violet-500"
              />
              {opt.nombre}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CategoryFilters({
  categorias,
  marcas,
  selectedCategorias,
  selectedMarcas,
  onToggleCategoria,
  onToggleMarca,
  priceRange,
  onPriceChange,
}) {
  return (
    <div>
      <Accordion
        title="Categoría"
        options={categorias}
        selected={selectedCategorias}
        onToggle={onToggleCategoria}
      />
      <Accordion
        title="Marca"
        options={marcas}
        selected={selectedMarcas}
        onToggle={onToggleMarca}
      />
      <div className="py-4">
        <p className="mb-3 text-sm font-semibold text-neutral-800">Precio máximo</p>
        <input
          type="range"
          min="0"
          max="25000"
          step="500"
          value={priceRange}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full accent-violet-700"
        />
        <p className="mt-1 text-xs text-neutral-500">
          Hasta {priceRange.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 })}
        </p>
      </div>
    </div>
  );
}
