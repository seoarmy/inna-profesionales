import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import ProductImage from "../ui/ProductImage";

const formatPrice = (n) =>
  n.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, subtotal } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-neutral-900/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeCart}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
          <h2 className="!m-0 flex items-center gap-2 !text-base font-display font-semibold">
            <ShoppingBag className="h-5 w-5 text-violet-700" />
            Tu carrito
          </h2>
          <button
            onClick={closeCart}
            className="rounded-full p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
            aria-label="Cerrar carrito"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <ShoppingBag className="h-12 w-12 text-neutral-200" strokeWidth={1.2} />
            <p className="text-sm text-neutral-500">Todavía no agregaste productos.</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-5 py-4">
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3">
                  <ProductImage rubro={item.rubro} className="h-16 w-16 shrink-0 rounded-lg" iconClassName="h-6 w-6" />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium leading-snug text-neutral-900">{item.nombre}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="shrink-0 text-neutral-400 hover:text-rose-500"
                        aria-label={`Quitar ${item.nombre}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-neutral-200">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="p-1.5 text-neutral-500 hover:text-violet-700"
                          aria-label="Restar"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="p-1.5 text-neutral-500 hover:text-violet-700"
                          aria-label="Sumar"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-violet-700">
                        {formatPrice(item.precio * item.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {items.length > 0 && (
          <div className="border-t border-neutral-100 px-5 py-4">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="text-neutral-500">Subtotal</span>
              <span className="font-display text-lg font-semibold text-neutral-900">
                {formatPrice(subtotal)}
              </span>
            </div>
            <button
              onClick={() => alert("Demo: el checkout se conectará en la próxima etapa del proyecto.")}
              className="w-full rounded-full bg-violet-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-800"
            >
              Finalizar compra
            </button>
            <p className="mt-2 text-center text-xs text-neutral-400">Botón de demostración — sin pasarela de pago activa</p>
          </div>
        )}
      </aside>
    </>
  );
}
