import React from 'react';
import { Box, Text } from 'rebass';
import {
  MaxContainer,
  gridFallbackStylesColumn,
  containerInnerStyles,
} from '../global/Container';
import Heading from '../global/Heading';
import Button from '../global/Button';
import { camelize } from '../../util/helpers';

export const SlideImage = ({ image, sx }) => (
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
        objectPosition: '75%',
      },
      bg: 'navy',
      ...sx,
    }}
    src={image.path}
    alt={image.alt}
  />
);

export const Slide = ({ sx, ...props }) => (
  <Box
    className="slide"
    sx={{
      height: ['auto', '', '', '400px', '500px'],
      position: 'relative',
      ...sx,
    }}
    {...props}
  />
);
export const SlideInner = ({ sx, ...props }) => (
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
        pt: [7, '', '', '', 8],
        pb: ['120px', '', '', '', '140px'],
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        height: '100%',
        ...sx,
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

const HeaderBanner = ({ as = 'h2', slide }) => {
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
                  flex: [' 1 0 100%', '', '', '0 1 100%'],
                  fontSize: [9, '', '', 10],
                  lineHeight: '1',
                  pr: ['', '', '40px'],
                  mb: ['', '', '', 4],
                }}
              >
                {slide.pageHeading}
              </Heading.H2>
              {slide.headerText && (
                <Text
                  as="p"
                  sx={{
                    flex: [' 1 0 100%', '', '', '0 1 100%'],
                    maxWidth: ['500px', '', '', '300px'],
                    mr: 4,
                    mt: [3, 3, 3, 0],
                    fontSize: 3,
                    lineHeight: '1.4',
                    fontWeight: 600,
                  }}
                >
                  {slide.headerText}
                </Text>
              )}
            </Box>
            {slide.cta && slide.cta.title && (
              <Box sx={{ flex: ' 1 0 100%', mt: [4, 4, 4, 0] }}>
                <Button
                  variant="lightBlue"
                  to={slide.cta.route}
                  data-tracking={`link-click:${camelize(slide.cta.route)}`}
                >
                  {slide.cta.title}
                </Button>
              </Box>
            )}
          </SlideInner>
        </Slide>
      </MaxContainer>
    </Slider>
  );
};

export default HeaderBanner;
