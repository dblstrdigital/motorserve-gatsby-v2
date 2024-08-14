import React from 'react';
import { Heading as H } from 'rebass';

const Heading = {
  H1: ({ as = 'h1', sx, ...props }) => (
    <H
      as={as}
      sx={{
        fontFamily: 'bold',
        fontSize: [6, 7, 9],
        ...sx,
      }}
      {...props}
    />
  ),
  H2: ({ as = 'h2', sx, ...props }) => (
    <H
      as={as}
      sx={{
        fontFamily: 'black',
        fontSize: [4, 4, 6],
        textTransform: 'uppercase',
        ...sx,
      }}
      {...props}
    />
  ),
  H3: ({ as = 'h3', sx, ...props }) => (
    <H
      as={as}
      sx={{
        fontFamily: 'bold',
        fontSize: [3, 4, 4, 5],
        ...sx,
      }}
      {...props}
    />
  ),
  H4: ({ as = 'h4', sx, ...props }) => (
    <H
      as={as}
      sx={{
        fontFamily: 'bold',
        fontSize: [1],
        textTransform: 'uppercase',
        ...sx,
      }}
      {...props}
    />
  ),
};

export default Heading;
