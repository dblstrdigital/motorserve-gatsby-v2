const breakpoints = ['420px', '740px', '1140px', '1440px'];

export const theme = {
  breakpoints,
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    navy: '#1D1655',
    white60: 'rgba(255, 255, 255, 0.6)',
    white50: 'rgba(255, 255, 255, 0.5)',
    navy10: 'rgba(29, 22, 85, 0.1)',
    navy20: 'rgba(29, 22, 85, 0.2)',
    navy80: 'rgba(29, 22, 85, 0.8)',
    // #RRGGBBAA isn't supported in IE11, replaced with RBGA
    // white60: '#FFFFFF60'
    // navy10: '#1D165510',
    // navy20: '#1D165520',
    brightBlue: '#04BAE0',
    warmGrey: '#CCC9BB',
    lightGrey: '#FBFAFC',
    red: '#E02020',
  },
  fontSizes: [12, 14, 16, 18, 20, 22, 24, 32, 36, 40, 48, 60],
  fonts: {
    regular: 'TTCommons-Regular, Arial, Helvetica, sans-serif',
    bold: 'TTCommons-DemiBold, Arial, Helvetica, sans-serif',
    black: 'TTCommons-Black, Arial, Helvetica, sans-serif',
  },
  fontWeights: {
    body: 400,
    bold: 600,
    black: 900,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 5, 10, 15, 20, 30, 40, 50, 100, 200],
  shadows: {
    light: '0 2px 4px 0 rgba(183,183,183,0.5)',
  },
  button: {
    outlined: {
      color: '#1D1655',
      bg: 'white',
      border: '1px solid #1D1655',
      '&:hover, &:focus': {
        color: '#1D1655',
        bg: '#FBFAFC',
        border: '1px solid #1D1655',
        textDecoration: 'underline',
      },
      '&:active': {
        bg: 'white',
        border: '1px solid #1D1655',
      },
    },
    navy: {
      color: 'white',
      bg: '#1D1655',
      border: '1px solid #1D1655',
      '&:hover, &:focus': {
        color: 'white',
        bg: '#484475',
        border: '1px solid #484475',
        textDecoration: 'underline',
      },
      '&:active': {
        bg: '#2e2968',
        border: '1px solid #2e2968',
      },
    },
    lightBlue: {
      color: '#1D1655',
      bg: '#04BAE0',
      border: '1px solid #04BAE0',
      '&:hover, &:focus': {
        color: '#1D1655',
        bg: '#44C8E6',
        border: '1px solid #44C8E6',
        textDecoration: 'underline',
      },
      '&:active': {
        bg: '#04BAE0',
        border: '1px solid #04BAE0',
      },
    },
    white: {
      color: '#1D1655',
      bg: 'white',
      border: '1px solid white',
      '&:hover, &:focus': {
        color: '#1D1655',
        bg: '#FBFAFC',
        border: '1px solid #FBFAFC',
        textDecoration: 'underline',
      },
      '&:active': {
        bg: 'white',
        border: '1px solid white',
      },
    },
  },
};
