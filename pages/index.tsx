import { NextPage } from "next";

import Head from "next/head";

import { BusinessTitle, Telephone } from "../src/constants";

import {
  CardIntro,
  CardServicios,
  CardCall,
  CardCobertura
} from "../src/components/home";

import { Cards } from "../src/components/cards";

import { MainHome } from "../src/components/home/main";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{`${BusinessTitle} 24H. Telf: ${Telephone}`}</title>
        <meta
          name="description"
          content={`${BusinessTitle}, aperturas, automatismos, cierres metálicos, persianas, puertas de garaje, sustitución y reparación de cerraduras`}
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
      </Head>

      <MainHome />

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
    </>
  );
};

export default IndexPage;
