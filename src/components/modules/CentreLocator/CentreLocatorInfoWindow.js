import React from 'react';
import { Link } from 'gatsby';
import { Box, Flex, Text } from 'rebass';
import { ChevronRight } from '@styles/icons';

// theme
import { theme } from '@styles/theme';

const CentreLocatorInfoWindow = ({ data }) => (
  <Box
    sx={{
      maxWidth: '200px',
      borderTop: `3px solid ${theme.colors.brightBlue}`,
      background: 'white',
      fontFamily: theme.fonts.regular,
    }}
  >
    <Box sx={{ px: 3, pt: 2, pb: 1 }}>
      <Text
        as={Link}
        to={`/service-centres/${data.state}/${data.slug}`}
        data-tracking={`link-click:${data.slug}`}
        sx={{
          color: theme.colors.navy,
          textDecoration: 'underline',
          fontWeight: 'bold',
          fontSize: 2,
        }}
      >
        {data.name}
      </Text>
      <Text sx={{ fontSize: 2 }}>{data.address}</Text>
      <Box
        as="a"
        href={`https://maps.google.com/maps?q=${data.name}&loc:${data.location.lat}+${data.location.lng},15z`}
        target="_blank"
        rel="noreferrer noopener"
        data-tracking="link-click:viewOnGoogle"
        sx={{
          textDecoration: 'none',
          color: theme.colors.navy,
          '&:hover': {
            textDecoration: 'underline',
            span: {
              opacity: '0.8',
            },
          },
        }}
      >
        <Flex alignItems="center">
          <ChevronRight color={theme.colors.brightBlue} width={'8px'} />
          <Text as="span" ml={'2px'} fontSize={[0]} fontWeight="bold">
            View on Google
          </Text>
        </Flex>
      </Box>
    </Box>
  </Box>
);

export default CentreLocatorInfoWindow;
