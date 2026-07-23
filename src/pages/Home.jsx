import Hero from "../components/home/Hero";
import RubroSelector from "../components/home/RubroSelector";
import MarcasCarousel from "../components/home/MarcasCarousel";
import ProductosDestacados from "../components/home/ProductosDestacados";
import Promociones from "../components/home/Promociones";
import Beneficios from "../components/home/Beneficios";
import Institucional from "../components/home/Institucional";

export default function Home() {
  return (
    <>
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
