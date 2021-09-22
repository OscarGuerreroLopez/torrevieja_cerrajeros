import { Box, Center, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

import { BusinessTitle } from "../../constants";

export const LeftHeader = (): JSX.Element => {
  return (
    <Box boxSize="xl" h="full" w="full">
      <Center h={["50px", "50px", "105px", "100px"]} color="white">
        {" "}
        <Box w="full" align="left" ml={["0", "0", "1", "4", "7"]}>
          <NextLink href="/">
            <Link>
              <Text variant="title">{BusinessTitle}</Text>
            </Link>
          </NextLink>
        </Box>
      </Center>
    </Box>
  );
};
