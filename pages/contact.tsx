import { NextPage } from "next";
import NextLink from "next/link";
import Head from "next/head";
import {
  Container,
  Box,
  useBreakpointValue,
  Image,
  HStack,
  VStack,
  Text,
  Flex
} from "@chakra-ui/react";

import { Cards } from "../src/components/cards";

import { Phone } from "../src/components/phone";

import { BusinessTitle, LocationServices, Telephone } from "../src/constants";

const ContactPage: NextPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>
      <Head>
        <title>{`${BusinessTitle} 24H. Telf: ${Telephone}`}</title>
        <meta name="description" content={BusinessTitle} />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
      </Head>

      <Container maxWidth="container.xl" padding={[0, 0, 10]}>
        <Flex padding={[1, 1, 0]}>
          <Box
            w="full"
            h="full"
            align="center"
            py={[3, 3, 1]}
            boxShadow="dark-lg"
            rounded="lg"
            mt={["3", "3", "0"]}
          >
            {!isMobile && (
              <>
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
                <Phone />
              </>
            )}

            {isMobile && (
              <VStack>
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
            )}
          </Box>
        </Flex>
      </Container>
      <Cards>
        <Box
          w="full"
          h="full"
          align="left"
          boxShadow="dark-lg"
          mr={["0", "0", "3"]}
          mt={["4", "3", "2"]}
          padding={[1, 1, 2]}
          rounded="lg"
        >
          <NextLink href="/locations">
            <HStack>
              <Box w="65%">
                <Text variant="main_card_text">
                  Prestamos servicio en {LocationServices}. Mas informacion
                  sobre las localidades que trabajamos en:
                </Text>
                <Box align="center">
                  <Text variant="crawlable_link">....Cobertura</Text>
                </Box>
              </Box>
              <Box w="35%">
                <Image src="/car1.svg" alt={BusinessTitle} />
              </Box>
            </HStack>
          </NextLink>
        </Box>
        <Box
          w="full"
          h="full"
          align="left"
          boxShadow="dark-lg"
          mr={["0", "0", "3"]}
          mt={["4", "3", "2"]}
          padding={[1, 1, 2]}
          rounded="lg"
        >
          <NextLink href="/services/gallery">
            <HStack>
              <Box w="35%">
                <Image src="/worker.svg" alt={BusinessTitle} />
              </Box>
              <Box w="65%">
                <Text variant="main_card_text">
                  Puede ver tambien imagenes de nuestros trabajos en:
                </Text>
                <Box align="center">
                  <Text variant="crawlable_link">....Galeria</Text>
                </Box>
              </Box>
            </HStack>
          </NextLink>
        </Box>
      </Cards>
    </>
  );
};

export default ContactPage;
