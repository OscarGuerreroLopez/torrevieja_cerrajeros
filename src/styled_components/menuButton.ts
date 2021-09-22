import {
  darken,
  mode,
  StyleFunctionProps,
  whiten
} from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

export const MenuButtonStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    menu: (props: Dict<unknown> | StyleFunctionProps): unknown => ({
      color: mode(whiten("black", 20), darken("green.400", 20))(props),
      border: "none"
    }),
    menu_cookies: (props: Dict<unknown> | StyleFunctionProps): unknown => ({
      color: mode(whiten("black", 20), darken("white", 20))(props),
      bgColor: mode(whiten("blue.300", 20), darken("gray.400", 20))(props),
      width: ["45%", "35%", "35%"],
      border: "none"
    })
  },
  // default values for `size` and `variant`
  defaultProps: {}
};
