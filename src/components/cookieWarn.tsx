import { useCookies } from "react-cookie";
import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { Flex, Text, Link, Button, Wrap } from "@chakra-ui/react";

const CookieWarn = (): JSX.Element => {
  const [cookies, setCookie] = useCookies(["cerr"]);
  const [firstTimer, setFirstTimer] = useState(true);

  useEffect(() => {
    if (cookies && cookies["cerr"]) {
      setFirstTimer(false);
    }
  }, [setFirstTimer, cookies]);

  const onClickCookies = () => {
    const cookieExp = new Date();
    cookieExp.setMonth(cookieExp.getMonth() + 4);

    setCookie("cerr", "not_my_first_time", { expires: cookieExp });
  };

  return (
    <>
      {firstTimer && (
        <Wrap
          p="2"
          position="fixed"
          left="0"
          bottom="0"
          width="100%"
          bg="red.300"
        >
          <Text
            fontSize={[11, 13, 15, 17, 20, 25]}
            textAlign="center"
            width="100%"
          >
            Esta web utiliza 'cookies' propias y de terceros para ofrecerte una
            mejor experiencia y servicio. Al navegar o utilizar nuestros
            servicios, aceptas el uso que hacemos de las 'cookies'.
          </Text>
          <Flex width="100%" justifyContent="center" pt="1">
            <NextLink href="/privacy">
              <Link>
                <b> Mas informacion</b>
              </Link>
            </NextLink>
          </Flex>

          <Flex width="100%" justifyContent="center" pt="4">
            <Button variant="menu_cookies" onClick={onClickCookies}>
              Entendido
            </Button>
          </Flex>
        </Wrap>
      )}
    </>
  );
};

export default CookieWarn;
