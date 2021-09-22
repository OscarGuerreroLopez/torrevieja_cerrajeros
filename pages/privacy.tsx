import { Wrap, Container, Box, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { NextPage } from "next";

import { BusinessTitle, MainUrl } from "../src/constants";

const PrivacyPage: NextPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="container.xl" padding={10}>
      <Box w="100%" boxShadow="dark-lg" padding={[1, 1, 2]} align="center">
        <Text variant="title">Politica de Cookies:</Text>
      </Box>
      <Wrap justify="center" mt="5" mb="6" h="100%">
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center">Cookies:</Text>
          <Text variant="main_center_mobile">
            En esta web recopilamos información y la gestionamos según indicamos
            en nuestra política de privacidad. Una de las formas es a través del
            uso de la tecnología llamada “cookies
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center">¿Qué es una cookie?</Text>
          <Text variant="main_center_mobile">
            Una cookie es un fichero de texto inofensivo que se almacena en su
            navegador cuando visita casi cualquier página web. La utilidad de la
            cookie es que la web sea capaz de recordar su visita cuando vuelva a
            navegar por esa página. Aunque mucha gente no lo sabe las cookies se
            llevan utilizando desde hace 20 años, cuando aparecieron los
            primeros navegadores para la World Wide Web.
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center">¿Qué NO ES una cookie?</Text>
          <Text variant="main_center_mobile">
            No es un virus, ni un troyano, ni un gusano, ni spam, ni spyware, ni
            abre ventanas pop-up.
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center">
            ¿Qué información almacena una cookie?
          </Text>
          <Text variant="main_center_mobile">
            Las cookies no suelen almacenar información sensible sobre usted,
            como tarjetas de crédito o datos bancarios, fotografías, su DNI o
            información personal, etc. Los datos que guardan son de carácter
            técnico, preferencias personales, personalización de contenidos,
            etc.
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center">
            ¿Qué información almacena una cookie?
          </Text>
          <Text variant="main_center_mobile">
            Las cookies no suelen almacenar información sensible sobre usted,
            como tarjetas de crédito o datos bancarios, fotografías, su DNI o
            información personal, etc. Los datos que guardan son de carácter
            técnico, preferencias personales, personalización de contenidos,
            etc.
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center">
            ¿Qué son las cookies propias y las de terceros?
          </Text>
          <Text variant="main_center_mobile">
            Las cookies propias son las generadas por la página que está
            visitando y las de terceros son las generadas por servicios o
            proveedores externos como Facebook, Twitter, Google, etc.
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center">¿Qué cookies utiliza esta web?</Text>
          <Text variant="main_center_mobile">
            Esta web utiliza cookies propias y de terceros, siguiendo las
            directrices de la Agencia Española de Protección de Datos y como
            exige el artículo 22.2 de la LSSI, procedo a detallar el uso de
            cookies que hace esta web con el fin de informarte con la máxima
            exactitud posible.
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center">Cookies de terceros:</Text>
          <Text variant="main_center_mobile">
            Esta web utiliza servicios de análisis, concretamente, Google
            Analytics para ayudar al website a analizar el uso que hacen los
            usuarios del sitio web y mejorar la usabilidad del mismo, pero en
            ningún caso se asocian a datos que pudieran llegar a identificar al
            usuario. Google Analytics, es un servicio analítico de web prestado
            por Google, Inc., El usuario puede consultar en este enlace el tipo
            de cookies utilizadas por Google.
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center">¿Se pueden eliminar las cookies?</Text>
          <Text variant="main_center_mobile">
            Sí. No sólo eliminar, también bloquear, de forma general o
            particular para un dominio específico.\ Para eliminar las cookies de
            un sitio web debe ir a la configuración de su navegador y allí podrá
            buscar las asociadas al dominio en cuestión y proceder a su
            eliminación.
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center">Más información sobre las cookies:</Text>
          <Text variant="main_center_mobile">
            Puede consultar el reglamento sobre cookies publicado por la Agencia
            Española de Protección de Datos en su “Guía sobre el uso de las
            cookies” y obtener más información sobre las cookies en Internet,
            http://www.aboutcookies.org/
          </Text>
        </Box>
      </Wrap>
      <Box w="100%" boxShadow="dark-lg" padding={[1, 1, 2]} align="center">
        <Text variant="title">Politica de Privacidad:</Text>
      </Box>

      <Wrap justify="center" mt="5" mb="6" h="100%">
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center">Politica de Privacidad:</Text>
          <Text variant="main_center_mobile">
            En nuestra web se respetan y cuidan los datos personales de los
            usuarios. Como usuario debes saber que tus derechos están
            garantizados.
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center_mobile">
            Nunca solicitamos información personal a menos que realmente sea
            necesaria para prestarte los servicios y presupuestos que requieras.
          </Text>
        </Box>

        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center_mobile">
            Nunca compartimos información personal de nuestros usuarios con
            nadie, excepto para cumplir con la ley o en caso que contemos con tu
            autorización expresa.
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center_mobile">
            Nunca utilizamos tus datos personales con una finalidad diferente a
            la expresada en esta política de privacidad.
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center_mobile">
            Hemos adecuado esta web a las exigencias del Reglamento (UE)
            2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016
            relativo a la protección de las personas físicas (RGPD), así como
            con la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de
            la Información y Comercio Electrónico (LSSICE o LSSI).
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center_mobile">
            {`De conformidad con lo previsto en el Reglamento General de
            Protección de Datos Europeo, se informa a los usuarios del sitio web
            ${MainUrl} de que los datos que faciliten,
            mediante la navegación o el uso de formularios, serán tratados de
            conformidad con la presente política de privacidad.`}
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center">
            ¿Cuáles son tus derechos cuando nos facilitas tus datos?
          </Text>
          <Text variant="main_center_mobile">
            {`Cualquier persona tiene derecho a obtener confirmación sobre si en
            ${BusinessTitle} estamos tratando datos personales que nos
            concierne, o no.`}
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center_mobile">
            Los interesados podrán acceder a sus datos personales, así como a
            solicitar la rectificación de los datos inexactos o, en su caso,
            solicitar su supresión cuando, entre otros motivos, los datos ya no
            sean necesarios para los fines que fueron recogidos. En determinadas
            circunstancias, los interesados podrán solicitar la limitación del
            tratamiento de sus datos, en cuyo caso únicamente los conservaré
            para el ejercicio o la defensa de reclamaciones.
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center">
            ¿Por cuánto tiempo conservaré tus datos?
          </Text>
          <Text variant="main_center_mobile">
            Los datos personales se conservarán mientras se mantengan pendientes
            o se estén ejecutando los servicios contratados.
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center">
            ¿Por cuánto tiempo conservaré tus datos?
          </Text>
          <Text variant="main_center_mobile">
            Los datos personales se conservarán mientras se mantengan pendientes
            o se estén ejecutando los servicios contratados.
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center">
            ¿A qué destinatarios se comunicarán tus datos?
          </Text>
          <Text variant="main_center_mobile">
            {`Google Analytics: un servicio analítico de web prestado por Google,
            Inc., una compañía de Delaware cuya oficina principal está en 1600
            Amphitheatre Parkway, Mountain View (California), CA 94043, Estados
            Unidos (“Google”). Google Analytics utiliza “cookies”, que son
            archivos de texto ubicados en tu ordenador, para ayudar a
            ${MainUrl} a analizar el uso que hacen los
            usuarios del sitio web. La información que genera la cookie acerca
            de su uso de  ${MainUrl} (incluyendo tu dirección
            IP) será directamente transmitida y archivada por Google en los
            servidores de Estados Unidos.`}
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center">Navegacion:</Text>
          <Text variant="main_center_mobile">
            {`Al navegar por  ${MainUrl} se pueden recoger datos
            no identificables, que pueden incluir, direcciones IP, ubicación
            geográfica (aproximadamente), un registro de cómo se utilizan los
            servicios y sitios, y otros datos que no pueden ser utilizados para
            identificar al usuario.`}
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center_mobile">
            Utilizamos esta información para analizar tendencias, administrar el
            sitio, rastrear los movimientos de los usuarios alrededor del sitio
            y para recopilar información demográfica sobre nuestra base de
            usuarios en su conjunto.
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center">Secreto y seguridad de los datos:</Text>
          <Text variant="main_center_mobile">
            {` ${MainUrl} se compromete en el uso y tratamiento
            de los datos incluidos personales de los usuarios, respetando su
            confidencialidad y a utilizarlos de acuerdo con la finalidad del
            mismo, así como a dar cumplimiento a su obligación de guardarlos y
            adaptar todas las medidas para evitar la alteración, pérdida,
            tratamiento o acceso no autorizado, de conformidad con lo
            establecido en la normativa vigente de protección de datos.`}
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center_mobile">
            Esta web incluye un certificado SSL. Se trata de un protocolo de
            seguridad que hace que tus datos viajen de manera íntegra y segura,
            es decir, la transmisión de los datos entre un servidor y usuario
            web, y en retroalimentación, es totalmente cifrada o encriptada.
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center">Aceptación y consentimiento:</Text>
          <Text variant="main_center_mobile">
            {`El usuario declara haber sido informado de las condiciones sobre
            protección de datos de carácter personal, aceptando y consintiendo
            el tratamiento de los mismos por parte de ${BusinessTitle} en la
            forma y para las finalidades indicadas en esta política de
            privacidad.`}
          </Text>
        </Box>
        <Box w={["98%", "47%", "31%"]} boxShadow="dark-lg" padding={[1, 1, 2]}>
          <Text variant="main_center">
            Cambios en la política de privacidad:
          </Text>
          <Text variant="main_center_mobile">
            {`${BusinessTitle} se reserva el derecho a modificar la presente
            política para adaptarla a novedades legislativas o
            jurisprudenciales, así como a prácticas de la industria. En dichos
            supuestos, ${BusinessTitle} anunciará en esta página los cambios
            introducidos con razonable antelación a su puesta en práctica.`}
          </Text>
        </Box>
      </Wrap>
    </Container>
  );
};

export default PrivacyPage;
