import React from 'react';
import { Box, Image } from 'rebass';
import { camelize } from '../../util/helpers';
import {
  MaxContainer,
  gridFallbackStylesColumn,
  containerInnerStyles,
} from '../global/Container';
import Heading from '../global/Heading';
import Button from '../global/Button';
import SimpleText from '../modules/SimpleText';

const FullWidthBannerMessage = ({ data }) => {
  const { title, text, image, ctaButton } = data;
  return (
    <MaxContainer className="banner-message">
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Box
          sx={{
            ...gridFallbackStylesColumn,
            marginBottom: ['-25px', '', '-12.5%'],
          }}
        >
          <Box
            sx={{
              ...containerInnerStyles,
            }}
          >
            <Box
              width={[1, 1, 7 / 12, 8 / 12]}
              ml={['auto']}
              p={[4, 4, 5, 6]}
              sx={{
                bg: 'brightBlue',
                color: 'navy',
                zIndex: '1',
                borderRadius: '0 0 80px 0',
              }}
            >
              <Heading.H2 mb={[4]}>{title}</Heading.H2>
              <SimpleText simpleText={text} />
              {ctaButton && (
                <Button
                  variant="white"
                  mt={[4]}
                  to={ctaButton.route || ctaButton.link || '#'}
                  data-tracking={`link-click:${camelize(
                    ctaButton.route || ctaButton.link || '#'
                  )}`}
                >
                  {ctaButton.title}
                </Button>
              )}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            lineHeight: '0',
          }}
        >
          <Image
            as="img"
            sx={{
              maxHeight: '430px',
              width: '100%',
              height: 'auto',
              minHeight: '170px',
              objectFit: 'cover',
              objectPosition: ['25% top', '', 'center'],
              bg: 'navy',
              zIndex: '0',
            }}
            src={image.path}
            alt={image.alt}
          />
        </Box>
      </Box>
    </MaxContainer>
  );
};

export default FullWidthBannerMessage;
