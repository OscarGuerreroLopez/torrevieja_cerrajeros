import { Container, Box } from "@chakra-ui/react";
import React from "react";

interface AuxProps {
  [key: string]: unknown;
}

export const MainCard: React.FC<AuxProps> = ({ children }): JSX.Element => {
  return (
    <Container maxWidth="container.xl" px={[1, 1, 10]}>
      <Box
        w="full"
        h="full"
        align="center"
        py={[3, 3, 1]}
        boxShadow="dark-lg"
        rounded="lg"
      >
        {children}
      </Box>
    </Container>
  );
};
