import React from 'react';
import { Box } from 'rebass';
import {
  MaxContainer,
  gridFallbackStylesColumn,
  containerInnerStyles,
} from '../global/Container';
import Heading from '../global/Heading';

export const SlideImage = ({ image }) => (
  <Box
    as="img"
    sx={{
      height: '100%',
      width: 'auto',
      position: 'absolute',
      top: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      '@supports (object-fit: cover)': {
        width: '100%',
        left: 0,
        transform: 'none',
        objectFit: 'cover',
        objectPosition: ['35% top', '', '25% top'],
      },
      bg: 'navy',
    }}
    src={image.path}
    alt={image.alt}
  />
);

export const Slide = ({ sx, ...props }) => (
  <Box
    className="slide"
    sx={{
      height: 'auto',
      position: 'relative',
      ...sx,
    }}
    {...props}
  />
);
export const SlideInner = (props) => (
  <Box
    sx={{
      ...gridFallbackStylesColumn,
      height: '100%',
      position: 'relative',
    }}
  >
    <Box
      sx={{
        ...containerInnerStyles,
        color: 'white',
        minHeight: '260px',
        pt: '70px',
        pb: '120px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        height: '100%',
      }}
      {...props}
    />
  </Box>
);

export const Slider = (props) => (
  <Box
    className="header-banner"
    sx={{
      width: '100%',
      overflowX: 'hidden',
    }}
  >
    {props.children}
    <MaxContainer>
      <Box
        sx={{
          position: 'relative',
          maxWidth: '1340px',
          m: '0 auto',
          height: '1px',
          top: 0,
          mb: 4,
          '@media (min-width: 1230px)': {
            mb: 0,
          },
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '0px',
            height: ['40px', '', '', '60px'],
            bg: 'white',
            borderRadius: ['20px 0 0 0', '', '', '30px 0 0 0'],
            width: ['40px', '', '', '60px'],
            right: '50%',
            left: '20px',
          },
          '&:before': {
            content: '""',
            position: 'absolute',
            bottom: '0px',
            height: ['40px', '', '', '60px'],
            bg: 'white',
            borderRadius: ['20px 0 0 0', '', '', '30px 0 0 0'],
            width: ['125%'],
            right: '0',
            left: '20px',
          },
        }}
      >
        <Box sx={{ ...gridFallbackStylesColumn }}></Box>
      </Box>
    </MaxContainer>
  </Box>
);

const HeaderSlim = ({ as = 'h2', slide }) => {
  return (
    <Slider>
      <MaxContainer>
        <Slide>
          <SlideImage image={slide.image} />
          <SlideInner>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
              <Heading.H2
                as={as}
                sx={{
                  flex: [' 1 0 100%', '', '', '0 1 50%'],
                  fontSize: [9, '', '', 10],
                  lineHeight: '1',
                  pr: ['', '', '40px'],
                  mb: 0,
                }}
              >
                {slide.pageHeading}
              </Heading.H2>
            </Box>
          </SlideInner>
        </Slide>
      </MaxContainer>
    </Slider>
  );
};

export default HeaderSlim;
