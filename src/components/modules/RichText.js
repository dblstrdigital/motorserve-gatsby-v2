import React from 'react';
import { Box } from 'rebass';
import BlockContent from '@sanity/block-content-to-react';
import { camelize } from '../../util/helpers';
import { imageUrlFor } from '../../util/image-url';

import {
  MaxContainer,
  gridFallbackStylesColumn,
  containerInnerStyles,
  Grid,
} from '../global/Container';
import Button from '../global/Button';
import Video from '../global/Video';

const textStyles = {
  h2: { mb: 4, textTransform: 'uppercase' },
  h3: { mb: 3 },
  h4: {
    mb: 3,
    fontSize: 1,
    lineHeight: '1.2',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '0.02em',
  },
  p: {
    mb: 3,
    fontSize: 2,
    lineHeight: '1.4',
    '&:last-of-type': {
      mb: 0,
    },
    a: {
      fontWeight: 'bold',
      fontFamily: 'bold',
      color: 'navy',
      '&:hover': {
        color: 'brightBlue',
      },
    },
  },
  ol: { mb: 3, ml: [4, 4, 6], fontSize: 2, lineHeight: '1.4' },
  ul: { mb: 3, ml: [4, 4, 6], fontSize: 2, lineHeight: '1.4' },
  li: {
    mb: 1,
    a: {
      fontWeight: 'bold',
      fontFamily: 'bold',
      color: 'navy',
      '&:hover': {
        color: 'brightBlue',
      },
    },
  },
  strong: {
    fontWeight: 'bold',
  },

  img: {
    maxWidth: '100%',
    mb: 3,
  },
};

const WYSIWYG = ({ ...props }) => (
  <Box
    sx={{
      gridColumn: ['1/-1', '1 / -2', '1/ span 9', '1/ span 7'],
      maxWidth: '800px',
      ...textStyles,
    }}
    {...props}
  />
);

const serializers = {
  marks: {
    link: ({ mark, children }) => {
      let urlRegex = new RegExp(/(https?:\/\/[^\s]+)/g);
      let isUrl = urlRegex.test(mark.href);
      return isUrl ? (
        <a
          href={mark.href}
          target="_blank"
          rel="noreferrer noopener"
          data-tracking={`link-click:${mark.href}`}
        >
          {children}
        </a>
      ) : (
        <a href={mark.href} data-tracking={`link-click:${camelize(mark.href)}`}>
          {children}
        </a>
      );
    },
  },
  types: {
    mainVideo: (props) => <Video url={props.node.href} />,
    mainImage: (props) => (
      <img
        src={imageUrlFor(props.node.asset).width(500).url()}
        alt={props.node.alt}
      />
    ),
    button: (props) => (
      <Button
        mt={4}
        variant={props.node.buttonStyle}
        to={props.node.href}
        data-tracking={`link-click:${camelize(props.node.href)}`}
      >
        {props.node.buttonText}
      </Button>
    ),
  },
};

const RichText = ({ richText }) => {
  return (
    <MaxContainer>
      <Box sx={{ ...gridFallbackStylesColumn }}>
        <Box sx={{ ...containerInnerStyles }}>
          <Grid>
            <WYSIWYG>
              <BlockContent blocks={richText} serializers={serializers} />
            </WYSIWYG>
          </Grid>
        </Box>
      </Box>
    </MaxContainer>
  );
};

export default RichText;
