import {
  darken,
  mode,
  StyleFunctionProps,
  whiten
} from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

export const LinkStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    header_link: (props: Dict<unknown> | StyleFunctionProps): unknown => ({
      fontSize: [8, 10, 20, 25],
      color: mode(whiten("gray.900", 20), darken("white", 20))(props),
      _hover: {
        transform: "scale(1.20)",
        textDecoration: "none"
      }
    }),
    footer_link: (props: Dict<unknown> | StyleFunctionProps): unknown => ({
      fontSize: [18, 22, 20, 25],
      color: mode(whiten("gray.900", 20), darken("white", 20))(props),
      _hover: {
        transform: "scale(1.20)",
        textDecoration: "none"
      }
    }),
    link_blue: (props: Dict<unknown> | StyleFunctionProps): unknown => ({
      fontSize: [16, 16, 20, 25],
      color: mode(whiten("blue.700", 20), darken("blue.500", 20))(props),
      fontFamily: "Ultra",
      _hover: {
        transform: "scale(1.20)",
        textDecoration: "none"
      }
    }),
    link_phone: (props: Dict<unknown> | StyleFunctionProps): unknown => ({
      fontSize: [20, 25, 20, 33, 33, 38],
      fontFamily: "Ultra",
      color: mode(whiten("gray.700", 20), darken("white", 20))(props),
      _hover: {
        transform: "scale(1.05)",
        textDecoration: "none"
      }
    })
  },
  // default values for `size` and `variant`
  defaultProps: {}
};
