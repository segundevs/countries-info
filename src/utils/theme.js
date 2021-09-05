import { extendTheme } from "@chakra-ui/react";

// const colors = {
//   brand: {
//     900: "#1a365d",
//     800: "#153e75",
//     700: "#2a69ac",
//   },
// }

// export const theme = extendTheme({ colors })

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme