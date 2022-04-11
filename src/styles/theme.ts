import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#181B23",
            "800": "#1F2029",
            "700": "#353646",
            "600": "#4B4D63",
            "500": "#616480",
            "400": "#797D9A",
            "300": "#9699B0",
            "200": "#B3B5C6",
            "100": "#D1D2DC",
            "50": "#EEEEF2",
        },
        blue: {
            "50": "#CDE9FF",
            "100": "#AEDBFF",
            "200": "#004E90",
            "300": "#004B8B",
            "400": "#004B8B",
            "500": "#004B8B",
            "600": "#004B8B",
            "700": "#004B8B",
            "800": "#004B8B",
            "900": "#004B8B",
        }
    },
    fonts: {
        heading: "Montserrat",
        body: "Rubik"
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.800',

            },
            a: {
                _hover: {
                    textDecoration: 'none',
                },
                textDecoration: "none",
            },
        }
    }
})