import { CSSProperties } from 'react'

import { blue, cyan, green, red, common, grey } from '@mui/material/colors'
import { responsiveFontSizes, createTheme } from '@mui/material/styles'


export const fontSize = {
  10: '0.625rem',
  12: '0.75rem',
  14: '0.875rem',
  16: '1rem',
  18: '1.125rem',
  20: '1.25rem',
  22: '1.375rem',
  24: '1.5rem',
  28: '1.75rem',
  30: '1.875rem',
  32: '2rem',
  34: '2.125rem',
  40: '2.5rem',
  48: '3rem',
  50: '3.125rem',
  64: '4rem',
  72: '4.5rem'
}

export const colors = {
  red: red[100],
  green: green[100],
  blue: blue[100],
  cyan: cyan[100],
  grey: grey[100],
  black: common.black,
  white: common.white,
  brown: '#996633',
  orange: '#ff9900',
  softBlue: '#33ccff',

  blues: {
    b50: '#DEEFFF',
    b75: '#CEE3FF',
    b100: '#40BAFF',
    b200: '#00A3FF',
    b300: '#0094FF',
    b400: '#0078CF',
    b500: '#0061A7'
  },
  greens: {
    g50: '#E3FCEF',
    g75: '#ABF5D1',
    g100: '#79F2C0',
    g200: '#57D9A3',
    g300: '#36B37E',
    white: '#ffffff',
    g400: '#00875A',
    g500: '#006644'
  },
  reds: {
    r50: '#FFEBE6',
    r75: '#FFBDAD',
    r100: '#FF8F73',
    r200: '#FF7452',
    r300: '#FF5630',
    r400: '#DE350B',
    r500: '#BF2600'
  },
  yellow: {
    y50: '#FFFAE6',
    y75: '#FFF0B3',
    y100: '#FFE380',
    y200: '#FFC400',
    y300: '#FFAB00',
    y400: '#FF991F',
    y500: '#FF8B00'
  },
  teal: {
    t50: '#E6FCFF',
    t75: '#B3F5FF',
    t100: '#79E2F2',
    t200: '#00C7E6',
    t300: '#00B8D9',
    t400: '#00A3BF',
    t500: '#008DA6'
  },
  purple: {
    p50: '#EAE6FF',
    p75: '#C0B6F2',
    p100: '#998DD9',
    p200: '#8777D9',
    p300: '#6554C0',
    p400: '#5243AA',
    p500: '#403294'
  },
  neutral: {
    n0: '#FFFFFF',
    n10: '#FAFAFB',
    n20: '#F5F6F7',
    n30: '#EBECEF',
    n40: '#DEE0E5',
    n50: '#BFC4CC',
    n60: '#B0B6C0',
    n70: '#A3AAB6',
    n80: '#949CAA',
    n90: '#858E9E',
    n100: '#758091',
    n200: '#667185',
    n300: '#576379',
    n400: '#4A576F',
    n500: '#3B4963',
    n600: '#3B4963',
    n700: '#1C2D4A',
    n800: '#0D1F3E',
    n900: '#001334'
  },
  neutralAlpha: {
    n10A: '#00133405',
    n20A: '#0013340A',
    n30A: '#00133414',
    n40A: '#00133421',
    n50A: '#00133440',
    n60A: '#0013344F',
    n70A: '#0013345C',
    n80A: '#0013346B',
    n90A: '#0013347A',
    n100A: '#0013348A',
    n200A: '#00133499',
    n300A: '#001334A8',
    n400A: '#001334B5',
    n500A: '#001334C4',
    n600A: '#001334D1',
    n700A: '#001334E3',
    n800A: '#001334F2',
    n900A: '#001334'
  }
}
export const padding = {
  unset: 0,
  xsmall: 2,
  small: 5,
  medium: 10,
  large: 15,
  xlarge: 20
}

export const radius = {
  xsmall: 2,
  small: 5,
  medium: 10,
  large: 15,
  xlarge: 20
}

export const fontSizes = {
  xsmall: 10,
  small: 12,
  medium: 14,
  large: 16,
  xlarge: 30
}

export const fontWeight = {
  thin: 100,
  bold: 700,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  extraBold: 800,
  extraLight: 200
}

export const lineHeight = {
  unset: 0,
  xsmall: 10,
  small: 20,
  medium: 25,
  large: 30,
  xlarge: 35
}

export const buttonSize = {
  small: 32,
  medium: 40,
  large: 48
}
export const borderSize = {
  xsmall: 2,
  small: 5,
  medium: 10,
  large: 15,
  xlarge: 20
}
export const textInputSize = {
  medium: 32,
  large: 40
}
export const height = {
  xsmall: 20,
  small: 50,
  medium: 100,
  large: 150,
  xlarge: 200
}
export const width = {
  xsmall: 20,
  small: 50,
  medium: 100,
  large: 150,
  xlarge: 200
}
export const boxShadow = {
  unset: 0,
  xsmall: 2,
  small: 5,
  medium: 10,
  large: 15,
  xlarge: 20
}

declare module '@mui/material/styles/createTheme' {
  // allow configuration using `createMuiTheme`
  interface Theme {
    element?: {
      boxShadow: CSSProperties['boxShadow']
    }
  }
  interface ThemeOptions {
    element?: {
      boxShadow?: CSSProperties['boxShadow']
    }
  }
}

const theme = createTheme({
  palette: {
    common: {
      black: colors.black,
      white: colors.white
    },
    primary: {
      main: colors.blue,
      contrastText: colors.white
    },
    secondary: {
      main: colors.red,
      contrastText: colors.white
    },
    error: {
      main: colors.blue,
      contrastText: colors.white
    },
    text: {
      primary: colors.white,
      secondary: colors.blue,
      disabled: colors.grey
      // hint: colors.grey,
    },
    background: {
      default: colors.green
    },
    action: {
      disabled: colors.grey
    },
    info: {
      main: colors.blue
    }
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 10,
    fontFamily: 'Open Sans, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
  element: {
    boxShadow: '0 1px 2px 0 rgba(128, 128, 128, 0.5)'
  },
  // Set baseline width to 1920
  spacing: factor =>
    [
      '0.104vw', // 2
      '0.208vw', // 4
      '0.417vw', // 8
      '0.625vw', // 12
      '0.833vw', // 16
      '1.042vw', // 20
      '1.25vw', // 24
      '1.458vw', // 28
      '1.667vw', // 32
      '2.5vw', // 48
      '3.333vw', // 64
      '4.167vw', // 80
      '5vw', // 96
      '6.25vw' // 120p
    ][factor]
})

export default responsiveFontSizes(theme)
