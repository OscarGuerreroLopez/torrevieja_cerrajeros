import { Link, Box, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

const MenuItems = [
  { text: "Inicio", link: "/" },
  { text: "Contacto", link: "/contact" },
  { text: "Servicios", link: "/services" },
  { text: "Cobertura", link: "/locations" }
];

export const LeftFooter = (): JSX.Element => {
  return (
    <Box w={["100%", "100%", "33%"]}>
      <VStack w="full" align="center">
        {MenuItems.map((item, index) => (
          <NextLink href={item.link} key={index}>
            <Link variant="footer" key={index}>
              {item.text}
            </Link>
          </NextLink>
        ))}
      </VStack>
    </Box>
  );
};
