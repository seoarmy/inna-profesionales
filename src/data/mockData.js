export const rubros = [
  {
    id: "peluqueria",
    nombre: "Peluquería",
    descripcion: "Color, tratamiento y herramientas profesionales",
    icon: "Scissors",
  },
  {
    id: "estetica",
    nombre: "Estética",
    descripcion: "Depilación, pestañas y cuidado facial",
    icon: "Sparkles",
  },
  {
    id: "manicuria-pedicuria",
    nombre: "Manicuría y Pedicuría",
    descripcion: "Esmaltes, geles y herramientas",
    icon: "Hand",
  },
  {
    id: "barberia",
    nombre: "Barbería",
    descripcion: "Máquinas, afeitado y cuidado de barba",
    icon: "Axe",
  },
  {
    id: "otros",
    nombre: "Otros",
    descripcion: "Accesorios y herramientas generales",
    icon: "PackageOpen",
  },
];

export const marcas = [
  { id: "eloise", nombre: "Eloise" },
  { id: "citygirl", nombre: "City Girl" },
  { id: "bekim", nombre: "Bekim" },
  { id: "biobellus", nombre: "Biobellus" },
  { id: "biocom", nombre: "Biocom" },
  { id: "nex", nombre: "Nex" },
  { id: "roubaix", nombre: "Roubaix" },
  { id: "plasma", nombre: "Plasma" },
  { id: "luzkin", nombre: "Luzkin" },
  { id: "opcion", nombre: "Opción" },
  { id: "mely", nombre: "Mely" },
  { id: "cherimoya", nombre: "Cherimoya" },
  { id: "cuvage", nombre: "Cuvage" },
  { id: "playcolor", nombre: "Play Color" },
  { id: "mastertools", nombre: "Mastertools" },
  { id: "kemei", nombre: "Kemei" },
  { id: "master", nombre: "Master" },
];

export const categorias = [
  // Peluquería
  { id: "shampoo", nombre: "Shampoo", rubro: "peluqueria" },
  { id: "acondicionador", nombre: "Acondicionador", rubro: "peluqueria" },
  { id: "cremas-oxidantes", nombre: "Cremas oxidantes", rubro: "peluqueria" },
  { id: "tinturas", nombre: "Tinturas", rubro: "peluqueria" },
  { id: "polvo-decolorante", nombre: "Polvo decolorante", rubro: "peluqueria" },
  { id: "alisados-tratamientos", nombre: "Alisados y tratamientos", rubro: "peluqueria" },
  { id: "ampollas", nombre: "Ampollas", rubro: "peluqueria" },
  { id: "mascaras-nutricion", nombre: "Máscaras y nutrición", rubro: "peluqueria" },
  { id: "serums-cremas", nombre: "Sérums y cremas hidratantes", rubro: "peluqueria" },
  { id: "lociones-tonicos", nombre: "Lociones y tónicos", rubro: "peluqueria" },
  { id: "coloracion-decoloracion", nombre: "Coloración y decoloración", rubro: "peluqueria" },
  { id: "curly-rulos", nombre: "Línea curly / rulos", rubro: "peluqueria" },
  { id: "crema-peinar", nombre: "Crema de peinar / BB cream", rubro: "peluqueria" },
  { id: "secadores-planchitas", nombre: "Secadores y planchitas", rubro: "peluqueria" },
  { id: "tijeras", nombre: "Tijeras", rubro: "peluqueria" },
  { id: "peinado", nombre: "Peinado", rubro: "peluqueria" },
  // Barbería
  { id: "barba-afeitado", nombre: "Barba y afeitado", rubro: "barberia" },
  { id: "barba-cuidados", nombre: "Barba y cuidados", rubro: "barberia" },
  { id: "maquinas-corte", nombre: "Máquinas de corte / patilleras", rubro: "barberia" },
  { id: "insumos-barberia", nombre: "Insumos de barbería", rubro: "barberia" },
  { id: "delantales-capas", nombre: "Delantales, capas y cuellos", rubro: "barberia" },
  // Manicuría y Pedicuría
  { id: "esmaltes-semi", nombre: "Esmaltes semi, bases y top", rubro: "manicuria-pedicuria" },
  { id: "insumos-manicuria", nombre: "Insumos de manicuría", rubro: "manicuria-pedicuria" },
  { id: "herramientas-manicuria", nombre: "Manicuría-pedicuría (herramientas)", rubro: "manicuria-pedicuria" },
  { id: "polimeros-geles", nombre: "Polímeros, geles y más", rubro: "manicuria-pedicuria" },
  { id: "decoracion-unas", nombre: "Decoración de uñas", rubro: "manicuria-pedicuria" },
  { id: "cabinas-tornos", nombre: "Cabinas y tornos", rubro: "manicuria-pedicuria" },
  // Estética
  { id: "cera-depilatoria", nombre: "Cera depilatoria", rubro: "estetica" },
  { id: "insumos-depilacion", nombre: "Insumos de depilación", rubro: "estetica" },
  { id: "insumos-pestanas", nombre: "Insumos de pestañas", rubro: "estetica" },
  { id: "protectores-solares", nombre: "Protectores solares", rubro: "estetica" },
  { id: "tratamientos-exfoliacion", nombre: "Tratamientos, exfoliación y arcillas", rubro: "estetica" },
  { id: "geles-limpieza", nombre: "Geles y emulsiones de limpieza", rubro: "estetica" },
  // Otros
  { id: "bowls-pinceles", nombre: "Bowls, pinceles, gorras y más", rubro: "otros" },
  { id: "lavacabezas", nombre: "Ayudantes y lavacabezas", rubro: "otros" },
  { id: "herramientas-generales", nombre: "Herramientas generales", rubro: "otros" },
];

