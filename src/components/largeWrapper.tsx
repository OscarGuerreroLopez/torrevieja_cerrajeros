import { Container, useBreakpointValue } from "@chakra-ui/react";

interface AuxProps {
  [key: string]: unknown;
}

export const LargeWrapper: React.FC<AuxProps> = ({ children }): JSX.Element => {
  const isLarge = useBreakpointValue({
    base: "small",
    md: "small",
    lg: "small",
    xl: "large",
    "2xl": "large"
  });

  if (isLarge === "large") {
    return (
      <Container maxWidth="container.xl" padding={[0, 0, 6]}>
        {children}
      </Container>
    );
  }

  return <> {children}</>;
};
