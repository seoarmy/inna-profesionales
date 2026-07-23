import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  MessageCircle,
  ShoppingCart,
  Minus,
  Plus,
  ShieldCheck,
  Truck,
  Star,
  Share2,
  Link2,
  RotateCcw,
  BadgeCheck,
} from "lucide-react";
import {
  productos,
  getRubroById,
  getCategoriaById,
  getMarcaById,
  getRelacionados,
  getSku,
  getRating,
  getReviewsCount,
  getModoDeUso,
  getReviews,
  whatsappLink,
} from "../data/mockData";
import Breadcrumb from "../components/ui/Breadcrumb";
import ProductImage from "../components/ui/ProductImage";
import ProductCard from "../components/ui/ProductCard";
import Seo from "../components/seo/Seo";
import { getProductSchema, getBreadcrumbSchema } from "../lib/schema";
import { useCart } from "../context/CartContext";

const formatPrice = (n) =>
  n.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });

function Stars({ value, size = "h-3.5 w-3.5" }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={`${size} ${n <= Math.round(value) ? "fill-amber-400 text-amber-400" : "text-neutral-200"}`}
        />
      ))}
    </div>
  );
}

const TABS = [
  { id: "descripcion", label: "Descripción" },
  { id: "ficha", label: "Ficha técnica" },
  { id: "uso", label: "Modo de uso" },
  { id: "envio", label: "Envío y devoluciones" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const producto = productos.find((p) => String(p.id) === id);
  const [qty, setQty] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);
  const [activeTab, setActiveTab] = useState("descripcion");
  const [copied, setCopied] = useState(false);
  const { addItem } = useCart();

  if (!producto) {
    return (
      <div className="container-inna py-24 text-center">
        <Seo title="Producto no encontrado" noindex />
        <h1 className="!text-2xl font-semibold">Producto no encontrado</h1>
        <Link to="/" className="mt-4 inline-block text-sm font-semibold text-violet-700">Volver al inicio</Link>
      </div>
    );
  }

  const rubro = getRubroById(producto.rubro);
  const categoria = getCategoriaById(producto.categoria);
  const marca = getMarcaById(producto.marca);
  const relacionados = getRelacionados(producto);
  const hasDiscount = producto.precioAnterior && producto.precioAnterior > producto.precio;

  const rating = getRating(producto);
  const reviewsCount = getReviewsCount(producto);
  const reviews = getReviews(producto);
  const sku = getSku(producto);

  const mensajeWhatsapp = `Hola, quiero hacer una consulta sobre ${producto.nombre}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const breadcrumbItems = [
    { to: `/catalogo/${rubro.id}`, label: rubro.nombre },
    { to: `/catalogo/${rubro.id}`, label: categoria?.nombre || "" },
    { label: producto.nombre },
  ];

  return (
    <div className="container-inna py-8 sm:py-10">
      <Seo
        title={producto.nombre}
        description={producto.descripcion}
        path={`/producto/${producto.id}`}
        type="product"
        jsonLd={[getProductSchema(producto), getBreadcrumbSchema(breadcrumbItems)]}
      />
      <Breadcrumb items={breadcrumbItems} />

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <ProductImage rubro={producto.rubro} className="aspect-square w-full rounded-2xl" iconClassName="h-24 w-24" />
          <div className="mt-3 grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                onClick={() => setActiveThumb(i)}
                className={`aspect-square overflow-hidden rounded-xl ring-2 transition-colors ${
                  activeThumb === i ? "ring-violet-600" : "ring-transparent"
                }`}
              >
                <ProductImage rubro={producto.rubro} className="h-full w-full" iconClassName="h-6 w-6" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">{marca?.nombre}</span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-600 hover:border-violet-300 hover:text-violet-700"
              >
                <Link2 className="h-3.5 w-3.5" />
                {copied ? "¡Copiado!" : "Copiar link"}
              </button>
              <a
                href={whatsappLink(`Mirá este producto: ${producto.nombre} — ${typeof window !== "undefined" ? window.location.href : ""}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-600 hover:border-violet-300 hover:text-violet-700"
                aria-label="Compartir por WhatsApp"
              >
                <Share2 className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <h1 className="!m-0 mt-1 !text-2xl font-semibold sm:!text-3xl">{producto.nombre}</h1>

          <div className="mt-2 flex items-center gap-2">
            <Stars value={rating} />
            <span className="text-sm font-medium text-neutral-700">{rating}</span>
            <span className="text-xs text-neutral-400">({reviewsCount} opiniones)</span>
            <span className="text-neutral-300">·</span>
            <span className="text-xs text-neutral-400">SKU {sku}</span>
          </div>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="font-display text-3xl font-semibold text-violet-700">{formatPrice(producto.precio)}</span>
            {hasDiscount && (
              <span className="text-base text-neutral-400 line-through">{formatPrice(producto.precioAnterior)}</span>
            )}
          </div>
          <p className="mt-1 text-xs text-neutral-400">
            En 3 cuotas sin interés de {formatPrice(Math.round(producto.precio / 3))}
          </p>

          <p className="mt-1 text-sm text-neutral-500">
            Categoría: <span className="text-neutral-700">{categoria?.nombre}</span> · Stock:{" "}
            <span className="text-neutral-700">{producto.stock} unidades</span>
          </p>

          <p className="mt-5 text-sm leading-relaxed text-neutral-600">{producto.descripcion}</p>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center rounded-full border border-neutral-200">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-3 text-neutral-500 hover:text-violet-700" aria-label="Restar">
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center text-sm font-semibold">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} className="p-3 text-neutral-500 hover:text-violet-700" aria-label="Sumar">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={() => addItem(producto, qty)}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-violet-700 py-3.5 text-sm font-semibold text-white hover:bg-violet-800"
            >
              <ShoppingCart className="h-4 w-4" />
              Agregar al carrito
            </button>
          </div>

          <a
            href={whatsappLink(mensajeWhatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-whatsapp py-3.5 text-sm font-semibold text-white hover:bg-whatsapp-dark"
          >
            <MessageCircle className="h-4 w-4" />
            Consultar por WhatsApp
          </a>

          <div className="mt-6 grid grid-cols-2 gap-3 rounded-xl bg-neutral-50 p-4 text-xs text-neutral-500">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 shrink-0 text-violet-600" />Distribuidor oficial</span>
            <span className="flex items-center gap-2"><Truck className="h-4 w-4 shrink-0 text-violet-600" />Envíos a todo el país</span>
            <span className="flex items-center gap-2"><RotateCcw className="h-4 w-4 shrink-0 text-violet-600" />Cambios dentro de 10 días</span>
            <span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 shrink-0 text-violet-600" />Compra 100% segura</span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <section className="mt-14">
        <div className="flex gap-1 overflow-x-auto border-b border-neutral-200">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 whitespace-nowrap border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-violet-700 text-violet-700"
                  : "border-transparent text-neutral-500 hover:text-neutral-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="py-6 text-sm leading-relaxed text-neutral-600">
          {activeTab === "descripcion" && <p>{producto.descripcion}</p>}

          {activeTab === "ficha" && (
            <dl className="grid max-w-xl grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {[
                ["Marca", marca?.nombre],
                ["Rubro", rubro.nombre],
                ["Categoría", categoria?.nombre],
                ["SKU", sku],
                ["Presentación", "Envase de uso profesional"],
                ["Origen", "Nacional / Importado"],
              ].map(([label, value]) => (
                <div key={label} className="contents">
                  <dt className="text-neutral-400">{label}</dt>
                  <dd className="text-neutral-700">{value}</dd>
                </div>
              ))}
            </dl>
          )}

          {activeTab === "uso" && <p>{getModoDeUso(producto)}</p>}

          {activeTab === "envio" && (
            <div className="flex flex-col gap-3">
              <p>Los pedidos se despachan dentro de las 24/48hs hábiles posteriores a la confirmación del pago.</p>
              <p>Envíos a todo el país por transporte a convenir o retiro en nuestro depósito de Gral. Pacheco.</p>
              <p>Aceptamos cambios y devoluciones dentro de los 10 días de recibido el producto, siempre que se encuentre sin uso y en su envase original.</p>
            </div>
          )}
        </div>
      </section>

      {/* Reviews */}
      <section className="mt-4 border-t border-neutral-100 pt-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="!m-0 !text-xl font-semibold sm:!text-2xl">Opiniones de clientes</h2>
            <div className="mt-2 flex items-center gap-2">
              <Stars value={rating} size="h-4 w-4" />
              <span className="text-sm font-semibold text-neutral-800">{rating} de 5</span>
              <span className="text-xs text-neutral-400">({reviewsCount} opiniones)</span>
            </div>
          </div>
          <button
            onClick={() => alert("Demo: el formulario de opiniones se habilitará en la próxima etapa del proyecto.")}
            className="rounded-full border border-violet-700 px-4 py-2 text-xs font-semibold text-violet-700 hover:bg-violet-50"
          >
            Dejar una opinión
          </button>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {reviews.map((r, idx) => (
            <div key={idx} className="rounded-2xl bg-neutral-50 p-5">
              <Stars value={r.rating} />
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">"{r.comentario}"</p>
              <p className="mt-3 text-xs font-semibold text-neutral-800">{r.nombre}</p>
              <p className="text-[11px] text-neutral-400">{r.fecha}</p>
            </div>
          ))}
        </div>
      </section>

      {relacionados.length > 0 && (
        <section className="mt-16">
          <h2 className="!m-0 !text-xl font-semibold sm:!text-2xl">También te puede interesar</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {relacionados.map((p) => (
              <ProductCard key={p.id} producto={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
