import { Box, Text } from "@chakra-ui/react";

import { LargeWrapper } from "../../src/components/largeWrapper";
import { Cards } from "../../src/components/cards";

export const ServicesCards = (): JSX.Element => {
  return (
    <LargeWrapper>
      <Cards>
        <Box
          w="full"
          h="full"
          align="left"
          py={["3", "3", "0"]}
          boxShadow="dark-lg"
          mr={["0", "0", "3"]}
          mt={["5", "5", "8"]}
          padding={[1, 1, 2]}
          rounded="lg"
        >
          <Text variant="main_card_title" align="center">
            Perdida de llaves:
          </Text>
          <Text variant="main_card_text">
            Servicio de urgencia el cual le permitirá volver a entrar a su
            domicilio rapidamente. Se ofrecerá la posibilidad de cambiar la
            cerradura para su mayor tranquilidad.
          </Text>
        </Box>
        <Box
          w="full"
          h="full"
          align="left"
          py={["3", "3", "0"]}
          boxShadow="dark-lg"
          mr={["0", "0", "3"]}
          mt={[5, 5, 16]}
          padding={[1, 1, 2]}
          rounded="lg"
        >
          <Text variant="main_card_title" align="center">
            Aperturas:
          </Text>
          <Text variant="main_card_text">
            Aperturas sin roturas en el 90% de los casos. Sustitucion de la
            cerradura para asegurar su vivienda
          </Text>
        </Box>
        <Box
          w="full"
          h="full"
          align="left"
          py={["3", "3", "0"]}
          boxShadow="dark-lg"
          mt={["5", "5", "8"]}
          padding={[1, 1, 2]}
          rounded="lg"
        >
          <Text variant="main_card_title" align="center">
            Cambio de cerraduras:
          </Text>
          <Text variant="main_card_text">
            Cambio de cerraduras de manera rapida y limpia
          </Text>
        </Box>
      </Cards>
      <Cards>
        <Box
          w="full"
          h="full"
          align="left"
          py={["3", "3", "0"]}
          boxShadow="dark-lg"
          mr={["0", "0", "3"]}
          mt={[5, 5, 16]}
          padding={[1, 1, 2]}
          rounded="lg"
        >
          <Text variant="main_card_title" align="center">
            Persianas de local y cierres:
          </Text>
          <Text variant="main_card_text">
            Persianas enrrollables, seccionales, correderas y abatibles de local
            Somos especialistas en cierres de seguridad para locales
          </Text>
        </Box>
        <Box
          w="full"
          h="full"
          align="left"
          py={["3", "3", "0"]}
          boxShadow="dark-lg"
          mr={["0", "0", "3"]}
          mt={["5", "5", "8"]}
          padding={[1, 1, 2]}
          rounded="lg"
        >
          <Text variant="main_card_title" align="center">
            Automatismos:
          </Text>
          <Text variant="main_card_text">
            Arreglo e instalación de motores para puertas de garaje, correderas,
            secciónales, abatibles, batientes y cierres metálicos Contamos con
            un equipo de trabajo que ama su oficio y que sabe lo que es
            esforzarse para obtener un excelente resultado final. Tenemos claro
            nuestros objetivos y la normativa vigente cuando de reparación de
            puertas automáticas se trata.
          </Text>
        </Box>
        <Box
          w="full"
          h="full"
          align="left"
          py={["3", "3", "0"]}
          boxShadow="dark-lg"
          mt={[5, 5, 16]}
          padding={[1, 1, 2]}
          rounded="lg"
        >
          <Text variant="main_card_title" align="center">
            Persianas de hogar:
          </Text>
          <Text variant="main_card_text">
            Reparamos e instalamos todo tipo de persianas para el hogar. Tanto
            de PVC como de aluminio normal o de seguridad, contamos con
            accesorios como: roldanas, guíacintas, ejes, conteras, soportes...
          </Text>
        </Box>
      </Cards>
    </LargeWrapper>
  );
};