export const productos = [
  {
    id: 1,
    nombre: "Oxidante 30 Vol",
    marca: "roubaix",
    categoria: "cremas-oxidantes",
    rubro: "peluqueria",
    precio: 4500,
    precioAnterior: null,
    stock: 20,
    descripcion:
      "Crema oxidante estable de 30 volúmenes, formulada para acompañar coloración y decoloración con resultados parejos y de larga duración.",
  },
  {
    id: 2,
    nombre: "Tintura Permanente N°6 Rubio Oscuro",
    marca: "nex",
    categoria: "tinturas",
    rubro: "peluqueria",
    precio: 3800,
    precioAnterior: 4600,
    stock: 35,
    descripcion:
      "Coloración permanente de alta cobertura de canas, pigmentos estables y acabado uniforme desde la primera aplicación.",
  },
  {
    id: 3,
    nombre: "Polvo Decolorante Azul Antiamarillo",
    marca: "plasma",
    categoria: "polvo-decolorante",
    rubro: "peluqueria",
    precio: 5200,
    precioAnterior: null,
    stock: 18,
    descripcion:
      "Decolorante en polvo de acción rápida, minimiza reflejos amarillos y protege la fibra capilar durante el proceso.",
  },
  {
    id: 4,
    nombre: "Máscara Regenerante Nutritiva 500ml",
    marca: "eloise",
    categoria: "mascaras-nutricion",
    rubro: "peluqueria",
    precio: 6900,
    precioAnterior: 8200,
    stock: 24,
    descripcion:
      "Tratamiento intensivo que restaura la fibra capilar dañada, aporta brillo y suavidad de uso profesional.",
  },
  {
    id: 5,
    nombre: "Shampoo Reconstructor 1L",
    marca: "biobellus",
    categoria: "shampoo",
    rubro: "peluqueria",
    precio: 4100,
    precioAnterior: null,
    stock: 40,
    descripcion:
      "Shampoo de uso profesional formulado para cabellos procesados, limpieza suave sin resecar el cuero cabelludo.",
  },
  {
    id: 6,
    nombre: "Ampollas de Keratina x12",
    marca: "cherimoya",
    categoria: "ampollas",
    rubro: "peluqueria",
    precio: 5600,
    precioAnterior: null,
    stock: 30,
    descripcion:
      "Tratamiento intensivo monodosis con keratina hidrolizada, ideal para cabellos debilitados o con procesos químicos.",
  },
  {
    id: 7,
    nombre: "Crema de Peinar Curly Definición",
    marca: "cuvage",
    categoria: "curly-rulos",
    rubro: "peluqueria",
    precio: 3400,
    precioAnterior: null,
    stock: 22,
    descripcion:
      "Crema de peinar para cabello rulado y ondulado, define bucles y controla el frizz sin apelmazar.",
  },
  {
    id: 8,
    nombre: "Plancha Alisadora Profesional",
    marca: "mastertools",
    categoria: "secadores-planchitas",
    rubro: "peluqueria",
    precio: 18500,
    precioAnterior: 22000,
    stock: 8,
    descripcion:
      "Plancha de placas cerámicas con control de temperatura, calentamiento rápido para uso profesional intensivo.",
  },
  {
    id: 9,
    nombre: "Tijera de Pulir 5.5\"",
    marca: "mastertools",
    categoria: "tijeras",
    rubro: "peluqueria",
    precio: 9800,
    precioAnterior: null,
    stock: 12,
    descripcion:
      "Tijera de acero inoxidable de precisión, diseñada para técnicas de pulido y desfilado profesional.",
  },
  {
    id: 10,
    nombre: "Kit Afeitado Clásico",
    marca: "master",
    categoria: "barba-afeitado",
    rubro: "barberia",
    precio: 7200,
    precioAnterior: null,
    stock: 15,
    descripcion:
      "Kit completo para afeitado tradicional en barbería: espuma, navaja y loción post afeitado.",
  },
  {
    id: 11,
    nombre: "Aceite para Barba Nutritivo",
    marca: "biocom",
    categoria: "barba-cuidados",
    rubro: "barberia",
    precio: 4300,
    precioAnterior: 5100,
    stock: 27,
    descripcion:
      "Aceite hidratante para barba, ablanda el vello y nutre la piel evitando la sequedad e irritación.",
  },
  {
    id: 12,
    nombre: "Patillera Profesional Kemei",
    marca: "kemei",
    categoria: "maquinas-corte",
    rubro: "barberia",
    precio: 14900,
    precioAnterior: null,
    stock: 10,
    descripcion:
      "Máquina de corte inalámbrica de alto rendimiento con cuchillas de titanio y autonomía extendida.",
  },
  {
    id: 13,
    nombre: "Capa de Corte Impermeable",
    marca: "opcion",
    categoria: "delantales-capas",
    rubro: "barberia",
    precio: 2600,
    precioAnterior: null,
    stock: 33,
    descripcion:
      "Capa profesional impermeable con cierre ajustable, resistente a productos químicos y tintura.",
  },
  {
    id: 14,
    nombre: "Esmalte Semipermanente 10ml Rojo Clásico",
    marca: "citygirl",
    categoria: "esmaltes-semi",
    rubro: "manicuria-pedicuria",
    precio: 2900,
    precioAnterior: 3400,
    stock: 45,
    descripcion:
      "Esmalte semipermanente de alta pigmentación y larga duración, curado en cabina LED/UV.",
  },
  {
    id: 15,
    nombre: "Base y Top Coat Dúo",
    marca: "citygirl",
    categoria: "esmaltes-semi",
    rubro: "manicuria-pedicuria",
    precio: 3600,
    precioAnterior: null,
    stock: 38,
    descripcion:
      "Dúo profesional de base fortalecedora y top coat de brillo extremo para esmaltado semipermanente.",
  },
  {
    id: 16,
    nombre: "Gel Constructor de Uñas 30g",
    marca: "playcolor",
    categoria: "polimeros-geles",
    rubro: "manicuria-pedicuria",
    precio: 5400,
    precioAnterior: null,
    stock: 19,
    descripcion:
      "Gel de autonivelación para esculpido y extensión de uñas, textura firme y fácil de limar.",
  },
  {
    id: 17,
    nombre: "Cabina Lámpara LED/UV 48W",
    marca: "mastertools",
    categoria: "cabinas-tornos",
    rubro: "manicuria-pedicuria",
    precio: 21000,
    precioAnterior: 25500,
    stock: 6,
    descripcion:
      "Cabina de curado profesional LED/UV con sensor automático, ideal para esmaltado semipermanente y gel.",
  },
  {
    id: 18,
    nombre: "Torno Eléctrico para Uñas",
    marca: "mastertools",
    categoria: "cabinas-tornos",
    rubro: "manicuria-pedicuria",
    precio: 16800,
    precioAnterior: null,
    stock: 9,
    descripcion:
      "Torno de baja vibración con set de fresas intercambiables, uso profesional en manicuría y pedicuría.",
  },
  {
    id: 19,
    nombre: "Cera Depilatoria Roll-On Chocolate",
    marca: "luzkin",
    categoria: "cera-depilatoria",
    rubro: "estetica",
    precio: 3100,
    precioAnterior: null,
    stock: 28,
    descripcion:
      "Cera tibia roll-on de baja temperatura, formulada para pieles sensibles con resultados duraderos.",
  },
  {
    id: 20,
    nombre: "Bandas Depilatorias Corporales x100",
    marca: "luzkin",
    categoria: "insumos-depilacion",
    rubro: "estetica",
    precio: 2400,
    precioAnterior: null,
    stock: 50,
    descripcion:
      "Bandas de tela no tejida de alta resistencia, uso profesional para depilación con cera tibia y caliente.",
  },
  {
    id: 21,
    nombre: "Pestañas Efecto Volumen Ruso",
    marca: "mely",
    categoria: "insumos-pestanas",
    rubro: "estetica",
    precio: 4700,
    precioAnterior: 5500,
    stock: 16,
    descripcion:
      "Set de pestañas sintéticas premium para técnica de volumen ruso, curvatura y grosor uniforme.",
  },
  {
    id: 22,
    nombre: "Arcilla Purificante Facial 250g",
    marca: "biobellus",
    categoria: "tratamientos-exfoliacion",
    rubro: "estetica",
    precio: 3900,
    precioAnterior: null,
    stock: 21,
    descripcion:
      "Arcilla facial para tratamientos de limpieza profunda, controla el exceso de grasitud y afina el poro.",
  },
  {
    id: 23,
    nombre: "Set de Bowls y Pinceles para Tinturas",
    marca: "opcion",
    categoria: "bowls-pinceles",
    rubro: "otros",
    precio: 2200,
    precioAnterior: null,
    stock: 60,
    descripcion:
      "Set profesional de bowl antimanchas y pinceles de aplicación para coloración y tratamientos capilares.",
  },
];

