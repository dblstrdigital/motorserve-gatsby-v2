import React, { useEffect, useState, useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Box, Flex, Text } from 'rebass';
import {
  MaxContainer,
  gridFallbackStylesColumn,
  containerInnerStyles,
} from '../global/Container';
import Heading from '../global/Heading';
import Button from '../global/Button';
import CardItem from './CardItem';
import ChevronLink from '../global/ChevronLink';

const createGridRows = (cards, columns) => {
  let size = columns;
  let rows = [];
  for (let i = 0; i < cards.length; i += size) {
    rows.push(cards.slice(i, i + size));
  }
  return rows;
};

const CardGrid = ({ columns, data }) => {
  const { textField, cards } = data;
  const twoColumns = cards.length % 2 === 0 && cards.length % 3 !== 0;
  const rows = useMemo(() => createGridRows(cards, twoColumns ? 2 : 3), [
    cards,
    twoColumns,
  ]);
  const isMobile = useMediaQuery({ query: '(max-width: 740px)' });
  const [showRows, setShowRows] = useState(false);
  const [hiddenRow, setHiddenRow] = useState(isMobile);
  const style = {
    flex: twoColumns ? '0 1 50%' : '0 1 33.33%',
    padding: twoColumns ? ['20px 15px', '', '30px 25px'] : ['20px 15px'],
    nthRule: twoColumns
      ? {
          '&:nth-of-type(2n+0)': {
            marginRight: '0px',
            borderRadius: ['', '', '0 0 30px 0'],
          },
        }
      : {
          '&:nth-of-type(3n+0)': {
            marginRight: '0px',
            borderRadius: ['', '', '0 0 30px 0'],
          },
        },
  };
  useEffect(() => {
    isMobile && showRows && setHiddenRow(false);
  }, [isMobile, showRows]);
  return (
    <MaxContainer className="card-grid">
      <Box
        sx={{
          ...gridFallbackStylesColumn,
        }}
      >
        <Flex
          flexDirection="column"
          sx={{ ...containerInnerStyles, height: '100%' }}
        >
          {textField && (
            <Box width={['100%', '', '50%']} className="card-grid--text">
              <Heading.H2 mb={[2]}>{textField.cardGridHeading}</Heading.H2>
              {textField.cardGridText && (
                <Text mb={[textField.cardGridLink ? 2 : 4]}>
                  {textField.cardGridText}
                </Text>
              )}
              {textField.cardGridLink && (
                <ChevronLink
                  route={textField.cardGridLink.href}
                  sx={{
                    marginBottom: '10px',
                  }}
                >
                  {textField.cardGridLink.label}
                </ChevronLink>
              )}
            </Box>
          )}
          {rows &&
            rows.map((row, index) => {
              return (
                <Box
                  className={`card-grid-row`}
                  key={index}
                  sx={{
                    display: hiddenRow && index > 0 ? 'none' : 'flex',
                    flexDirection: ['column', '', 'row'],
                    height: '100%',
                  }}
                >
                  {row.map((card, index) => {
                    return (
                      <CardItem
                        key={index}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        link={card.link.href}
                        style={style}
                      />
                    );
                  })}
                </Box>
              );
            })}
          {isMobile && !showRows && hiddenRow && rows.length > 1 && (
            <Box
              width={'100%'}
              mb={'20px'}
              className="card-grid--load-more"
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                variant="outlined"
                as="button"
                onClick={() => {
                  setHiddenRow(false);
                  setShowRows(true);
                }}
              >
                Load More
              </Button>
            </Box>
          )}
        </Flex>
      </Box>
    </MaxContainer>
  );
};

export default CardGrid;
