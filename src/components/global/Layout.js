import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../../styles/theme';
import '../../styles/layout.scss';
import { Box } from 'rebass';

const Layout = ({ title, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{ position: 'relative', pt: ['56px', '', '76px'] }}
        className={`page--` + title}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