export function getRubroById(id) {
  return rubros.find((r) => r.id === id);
}

export function getMarcaById(id) {
  return marcas.find((m) => m.id === id);
}

export function getCategoriaById(id) {
  return categorias.find((c) => c.id === id);
}

export function getProductosByRubro(rubroId) {
  return productos.filter((p) => p.rubro === rubroId);
}

export function getCategoriasByRubro(rubroId) {
  return categorias.filter((c) => c.rubro === rubroId);
}

export function getRelacionados(producto, limit = 4) {
  return productos
    .filter((p) => p.id !== producto.id && p.rubro === producto.rubro)
    .slice(0, limit);
}

export function getSku(producto) {
  return `INN-${String(producto.id).padStart(5, "0")}`;
}

export function getRating(producto) {
  return Math.round((3.8 + ((producto.id * 37) % 12) / 10) * 10) / 10;
}

export function getReviewsCount(producto) {
  return 6 + ((producto.id * 13) % 38);
}

const modoDeUsoPorRubro = {
  peluqueria:
    "Aplicar sobre cabello limpio y húmedo, distribuir de puntas a raíz según técnica y dejar actuar el tiempo indicado en el envase. Enjuagar con abundante agua.",
  barberia:
    "Aplicar sobre la zona a tratar con las manos limpias o herramienta indicada. Uso profesional, seguir las recomendaciones de higiene entre cliente y cliente.",
  "manicuria-pedicuria":
    "Preparar la uña según técnica habitual, aplicar en capas finas y curar/secar según corresponda al producto. Uso exclusivo para profesionales matriculados.",
  estetica:
    "Aplicar sobre piel limpia y seca, siguiendo el protocolo del tratamiento. Realizar prueba de sensibilidad previa en pieles reactivas.",
  otros:
    "Uso profesional según protocolo de trabajo habitual del salón o estudio.",
};

