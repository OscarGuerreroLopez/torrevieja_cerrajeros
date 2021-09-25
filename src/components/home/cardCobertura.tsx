import { Box, HStack, Text, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import { BusinessTitle } from "../../constants";

export const CardCobertura = (): JSX.Element => {
  return (
    <Box
      w="full"
      h="full"
      align="center"
      boxShadow="dark-lg"
      mt={["3", "3", "0"]}
      padding={[1, 1, 2]}
      rounded="lg"
    >
      <HStack>
        <Text variant="main_card_text">
          Contamos con cerrajeros profesionales en la mayoria de poblaciones de
          la Vega Baja. Atendemos cualquier tipo de situacion y urgencia.
        </Text>
        <Image src="/suburbs.svg" alt={BusinessTitle} w="50%" h="full" />
      </HStack>
      <NextLink href="/locations">
        <Box>
          <Box align="left">
            <Link variant="link_blue">....cobertura</Link>
          </Box>
        </Box>
      </NextLink>
    </Box>
  );
};
