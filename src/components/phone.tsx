import {
  useBreakpointValue,
  Box,
  HStack,
  Text,
  Image,
  Link
} from "@chakra-ui/react";

import {
  BusinessTitle,
  Telephone,
  TelephoneClick,
  IntTelephone
} from "../constants";

export const Phone = (): JSX.Element => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Box w="100%" align="center">
        <Link href={`tel:${TelephoneClick}`} variant="phone_click">
          Telf: {Telephone}
        </Link>
      </Box>
      {isMobile && (
        <HStack>
          <Box w="50%" align="center">
            <Link href={`tel:${TelephoneClick}`}>
              <Image
                src="/calling.svg"
                alt={BusinessTitle}
                w={["40%", "45%", "25%", "20%", "15%", "10%"]}
              />
            </Link>
          </Box>

          <Box w="50%" align="center">
            <Link
              href={`https://api.whatsapp.com/send?phone=${IntTelephone}&text=%20Hola Cerrajeros`}
            >
              <Image
                src="/whatsapp2.png"
                alt={BusinessTitle}
                w={["40%", "45%", "25%", "20%", "15%", "10%"]}
              />
            </Link>
          </Box>
        </HStack>
      )}
    </>
  );
};
