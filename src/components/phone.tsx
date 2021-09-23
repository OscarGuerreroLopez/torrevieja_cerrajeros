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
        <Link href={`tel:${TelephoneClick}`} variant="link_phone">
          Telf: {Telephone}
        </Link>
      </Box>
      {isMobile && (
        <HStack>
          <Box w="40%" align="center">
            <Link href={`tel:${TelephoneClick}`}>
              <Image
                src="/calling2.svg"
                alt={BusinessTitle}
                w={["50%", "45%", "25%"]}
              />
            </Link>
          </Box>
          <Box w="20%" align="center">
            <Link href={`tel:${TelephoneClick}`}>
              <Image
                src="/24hours3.svg"
                alt={BusinessTitle}
                w={["100%", "90%", "25%"]}
              />
            </Link>
          </Box>

          <Box w="40%" align="center">
            <Link
              href={`https://api.whatsapp.com/send?phone=${IntTelephone}&text=%20Hola Cerrajeros`}
            >
              <Image
                src="/whatsapp2.png"
                alt={BusinessTitle}
                w={["50%", "45%", "25%"]}
              />
            </Link>
          </Box>
        </HStack>
      )}
    </>
  );
};
