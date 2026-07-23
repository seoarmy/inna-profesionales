import { Link } from "react-router-dom";
import { Heart, ShoppingCart } from "lucide-react";
import ProductImage from "./ProductImage";
import { getMarcaById } from "../../data/mockData";
import { useCart } from "../../context/CartContext";

const formatPrice = (n) =>
  n.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });

export default function ProductCard({ producto }) {
  const { addItem } = useCart();
  const marca = getMarcaById(producto.marca);
  const hasDiscount = producto.precioAnterior && producto.precioAnterior > producto.precio;
  const discountPct = hasDiscount
    ? Math.round(100 - (producto.precio / producto.precioAnterior) * 100)
    : 0;

  return (
    <Link
      to={`/producto/${producto.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-100 bg-white transition-shadow hover:shadow-lg hover:shadow-neutral-900/5"
    >
      <div className="relative">
        <ProductImage rubro={producto.rubro} className="aspect-square w-full" iconClassName="h-16 w-16" />

        {hasDiscount && (
          <span className="absolute left-3 top-3 rounded-full bg-violet-700 px-2.5 py-1 text-[11px] font-semibold text-white">
            -{discountPct}%
          </span>
        )}

        <button
          onClick={(e) => e.preventDefault()}
          aria-label="Agregar a favoritos"
          className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-neutral-500 opacity-0 shadow-sm transition-all hover:text-rose-500 group-hover:opacity-100"
        >
          <Heart className="h-4 w-4" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            addItem(producto);
          }}
          className="absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-center gap-2 rounded-full bg-violet-700 py-2.5 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-200 hover:bg-violet-800 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <ShoppingCart className="h-3.5 w-3.5" />
          Agregar al carrito
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <span className="text-[11px] font-medium uppercase tracking-wide text-neutral-400">
          {marca?.nombre}
        </span>
        <h3 className="!m-0 line-clamp-2 !text-sm font-medium leading-snug text-neutral-800">
          {producto.nombre}
        </h3>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="font-display text-base font-semibold text-violet-700">
            {formatPrice(producto.precio)}
          </span>
          {hasDiscount && (
            <span className="text-xs text-neutral-400 line-through">
              {formatPrice(producto.precioAnterior)}
            </span>
          )}
        </div>
        <span className="mt-1 text-[11px] text-neutral-400">
          {producto.stock > 0 ? `${producto.stock} unidades disponibles` : "Sin stock"}
        </span>
      </div>
    </Link>
  );
}
