import { Flex } from "@chakra-ui/react";

import { LeftFooter } from "./left";
import { CenterFooter } from "./center";
import { RightFooter } from "./right";

const Footer = (): JSX.Element => {
  return (
    <Flex
      w="full"
      h="full"
      p={7}
      spacing={2}
      alignItems="flex-start"
      direction={{ base: "column", md: "row" }}
    >
      <LeftFooter />
      <CenterFooter />
      <RightFooter />
    </Flex>
  );
};

export default Footer;
