import { Box, HStack, Text, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import { BusinessTitle } from "../../constants";

export const CardIntro = (): JSX.Element => {
  return (
    <Box
      w="full"
      h="full"
      align="left"
      py={["3", "3", "0"]}
      boxShadow="dark-lg"
      mr={["0", "0", "3"]}
      mt={["3", "3", "14"]}
      padding={[1, 1, 2]}
    >
      <HStack>
        <Box w="65%">
          <Text variant="main_card_text">
            Contamos con más de 10 años de experiencia ofreciendo un servicio de
            calidad, siempre preocupados por satisfacer las necesidades de
            nuestros clientes.
          </Text>
        </Box>
        <Box w="35%">
          <Image src="/team.svg" alt={BusinessTitle} />
        </Box>
      </HStack>
      <NextLink href="/about">
        <Box>
          <Box align="center">
            <Link variant="link_blue">....mas sobre nosotros</Link>
          </Box>
        </Box>
      </NextLink>
    </Box>
  );
};
