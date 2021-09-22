import { Image, Box, VStack, Flex, useColorMode, Text } from "@chakra-ui/react";
import NextLink from "next/link";

import { BusinessTitle } from "../../constants";

const menuItems = [
  "Cerrajeria",
  "Apertura de puertas",
  "Automatismos",
  "Cierres metalicos"
];

export const RightFooter = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box w={["100%", "100%", "33%"]}>
      <VStack w="full" align="center">
        {menuItems.map((item, index) => (
          <NextLink href="/services" key={index}>
            <Text variant="footer_right" key={index}>
              {item}
            </Text>
          </NextLink>
        ))}

        <Flex direction="column">
          <Box align="center">
            <Image
              src={colorMode === "light" ? "/dark_mode.svg" : "/light_mode.png"}
              alt={BusinessTitle}
              w="15%"
              onClick={toggleColorMode}
            />
          </Box>
          <Box align="center">
            <Text variant="footer_right" onClick={toggleColorMode}>
              {colorMode === "light" ? "Modo oscuro" : "Modo Claro"}
            </Text>
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};
