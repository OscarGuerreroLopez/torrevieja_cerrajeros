import { NextPage } from "next";

import Head from "next/head";

import { BusinessMainTitle, Telephone } from "../src/constants";

import {
  CardIntro,
  CardServicios,
  CardCall,
  CardCobertura,
  MainHome
} from "../src/components/home";

import { Cards } from "../src/components/cards";

import { LargeWrapper } from "../src/components/largeWrapper";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{`Los Mejores ${BusinessMainTitle} 24H. Telf: ${Telephone}`}</title>
        <meta
          name="description"
          content={`Los Mejores ${BusinessMainTitle}. Expertos al Mejor Precio en Aperturas, Automatismos, Cierres metálicos, Persianas, Puertas de garaje, Sustitución y reparación de cerraduras. Cerrajería.`}
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
      </Head>

      <MainHome />
      <LargeWrapper>
        <Cards>
          <CardIntro />
          <CardServicios />
        </Cards>

        <Cards>
          <CardCall />
        </Cards>
        <Cards>
          <CardCobertura />
        </Cards>
      </LargeWrapper>
    </>
  );
};

export default IndexPage;
