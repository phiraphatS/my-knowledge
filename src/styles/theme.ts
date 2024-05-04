import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

export const theme = extendTheme({
    config,
    styles: {
        global: {
            body: {
                height: '100vh',
                maxWidth: '100vw',
                overflowX: 'hidden',
            },
            a: {
                color: 'inherit',
                textDecoration: 'none',
            },
        }
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'bold',
            },
            variants: {
                'with-shadow': {
                    bg: 'red.400',
                    boxShadow: '0 0 2px 2px #efdfde',
                },
            },
        },
    },
    colors: {
        background: {
            100: 'inherit',
        },
        Text: {
            100: 'inherit',
        }
    },
    fonts: {
        heading: 'var(--font-rubik)',
        body: 'var(--font-rubik)',
    },
});