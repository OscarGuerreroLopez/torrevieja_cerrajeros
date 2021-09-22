import { Box, HStack, Text, Image } from "@chakra-ui/react";

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
          <Text variant="main_center_mobile">
            Contamos con más de 10 años de experiencia ofreciendo un servicio de
            calidad, siempre preocupados por satisfacer las necesidades de
            nuestros clientes. Para nosostros es importante que nuestros
            clientes tengan la seguridad y tranquilidad de que nuestro servicio
            es oportuno, ético y profesional. Este mismo servicio que nos ha
            caracterizado hasta ahora, lo proporcionamos al atender emergencias
            las 24 horas.
          </Text>
        </Box>
        <Box w="35%">
          <Image src="/team.svg" alt={BusinessTitle} />
        </Box>
      </HStack>
    </Box>
  );
};
