import { NextPage } from "next";
import NextLink from "next/link";
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
import Head from "next/head";

import { BusinessTitle, LocationServices } from "../src/constants";
import { Phone } from "../src/components/phone";
import { Cards } from "../src/components/cards";

const AboutPage: NextPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Head>
        <title>{BusinessTitle}</title>
        <meta name="description" content={BusinessTitle} />
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
          mt={["5", "5", "0"]}
        >
          {!isMobile && (
            <>
              <HStack p="12">
                <Box w="55%">
                  <Text variant="title">¿Quienes somos?</Text>
                  <Text variant="main_center" align="left">
                    Contamos con más de 10 años de experiencia ofreciendo un
                    servicio de calidad, siempre preocupados por satisfacer las
                    necesidades de nuestros clientes. Para nosostros es
                    importante que nuestros clientes tengan la seguridad y
                    tranquilidad de que nuestro servicio es oportuno, ético y
                    profesional. Este mismo servicio que nos ha caracterizado
                    hasta ahora, lo proporcionamos al atender emergencias las 24
                    horas.
                  </Text>
                </Box>
                <Box w="45%">
                  <Image src="/team2.svg" alt={BusinessTitle} />
                </Box>
              </HStack>
              <Phone />
            </>
          )}

          {isMobile && (
            <VStack>
              <Text variant="title">¿Quienes somos?</Text>
              <Text variant="main_card_text">
                Contamos con más de 10 años de experiencia ofreciendo un
                servicio de calidad, siempre preocupados por satisfacer las
                necesidades de nuestros clientes.
              </Text>
              <Image src="/team2.svg" alt={BusinessTitle} w="50%" h="full" />
              <Text variant="main_card_text">
                Para nosostros es importante que nuestros clientes tengan la
                seguridad y tranquilidad de que nuestro servicio es oportuno,
                ético y profesional. Este mismo servicio que nos ha
                caracterizado hasta ahora, lo proporcionamos al atender
                emergencias las 24 horas.
              </Text>
              <Phone />
            </VStack>
          )}
        </Box>
      </Container>
      <Cards>
        <Box
          w="full"
          h="full"
          py={["3", "3", "0"]}
          boxShadow="dark-lg"
          mr={["0", "0", "3"]}
          mt={["4", "4", "0"]}
          padding={[1, 1, 2]}
        >
          <Text variant="title" align="center">
            ¿Que ofrecemos?
          </Text>
          <NextLink href="/locations">
            <HStack>
              <Box>
                <Text variant="main_card_text">
                  Ofrecemos todo tipo de servicios relacionados con cerrajería:
                  cerraduras de alta seguridad, apertura urgente, instalación y
                  mantenimiento de automatismos, carpintería metálica, vallados
                  y cerramientos… Trabajamos tanto para comunidades como para
                  aseguradoras o particulares.
                </Text>
              </Box>
            </HStack>
          </NextLink>
        </Box>
        <Box
          w="full"
          h="full"
          py={["3", "3", "0"]}
          boxShadow="dark-lg"
          mr={["0", "0", "3"]}
          mt={["4", "4", "0"]}
          padding={[1, 1, 2]}
        >
          <Text variant="title" align="center">
            ¿Por que confiar en nosotros?
          </Text>
          <NextLink href="/locations">
            <HStack>
              <Box>
                <Text variant="main_card_text">
                  Contamos con mas de 10 años de experiencia en el sector.
                  Tenemos el objetivo de conseguir la confianza de nuestros
                  clientes, ofreciendo un servicio de alta calidad y a un precio
                  justo.
                </Text>
              </Box>
            </HStack>
          </NextLink>
        </Box>
      </Cards>
      <Container maxWidth="container.xl" padding={[0, 0, 10]}>
        <Box
          w="full"
          h="full"
          align="center"
          py={["3", "3", "0"]}
          boxShadow="dark-lg"
          rounded="md"
          mt={["5", "5", "0"]}
          padding={[1, 1, 2]}
        >
          <Text variant="title">Nuestro compromiso</Text>
          <Text variant="main_card_text" align="left">
            {`Contamos con un equipo de trabajo que ama su oficio y que sabe lo que es esforzarse para obtener un excelente resultado final. Tenemos claro nuestros objetivos y la normativa vigente cuando de reparación de puertas automáticas se trata. En ${BusinessTitle} entendemos que este es un sector cada día más competitivo y de reputación, por esta razón, nos esforzamos para ofrecerle calidad en cada servicio prestado, dedicándole buena parte de nuestro empeño al estudio de nuevos materiales y de efectivas soluciones de reparación de puertas automáticas de garaje y Puertas automáticas de garaje en general.`}
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default AboutPage;
