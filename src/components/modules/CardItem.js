import React from 'react';
import { Link } from 'gatsby';
import { Flex, Card, Text, Image, Box } from 'rebass';
import { theme } from '../../styles/theme';
import { camelize } from '../../util/helpers';
import { ChevronRight } from '../../styles/icons';
import Heading from '../global/Heading';

const CardItemButton = () => {
  return (
    <Flex
      alignItems="center"
      className="card-cta-link"
      width={['96px', '', '32px']}
      height="32px"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: '32px',
        boxShadow: theme.shadows.light,
        position: 'relative',
        overflow: 'hidden',
        transition: 'width 0.3s ease-out',
        mb: 0,
        mt: 'auto',
      }}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        width="32px"
        height="32px"
        sx={{ svg: { width: '10px', height: '10px' } }}
      >
        <ChevronRight color={theme.colors.brightBlue} />
      </Flex>

      <Text
        as="span"
        className="card-cta-link-text"
        ml={1}
        fontSize={[1]}
        fontWeight="bold"
        sx={{
          letterSpacing: '0.02em',
          whiteSpace: 'nowrap',
          marginLeft: '4px',
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: ['', '', '0'],
          transition: 'opacity 0.2s 0s ease-out',
        }}
      >
        View more
      </Text>
    </Flex>
  );
};

const CardItem = ({ title, description, image, link, style }) => {
  const { padding, nthRule, flex } = style;
  const cardBaseStyle = {
    textDecoration: 'none',
    boxShadow: theme.shadows.light,
    color: 'navy',
    flex: flex,
    display: 'flex',
    flexDirection: 'column',
    ...nthRule,
    '&:hover, &:focus': {
      color: '#251E7B',
      '.card-cta-link-text': {
        opacity: '1',
        transition: 'opacity 0.3s 0.25s ease-out',
      },
      '.card-cta-link': {
        width: '96px',
      },
    },
  };
  return (
    <Card
      as={Link}
      to={link || '#'}
      className={`card-grid-item`}
      mr={['0px', '', '16px']}
      mb={['20px', '', '30px']}
      sx={cardBaseStyle}
      data-tracking={`link-click:${camelize(link || '#')}`}
    >
      <Image src={image.asset.url} alt={image.alt} sx={{ flexShrink: 0 }} />
      <Flex flexDirection="column" p={padding} height="100%">
        <Box mb={[2]}>
          <Heading.H3 mb={[2]}>{title}</Heading.H3>
          <Text>{description}</Text>
        </Box>
        <Flex justifyContent="flex-end" mb="0" mt="auto" height="auto" flex="1" flexBasis="auto">
          <CardItemButton />
        </Flex>
      </Flex>
    </Card>
  );
};

export default CardItem;
