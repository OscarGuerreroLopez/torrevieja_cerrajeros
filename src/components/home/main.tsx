import { Flex, Text, Link, Box, useBreakpointValue } from "@chakra-ui/react";

const fontSizes = ["15", "17", "22", "25", "30", "50"];
import { Telephone, TelephoneClick } from "../../constants";

export const MainHome = (): JSX.Element => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex>
      <Box
        // bgImage="/lock.jpeg"
        bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('/lock2.png')"
        bgSize="cover"
        bgPosition="center"
        align="center"
        w="100%"
        minH={["70vh", "80vh", "80vh", "80vh", "110vh", "80vh"]}
      >
        <Link
          href={`tel:${TelephoneClick}`}
          w="100%"
          top="5%"
          position="relative"
          fontSize={["18", "22", "30", "40", "50", "65"]}
          fontWeight="bold"
          transform="translate(-50%, -50%)"
          color="gray.300"
          _hover={{ textDecoration: "none" }}
        >
          Telefono 24H: {Telephone}
        </Link>
        <Text
          w="100%"
          left="50%"
          top={["20%", "20%", "12%"]}
          position="relative"
          fontSize={fontSizes}
          fontWeight="bold"
          transform="translate(-50%, -50%)"
          color="gray.300"
        >
          Apertura de puertas
        </Text>
        <Text
          w="100%"
          left="50%"
          top={["25%", "25%", "15%"]}
          position="relative"
          fontSize={fontSizes}
          fontWeight="bold"
          transform="translate(-50%, -50%)"
          color="gray.300"
        >
          Automatismos
        </Text>
        <Text
          w="100%"
          left="50%"
          top={["30%", "30%", "17%"]}
          position="relative"
          fontSize={fontSizes}
          fontWeight="bold"
          transform="translate(-50%, -50%)"
          color="gray.300"
        >
          Reparación e instalación de persianas
        </Text>
        <Text
          w="100%"
          left="50%"
          top={["36%", "36%", "22%"]}
          position="relative"
          fontSize={fontSizes}
          fontWeight="bold"
          transform="translate(-50%, -50%)"
          color="gray.300"
        >
          Cierres metalicos
        </Text>
        <Text
          w="100%"
          left="50%"
          top={["42%", "42%", "27%"]}
          position="relative"
          fontSize={fontSizes}
          fontWeight="bold"
          transform="translate(-50%, -50%)"
          color="gray.300"
        >
          Sustitución y reparación de cerraduras
        </Text>
        <Text
          w="100%"
          left="50%"
          top={["48%", "48%", "33%"]}
          position="relative"
          fontSize={fontSizes}
          fontWeight="bold"
          transform="translate(-50%, -50%)"
          color="gray.300"
        >
          Puertas de garaje
        </Text>

        <Text
          w="100%"
          left="50%"
          top={["55%", "55%", "40%"]}
          position="relative"
          fontSize={fontSizes}
          fontWeight="bold"
          transform="translate(-50%, -50%)"
          color="gray.300"
        >
          Mantenimientos
        </Text>
      </Box>
    </Flex>
  );
};
