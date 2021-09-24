import { Flex } from "@chakra-ui/react";

interface AuxProps {
  [key: string]: unknown;
}

export const Cards: React.FC<AuxProps> = ({ children }): JSX.Element => {
  return (
    <Flex h="auto" direction="column" alignItems="center" py={[0, 0, 5]}>
      <Flex
        h="auto"
        w={["100%", "100%", "100%"]}
        direction={{ base: "column", md: "row" }}
        padding={[1, 1, 0]}
      >
        {children}
      </Flex>
    </Flex>
  );
};
