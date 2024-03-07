import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme(
  {
    colors: {
      purple: {
        500: "#5F00D9",
      },
      p: {
        purple: "#5F00D9",
        black: "#171717",
      },
      black: {
        5: "#F3F3F7",
        10: "#EEEEF4",
        20: "#D8DDE2",
        40: "#BABAC4",
        60: "#797E82",
        80: "#535D66",
      },
    },
    fonts: {
      heading: `Ubuntu`,
      body: "Ubuntu",
    },
    textStyles: {
      h1: {
        fontSize: {
          base: "1.875rem",
          md: "2rem",
        },
        color: "p.black",
        lineHeight: {
          base: "2.125rem",
          md: "2.25rem",
        },
      },
      h2: {
        fontSize: {
          base: "1.5rem",
          md: "1.75rem",
        },
        color: "p.black",
        lineHeight: { base: "1.75rem", md: "2rem" },
      },

      h3: {
        fontSize: {
          base: "1.375rem",
          md: "1.5rem",
          xl: "2rem",
        },
        color: "p.black",

        lineHeight: { base: "1.625rem", md: "1.75rem", xl: "2.25rem" },
      },

      h4: {
        fontSize: {
          base: "1.25rem",
          md: "1.375rem",
        },
        color: "p.black",

        lineHeight: { base: "1.5rem", md: "1.625rem" },
      },
      h5: {
        fontSize: {
          base: "1.125rem",
          md: "1.25rem",
        },
        color: "p.black",

        lineHeight: { base: "1.375rem", md: "1.5rem" },
      },
      h6: {
        fontSize: {
          base: "1rem",
          md: "1.125rem",
        },
        color: "p.black",

        lineHeight: { base: "1.25rem", md: "1.375rem" },
      },
    },

    fontSizes: {
      xs: ".75rem",
      sm: ".875rem",
      base: { base: "1rem", md: "1.125rem" },
      lg: { base: "1.125rem", md: "1.25rem" },
      xl: { base: "1.25rem", md: "1.375rem" },
      "2xl": { base: "1.375rem", md: "1.5rem" },
      "3xl": { base: "1.5rem", md: "1.75rem" },
      "4xl": { base: "1.875rem", md: "2rem" },
    },
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: "#F3F3F7",
        },
      },
    },

    components: {
      Button: {
        baseStyle: {
          fontWeight: "bold",
          borderRadius: ".625rem",
        },
      },
      FormLabel: {
        baseStyle: {
          fontSize: "sm",
        },
      },
      Input: {
        variants: {
          outline: {
            field: {
              h: "2.375rem",
              borderRadius: ".5rem",
              fontSize: "sm",
              pb: "0",
              _focus: {
                boxShadow: "0 0 0 1px #5F00D9",
              },
            },
          },
        },
      },
      Textarea: {
        variants: {
          outline: {
            h: "2.375remx",
            borderRadius: ".5rem",
            fontSize: "sm",

            _focus: {
              boxShadow: "0 0 0 1px #5F00D9",
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "purple" })
);