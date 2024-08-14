import React from 'react';
import { Flex } from 'rebass';

// components
import Button from '@components/global/Button';
import Heading from '@components/global/Heading';

// themes
import { theme } from '@styles/theme';
import { AssessmentIcon, ServiceIcon, ColorPaletteIcon } from '@styles/icons';

const CentreLocatorServiceFilter = ({ onChange, selected, style }) => (
  <Flex
    sx={{
      flexDirection: ['column', 'column', 'row', ''],
      alignItems: ['start', 'start', 'center', ''],
      px: 3,
      py: 3,
      position: 'relative',
      zIndex: '1', // needed for the box shadow to be visible above map
      borderTop: `8px solid ${theme.colors.brightBlue}`,
      boxShadow: theme.shadows.light,
    }}
  >
    <Heading.H4 mr={[2]}>Choose a service:</Heading.H4>
    <Flex flexWrap="wrap">
      <Button
        variant="outlined"
        as="button"
        data-tracking="btn-click:filterByType-All"
        className={selected === 'all' ? 'active' : null}
        sx={{
          ...style,
        }}
        onClick={() => onChange('all')}
      >
        All
      </Button>
      <Button
        variant="outlined"
        as="button"
        data-tracking="btn-click:filterByType-Servicing"
        className={selected === 'servicing' ? 'active' : null}
        sx={{
          ...style,
          pl: 2,
          pr: 3,
          svg: {
            height: '10px',
            mr: '2px',
            path: {
              fill: selected === 'servicing' ? 'white' : 'navy',
            },
          },
        }}
        onClick={() => onChange('servicing')}
      >
        <ServiceIcon />
        Car servicing and repairs
      </Button>
      <Button
        variant="outlined"
        as="button"
        data-tracking="btn-click:filterByType-Assessment"
        className={selected === 'insurance' ? 'active' : null}
        sx={{
          ...style,
          pl: 2,
          pr: 3,
          svg: {
            height: '10px',
            mr: '4px',
            path: {
              fill: selected === 'insurance' ? 'white' : 'navy',
            },
          },
        }}
        onClick={() => onChange('insurance')}
      >
        <AssessmentIcon />
        Insurance assessment
      </Button>
      <Button
        variant="outlined"
        as="button"
        data-tracking="btn-click:filterByType-Paint"
        className={selected === 'paint' ? 'active' : null}
        sx={{
          ...style,
          pl: 2,
          pr: 3,
          svg: {
            height: '10px',
            mr: '4px',
            path: {
              fill: selected === 'paint' ? 'white' : 'navy',
            },
          },
        }}
        onClick={() => onChange('paint')}
      >
        <ColorPaletteIcon />
        Paint and panel
      </Button>
    </Flex>
  </Flex>
);

export default CentreLocatorServiceFilter;
