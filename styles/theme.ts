import { extendTheme, ThemeConfig, theme as base } from "@chakra-ui/react";

import {
  LinkStyles,
  TextStyles,
  MenuButtonStyles
} from "../src/styled_components";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false
};

const fonts = {
  heading: `Merriweather, ${base.fonts?.heading}`,
  body: `Merriweather, ${base.fonts?.body}`
};

const components = {
  Link: { ...LinkStyles },
  Text: { ...TextStyles },
  Button: { ...MenuButtonStyles }
};

const theme = extendTheme({
  config,
  fonts,
  components
});

export default theme;
