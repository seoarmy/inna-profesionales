import { Helmet } from "react-helmet-async";

export const SITE_NAME = "INNA Profesional";
export const SITE_URL = "https://inna-profesionales.web.app";
export const DEFAULT_DESCRIPTION =
  "Distribuidora de insumos profesionales para peluquería, estética, manicuría y barbería. Stock real, marcas reconocidas y atención directa.";
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  jsonLd,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Insumos para estética profesional`;
  const url = `${SITE_URL}${path}`;
  const jsonLdList = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="es_AR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLdList.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
