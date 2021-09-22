import { NextPage } from "next";
import Head from "next/head";
import {
  Container,
  Box,
  useBreakpointValue,
  Image,
  Link,
  HStack,
  VStack,
  Text
} from "@chakra-ui/react";

import { Cards } from "../../src/components/cards";
import { BusinessTitle, Telephone, TelephoneClick } from "../../src/constants";

export const ContactPage: NextPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <Head>
        <title>Servicios cerrajeria provincia Alicante</title>
        <meta name="description" content="Servicios cerrajeria" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
      </Head>

      <Container maxWidth="container.xl" padding={[0, 0, 10]}>
        <Box
          w="full"
          h="full"
          align="center"
          py={["3", "3", "0"]}
          boxShadow="dark-lg"
          rounded="md"
          mt={["3", "3", "0"]}
        >
          {!isMobile && (
            <>
              <HStack p="12">
                <Box w="45%">
                  <Image src="/services2.svg" alt={BusinessTitle} />
                </Box>
                <Box w="55%">
                  <Text variant="main_center" align="left">
                    Entre los servicios que ofrecemos estan la instalación,
                    reparación y sustitución de todo tipo de componentes de
                    cerrajería así como; pomos, cerraduras, cerrojos o bombines
                    en todas las puertas. ParaAdemas instalación de persianas
                    metálicas de todas las medidas en su negocio o comercio,
                    candados de suelo altamente resistentes, instalación de
                    sofisticados sistemas de seguridad como anti-palanca o
                    anti-pánico, amaestramiento y duplicado de llaves sencillas
                    o forjadas, apertura de puertas de vehículo, puertas de
                    garaje atascadas o candados de moto.
                  </Text>
                </Box>
              </HStack>
              <Link href={`tel:${TelephoneClick}`} variant="phone_click">
                Telf: {Telephone}
              </Link>
            </>
          )}

          {isMobile && (
            <VStack>
              <Text variant="main_center_mobile">
                Entre los servicios que ofrecemos estan la instalación,
                reparación y sustitución de todo tipo de componentes de
                cerrajería así como; pomos, cerraduras, cerrojos o bombines en
                todas las puertas
              </Text>
              <Image
                src="/services2.svg"
                alt={BusinessTitle}
                w="50%"
                h="full"
              />
              <Text variant="main_center_mobile">
                Ademas instalación de persianas metálicas de todas las medidas
                en su negocio o comercio, candados de suelo altamente
                resistentes, instalación de sofisticados sistemas de seguridad
                como anti-palanca o anti-pánico, amaestramiento y duplicado de
                llaves sencillas o forjadas, apertura de puertas de vehículo,
                puertas de garaje atascadas o candados de moto.
              </Text>
              <Link href={`tel:${TelephoneClick}`} variant="phone_click">
                Telf: {Telephone}
              </Link>
            </VStack>
          )}
        </Box>
        <Cards>
          <Box
            w="full"
            h="full"
            align="left"
            py={["3", "3", "0"]}
            boxShadow="dark-lg"
            mr={["0", "0", "3"]}
            mt={["3", "3", "4"]}
            padding={[1, 1, 2]}
          >
            <Text variant="title" align="center">
              Perdida de llaves:
            </Text>
            <Text variant="main_center_mobile">
              Servicio de urgencia el cual le permitirá volver a entrar a su
              domicilio rapidamente. Se ofrecerá la posibilidad de cambiar la
              cerradura para su mayor tranquilidad.
            </Text>
          </Box>
          <Box
            w="full"
            h="full"
            align="left"
            py={["3", "3", "0"]}
            boxShadow="dark-lg"
            mr={["0", "0", "3"]}
            mt={["3", "3", "4"]}
            padding={[1, 1, 2]}
          >
            <Text variant="title" align="center">
              Aperturas:
            </Text>
            <Text variant="main_center_mobile">
              Aperturas sin roturas en el 90% de los casos. Sustitucion de la
              cerradura para asegurar su vivienda
            </Text>
          </Box>
          <Box
            w="full"
            h="full"
            align="left"
            py={["3", "3", "0"]}
            boxShadow="dark-lg"
            mr={["0", "0", "3"]}
            mt={["3", "3", "4"]}
            padding={[1, 1, 2]}
          >
            <Text variant="title" align="center">
              Cambio de cerraduras:
            </Text>
            <Text variant="main_center_mobile">
              Cambio de cerraduras de manera rapida y limpia
            </Text>
          </Box>
        </Cards>
        <Cards>
          <Box
            w="full"
            h="full"
            align="left"
            py={["3", "3", "0"]}
            boxShadow="dark-lg"
            mr={["0", "0", "3"]}
            mt={["3", "3", "4"]}
            padding={[1, 1, 2]}
          >
            <Text variant="title" align="center">
              Persianas de local y cierres:
            </Text>
            <Text variant="main_center_mobile">
              Persianas enrrollables, seccionales, correderas y abatibles de
              local Somos especialistas en cierres de seguridad para locales
            </Text>
          </Box>
          <Box
            w="full"
            h="full"
            align="left"
            py={["3", "3", "0"]}
            boxShadow="dark-lg"
            mr={["0", "0", "3"]}
            mt={["3", "3", "4"]}
            padding={[1, 1, 2]}
          >
            <Text variant="title" align="center">
              Automatismos:
            </Text>
            <Text variant="main_center_mobile">
              Arreglo e instalación de motores para puertas de garaje,
              correderas, secciónales, abatibles, batientes y cierres metálicos
              Contamos con un equipo de trabajo que ama su oficio y que sabe lo
              que es esforzarse para obtener un excelente resultado final.
              Tenemos claro nuestros objetivos y la normativa vigente cuando de
              reparación de puertas automáticas se trata.
            </Text>
          </Box>
          <Box
            w="full"
            h="full"
            align="left"
            py={["3", "3", "0"]}
            boxShadow="dark-lg"
            mr={["0", "0", "3"]}
            mt={["3", "3", "4"]}
            padding={[1, 1, 2]}
          >
            <Text variant="title" align="center">
              Persianas de hogar:
            </Text>
            <Text variant="main_center_mobile">
              Reparamos e instalamos todo tipo de persianas para el hogar. Tanto
              de PVC como de aluminio normal o de seguridad, contamos con
              accesorios como: roldanas, guíacintas, ejes, conteras, soportes...
            </Text>
          </Box>
        </Cards>
      </Container>
    </>
  );
};

export default ContactPage;
