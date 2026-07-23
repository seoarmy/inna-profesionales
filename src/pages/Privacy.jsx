import Breadcrumb from "../components/ui/Breadcrumb";
import Seo from "../components/seo/Seo";
import { business } from "../data/mockData";

const secciones = [
  {
    title: "1. Responsable del tratamiento de datos",
    body: `Los datos personales recabados a través de este sitio son tratados por ${business.nombre}, con domicilio en ${business.direccion}, en carácter de responsable de la base de datos, conforme a la Ley N° 25.326 de Protección de los Datos Personales y su Decreto Reglamentario N° 1558/2001.`,
  },
  {
    title: "2. Datos que recopilamos",
    body: `Recopilamos los datos que el usuario proporciona voluntariamente al completar el formulario de contacto, al iniciar una conversación por WhatsApp o al realizar una compra: nombre, email, teléfono, dirección de envío y datos vinculados a la operación comercial. No solicitamos datos sensibles ni información de tarjetas de pago a través de este sitio.`,
  },
  {
    title: "3. Finalidad del tratamiento",
    body: `Los datos son utilizados para gestionar consultas, procesar pedidos, coordinar envíos, brindar atención al cliente y, de mediar consentimiento expreso, enviar comunicaciones comerciales sobre novedades, productos y promociones a través del formulario de newsletter.`,
  },
  {
    title: "4. Cookies y tecnologías similares",
    body: `Este sitio puede utilizar cookies propias y de terceros con fines estadísticos y de funcionamiento (por ejemplo, recordar productos en el carrito). El usuario puede configurar su navegador para rechazar cookies, aunque esto podría afectar algunas funcionalidades del sitio.`,
  },
  {
    title: "5. Compartición de datos con terceros",
    body: `No vendemos ni cedemos los datos personales de nuestros usuarios a terceros con fines comerciales. Los datos podrán compartirse únicamente con proveedores estrictamente necesarios para la operatoria (por ejemplo, empresas de transporte para la entrega de pedidos) y bajo compromiso de confidencialidad.`,
  },
  {
    title: "6. Derechos del titular de los datos",
    body: `Conforme a la Ley 25.326, el titular de los datos personales tiene derecho a acceder, rectificar, actualizar y solicitar la supresión de sus datos. Para ejercer estos derechos, puede escribir a ${business.email}. La Agencia de Acceso a la Información Pública, en su carácter de Órgano de Control de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.`,
  },
  {
    title: "7. Seguridad de la información",
    body: `Adoptamos medidas técnicas y organizativas razonables para proteger los datos personales contra pérdida, uso indebido, acceso no autorizado o alteración, de acuerdo con los estándares habituales del sector.`,
  },
  {
    title: "8. Menores de edad",
    body: `Este sitio está dirigido a profesionales y comercios del rubro estética y belleza. No recopilamos intencionalmente datos de menores de 18 años.`,
  },
  {
    title: "9. Cambios en esta política",
    body: `INNA Profesional podrá modificar la presente Política de Privacidad para adaptarla a novedades legislativas o cambios en el funcionamiento del sitio. Se recomienda revisar esta página periódicamente.`,
  },
];

export default function Privacy() {
  return (
    <div className="container-inna py-8 sm:py-12">
      <Seo title="Política de privacidad" path="/politica-de-privacidad" />
      <Breadcrumb items={[{ label: "Política de privacidad" }]} />
      <h1 className="!m-0 mt-3 !text-3xl font-semibold sm:!text-4xl">Política de privacidad</h1>
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
          que un profesional del derecho revise y adapte esta Política de Privacidad a la operatoria real del
          negocio.
        </p>
      </div>
    </div>
  );
}
