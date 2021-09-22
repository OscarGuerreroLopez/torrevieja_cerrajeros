import {
  useBreakpointValue,
  Box,
  HStack,
  Text,
  Image,
  VStack,
  Link
} from "@chakra-ui/react";

import { BusinessTitle, Telephone, TelephoneClick } from "../../constants";

export const CardCall = (): JSX.Element => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box
      w="full"
      h="full"
      align="center"
      py={["3", "3", "0"]}
      boxShadow="dark-lg"
      rounded="md"
      mt={["3", "3", "0"]}
      padding={[1, 1, 5]}
    >
      {!isMobile && (
        <>
          <HStack>
            <Box w="55%">
              <Text variant="main_center_mobile" align="left">
                Puede llamarnos en cualquier momento del día o la noche, ya que
                contamos con una amplia plantilla de cerrajeros dispuestos a
                solucionar su avería en todo momento, ya sea de la gravedad que
                sea. Para ello, tan solo debe de ponerse en contacto a través de
                nuestro número de teléfono y le enviaremos a uno de nuestros
                cerrajeros urgentes donde nos indique con la mayor rapidez
                posible. El mejor servicio, los mejores precios y la máxima
                entrega es primordial en nuestra empresa.
              </Text>
            </Box>
            <Box w="45%">
              <Image src="/phone.svg" alt={BusinessTitle} />
            </Box>
          </HStack>
          <Link href={`tel:${TelephoneClick}`} variant="phone_click">
            Telf: {Telephone}
          </Link>
        </>
      )}

      {isMobile && (
        <VStack>
          <Text variant="main_center_mobile">
            Puede llamarnos en cualquier momento del día o la noche, ya que
            contamos con una amplia plantilla de cerrajeros dispuestos a
            solucionar su avería en todo momento, ya sea de la gravedad que sea.
          </Text>
          <Image src="/phone.svg" alt={BusinessTitle} w="50%" h="full" />
          <Text variant="main_center_mobile">
            Para ello, tan solo debe de ponerse en contacto a través de nuestro
            número de teléfono y le enviaremos a uno de nuestros cerrajeros
            urgentes donde nos indique con la mayor rapidez posible. El mejor
            servicio, los mejores precios y la máxima entrega es primordial en
            nuestra empresa.
          </Text>
          <Link href={`tel:${TelephoneClick}`} variant="phone_click">
            Telf: {Telephone}
          </Link>
        </VStack>
      )}
    </Box>
  );
};
