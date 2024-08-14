import React from 'react';
import { Flex } from 'rebass';

// icons
import { Add, Remove } from '@styles/icons';

// theme
import { theme } from '@styles/theme';

// style
const style = {
  width: '25px',
  height: '25px',
  background: theme.colors.white,
  p: 1,
  mt: 1,
  cursor: 'pointer',
  border: 0,
  boxShadow: theme.shadows.light,
  transition: 'all 0.5s ease',
  polygon: {
    transition: 'all 0.5s ease',
  },
  '&:hover': {
    background: theme.colors.navy,
    polygon: {
      fill: theme.colors.white,
    },
  },
  '&:focus, &:active': {
    outline: `1px solid ${theme.colors.navy}`,
  },
};

const CentreLocatorMapControls = ({ onZoomIn, onZoomOut }) => (
  <Flex
    alignItems="center"
    flexDirection="column"
    sx={{
      position: 'absolute',
      bottom: '20px',
      right: '10px',
    }}
  >
    <Flex
      as="button"
      title="Zoom in"
      aria-label="Zoom in"
      onClick={onZoomIn}
      alignItems="center"
      sx={{
        ...style,
      }}
    >
      <Add />
    </Flex>
    <Flex
      as="button"
      title="Zoom out"
      aria-label="Zoom out"
      onClick={onZoomOut}
      alignItems="center"
      sx={{
        ...style,
      }}
    >
      <Remove />
    </Flex>
  </Flex>
);

export default CentreLocatorMapControls;
