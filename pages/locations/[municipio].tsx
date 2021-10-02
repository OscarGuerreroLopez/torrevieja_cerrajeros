import {
  Text,
  Container,
  Box,
  useBreakpointValue,
  Image,
  HStack,
  VStack
} from "@chakra-ui/react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Head from "next/head";

import municipioList from "../../lib/municipios.json";
import { BusinessTitle, Telephone } from "../../src/constants";
import { Phone } from "../../src/components/phone";
import { ServicesCards } from "../../src/components/servicesCards";

const MunicipioPage: NextPage<{ municipio: string }> = (props) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <Head>
        <title>
          {" "}
          {`Cerrajeros ${props.municipio}. 24 Horas. Telf: ${Telephone}`}
        </title>
        <meta
          name="description"
          content={`Cerrajeros en ${props.municipio}, aperturas, automatismos, cierres metálicos, persianas, puertas de garaje, sustitución y reparación de cerraduras`}
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
      </Head>

      <Container maxWidth="container.xl" px={[1, 1, 10]}>
        <Box
          w="full"
          h="full"
          align="center"
          py={[3, 3, 1]}
          boxShadow="dark-lg"
          rounded="lg"
        >
          {!isMobile && (
            <>
              <HStack p="12">
                <Box w="45%" p="5">
                  <Image src="/resume.svg" alt={BusinessTitle} />
                </Box>
                <Box w="55%">
                  <Text variant="main_card_title">
                    Cerrajeros en {props.municipio}
                  </Text>

                  <Box w="100%" align="center">
                    <Image
                      src="/24hours4.png"
                      alt={BusinessTitle}
                      w={["100%", "90%", "50%"]}
                    />
                  </Box>

                  <Phone />
                  <Text variant="main_card_text" align="left">
                    Entre los servicios que ofrecemos para la poblacion de{" "}
                    {props.municipio} estan la instalación, reparación y
                    sustitución de todo tipo de componentes de cerrajería así
                    como; pomos, cerraduras, cerrojos o bombines en todas las
                    puertas. Ademas instalación de persianas metálicas de todas
                    las medidas en su negocio o comercio, candados de suelo
                    altamente resistentes, instalación de sofisticados sistemas
                    de seguridad como anti-palanca o anti-pánico, amaestramiento
                    y duplicado de llaves sencillas o forjadas, apertura de
                    puertas de vehículo, puertas de garaje atascadas o candados
                    de moto.
                  </Text>
                </Box>
              </HStack>

              <HStack p="12">
                <Box w="55%">
                  <Text variant="main_card_text" align="left">
                    Puede llamarnos en cualquier momento del día o la noche, ya
                    que contamos con una amplia plantilla de cerrajeros
                    dispuestos a solucionar su avería en todo momento, ya sea de
                    la gravedad que sea. Para ello, tan solo debe de ponerse en
                    contacto a través de nuestro número de teléfono y le
                    enviaremos a uno de nuestros cerrajeros urgentes donde nos
                    indique con la mayor rapidez posible. El mejor servicio, los
                    mejores precios y la máxima entrega es primordial en nuestra
                    empresa.
                  </Text>
                  <Phone />
                </Box>
                <Box w="45%">
                  <Image src="/phone2.svg" alt={BusinessTitle} />
                </Box>
              </HStack>
            </>
          )}

          {isMobile && (
            <>
              <VStack px="2">
                <Text variant="main_card_title">
                  Cerrajeros en {props.municipio}
                </Text>
                <Phone />
                <Text variant="main_card_text">
                  Entre los servicios que ofrecemos para la poblacion de{" "}
                  {props.municipio} estan la instalación, reparación y
                  sustitución de todo tipo de componentes de cerrajería así
                  como; pomos, cerraduras, cerrojos o bombines en todas las
                  puertas.
                </Text>
                <Image src="/resume.svg" alt={BusinessTitle} w="50%" h="full" />
                <Text variant="main_card_text">
                  Ademas instalación de persianas metálicas de todas las medidas
                  en su negocio o comercio, candados de suelo altamente
                  resistentes, instalación de sofisticados sistemas de seguridad
                  como anti-palanca o anti-pánico, amaestramiento y duplicado de
                  llaves sencillas o forjadas, apertura de puertas de vehículo,
                  puertas de garaje atascadas o candados de moto.
                </Text>
              </VStack>
              <VStack mt="5" px="2">
                <Text variant="main_card_text">
                  Puede llamarnos en cualquier momento del día o la noche, ya
                  que contamos con una amplia plantilla de cerrajeros dispuestos
                  a solucionar su avería en todo momento, ya sea de la gravedad
                  que sea.
                </Text>
                <Image src="/phone2.svg" alt={BusinessTitle} w="50%" h="full" />
                <Text variant="main_card_text">
                  Para ello, tan solo debe de ponerse en contacto a través de
                  nuestro número de teléfono y le enviaremos a uno de nuestros
                  cerrajeros urgentes donde nos indique con la mayor rapidez
                  posible. El mejor servicio, los mejores precios y la máxima
                  entrega es primordial en nuestra empresa.
                </Text>
                <Phone />
              </VStack>
            </>
          )}
        </Box>
      </Container>

      <ServicesCards />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const municipio = municipioList.map((municipio) => municipio);

  const paths = municipio.map((municipio) => ({
    params: { municipio: municipio }
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params: { municipio }
}) => {
  const municipioData = municipioList.find(
    (municipioListItem) => municipioListItem === municipio
  );

  return { props: { municipio: municipioData } };
};

export default MunicipioPage;
