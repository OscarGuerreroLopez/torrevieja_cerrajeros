import { NextPage } from "next";

import Head from "next/head";
import {
  Container,
  Box,
  useBreakpointValue,
  Image,
  Link,
  HStack,
  Wrap,
  Text
} from "@chakra-ui/react";

import { Phone } from "../../src/components/phone";

import {
  BusinessTitle,
  Photos,
  Telephone,
  TelephoneClick
} from "../../src/constants";

export const GalleryPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{BusinessTitle}</title>
        <meta name="description" content={`${BusinessTitle} galeria`} />
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
          <HStack>
            <Box w={["50%", "50%", "70%"]} p="3">
              <Text variant="main_card_text" align="left">
                A continuacion se muestran algunos de los trabajos que hemos
                realizado para diferentes clientes:
              </Text>
            </Box>
            <Box w={["50%", "50%", "30%"]} p="3">
              <Image src="/gallery.svg" alt={BusinessTitle} />
            </Box>
          </HStack>
          <Phone />
        </Box>
      </Container>
      <Wrap justify="center" mt="5" mb="6" h="100%">
        {Photos.map((photo, index) => (
          <Box
            w={["95%", "95%", "45%"]}
            boxShadow="dark-lg"
            padding={[1, 1, 2]}
            key={index}
          >
            <Image src={`/${photo}.jpeg`} alt={BusinessTitle} key={index} />
          </Box>
        ))}
      </Wrap>
    </>
  );
};

export default GalleryPage;
