import { Flex, VStack, Image, Text } from "@chakra-ui/react";
import { BusinessTitle } from "../../constants";

export const Brands = (): JSX.Element => {
  return (
    <>
      <Flex direction="column" bg="blue.500" pb="10">
        <VStack alignItems="center" w="full" h="auto">
          <Text variant="main_center_blue" align="left">
            Solo primeras marcas
          </Text>

          <Image src="/marcas.jpeg" alt={BusinessTitle} />
        </VStack>
      </Flex>
      {/* <Flex direction="column" h="5vh" bg="blue.500" /> */}
    </>
  );
};
