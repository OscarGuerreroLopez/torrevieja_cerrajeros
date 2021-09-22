import { Box, VStack, Text, Image } from "@chakra-ui/react";

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
    >
      <VStack>
        <Text variant="main_center_mobile">
          Entre los servicios que ofrecemos estan la instalación, reparación y
          sustitución de todo tipo de componentes de cerrajería así como; pomos,
          cerraduras, cerrojos o bombines en todas las puertas
        </Text>
        <Image src="/services.svg" alt={BusinessTitle} w="50%" h="full" />
        <Text variant="main_center_mobile">
          Ademas instalación de persianas metálicas de todas las medidas en su
          negocio o comercio, candados de suelo altamente resistentes,
          instalación de sofisticados sistemas de seguridad como anti-palanca o
          anti-pánico, amaestramiento y duplicado de llaves sencillas o
          forjadas, apertura de puertas de vehículo, puertas de garaje atascadas
          o candados de moto.
        </Text>
      </VStack>
    </Box>
  );
};
