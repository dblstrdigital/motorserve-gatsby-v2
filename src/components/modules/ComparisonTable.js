import React, { useMemo, useState } from 'react';
import { Box, Flex, Text } from 'rebass';
import { useTable, useFlexLayout } from 'react-table';
import { Check, ChevronRight } from '../../styles/icons';
import { camelize } from '../../util/helpers';
import Heading from '../global/Heading';
import Button from '../global/Button';

import {
  MaxContainer,
  gridFallbackStylesColumn,
  containerInnerStyles,
} from '../global/Container';

const ComparisonTable = ({ tableData, footerCopy }) => {
  const data = useMemo(() => tableData.rows, [tableData.rows]);
  const columns = useMemo(() => tableData.columns, [tableData.columns]);
  const [showMore, setShowMore] = useState(false);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useFlexLayout);

  return (
    <Box
      className="comparison-table"
      sx={{
        position: 'relative',
        '&:after': {
          display: 'none',
          '@media (max-width: 900px)': {
            display: 'inline-block',
          },
          pointerEvents: 'none',
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50px',
          height: '100%',
          opacity: '0.8',
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255, 0), rgba(255,255,255,1))',
        },
      }}
    >
      <MaxContainer>
        <Box sx={{ ...gridFallbackStylesColumn }}>
          <Box
            sx={{
              ...containerInnerStyles,
            }}
          >
            <Heading.H2
              sx={{
                mb: ['20px', '', '', '-30px'],
                maxWidth: ['', '', '', '25%'],
              }}
            >
              Our Top Products
            </Heading.H2>
          </Box>
          <Box
            sx={{
              ...containerInnerStyles,
              '.th': {
                paddingRight: '18px',
                width: '20%',
                '.feature': {
                  display: 'flex',
                  alignItems: 'flex-end',
                  height: '100%',
                  pt: 0,
                  '@media (max-width: 900px)': {
                    alignItems: 'stretch',
                  },
                },
                '.essential': {
                  borderBottom: '8px solid black',
                },
                '.logBook': {
                  borderBottom: '8px solid #CCC9BB',
                },
                '.essentialPlus': {
                  borderBottom: '8px solid #04BAE0',
                },
              },
              '.td': {
                width: '20%',
                display: 'flex',
                alignItems: 'center',
                '&.feature': {
                  padding: '10px',
                },
                '&:not(.feature)': {
                  paddingTop: '10px',
                  paddingBottom: '10px',
                },
              },
              '.tr': {
                width: '100%',
              },
              '.content-row': {
                minWidth: 'max-content!important',
                '&:hover': {
                  background: 'rgba(29, 22, 85, 0.1)',
                },
              },
              '@media (max-width: 900px)': {
                overflow: 'scroll',
              },
              // '.thead': {
              //   '@media (max-width: 900px)': {
              //     overflowY: 'auto',
              //     overflowX: 'hidden',
              //   },
              // },
              '.tbody': {
                '.prices': {
                  borderBottom: 'none',
                  '&:hover': {
                    background: 'transparent',
                  },
                },
                // '@media (max-width: 900px)': {
                //   overflowY: 'scroll',
                //   overflowX: 'hidden',
                // },
              },
            }}
          >
            <Box className="table" {...getTableProps()}>
              <Box>
                {headerGroups.map((headerGroup) => (
                  <Box
                    className="tr"
                    {...headerGroup.getHeaderGroupProps()}
                    sx={{
                      borderBottom: '1px solid #CCC9BB',
                    }}
                  >
                    {headerGroup.headers.map((column) => (
                      <Box
                        className={`th`}
                        {...column.getHeaderProps()}
                        sx={{
                          minHeight: ['180px', '', '', '180px'],
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        {column.icon && (
                          <Box
                            sx={{
                              width: '28px',
                              height: '28px',
                              marginBottom: 'auto',
                              svg: {
                                width: '100%',
                                height: 'auto',
                                color: 'navy',
                              },
                            }}
                          >
                            {column.icon}
                          </Box>
                        )}
                        <Box py={['10px']} className={column.id}>
                          <Heading.H3>{column.render('Header')}</Heading.H3>
                        </Box>
                        {column.description && (
                          <Text
                            fontWeight="bold"
                            py={['10px']}
                            sx={{ height: ['80px', '', '', '100px'] }}
                          >
                            {column.description}
                          </Text>
                        )}
                        {column.id === 'feature' && (
                          <Box
                            alignItems="center"
                            sx={{
                              p: '10px 0',
                              display: 'none',
                              '@media (max-width: 900px)': {
                                display: 'flex',
                              },
                            }}
                          >
                            <Text
                              as="span"
                              mr={1}
                              fontSize={[1]}
                              fontWeight="bold"
                              sx={{
                                letterSpacing: '0.02em',
                                color: 'navy',
                              }}
                            >
                              Scroll to view more
                            </Text>
                            <Box
                              sx={{
                                color: 'brightBlue',
                                svg: {
                                  width: '10px',
                                  height: '10px',
                                  color: 'navy',
                                },
                              }}
                            >
                              <ChevronRight />
                            </Box>
                          </Box>
                        )}
                      </Box>
                    ))}
                  </Box>
                ))}
              </Box>
              <Box className="tbody" {...getTableBodyProps()}>
                <>
                  {rows.map((row, index) => {
                    prepareRow(row);
                    const rowClass = row.original.feature
                      .toLowerCase()
                      .replace(/\s+/g, '-');
                    return (
                      <Box
                        className={`tr content-row ${rowClass} ${
                          rowClass !== 'prices' && !showMore && index > 6
                            ? 'hidden'
                            : ''
                        }`}
                        {...row.getRowProps()}
                        sx={{
                          borderBottom: '1px solid #CCC9BB',
                          position: 'relative',

                          '&:after': {
                            display: 'none',
                            '@media (max-width: 900px)': {
                              display:
                                !showMore && rowClass === 'prices'
                                  ? 'inline-block'
                                  : 'none',
                            },
                            pointerEvents: 'none',
                            content: '""',
                            position: 'absolute',
                            top: '-70px',
                            right: 0,
                            height: '70px',
                            width: '100%',
                            backgroundImage:
                              'linear-gradient(to bottom,  rgba(255,255,255, 0), rgba(255,255,255,1))',
                          },
                          '&.hidden': {
                            '@media (max-width: 900px)': {
                              height: '0',
                              overflow: 'hidden',
                              borderBottom: 'none',
                            },
                          },
                        }}
                      >
                        {row.cells.map((cell) => {
                          const priceCell =
                            rowClass === 'prices' &&
                            cell.column.id !== 'feature';
                          const footerFeature =
                            rowClass === 'prices' &&
                            cell.column.id === 'feature';
                          return (
                            <Box
                              className={`td ${cell.column.id}`}
                              {...cell.getCellProps()}
                            >
                              {!priceCell &&
                                cell.value !== 'Prices' &&
                                cell.render('Cell')}

                              {priceCell && (
                                <Flex flexDirection="column">
                                  <Button
                                    variant="lightBlue"
                                    to="/book-a-service/"
                                    sx={{
                                      minWidth: ['120px', '', '', '160px'],
                                    }}
                                    data-tracking={`link-click:${camelize(
                                      'service centres ' + cell.column.id
                                    )}`}
                                  >
                                    Book Now
                                  </Button>
                                </Flex>
                              )}
                              {cell.value === true && (
                                <Check width="14px" color="navy" />
                              )}

                              {footerFeature && (
                                <Box
                                  as="button"
                                  onClick={() => setShowMore(!showMore)}
                                  sx={{
                                    display: 'none',
                                    bg: 'transparent',
                                    border: 'none',
                                    p: '10px 2px',
                                    ml: '-2px',
                                    alignSelf: 'flex-start',
                                    cursor: 'pointer',
                                    '@media (max-width: 900px)': {
                                      display: 'inline-block',
                                    },
                                    svg: {
                                      width: '10px',
                                      height: '10px',
                                      transform: showMore
                                        ? 'rotate(-90deg)'
                                        : 'rotate(90deg)',
                                    },
                                    '&:hover': {
                                      textDecoration: 'underline',
                                    },
                                  }}
                                >
                                  <Flex alignItems="center">
                                    <Box sx={{ color: 'brightBlue' }}>
                                      <ChevronRight />
                                    </Box>
                                    <Text
                                      as="span"
                                      ml={1}
                                      fontSize={[1]}
                                      fontWeight="bold"
                                      sx={{
                                        letterSpacing: '0.02em',
                                        color: 'navy',
                                      }}
                                    >
                                      Show {!showMore ? 'more' : 'less'}{' '}
                                      features
                                    </Text>
                                  </Flex>
                                </Box>
                              )}
                            </Box>
                          );
                        })}
                      </Box>
                    );
                  })}
                  <Flex>
                    <Flex
                      sx={{
                        flex: '250 0 auto',
                        width: '250px',
                      }}
                    ></Flex>
                    {footerCopy && (
                      <Flex
                        sx={{ flex: '600 0 auto', width: '600px', mt: '30px' }}
                      >
                        {footerCopy}
                      </Flex>
                    )}
                  </Flex>
                </>
              </Box>
            </Box>
          </Box>
        </Box>
      </MaxContainer>
    </Box>
  );
};

export default ComparisonTable;
