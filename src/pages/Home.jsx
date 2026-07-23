import Hero from "../components/home/Hero";
import RubroSelector from "../components/home/RubroSelector";
import MarcasCarousel from "../components/home/MarcasCarousel";
import ProductosDestacados from "../components/home/ProductosDestacados";
import Promociones from "../components/home/Promociones";
import Beneficios from "../components/home/Beneficios";
import Institucional from "../components/home/Institucional";
import Seo from "../components/seo/Seo";
import { getLocalBusinessSchema } from "../lib/schema";

export default function Home() {
  return (
    <>
      <Seo
        title="Insumos profesionales para el rubro de la estética"
        path="/"
        jsonLd={getLocalBusinessSchema()}
      />
      <Hero />
      <RubroSelector />
      <MarcasCarousel />
      <ProductosDestacados />
      <Promociones />
      <Beneficios />
      <Institucional />
    </>
  );
}
