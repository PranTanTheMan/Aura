import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    secondary: "",
    primary: "",
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        color: "white",
        backgroundColor: "primary",
        padding: 0,
        margin: 0,
      },

      "&::-webkit-scrollbar": {
        width: "0.5em",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "0px",
        background: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "secondary",
        borderRadius: "50px",
      },
    }),
  },
});

export default theme;
