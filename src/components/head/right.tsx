import {
  Link,
  useBreakpointValue,
  Box,
  HStack,
  Center,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import NextLink from "next/link";

const MenuItems = [
  { text: "Inicio", link: "/" },
  { text: "Contacto", link: "/contact" },
  { text: "Servicios", link: "/services" },
  { text: "Cobertura", link: "/locations" }
];

export const RightHeader = (): JSX.Element => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {!isMobile && (
        <Box boxSize="xl" h="full" align="right">
          <Center h={["50px", "50px", "105px", "100px"]} color="white">
            <HStack spacing={[3, 5, 7]}>
              {MenuItems.map((item, index) => (
                <NextLink href={item.link} key={index}>
                  <Link variant="header" key={index}>
                    {item.text}
                  </Link>
                </NextLink>
              ))}
            </HStack>
          </Center>
        </Box>
      )}

      {isMobile && (
        <Center h={["50px", "50px", "105px", "130px"]}>
          <Menu>
            <MenuButton
              variant="menu"
              as={IconButton}
              aria-label="Options"
              icon={<Hamburger toggled={isOpen} toggle={setOpen} />}
            />
            <MenuList>
              {MenuItems.map((item, index) => (
                <MenuItem
                  onClick={() => {
                    setOpen(false);
                  }}
                  key={index}
                >
                  <NextLink href={item.link} key={index}>
                    {item.text}
                  </NextLink>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Center>
      )}
    </>
  );
};

// https://hamburger-react.netlify.app/
