import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import {
  Box,
  useBreakpointValue,
  Image,
  Link,
  HStack,
  VStack,
  Text,
  Wrap
} from "@chakra-ui/react";

import municipioList from "../../lib/municipios.json";
import NextLink from "next/link";
import {
  BusinessTitle,
  BusinessMainTitle,
  LocationServices,
  Telephone
} from "../../src/constants";
import { LargeWrapper } from "../../src/components/largeWrapper";

import { Phone } from "../../src/components/phone";
import { MainCard } from "../../src/components/mainCard";

export const LocationsPage: NextPage<{ municipios: string[] }> = (props) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const municipios = props.municipios;

  return (
    <>
      <Head>
        <title>{`Los Mejores ${BusinessMainTitle} 24H. Telf: ${Telephone}`}</title>
        <meta
          name="description"
          content={`Los Mejores ${BusinessMainTitle}. Expertos al Mejor Precio en Aperturas, Automatismos, Cierres metálicos, Persianas, Puertas de garaje, Sustitución y reparación de cerraduras. Cerrajería.`}
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
      </Head>

      <MainCard>
        {!isMobile && (
          <>
            <HStack p="12">
              <Box w="45%">
                <Image src="/town.svg" alt={BusinessTitle} />
              </Box>
              <Box w="55%">
                <Text variant="main_card_text" align="left">
                  Prestamos servicio en {LocationServices}. Puede llamarnos en
                  cualquier momento del día o la noche, ya que contamos con una
                  amplia plantilla de cerrajeros dispuestos a solucionar su
                  avería en todo momento, ya sea de la gravedad que sea.
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
                cualquier momento del día o la noche, ya que contamos con una
                amplia plantilla de cerrajeros dispuestos a solucionar su avería
                en todo momento, ya sea de la gravedad que sea.
              </Text>
            </Box>
            <Phone />
          </VStack>
        )}
      </MainCard>
      <LargeWrapper>
        <Wrap justify="center" py="5" m={["3", "3", "0"]}>
          {municipios.map((municipio, index) => (
            <Box
              w={["45%", "45%", "22%"]}
              boxShadow="dark-lg"
              padding="2"
              rounded="lg"
              key={index}
            >
              <NextLink
                as={`/locations/${municipio}`}
                href={`/locations/[municipio]`}
                passHref
                key={`/locations/${municipio}`}
              >
                <Link variant="header_link" key={index}>
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
