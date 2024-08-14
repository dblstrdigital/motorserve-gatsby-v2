import React from 'react';
import { Box } from 'rebass';

const Spacer = ({ size = 1, bgColor = 'transparent' }) => (
  <Box
    className="--spacer"
    sx={{
      bg: bgColor,
      pt: [
        'calc(10px * ' + size + ')',
        '',
        'calc(15px * ' + size + ')',
        'calc(20px * ' + size + ')',
      ],
      width: '100%',
    }}
  />
);

export default Spacer;
