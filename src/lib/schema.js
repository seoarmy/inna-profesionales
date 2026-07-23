import { SITE_URL } from "../components/seo/Seo";
import { business, getMarcaById, getSku, getRating, getReviewsCount } from "../data/mockData";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    name: business.nombre,
    url: SITE_URL,
    telephone: business.telefono,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Constituyentes 285",
      addressLocality: "General Pacheco",
      addressRegion: "Buenos Aires",
      postalCode: "B1617",
      addressCountry: "AR",
    },
    sameAs: [business.instagram, business.facebook, business.tiktok],
  };
}

export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.to ? `${SITE_URL}${item.to}` : undefined,
    })),
  };
}

export function getProductSchema(producto) {
  const marca = getMarcaById(producto.marca);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: producto.nombre,
    description: producto.descripcion,
    sku: getSku(producto),
    brand: { "@type": "Brand", name: marca?.nombre || business.nombre },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: getRating(producto),
      reviewCount: getReviewsCount(producto),
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/producto/${producto.id}`,
      priceCurrency: "ARS",
      price: producto.precio,
      availability:
        producto.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      seller: { "@type": "Organization", name: business.nombre },
    },
  };
}
