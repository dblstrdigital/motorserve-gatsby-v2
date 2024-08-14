import React from 'react';
import { Box, Flex } from 'rebass';

const Container = ({ children }) => {
  return (
    <Flex
      sx={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      className="page-container"
    >
      {children}
    </Flex>
  );
};

/* <MyComponent> // add bg to me for full width bg color (like the navigation or footer)

  <MaxContainer> // maxWidth of 1480 

    <MaybeAFullWidthImage /> 

    <MyComponentInner sx={{...gridFallbackStylesColumn (or ...gridFallbackStylesColumnRow) }}> // gives inner content a maxWidth of 1180

      <MyComponentContent sx={{...containerInnerStyles}} > // internal padding

        <h2>Heading</h2>
        <p>...</p>

      </MyComponentContent>

    </MyComponentInner>

  </MaxContainer>

</MyComponent>  */

export const MaxContainer = ({ ...props }) => (
  <Box
    sx={{
      width: '100%',
      maxWidth: '1920px',
      margin: '0 auto',
    }}
    {...props}
  />
);

export const containerInnerStyles = {
  width: '100%',
  px: 4,
};

export const gridFallbackStylesColumn = {
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '1180px',
  margin: '0 auto',
};

export const gridFallbackStylesRow = {
  position: 'relative',
  width: '100%',
  display: 'flex',
  margin: '0 auto',
  maxWidth: '1180px',
};

export const gridStyles = {
  display: 'grid',
  gridTemplateColumns: [
    'repeat(4, minmax(20px, 1fr))',
    'repeat(12, minmax(1px, 1fr))',
  ],
  gridGap: ['0 12px', '0 16px'],
};

export const Grid = ({ ...props }) => (
  <Box
    sx={{
      // Flex
      ...gridFallbackStylesColumn,
      // Grid
      ...gridStyles,
    }}
    {...props}
  />
);

export default Container;
