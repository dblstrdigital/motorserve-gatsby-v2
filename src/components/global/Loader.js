import React from 'react';
import { Box } from 'rebass';

// theme
// import { theme } from '@styles/theme';

const Loader = () => (
  <Box
    sx={{
      position: 'absolute',
      display: 'inline-block',
      width: '2rem',
      height: '2rem',
      verticalAlign: 'text-bottom',
      border: '.15em solid currentColor',
      borderRight: '.15em solid transparent',
      borderRadius: '50%',
      animation: 'spinner-border .5s linear infinite',
      '&:after': {
        content: '""',
        display: 'block',
        clear: 'both',
      },
      '@keyframes spinner-border': {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        },
      },
    }}
  />
);

export default Loader;
