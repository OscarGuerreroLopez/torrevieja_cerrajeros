import { Box, HStack, Text, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import { BusinessTitle } from "../../constants";

export const CardServicios = (): JSX.Element => {
  return (
    <Box
      w="full"
      h="full"
      align="center"
      py={["3", "3", "0"]}
      boxShadow="dark-lg"
      ml={["0", "0", "3"]}
      mt={["3", "3", "0"]}
      padding={[1, 1, 2]}
      rounded="lg"
    >
      <HStack>
        <Image src="/services.svg" alt={BusinessTitle} w="50%" h="full" />
        <Text variant="main_card_text">
          Entre los servicios que ofrecemos estan la instalación, reparación y
          sustitución de todo tipo de componentes de cerrajería así como; pomos,
          cerraduras, cerrojos o bombines en todas las puertas
        </Text>
      </HStack>
      <NextLink href="/services">
        <Box>
          <Box align="left">
            <Link variant="link_blue">....mas sobre servicios</Link>
          </Box>
        </Box>
      </NextLink>
    </Box>
  );
};
