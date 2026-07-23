import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";
import { business, whatsappLink } from "../data/mockData";
import Breadcrumb from "../components/ui/Breadcrumb";
import Seo from "../components/seo/Seo";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "../components/ui/SocialIcons";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="container-inna py-8 sm:py-12">
      <Seo
        title="Contacto"
        description="Escribinos por WhatsApp, email o visitanos en nuestro local de Gral. Pacheco. Atención directa para profesionales del rubro estética."
        path="/contacto"
      />
      <Breadcrumb items={[{ label: "Contacto" }]} />
      <h1 className="!m-0 mt-3 !text-3xl font-semibold sm:!text-4xl">Hablemos</h1>
      <p className="mt-2 max-w-lg text-sm text-neutral-500 sm:text-base">
        Escribinos por el formulario, WhatsApp o visitanos en nuestro local de Gral. Pacheco.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="rounded-2xl bg-neutral-50 p-6 sm:p-8">
          {sent ? (
            <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                <Send className="h-5 w-5" />
              </span>
              <p className="text-sm font-medium text-neutral-700">¡Gracias! Tu mensaje fue enviado (demo).</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-neutral-600">Nombre</label>
                <input
                  required
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-violet-400"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-neutral-600">Email</label>
                <input
                  required
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-violet-400"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-neutral-600">Mensaje</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Contanos en qué podemos ayudarte"
                  className="w-full resize-none rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-violet-400"
                />
              </div>
              <button
                type="submit"
                className="mt-2 rounded-full bg-violet-700 py-3 text-sm font-semibold text-white hover:bg-violet-800"
              >
                Enviar mensaje
              </button>
            </div>
          )}
        </form>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 text-sm text-neutral-600">
            <a href={business.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-violet-700">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />{business.direccion}
            </a>
            <a href={business.telefonoHref} className="flex items-center gap-3 hover:text-violet-700">
              <Phone className="h-4 w-4 shrink-0 text-violet-600" />{business.telefono}
            </a>
            <a href={`mailto:${business.email}`} className="flex items-center gap-3 hover:text-violet-700">
              <Mail className="h-4 w-4 shrink-0 text-violet-600" />{business.email}
            </a>
          </div>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-whatsapp py-3 text-sm font-semibold text-white hover:bg-whatsapp-dark"
          >
            <MessageCircle className="h-4 w-4" />
            Escribinos por WhatsApp
          </a>

          <div className="flex gap-3">
            <a href={business.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full bg-neutral-100 p-2.5 text-neutral-600 hover:bg-violet-100 hover:text-violet-700"><InstagramIcon className="h-4 w-4" /></a>
            <a href={business.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full bg-neutral-100 p-2.5 text-neutral-600 hover:bg-violet-100 hover:text-violet-700"><FacebookIcon className="h-4 w-4" /></a>
            <a href={business.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="rounded-full bg-neutral-100 p-2.5 text-neutral-600 hover:bg-violet-100 hover:text-violet-700"><TikTokIcon className="h-4 w-4" /></a>
          </div>

          <div className="overflow-hidden rounded-2xl ring-1 ring-neutral-100">
            <iframe
              title="Ubicación INNA Profesional"
              src="https://maps.google.com/maps?q=Av.%20Constituyentes%20285%2C%20General%20Pacheco%2C%20Buenos%20Aires&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
