import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Box, Text, Flex } from 'rebass';
import { motion } from 'framer-motion';
import { ChevronLeft } from '../../styles/icons';
import { MaxContainer } from '../global/Container';
import Heading from '../global/Heading';
import Button from '../global/Button';
import { camelize } from '../../util/helpers';
import { Slider, Slide, SlideInner } from './HeaderBanner';

// motion.custom() is deprecated. Use motion() instead.
// https://github.com/chakra-ui/chakra-ui/issues/3459
// Keep at an older stable version for now
// const MotionBox = motion.custom(Box);
const MotionBox = motion(Box);

const CarouselPips = ({ currentIndex, items, ...props }) => (
  <Box
    className="carousel-pips"
    sx={{
      position: 'absolute',
      bottom: ['65px', '75px', '', '80px'],
      left: '20px',
      width: '100%',
      '@media (min-width: 1440px)': {
        width: 'auto',
        bottom: 'auto',
        top: '50px',
        left: '45px',
        transformOrigin: '0 0',
        transform: 'rotate(90deg)',
      },
      display: 'none',
      '@supports (display: grid)': {
        display: 'flex',
      },
    }}
  >
    <Flex
      sx={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        maxWidth: '1260px',
        m: '0 auto',
        width: '100%',
        '@media (min-width: 1440px)': {
          maxWidth: 'none',
          transform: 'translateY(50%)',
        },
      }}
    >
      {items.map((item, index) => (
        <Box
          key={index}
          sx={{
            flex: '1 0 1px',
            width: '15px',
            maxWidth: '15px',
            bg: 'white',
            height: '2px',
            mr: '2px',
            opacity: index === currentIndex ? '1' : '0.4',
          }}
        />
      ))}
    </Flex>
  </Box>
);

const CarouselButton = ({ direction, onClick, disabled, ...props }) => {
  return (
    <Box
      role="button"
      sx={{
        transform: `scale(${direction === 'right' ? -1 : 1}, 1)`,
        cursor: 'pointer',
        borderRadius: '50%',
        width: '32px',
        height: '32px',
        color: 'navy',
        bg: 'white',
        padding: '12px',
        display: 'flex',
        pointerEvents: 'auto',
        svg: { width: '100%', height: 'auto' },
        '&:hover, &:focus': {
          color: 'white',
          bg: 'navy',
        },
      }}
      {...props}
      onClick={onClick}
    >
      <ChevronLeft />
    </Box>
  );
};

const CarouselButtons = ({ onMoveLeft, onMoveRight }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: ['30px', '40px', '', '60px'],
        padding: ['25px 20px', '25px'],
        zIndex: '10',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
        display: 'none',
        pointerEvents: 'none',
        '@media (min-width: 1440px)': {
          bottom: 'calc(50% + 30px)',
          transform: 'translateY(50%)',
          justifyContent: 'space-between',
        },
        '@supports (display: grid)': {
          display: 'flex',
        },
      }}
    >
      <CarouselButton
        direction="left"
        onClick={onMoveLeft}
        mr={'7px'}
        data-tracking={`btn-click:carouselLeft`}
      />
      <CarouselButton
        direction="right"
        onClick={onMoveRight}
        data-tracking={`btn-click:carouselRight`}
      />
    </Box>
  );
};

