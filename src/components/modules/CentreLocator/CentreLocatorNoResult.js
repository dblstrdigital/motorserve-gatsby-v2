import React from 'react';
import { Box } from 'rebass';
import { Phone } from '@styles/icons';

// theme
import { theme } from '@styles/theme';

const CentreLocatorNoResult = ({ type }) => (
  <Box>
    {/* no result message for car servicing search */}
    {type === 'servicing' && (
      <span>
        Oh no! It looks like there are no
        <b> Motorserve Car Servicing and Repairs </b>
        centres in the area.
        <br />
        <br />
        Please call our customer centre to find an alternative
      </span>
    )}

    {/* no result message for insurance assessment search */}
    {type === 'insurance' && (
      <span>
        Oh no! It looks like there are no Motorserve
        <b> Insurance Assessment centres </b>
        in the area.
        <br />
        <br />
        Please call our customer centre to find an alternative
      </span>
    )}

    {/* no result message for paint and panel search */}
    {type === 'paint' && (
      <span>
        Oh no! It looks like there are no Motorserve
        <b> Paint and Panel centres </b>
        in the area.
        <br />
        <br />
        Please call our customer centre to find an alternative
      </span>
    )}

    {/* no result message for all */}
    {type === 'all' && (
      <span>
        No centres found. Try updating your filters above, or contact us to find
        an alternative
      </span>
    )}

    <Box
      sx={{
        display: 'inline-block',
        textDecoration: 'none',
        color: theme.colors.navy,
        ml: 1,
        svg: {
          width: '12px',
          height: '12px',
          mr: 1,
        },
        '&:hover': {
          textDecoration: 'underline',
        },
      }}
      as="a"
      href={`tel:1800 879 444`}
    >
      <Phone />
      1800 879 444
    </Box>
  </Box>
);

export default CentreLocatorNoResult;
