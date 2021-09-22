import { Link, Image, Box, VStack, useColorModeValue } from "@chakra-ui/react";

import { BusinessTitle, Telephone, TelephoneClick } from "../../constants";
import { Phone } from "../../components/phone";
export const CenterFooter = (): JSX.Element => {
  const colorMode = useColorModeValue("light", "dark");

  return (
    <Box w={["100%", "100%", "33%"]} mb={["5", "5", "0"]}>
      <VStack w="full" align="center">
        <Image
          src={
            colorMode === "light"
              ? "/logo-cerrajero_light.jpeg"
              : "/logo-cerrajero_dark.jpeg"
          }
          alt={BusinessTitle}
          h="auto"
        />
        <Phone />
      </VStack>
    </Box>
  );
};
