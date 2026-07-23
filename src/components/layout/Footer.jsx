import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CreditCard,
  Truck,
} from "lucide-react";
import { business, rubros } from "../../data/mockData";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "../ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-violet-950 text-violet-200">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="container-inna flex flex-col items-center gap-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="!m-0 font-display !text-xl font-semibold text-white">Sumate a nuestro newsletter</h3>
            <p className="mt-1 text-sm text-violet-300">Novedades, lanzamientos y ofertas exclusivas para profesionales.</p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-sm items-center overflow-hidden rounded-full bg-white/5 ring-1 ring-white/15 focus-within:ring-violet-400"
          >
            <input
              type="email"
              required
              placeholder="Tu email"
              className="w-full bg-transparent px-5 py-3 text-sm text-white placeholder:text-violet-300/70 outline-none"
            />
            <button
              type="submit"
              className="m-1 flex shrink-0 items-center gap-1 rounded-full bg-violet-500 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-400"
            >
              Suscribirme <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      </div>

      <div className="container-inna grid grid-cols-2 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-5">
        <div className="col-span-2">
          <span className="font-display text-xl font-semibold text-white">INNA Profesional</span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-violet-300">
            Distribuidora de insumos profesionales para peluquería, estética, manicuría y barbería.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={business.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-white/5 p-2 hover:bg-white/10"><InstagramIcon className="h-4 w-4" /></a>
            <a href={business.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full bg-white/5 p-2 hover:bg-white/10"><FacebookIcon className="h-4 w-4" /></a>
            <a href={business.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="rounded-full bg-white/5 p-2 hover:bg-white/10"><TikTokIcon className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="!m-0 !mb-4 text-xs font-semibold uppercase tracking-wider text-violet-400">Rubros</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            {rubros.map((r) => (
              <li key={r.id}>
                <Link to={`/catalogo/${r.id}`} className="text-violet-300 hover:text-white">{r.nombre}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="!m-0 !mb-4 text-xs font-semibold uppercase tracking-wider text-violet-400">Información</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li><Link to="/nosotros" className="text-violet-300 hover:text-white">Nosotros</Link></li>
            <li><Link to="/contacto" className="text-violet-300 hover:text-white">Contacto</Link></li>
            <li><Link to="/terminos-y-condiciones" className="text-violet-300 hover:text-white">Términos y condiciones</Link></li>
            <li><Link to="/politica-de-privacidad" className="text-violet-300 hover:text-white">Política de privacidad</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="!m-0 !mb-4 text-xs font-semibold uppercase tracking-wider text-violet-400">Contacto</h4>
          <ul className="flex flex-col gap-3 text-sm text-violet-300">
            <li>
              <a href={business.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-white">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />{business.direccion}
              </a>
            </li>
            <li>
              <a href={business.telefonoHref} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 shrink-0" />{business.telefono}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4 shrink-0" />{business.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-inna flex flex-col items-center justify-between gap-3 py-5 text-xs text-violet-400 sm:flex-row">
          <p>© {new Date().getFullYear()} INNA Profesional. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><CreditCard className="h-4 w-4" />Pago contra entrega / transferencia</span>
            <span className="flex items-center gap-1.5"><Truck className="h-4 w-4" />Envíos a todo el país</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
