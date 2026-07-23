import Breadcrumb from "../components/ui/Breadcrumb";
import { business } from "../data/mockData";

const secciones = [
  {
    title: "1. Aceptación de los términos",
    body: `Al acceder y utilizar este sitio, el usuario acepta los presentes Términos y Condiciones, así como las políticas y avisos aquí referenciados. Si no está de acuerdo con alguno de sus puntos, debe abstenerse de utilizar el sitio y realizar compras.`,
  },
  {
    title: "2. Sobre INNA Profesional",
    body: `${business.nombre} es una distribuidora de insumos profesionales para peluquería, estética, manicuría y barbería, con domicilio en ${business.direccion}. Este sitio funciona como catálogo y canal de venta online dirigido a profesionales y comercios del rubro.`,
  },
  {
    title: "3. Productos y precios",
    body: `Los precios publicados están expresados en pesos argentinos (ARS) e incluyen los impuestos de ley vigentes al momento de la publicación. INNA Profesional se reserva el derecho de modificar precios, stock y condiciones de venta sin previo aviso. Las imágenes de productos son ilustrativas y pueden diferir del producto final por variaciones de packaging del fabricante.`,
  },
  {
    title: "4. Proceso de compra",
    body: `La compra se considera confirmada una vez recibido el pago correspondiente. INNA Profesional podrá cancelar o anular un pedido ante error manifiesto de precio o stock, notificando al comprador y reintegrando el monto abonado por el mismo medio de pago utilizado.`,
  },
  {
    title: "5. Derecho de arrepentimiento (Ley 24.240)",
    body: `De conformidad con el artículo 34 de la Ley de Defensa del Consumidor N° 24.240 y su Decreto Reglamentario, el consumidor tiene derecho a revocar la aceptación de la compra dentro de los diez (10) días corridos contados a partir de la entrega del producto, sin responsabilidad alguna. Para ejercer este derecho, el usuario debe contactarse por WhatsApp o email a ${business.email}. Los costos de devolución del producto correrán por cuenta del comprador, salvo que la devolución obedezca a un error de INNA Profesional o a un defecto del producto.`,
  },
  {
    title: "6. Cambios y devoluciones",
    body: `Se aceptan cambios y devoluciones dentro de los diez (10) días de recibido el producto, siempre que el mismo se encuentre sin uso, en su envase original y con todos sus accesorios. Los productos con defectos de fabricación podrán cambiarse conforme a la garantía legal vigente (Ley 24.240, art. 11 y siguientes).`,
  },
  {
    title: "7. Medios de pago y envíos",
    body: `Los medios de pago habilitados y las condiciones de envío se informan al momento de finalizar la compra o por consulta directa a través de WhatsApp. INNA Profesional realiza envíos a todo el territorio argentino a través de transportes a convenir con el cliente.`,
  },
  {
    title: "8. Propiedad intelectual",
    body: `Todos los contenidos del sitio (textos, imágenes, marcas, logotipos y diseño) son propiedad de INNA Profesional o de sus respectivos titulares, y se encuentran protegidos por las leyes de propiedad intelectual vigentes. Queda prohibida su reproducción total o parcial sin autorización expresa.`,
  },
  {
    title: "9. Limitación de responsabilidad",
    body: `INNA Profesional no se responsabiliza por daños derivados del mal uso de los productos adquiridos, los cuales están destinados exclusivamente a uso profesional por personal capacitado. Recomendamos seguir las indicaciones de uso de cada fabricante.`,
  },
  {
    title: "10. Legislación aplicable y jurisdicción",
    body: `Los presentes Términos y Condiciones se rigen por las leyes de la República Argentina. Ante cualquier controversia, las partes se someten a la jurisdicción de los tribunales ordinarios competentes de la Provincia de Buenos Aires, sin perjuicio del derecho del consumidor a optar por el fuero de su domicilio conforme la Ley 24.240.`,
  },
];

export default function Terms() {
  return (
    <div className="container-inna py-8 sm:py-12">
      <Breadcrumb items={[{ label: "Términos y condiciones" }]} />
      <h1 className="!m-0 mt-3 !text-3xl font-semibold sm:!text-4xl">Términos y condiciones</h1>
      <p className="mt-2 text-sm text-neutral-500">Última actualización: julio de 2026</p>

      <div className="mt-8 flex max-w-3xl flex-col gap-8">
        {secciones.map((s) => (
          <section key={s.title}>
            <h2 className="!m-0 !text-lg font-semibold text-neutral-900">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.body}</p>
          </section>
        ))}

        <p className="rounded-xl bg-neutral-50 p-4 text-xs leading-relaxed text-neutral-500">
          Este contenido es un texto modelo a fines de demostración. Antes de publicar el sitio, recomendamos
          que un profesional del derecho revise y adapte estos Términos y Condiciones a la operatoria real del
          negocio.
        </p>
      </div>
    </div>
  );
}
