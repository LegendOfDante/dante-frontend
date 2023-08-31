// import {
//   experimental_extendTheme as extendTheme, responsiveFontSizes
// } from '@mui/material/styles'

import { createTheme, responsiveFontSizes } from '@mui/material'
const themeExthend = createTheme({
  palette: {
    primary: {
      main: '#F0AE36',
      dark: '#F7C55A',
      hover: '#FFA500',
      light: '#F1C332',
      contrastText: '#fff'
    },
    neutral: {
      main: '#DCDCDC',
      light: '#F5F5F5',
      dark: '#FBFBFB'
    },
    secondary: {
      main: '#3C78D8',
      contrastText: '#000'
    },
    danger: {
      main: '#FA0102',
      light: '#FAE5E3'
    },
    purple: {
      main: '#6750A4'
    },
    light: {
      main: '#FEFEFF',
      light: '#FFF',
      dark: '#FEFEFE'
    },
    success: {
      main: '#69A84F',
      light: '#E6F2E7'
    },
    dark: {
      main: '#020202',
      dark: '#2D2D2D'
    }
  },

  typography: {
    fontFamily: [
      'Recursive',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },

  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.50rem',
    '2xl': '1.5rem', // h6
    '3xl': '1.875rem', // h5
    '4xl': '2.25rem', // h4
    '5xl': '3rem', // h3
    '6xl': '3.75rem', // h2
    '7xl': '3.5rem' // h1
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 1200,
      xl: 1556
    }
  }
})

export default responsiveFontSizes(themeExthend)

// const themeExthend = extendTheme({
//   colorSchemes: {
//     primary: {
//       main: '#F7C55A',
//       100: '#F1C332',
//       200: '#F0AE36',
//       300: '#F0AE36'
//     },
//     secondary: '#3C78D8',
//     darkPrimary: '#020202',
//     lightPrimary: {
//       50: '#F5F5F5',
//       100: '#FBFBFB',
//       200: '#D9D9DA'
//     },
//     white: '#FEFEFF',
//     black: '#15171A',
//     blue: {
//       50: '#F4F7FF',
//       100: '#F4F7FF',
//       200: '#DAE5FF',
//       300: '#C1D3FF',
//       400: '#A8C1FF',
//       500: '#8FB0FF',
//       600: '#6D90E4',
//       700: '#4C6FC2',
//       800: '#3252A0',
//       900: '#1C397E',
//       1000: '#0D245C',
//       1100: '#989302'
//     },
//     purple: {
//       main: '#9B00FF'
//     },
//     neutral: {
//       120: '#15171A',
//       110: '#2F3439',
//       100: '#414850',
//       90: '#555D66',
//       80: '#6A737D',
//       70: '#808994',
//       60: '#96A0AA',
//       50: '#AEB7C1',
//       40: '#C6CED8',
//       30: '#DFE6EE',
//       20: '#F3F9FF',
//       10: '#FEFEFF'
//     },
//     aquamarine: {
//       100: '#294139',
//       90: '#345B4E',
//       80: '#467565',
//       70: '#588E7C',
//       60: '#6BA793',
//       50: '#7FC1AB',
//       40: '#94DAC3',
//       30: '#AAF4DB',
//       20: '#DFFFF3',
//       10: '#F7FFFC'
//     },
//     danger: {
//       100: '#FA0102',
//       10: '#FAE5E3'
//     },
//     info: {
//       100: '#2196F3',
//       10: '#E1EFFA'
//     },
//     success: {
//       100: '#69A84F',
//       10: '#E6F2E7'
//     },
//     warning: {
//       100: '#F03434',
//       10: '#FCEFDD'
//     }

//   },
//   fontSizes: {
//     xs: '0.75rem',
//     sm: '0.875rem',
//     md: '1rem',
//     lg: '1.125rem',
//     xl: '1.50rem',
//     '2xl': '1.5rem', // h6
//     '3xl': '1.875rem', // h5
//     '4xl': '2.25rem', // h4
//     '5xl': '3rem', // h3
//     '6xl': '3.75rem', // h2
//     '7xl': '3.5rem' // h1
//   },
//   spacing: (factor) => `${0.25 * factor}rem`,
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1556
//     }
//   }
// })

// export default responsiveFontSizes(themeExthend)
