import { Box, HStack, Text, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import { BusinessTitle } from "../../constants";
import { Phone } from "../phone";

export const CardCall = (): JSX.Element => {
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
        <Image src="/phone.svg" alt={BusinessTitle} w="50%" h="full" />
        <Text variant="main_card_text">
          Puede llamarnos en cualquier momento del día o la noche, ya que
          contamos con una amplia plantilla de cerrajeros dispuestos a
          solucionar su avería en todo momento, ya sea de la gravedad que sea.
        </Text>
      </HStack>
      <NextLink href="/contact">
        <Box>
          <Box align="center">
            <Link variant="link_blue">....contacto</Link>
          </Box>
        </Box>
      </NextLink>
      <Phone />
    </Box>
  );
};
