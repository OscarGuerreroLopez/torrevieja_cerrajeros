import {
  Text,
  Container,
  Box,
  useBreakpointValue,
  Image,
  HStack,
  VStack,
  Flex
} from "@chakra-ui/react";

import municipioList from "../../lib/municipios.json";

import { GetStaticProps, GetStaticPaths, NextPage } from "next";

import { Cards } from "../../src/components/cards";

import Head from "next/head";

import { BusinessTitle } from "../../src/constants";

import { Phone } from "../../src/components/phone";

const MunicipioPage: NextPage<{ municipio: string }> = (props) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <Head>
        <title> Cerrajeros {props.municipio}</title>
        <meta
          name="description"
          content={`Cerrajeros en ${props.municipio}, aperturas, automatismos, cierres metálicos, persianas, puertas de garaje, sustitución y reparación de cerraduras`}
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
      </Head>

      <Container maxWidth="container.xl" padding={[0, 0, 10]}>
        <Flex padding={[1, 1, 0]}>
          <Box
            w="full"
            h="full"
            align="center"
            py={["2", "2", "0"]}
            boxShadow="dark-lg"
            rounded="lg"
            mt={["3", "3", "0"]}
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
                    <Text variant="main_card_text" align="left">
                      Entre los servicios que ofrecemos para la poblacion de{" "}
                      {props.municipio} estan la instalación, reparación y
                      sustitución de todo tipo de componentes de cerrajería así
                      como; pomos, cerraduras, cerrojos o bombines en todas las
                      puertas. Ademas instalación de persianas metálicas de
                      todas las medidas en su negocio o comercio, candados de
                      suelo altamente resistentes, instalación de sofisticados
                      sistemas de seguridad como anti-palanca o anti-pánico,
                      amaestramiento y duplicado de llaves sencillas o forjadas,
                      apertura de puertas de vehículo, puertas de garaje
                      atascadas o candados de moto.
                    </Text>
                  </Box>
                </HStack>
                <Phone />
                <HStack p="12">
                  <Box w="55%">
                    <Text variant="main_card_text" align="left">
                      Puede llamarnos en cualquier momento del día o la noche,
                      ya que contamos con una amplia plantilla de cerrajeros
                      dispuestos a solucionar su avería en todo momento, ya sea
                      de la gravedad que sea. Para ello, tan solo debe de
                      ponerse en contacto a través de nuestro número de teléfono
                      y le enviaremos a uno de nuestros cerrajeros urgentes
                      donde nos indique con la mayor rapidez posible. El mejor
                      servicio, los mejores precios y la máxima entrega es
                      primordial en nuestra empresa.
                    </Text>
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
                  <Text variant="main_card_text">
                    Entre los servicios que ofrecemos para la poblacion de{" "}
                    {props.municipio} estan la instalación, reparación y
                    sustitución de todo tipo de componentes de cerrajería así
                    como; pomos, cerraduras, cerrojos o bombines en todas las
                    puertas.
                  </Text>
                  <Image
                    src="/resume.svg"
                    alt={BusinessTitle}
                    w="50%"
                    h="full"
                  />
                  <Text variant="main_card_text">
                    Ademas instalación de persianas metálicas de todas las
                    medidas en su negocio o comercio, candados de suelo
                    altamente resistentes, instalación de sofisticados sistemas
                    de seguridad como anti-palanca o anti-pánico, amaestramiento
                    y duplicado de llaves sencillas o forjadas, apertura de
                    puertas de vehículo, puertas de garaje atascadas o candados
                    de moto.
                  </Text>
                  <Phone />
                </VStack>
                <VStack mt="5" px="2">
                  <Text variant="main_card_text">
                    Puede llamarnos en cualquier momento del día o la noche, ya
                    que contamos con una amplia plantilla de cerrajeros
                    dispuestos a solucionar su avería en todo momento, ya sea de
                    la gravedad que sea.
                  </Text>
                  <Image
                    src="/phone2.svg"
                    alt={BusinessTitle}
                    w="50%"
                    h="full"
                  />
                  <Text variant="main_card_text">
                    Para ello, tan solo debe de ponerse en contacto a través de
                    nuestro número de teléfono y le enviaremos a uno de nuestros
                    cerrajeros urgentes donde nos indique con la mayor rapidez
                    posible. El mejor servicio, los mejores precios y la máxima
                    entrega es primordial en nuestra empresa.
                  </Text>
                </VStack>
              </>
            )}
          </Box>
        </Flex>
        <Cards>
          <Box
            w="full"
            h="full"
            align="left"
            py={["3", "3", "0"]}
            boxShadow="dark-lg"
            mr={["0", "0", "3"]}
            mt={["3", "3", "4"]}
            padding="2"
            rounded="lg"
          >
            <Text variant="main_card_title" align="center">
              Perdida de llaves:
            </Text>
            <Text variant="main_card_text">
              Servicio de urgencia en {props.municipio} el cual le permitirá
              volver a entrar a su domicilio rapidamente. Se ofrecerá la
              posibilidad de cambiar la cerradura para su mayor tranquilidad.
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
            padding="2"
            rounded="lg"
          >
            <Text variant="main_card_title" align="center">
              Aperturas:
            </Text>
            <Text variant="main_card_text">
              Aperturas en {props.municipio} sin roturas en el 90% de los casos.
              Sustitucion de la cerradura para asegurar su vivienda
            </Text>
          </Box>
          <Box
            w="full"
            h="full"
            align="left"
            py={["3", "3", "0"]}
            boxShadow="dark-lg"
            mt={["3", "3", "4"]}
            padding="2"
            rounded="lg"
          >
            <Text variant="main_card_title" align="center">
              Cambio de cerraduras:
            </Text>
            <Text variant="main_card_text">
              Cambio de cerraduras en {props.municipio} de manera rapida y
              limpia
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
            padding="2"
            rounded="lg"
          >
            <Text variant="main_card_title" align="center">
              Persianas de local y cierres:
            </Text>
            <Text variant="main_card_text">
              Persianas enrrollables, seccionales, correderas y abatibles de
              local Somos especialistas en cierres de seguridad para locales en{" "}
              {props.municipio}
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
            padding="2"
            rounded="lg"
          >
            <Text variant="main_card_title" align="center">
              Automatismos:
            </Text>
            <Text variant="main_card_text">
              Arreglo e instalación de motores en {props.municipio} para puertas
              de garaje, correderas, secciónales, abatibles, batientes y cierres
              metálicos Contamos con un equipo de trabajo que ama su oficio y
              que sabe lo que es esforzarse para obtener un excelente resultado
              final. Tenemos claro nuestros objetivos y la normativa vigente
              cuando de reparación de puertas automáticas se trata.
            </Text>
          </Box>
          <Box
            w="full"
            h="full"
            align="left"
            py={["3", "3", "0"]}
            boxShadow="dark-lg"
            mt={["3", "3", "4"]}
            padding="2"
            rounded="lg"
          >
            <Text variant="main_card_title" align="center">
              Persianas de hogar:
            </Text>
            <Text variant="main_card_text">
              Reparamos e instalamos todo tipo de persianas en {props.municipio}{" "}
              para el hogar. Tanto de PVC como de aluminio normal o de
              seguridad, contamos con accesorios como: roldanas, guíacintas,
              ejes, conteras, soportes...
            </Text>
          </Box>
        </Cards>
      </Container>
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