// https://css-tricks.com/almanac/properties/c/clip-path/
const HeaderBannerCarousel = ({ as = 'h2', slides = null }) => {
  const containerRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // Gets slides that have showBanner = true (toggle set to on in the CMS)
  const visibleSlides = slides.filter((slide) => slide.showBanner);
  const lastIndex = visibleSlides.length - 1;
  const time = 5000;

  const isEnd = currentIndex === lastIndex;
  const isStart = currentIndex === 0;
  const syncItemWidths = useCallback(() => {
    if (containerRef.current) {
      let itemsWidth = containerRef.current.getBoundingClientRect().width;
      setItemWidth(itemsWidth);
    } else {
      setItemWidth(null);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', syncItemWidths);

    return () => {
      window.removeEventListener('resize', syncItemWidths);
    };
  }, [syncItemWidths]);

  useEffect(() => {
    const next = (currentIndex + 1) % visibleSlides.length;
    const id = setTimeout(() => setCurrentIndex(next), time);
    return () => clearTimeout(id);
  }, [visibleSlides.length, currentIndex]);

  return (
    <Slider>
      <MaxContainer>
        <Box
          sx={{
            width: '100%',
            overflowY: 'hidden',
            display: 'flex',
            position: 'relative',
          }}
          ref={(el) => {
            containerRef.current = el;
            syncItemWidths();
            if (containerRef) {
              syncItemWidths();
            }
          }}
          className="slides-container"
          overflowX="hidden"
        >
          <MotionBox
            sx={{
              display: 'flex',
              height: '100%',
              width: '100%',
              '@supports (display: grid)': {
                width: itemWidth * visibleSlides.length,
              },
            }}
            className="slides-motion"
            transition={{ ease: 'easeInOut', duration: 0.8 }}
            animate={{
              x: -(itemWidth * currentIndex),
            }}
          >
            {visibleSlides.map((slide, index) => (
              <Slide
                key={index}
                sx={{
                  width: '100%',
                  display: index > 0 && 'none',
                  height: [slide.headerText ? '510px' : '510px', '', '500px'],
                  '@supports (display: grid)': {
                    width: itemWidth,
                    display: 'block',
                  },
                }}
                flex={'1 0 auto'}
              >
                <Box
                  sx={{
                    height: '100%',
                    width: '50%',
                    position: 'absolute',
                    top: 0,
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
                  }}
                />

                {slide.largeImage && (
                  <Box as="picture">
                    <source
                      media="(min-width: 740px)"
                      srcSet={slide.largeImage.path}
                    />
                    <Box
                      as="img"
                      sx={{
                        height: '100%',
                        width: 'auto',
                        position: 'absolute',
                        top: '0',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        bg: 'navy',
                        '@supports (object-fit: cover)': {
                          objectFit: 'cover',
                          width: ['100%', '', '65%', ''],
                          height: [
                            slide.firstLogo ? '120px' : '190px',
                            '',
                            '100%',
                          ],
                          top: ['auto', '', 0],
                          bottom: ['0px', '', 'auto'],
                          objectPosition: '75%',
                          left: ['auto', '', '35%', ''],
                          transform: 'none',
                          clipPath: [
                            '',
                            '',
                            'ellipse(115% 240% at 140% 125%)',
                            'ellipse(115% 240% at 125% 135%)',
                          ],
                        },
                      }}
                      src={slide.smallImage.path}
                      alt={slide.largeImage.alt}
                    />
                  </Box>
                )}
                <SlideInner sx={{ display: 'block' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      flexDirection: 'column',
                      width: '100%',
                    }}
                  >
                    <Heading.H2
                      as={as}
                      sx={{
                        fontSize: [8, '', '', 9],
                        lineHeight: '1',
                        pr: ['', '', '40px'],
                        flex: ['1 0 100%', '', '0 1 50%', '0 1 40%'],
                        width: ['', '', '50%', '40%'],
                      }}
                    >
                      {slide.pageHeading}
                    </Heading.H2>
                    {slide.headerText && (
                      <Text
                        as="p"
                        sx={{
                          flex: [' 1 0 100%', '', '', '0 1 50%'],
                          maxWidth: ['500px', '', '400px'],
                          mt: '8px',
                          mr: 4,
                          fontSize: 3,
                          lineHeight: '1.4',
                        }}
                      >
                        {slide.headerText}
                      </Text>
                    )}
                  </Box>
                  {slide.cta && (
                    <Box
                      sx={{
                        flex: ' 1 0 100%',
                        mt: '24px',
                      }}
                    >
                      <Button
                        variant="lightBlue"
                        to={slide.cta.route || slide.cta.link || '#'}
                        data-tracking={`link-click:${camelize(
                          slide.cta.route || slide.cta.link || '#'
                        )}`}
                        sx={{ p: 2 }}
                      >
                        {slide.cta.title}
                      </Button>
                    </Box>
                  )}
                  {slide.firstLogo && (
                    <Box
                      sx={{
                        position: ['', '', '', 'relative'],
                        display: 'flex',
                        alignItems: 'center',
                        bottom: ['', '', '100px', 'auto'],
                        mt: ['40px', '', '', '32px'],
                        img: {
                          width: ['115px', '', '135px'],
                        },
                      }}
                    >
                      <Box
                        as="img"
                        src={slide.firstLogo.path}
                        alt="#"
                        sx={{
                          mr: '24px',
                        }}
                      />
                      {slide.secondLogo && (
                        <Box as="img" src={slide.secondLogo.path} alt="#" />
                      )}
                    </Box>
                  )}
                </SlideInner>
              </Slide>
            ))}
          </MotionBox>
          <CarouselPips currentIndex={currentIndex} items={visibleSlides} />
          <CarouselButtons
            onMoveLeft={() => {
              if (!isStart) {
                setCurrentIndex(currentIndex - 1);
              } else {
                setCurrentIndex(visibleSlides.length - 1);
              }
            }}
            onMoveRight={() => {
              if (!isEnd) {
                setCurrentIndex(currentIndex + 1);
              } else {
                setCurrentIndex(0);
              }
            }}
          />
        </Box>
      </MaxContainer>
    </Slider>
  );
};

export default HeaderBannerCarousel;
