import React, { useRef, useEffect } from 'react';
import { Box } from 'rebass';

import CentreLocatorListItem from './CentreLocatorListItem';
import CentreLocatorNoResult from './CentreLocatorNoResult';

import { theme } from '@styles/theme';

const CentreLocatorList = ({ centres, selected, service, onSelect }) => {
  const ref = useRef(null);
  useEffect(() => {
    // when the selected value changes, scroll the corresponding item
    // in the list to the top of the scrollable container
    // Note: the scroll will be smooth for browsers supporting
    // the scroll-behavior smooth css property
    if (ref && selected) {
      ref.current.scrollTop = document.getElementById(selected).offsetTop;
    }
  }, [selected]);

  return (
    <Box
      as="aside"
      sx={{
        width: ['100%', '100%', '30%', ''],
        height: ['300px', '300px', '430px', ''],
        position: 'relative',
        zIndex: '1', // needed for the box shadow to be visible above map
        background: '#FAFAFA',
        boxShadow: theme.shadows.light,
        borderBottom: [`10px solid ${theme.colors.navy}`, '', '0', ''],
        '&:after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          height: '20px',
          width: '100%',
          background:
            'linear-gradient(0deg, rgba(251,250,252,1) 20%, rgba(251,250,252,0) 100%)',
        },
      }}
    >
      <Box
        ref={ref}
        as="ul"
        sx={{
          listStyle: 'none',
          overflowY: 'scroll',
          height: '100%',
          pl: 3,
          pr: 2,
          pb: 1,
          scrollBehavior: 'smooth', // needed to smoothly scroll to selected centre
        }}
      >
        {centres.length ? (
          centres.map((centre, index) => (
            <CentreLocatorListItem
              key={index}
              centre={centre}
              selected={selected}
              onSelect={onSelect}
            />
          ))
        ) : (
          <CentreLocatorNoResult type={service} />
        )}
      </Box>
    </Box>
  );
};

export default CentreLocatorList;
