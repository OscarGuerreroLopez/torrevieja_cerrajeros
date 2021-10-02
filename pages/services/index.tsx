import { NextPage } from "next";
import Head from "next/head";
import {
  Box,
  useBreakpointValue,
  Image,
  HStack,
  VStack,
  Text
} from "@chakra-ui/react";

import { BusinessTitle, Telephone } from "../../src/constants";
import { Phone } from "../../src/components/phone";
import { Brands } from "../../src/components/home";
import { MainCard } from "../../src/components/mainCard";

import { ServicesCards } from "../../src/components/servicesCards";

export const ContactPage: NextPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <Head>
        <title>{`${BusinessTitle} 24H. Telf: ${Telephone} . Vega Baja`}</title>
        <meta
          name="description"
          content="Servicios cerrajeria, aperturas, automatismos, cierres metálicos, persianas, puertas de garaje, sustitución y reparación de cerraduras"
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
      </Head>

      <MainCard>
        {!isMobile && (
          <>
            <HStack p="12">
              <Box w="45%">
                <Image src="/services2.svg" alt={BusinessTitle} />
              </Box>
              <Box w="55%">
                <Text variant="main_card_text" align="left">
                  Entre los servicios que ofrecemos estan la instalación,
                  reparación y sustitución de todo tipo de componentes de
                  cerrajería así como; pomos, cerraduras, cerrojos o bombines en
                  todas las puertas. ParaAdemas instalación de persianas
                  metálicas de todas las medidas en su negocio o comercio,
                  candados de suelo altamente resistentes, instalación de
                  sofisticados sistemas de seguridad como anti-palanca o
                  anti-pánico, amaestramiento y duplicado de llaves sencillas o
                  forjadas, apertura de puertas de vehículo, puertas de garaje
                  atascadas o candados de moto.
                </Text>
              </Box>
            </HStack>
            <Phone />
          </>
        )}

        {isMobile && (
          <VStack>
            <Text variant="main_card_text">
              Entre los servicios que ofrecemos estan la instalación, reparación
              y sustitución de todo tipo de componentes de cerrajería así como;
              pomos, cerraduras, cerrojos o bombines en todas las puertas
            </Text>
            <Image src="/services2.svg" alt={BusinessTitle} w="50%" h="full" />
            <Text variant="main_card_text">
              Ademas instalación de persianas metálicas de todas las medidas en
              su negocio o comercio, candados de suelo altamente resistentes,
              instalación de sofisticados sistemas de seguridad como
              anti-palanca o anti-pánico, amaestramiento y duplicado de llaves
              sencillas o forjadas, apertura de puertas de vehículo, puertas de
              garaje atascadas o candados de moto.
            </Text>
            <Phone />
          </VStack>
        )}
      </MainCard>

      <ServicesCards />
      <Brands />
    </>
  );
};

export default ContactPage;
