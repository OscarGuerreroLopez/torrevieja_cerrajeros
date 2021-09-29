import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import {
  Container,
  Box,
  useBreakpointValue,
  Image,
  Link,
  HStack,
  VStack,
  Text,
  Wrap,
  Flex
} from "@chakra-ui/react";

import municipioList from "../../lib/municipios.json";
import NextLink from "next/link";
import {
  BusinessTitle,
  LocationServices,
  Telephone
} from "../../src/constants";
import { LargeWrapper } from "../../src/components/largeWrapper";

import { Phone } from "../../src/components/phone";

export const LocationsPage: NextPage<{ municipios: string[] }> = (props) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const municipios = props.municipios;

  return (
    <>
      <Head>
        <title>
          {`Servicios cerrajeria Alicante. 24H Telf: ${Telephone}. Vega Baja`}{" "}
        </title>
        <meta
          name="description"
          content="Servicios cerrajeria en Alicante, Vega Baja, aperturas, automatismos, cierres metálicos, persianas, puertas de garaje, sustitución y reparación de cerraduras"
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
      </Head>

      <Container maxWidth="container.xl" padding={[0, 0, 6]}>
        <Flex padding={[1, 1, 0]}>
          <Box
            w="full"
            h="full"
            align="center"
            py={["3", "3", "0"]}
            boxShadow="dark-lg"
            rounded="lg"
            mt={["3", "3", "0"]}
          >
            {!isMobile && (
              <>
                <HStack p="12">
                  <Box w="45%">
                    <Image src="/town.svg" alt={BusinessTitle} />
                  </Box>
                  <Box w="55%">
                    <Text variant="main_card_text" align="left">
                      Prestamos servicio en {LocationServices}. Puede llamarnos
                      en cualquier momento del día o la noche, ya que contamos
                      con una amplia plantilla de cerrajeros dispuestos a
                      solucionar su avería en todo momento, ya sea de la
                      gravedad que sea.
                    </Text>
                  </Box>
                </HStack>
                <Phone />
              </>
            )}
            {isMobile && (
              <VStack>
                <Box>
                  <Image src="/town.svg" alt={BusinessTitle} />
                </Box>
                <Box p="1">
                  <Text variant="main_card_text" align="left">
                    Prestamos servicio en {LocationServices}. Puede llamarnos en
                    cualquier momento del día o la noche, ya que contamos con
                    una amplia plantilla de cerrajeros dispuestos a solucionar
                    su avería en todo momento, ya sea de la gravedad que sea.
                  </Text>
                </Box>
                <Phone />
              </VStack>
            )}
          </Box>
        </Flex>
      </Container>
      <LargeWrapper>
        <Wrap justify="center" mt="5" mb="6" h="100%" m={["2", "2", "4", "0"]}>
          {municipios.map((municipio, index) => (
            <Box
              w={["45%", "45%", "22%"]}
              boxShadow="dark-lg"
              padding={[1, 1, 2]}
              rounded="lg"
              key={index}
            >
              <NextLink
                as={`/locations/${municipio}`}
                href={`/locations/[municipio]`}
                passHref
                key={`/locations/${municipio}`}
              >
                <Link key={index}>
                  <Text variant="main_card_title" align="center">
                    {municipio}
                  </Text>
                </Link>
              </NextLink>
            </Box>
          ))}
        </Wrap>
      </LargeWrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { municipios: municipioList } };
};

export default LocationsPage;