export function getModoDeUso(producto) {
  return modoDeUsoPorRubro[producto.rubro] || modoDeUsoPorRubro.otros;
}

const reviewTemplates = [
  { nombre: "Marina G.", comentario: "Excelente calidad, es el producto que uso en el salón hace meses. Rinde muchísimo." },
  { nombre: "Julián P.", comentario: "Buena relación precio-calidad, llegó bien embalado y a tiempo." },
  { nombre: "Sofía R.", comentario: "Me lo recomendaron y no decepciona. Volvería a comprar sin dudas." },
  { nombre: "Nicolás A.", comentario: "Cumple lo que promete, ideal para uso profesional diario." },
];

export function getReviews(producto) {
  const start = producto.id % reviewTemplates.length;
  return [0, 1, 2].map((i) => {
    const t = reviewTemplates[(start + i) % reviewTemplates.length];
    return {
      ...t,
      rating: Math.max(3, Math.min(5, Math.round(getRating(producto)) - (i === 2 ? 1 : 0))),
      fecha: `hace ${(producto.id + i * 3) % 20 + 1} días`,
    };
  });
}

export const business = {
  nombre: "INNA Profesional",
  direccion: "Av. Constituyentes 285, B1617, Gral. Pacheco, Provincia de Buenos Aires",
  mapsLink: "https://maps.google.com/?q=" + encodeURIComponent("Av. Constituyentes 285, B1617, Gral. Pacheco, Provincia de Buenos Aires"),
  telefono: "+54 9 11 2755-5912",
  telefonoHref: "tel:+5491127555912",
  telefonoWhatsapp: "5491127555912",
  email: "innaprofesional@gmail.com",
  instagram: "https://www.instagram.com/innaprofesional",
  facebook: "https://www.facebook.com/p/INNA-Profesional-100089948856472/",
  tiktok: "https://www.tiktok.com/@innaprofesional",
};

export function whatsappLink(mensaje = "Hola, quiero hacer una consulta sobre...") {
  return `https://wa.me/${business.telefonoWhatsapp}?text=${encodeURIComponent(mensaje)}`;
}
