import {
  darken,
  mode,
  StyleFunctionProps,
  whiten
} from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

export const TextStyles = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    title: (props: Dict<unknown> | StyleFunctionProps): unknown => ({
      fontSize: [17, 22, 23, 32],
      fontFamily: "Ultra",
      color: mode(whiten("gray.700", 20), darken("white", 20))(props),
      _hover: {
        transform: "scale(1.05)",
        textDecoration: "none"
      }
    }),
    main_card_title: (props: Dict<unknown> | StyleFunctionProps): unknown => ({
      fontSize: [17, 22, 23, 32],
      fontFamily: "Ultra",
      color: mode(whiten("gray.700", 20), darken("white", 20))(props),
      _hover: {
        transform: "scale(1.05)",
        textDecoration: "none"
      }
    }),
    main_center_blue: (props: Dict<unknown> | StyleFunctionProps): unknown => ({
      fontSize: [22, 25, 19, 22],
      fontFamily: "Ultra",
      color: mode(whiten("gray.200", 20), darken("white", 20))(props),
      _hover: {
        transform: "scale(1.05)",
        textDecoration: "none"
      }
    }),
    main_card_text: (props: Dict<unknown> | StyleFunctionProps): unknown => ({
      fontSize: [17, 19, 20, 22],
      fontFamily: "Scheherazade+New",
      align: "center",
      color: mode(whiten("gray.700", 20), darken("white", 20))(props)
    }),
    footer_right: (props: Dict<unknown> | StyleFunctionProps): unknown => ({
      fontSize: [18, 22, 20, 25],
      color: mode(whiten("gray.900", 20), darken("white", 20))(props),
      _hover: {
        transform: "scale(1.20)",
        textDecoration: "none",
        cursor: "pointer"
      }
    }),
    crawlable_link: (props: Dict<unknown> | StyleFunctionProps): unknown => ({
      fontSize: [16, 16, 20, 25],
      color: mode(whiten("blue.700", 20), darken("blue.500", 20))(props),
      fontFamily: "Ultra",
      _hover: {
        transform: "scale(1.20)",
        textDecoration: "none",
        cursor: "pointer"
      }
    })
  },
  // default values for `size` and `variant`
  defaultProps: {}
};
