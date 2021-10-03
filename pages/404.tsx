import { NextPage } from "next";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Box, Image, Text } from "@chakra-ui/react";

const reRouting = {
  "/locations/": "/locations",
  "/services/": "/services"
};

import { MainCard } from "../src/components/mainCard";

import { BusinessTitle, Telephone } from "../src/constants";

const NotFoundPage: NextPage = () => {
  const [load, setLoad] = useState(false);
  const router = useRouter();

  const checkAndLoad = async () => {
    if (reRouting[router.asPath]) {
      await router.push(reRouting[router.asPath]);
    }

    setLoad(true);
  };

  useEffect(() => {
    checkAndLoad();
  }, []);

  return (
    <>
      {load && (
        <>
          <Head>
            <title>{`${BusinessTitle} 24H. Telf: ${Telephone}`}</title>
            <meta name="description" content={BusinessTitle} />
            <meta name="robots" content="index, follow" />
            <meta charSet="UTF-8" />
          </Head>

          <MainCard>
            <Box>
              <Image src="/tow.svg" alt={BusinessTitle} />
            </Box>
            <Box>
              <Text variant="title" align="center">
                Pagina no encontrada
              </Text>
            </Box>

            <NextLink href="/">
              <Box mt="3">
                <Box align="center">
                  <Text variant="crawlable_link">....volver al inicio</Text>
                </Box>
              </Box>
            </NextLink>
          </MainCard>
        </>
      )}
    </>
  );
};

export default NotFoundPage;
