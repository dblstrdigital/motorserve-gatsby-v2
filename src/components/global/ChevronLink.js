import React from 'react';
import { Link } from 'gatsby';
import { Box, Text, Flex } from 'rebass';
import { theme } from '../../styles/theme';
import { ChevronRight } from '../../styles/icons';

const ChevronLink = ({ as = Link, children, route, sx }) => {
  return (
    <Box
      sx={{
        svg: {
          width: '10px',
          height: '10px',
        },
        ...sx,
      }}
    >
      <Box
        as={as}
        to={route || '#'}
        sx={{
          color: 'navy',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
            span: {
              opacity: '0.8',
            },
          },
        }}
      >
        <Flex alignItems="center">
          <ChevronRight color={theme.colors.brightBlue} />
          <Text
            as="span"
            ml={1}
            fontSize={[1]}
            fontWeight="bold"
            sx={{ letterSpacing: '0.02em' }}
          >
            {children}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default ChevronLink;
