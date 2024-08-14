import React from 'react';
import { Box, Flex, Text } from 'rebass';
import {
  MaxContainer,
  gridFallbackStylesColumn,
  containerInnerStyles,
} from '../global/Container';
import Heading from '../global/Heading';
import { TruckTwo } from '../../styles/icons';

const IconItem = ({ image, title, text }) => {
  return (
    <Box
      mr={['', '', '0px', '60px']}
      mb={['30px', '', '0px', '0px']}
      sx={{
        display: 'flex',
        // flex: ['', '1 0 100%', '1 0 50%', '1 0 calc(25% - 60px)'],
        flexBasis: ['', '100%', '50%', 'calc(25% - 60px)'],
        flexGrow: ['', '1'],
        flexShrink: ['', '0'],
        flexDirection: 'column',
        '&:nth-of-type(-n+2)': {
          pb: ['', '', '40px', '0px'],
        },
        '&:last-child': {
          marginRight: '0',
        },
      }}
    >
      <Box
        color="brightBlue"
        mb={'10px'}
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img src={image.asset.url} role="presentation" alt="" />
      </Box>
      <Heading.H3 mb={'10px'} color="white">
        {title}
      </Heading.H3>
      <Box width={['100%', '75%', '', '100%', '100%']}>
        <Text color="white">{text}</Text>
      </Box>
    </Box>
  );
};

const FullWidthBannerIcons = ({ title = '', icons }) => {
  return (
    <MaxContainer
      className="banner-icons"
      sx={{ position: 'relative', bg: 'navy', overflow: 'hidden' }}
    >
      <Box
        pt={['60px', '', '', '80px', '']}
        pb={['180px', '', '60px', '80px', '']}
        sx={{
          ...gridFallbackStylesColumn,
        }}
      >
        <Box sx={{ bg: 'navy', ...containerInnerStyles }}>
          <Heading.H2 color="white" mb={'20px'} width={['', '', '75%']}>
            {title}
          </Heading.H2>
          <Flex
            justifyContent="space-between"
            flexWrap="wrap"
            width={['100%', '100%', 'calc(100% - 120px)', '100%']}
          >
            {icons.map((icon) => {
              return (
                <IconItem
                  key={icon._key}
                  image={icon.iconImage}
                  title={icon.iconTitle}
                  text={icon.iconText}
                />
              );
            })}
          </Flex>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          color: ['white'],
          right: '0%',
          top: ['calc(100% - 40px)', '', '50%'],
          transform: ['translate(50%, -100%)', '', 'translate(50%, -50%)'],
          svg: {
            width: ['140px', '', '200px'],
            height: 'auto',
          },
          '@media (min-width: 1301px) and (max-width: 1440px)': {
            transform: 'translate(65%, -50%)',
          },
          '@media (min-width: 1140px) and (max-width: 1300px)': {
            transform: 'translate(100%, -50%)',
          },
        }}
      >
        <TruckTwo />
      </Box>
    </MaxContainer>
  );
};

export default FullWidthBannerIcons;
