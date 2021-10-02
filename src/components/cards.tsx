import { Flex } from "@chakra-ui/react";

interface AuxProps {
  [key: string]: unknown;
}

export const Cards: React.FC<AuxProps> = ({ children }): JSX.Element => {
  return (
    <Flex h="auto" direction="column" alignItems="center">
      <Flex
        h="auto"
        direction={{ base: "column", md: "row" }}
        padding={[1, 1, 2]}
      >
        {children}
      </Flex>
    </Flex>
  );
};
