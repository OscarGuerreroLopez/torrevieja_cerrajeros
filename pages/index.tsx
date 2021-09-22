import { NextPage } from "next";

import Head from "next/head";

import { BusinessTitle } from "../src/constants";

import {
  Brands,
  CardIntro,
  CardServicios,
  CardCall
} from "../src/components/home";

import { Cards } from "../src/components/cards";

import { MainHome } from "../src/components/home/main";

const IndexPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{BusinessTitle}</title>
        <meta
          name="description"
          content={`${BusinessTitle}, aperturas, automatismos, cierres metálicos, persianas, puertas de garaje, sustitución y reparación de cerraduras`}
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
      </Head>

      <MainHome />

      <Brands />

      <Cards>
        <CardIntro />
        <CardServicios />
      </Cards>
      <Cards>
        <CardCall />
      </Cards>
    </>
  );
};

export default IndexPage;
