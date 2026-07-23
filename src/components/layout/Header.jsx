import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Search,
  User,
  ShoppingCart,
  Menu,
  X,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { rubros, business, productos } from "../../data/mockData";
import { useCart } from "../../context/CartContext";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "../ui/SocialIcons";

const navLinks = [...rubros.map((r) => ({ to: `/catalogo/${r.id}`, label: r.nombre })), { to: "/nosotros", label: "Nosotros" }, { to: "/contacto", label: "Contacto" }];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { totalItems, openCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = search.trim();
    if (!q) return;
    const qLower = q.toLowerCase();
    const match = productos.find((p) => p.nombre.toLowerCase().includes(qLower));
    const rubroDestino = match?.rubro || "peluqueria";
    navigate(`/catalogo/${rubroDestino}?q=${encodeURIComponent(q)}`);
  };

  return (
    <header className={`sticky top-0 z-30 bg-white transition-shadow ${scrolled ? "shadow-md shadow-neutral-900/5" : ""}`}>
      {/* Topbar */}
      <div className="hidden bg-violet-950 text-violet-100 sm:block">
        <div className="container-inna flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="Instagram"><InstagramIcon className="h-3.5 w-3.5" /></a>
            <a href={business.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="Facebook"><FacebookIcon className="h-3.5 w-3.5" /></a>
            <a href={business.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white" aria-label="TikTok"><TikTokIcon className="h-3.5 w-3.5" /></a>
          </div>
          <div className="flex items-center gap-5">
            <a href={business.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white"><MapPin className="h-3.5 w-3.5" />{business.direccion}</a>
            <a href={business.telefonoHref} className="flex items-center gap-1.5 hover:text-white"><Phone className="h-3.5 w-3.5" />{business.telefono}</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container-inna flex h-16 items-center gap-4 sm:h-20 sm:gap-8">
        <button
          className="rounded-md p-2 text-neutral-700 hover:bg-neutral-100 lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menú"
        >
          <Menu className="h-6 w-6" />
        </button>

        <Link to="/" className="shrink-0">
          <span className="font-display text-xl font-semibold tracking-tight text-violet-800 sm:text-2xl">
            INNA <span className="font-normal text-neutral-800">Profesional</span>
          </span>
        </Link>

        <form onSubmit={handleSearch} className="relative hidden flex-1 max-w-xl lg:block">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar productos y marcas"
            className="w-full rounded-full border border-neutral-200 bg-neutral-50 py-2.5 pl-5 pr-11 text-sm text-neutral-800 outline-none transition-colors focus:border-violet-400 focus:bg-white"
          />
          <button type="submit" className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-violet-700 p-2 text-white hover:bg-violet-800" aria-label="Buscar">
            <Search className="h-4 w-4" />
          </button>
        </form>

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => alert("Demo: el login de clientes se habilitará en la próxima etapa del proyecto.")}
            className="hidden rounded-full p-2.5 text-neutral-700 hover:bg-neutral-100 sm:flex"
            aria-label="Cuenta"
          >
            <User className="h-5 w-5" />
          </button>
          <button onClick={openCart} className="relative rounded-full p-2.5 text-neutral-700 hover:bg-neutral-100" aria-label="Carrito">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-violet-700 text-[10px] font-semibold text-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search mobile */}
      <form onSubmit={handleSearch} className="container-inna pb-3 lg:hidden">
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar productos y marcas"
            className="w-full rounded-full border border-neutral-200 bg-neutral-50 py-2.5 pl-5 pr-11 text-sm outline-none focus:border-violet-400 focus:bg-white"
          />
          <button type="submit" className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full bg-violet-700 p-2 text-white" aria-label="Buscar">
            <Search className="h-4 w-4" />
          </button>
        </div>
      </form>

      {/* Nav bar rubros */}
      <nav className="hidden border-t border-neutral-100 lg:block">
        <div className="container-inna flex h-12 items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-violet-700" : "text-neutral-600 hover:text-violet-700"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-neutral-900/40 backdrop-blur-[2px] transition-opacity lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      />
      <aside
        className={`fixed left-0 top-0 z-40 flex h-full w-72 flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
          <span className="font-display text-lg font-semibold text-violet-800">Menú</span>
          <button onClick={() => setMobileOpen(false)} className="rounded-full p-2 hover:bg-neutral-100" aria-label="Cerrar menú">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-2 py-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium ${
                  isActive ? "bg-violet-50 text-violet-700" : "text-neutral-700 hover:bg-neutral-50"
                }`
              }
            >
              {link.label}
              <ChevronRight className="h-4 w-4 opacity-40" />
            </NavLink>
          ))}
        </nav>
        <div className="border-t border-neutral-100 px-5 py-4 text-xs text-neutral-500">
          <a href={business.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-violet-700"><MapPin className="h-3.5 w-3.5" />{business.direccion}</a>
          <a href={business.telefonoHref} className="mt-1.5 flex items-center gap-1.5 hover:text-violet-700"><Phone className="h-3.5 w-3.5" />{business.telefono}</a>
        </div>
      </aside>
    </header>
  );
}
