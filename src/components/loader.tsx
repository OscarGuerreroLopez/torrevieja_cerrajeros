import { Box, Image, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { BusinessTitle } from "../constants";
import { MainCard } from "../../src/components/mainCard";

export const Loader = (): JSX.Element => {
  return (
    <>
      <MainCard>
        <Box>
          <Image src="/loader.svg" alt={BusinessTitle} maxWidth="50%" />
        </Box>
        <Box>
          <Text variant="title" align="center">
            Cargando la pagina, un momento por favor
          </Text>
        </Box>

        <NextLink href="/">
          <Box mt="3">
            <Box align="center">
              <Text variant="crawlable_link">....volver al inicio</Text>
            </Box>
          </Box>
        </NextLink>
      </MainCard>
    </>
  );
};
