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
    main_center: (props: Dict<unknown> | StyleFunctionProps): unknown => ({
      fontSize: [22, 25, 15, 18, 20, 35],
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
    main_center_mobile: (
      props: Dict<unknown> | StyleFunctionProps
    ): unknown => ({
      fontSize: [12, 15],
      fontFamily: "Ultra",
      align: "center",
      color: mode(whiten("gray.700", 20), darken("white", 20))(props)
    }),
    main_background: (): unknown => ({
      left: "50%" /* horizontal alignment */,
      top: "50%",
      position: "relative",
      fontSize: 33,
      fontWeight: "bold",
      transform: "translate(-50%, -50%)",
      color: "green.500"
    }),
    footer_right: (props: Dict<unknown> | StyleFunctionProps): unknown => ({
      fontSize: [18, 22, 20, 25],
      color: mode(whiten("gray.900", 20), darken("white", 20))(props),
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
