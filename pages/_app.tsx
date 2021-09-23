import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { CookiesProvider } from "react-cookie";

import theme from "../styles/theme";
import "../styles/styles.css";

import Header from "../src/components/head";
import Footer from "../src/components/footer";
import CookieWarn from "../src/components/cookieWarn";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <CookiesProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <CookieWarn />
      </CookiesProvider>
    </ChakraProvider>
  );
};

// export const reportWebVitals = (metric: any): void => {
//   if (metric.label === "web-vital") {
//     console.log(metric);
//   }
// };

export default App;
