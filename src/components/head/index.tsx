import { useColorModeValue, Stack, Spacer } from "@chakra-ui/react";

import { LeftHeader } from "./left";
import { RightHeader } from "./right";

const Header = (): JSX.Element => {
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");

  return (
    <Stack
      direction="row"
      w="full"
      h="full"
      p={3}
      spacing={2}
      alignItems="flex-start"
      bg={bgColor}
    >
      <LeftHeader />
      <Spacer />
      <RightHeader />
    </Stack>
  );
};

export default Header;
