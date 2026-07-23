import { useMemo, useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X, Search } from "lucide-react";
import {
  getRubroById,
  getProductosByRubro,
  getCategoriasByRubro,
  marcas as allMarcas,
} from "../data/mockData";
import Breadcrumb from "../components/ui/Breadcrumb";
import ProductCard from "../components/ui/ProductCard";
import CategoryFilters from "../components/ui/CategoryFilters";

const PAGE_SIZE = 8;

export default function Catalogo() {
  const { rubro: rubroId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const rubro = getRubroById(rubroId);

  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [selectedCategorias, setSelectedCategorias] = useState([]);
  const [selectedMarcas, setSelectedMarcas] = useState([]);
  const [priceRange, setPriceRange] = useState(25000);
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    setSelectedCategorias([]);
    setSelectedMarcas([]);
    setPriceRange(25000);
    setPage(1);
  }, [rubroId]);

  useEffect(() => {
    setSearch(searchParams.get("q") || "");
  }, [rubroId, searchParams]);

  const categoriasDelRubro = useMemo(() => getCategoriasByRubro(rubroId), [rubroId]);
  const marcasDelRubro = useMemo(() => {
    const productos = getProductosByRubro(rubroId);
    const ids = new Set(productos.map((p) => p.marca));
    return allMarcas.filter((m) => ids.has(m.id));
  }, [rubroId]);

  const productosFiltrados = useMemo(() => {
    let list = getProductosByRubro(rubroId);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((p) => p.nombre.toLowerCase().includes(q));
    }
    if (selectedCategorias.length) {
      list = list.filter((p) => selectedCategorias.includes(p.categoria));
    }
    if (selectedMarcas.length) {
      list = list.filter((p) => selectedMarcas.includes(p.marca));
    }
    list = list.filter((p) => p.precio <= priceRange);
    return list;
  }, [rubroId, search, selectedCategorias, selectedMarcas, priceRange]);

  const totalPages = Math.max(1, Math.ceil(productosFiltrados.length / PAGE_SIZE));
  const paginated = productosFiltrados.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const toggleCategoria = (id) => {
    setSelectedCategorias((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]));
    setPage(1);
  };
  const toggleMarca = (id) => {
    setSelectedMarcas((prev) => (prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]));
    setPage(1);
  };

  if (!rubro) {
    return (
      <div className="container-inna py-24 text-center">
        <h1 className="!text-2xl font-semibold">Rubro no encontrado</h1>
      </div>
    );
  }

  const filtersProps = {
    categorias: categoriasDelRubro,
    marcas: marcasDelRubro,
    selectedCategorias,
    selectedMarcas,
    onToggleCategoria: toggleCategoria,
    onToggleMarca: toggleMarca,
    priceRange,
    onPriceChange: (v) => {
      setPriceRange(v);
      setPage(1);
    },
  };

  return (
    <div className="container-inna py-8 sm:py-10">
      <Breadcrumb items={[{ label: rubro.nombre }]} />
      <h1 className="!m-0 mt-3 !text-2xl font-semibold sm:!text-3xl">{rubro.nombre}</h1>
      <p className="mt-1 text-sm text-neutral-500">{rubro.descripcion}</p>

      <div className="mt-6 flex items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Buscar en este rubro"
            className="w-full rounded-full border border-neutral-200 bg-neutral-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-violet-400 focus:bg-white"
          />
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
        </div>
        <button
          onClick={() => setFiltersOpen(true)}
          className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-50 lg:hidden"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filtrar
        </button>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">
          <CategoryFilters {...filtersProps} />
        </aside>

        <div>
          <p className="mb-4 text-xs text-neutral-500">{productosFiltrados.length} productos encontrados</p>
          {paginated.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-neutral-50 py-20 text-center">
              <p className="text-sm text-neutral-500">No encontramos productos con esos filtros.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
              {paginated.map((p) => (
                <ProductCard key={p.id} producto={p} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`h-9 w-9 rounded-full text-sm font-medium transition-colors ${
                    n === page ? "bg-violet-700 text-white" : "text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile filters drawer */}
      <div
        className={`fixed inset-0 z-50 bg-neutral-900/40 backdrop-blur-[2px] transition-opacity lg:hidden ${
          filtersOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setFiltersOpen(false)}
      />
      <div
        className={`fixed inset-x-0 bottom-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-2xl bg-white p-5 shadow-2xl transition-transform duration-300 lg:hidden ${
          filtersOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="mb-2 flex items-center justify-between">
          <h2 className="!m-0 !text-base font-semibold">Filtros</h2>
          <button onClick={() => setFiltersOpen(false)} className="rounded-full p-2 hover:bg-neutral-100" aria-label="Cerrar filtros">
            <X className="h-5 w-5" />
          </button>
        </div>
        <CategoryFilters {...filtersProps} />
        <button
          onClick={() => setFiltersOpen(false)}
          className="mt-2 w-full rounded-full bg-violet-700 py-3 text-sm font-semibold text-white hover:bg-violet-800"
        >
          Ver {productosFiltrados.length} resultados
        </button>
      </div>
    </div>
  );
}
