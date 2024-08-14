import React from 'react';
import { theme } from '../../styles/theme';
import Accordion from './Accordion';
import { Box, Flex } from 'rebass';
import Heading from '../global/Heading';
import {
  MaxContainer,
  gridFallbackStylesColumn,
  containerInnerStyles,
} from '../global/Container';

const GroupIcon = (props) => {
  const { svg, size = '1em' } = props;

  const svgWithoutStyles = svg.replace(/style="[^"]*"/g, ''); // Remove inline styles

  return (
    <Box
      as="span"
      sx={{
        display: 'block',
        width: size,
        height: size,
        color: 'navy',
        svg: {
          width: '100%',
          height: '100%',
        },
      }}
      dangerouslySetInnerHTML={{ __html: svgWithoutStyles }}
    />
  );
};

const FaqsComponent = ({ faqGroups }) => {
  return (
    faqGroups.length > 0 && (
      <MaxContainer className="card-grid">
        <Box
          sx={{
            ...gridFallbackStylesColumn,
          }}
        >
          <Box sx={{ ...containerInnerStyles, width: '100%' }}>
            <Heading.H2 sx={{ mb: '32px' }}>
              Frequently Asked Questions
            </Heading.H2>
            {faqGroups.map((group, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    mb: '32px',
                    textDecoration: 'none',
                    boxShadow: theme.shadows.light,
                    color: 'navy',
                    padding: ['20px 15px 10px'],
                    borderRadius: index === faqGroups.length - 1 && [
                      '',
                      '',
                      '0 0 30px 0',
                    ],
                  }}
                >
                  <Flex
                    alignItems="center"
                    sx={{ mb: '16px', padding: ['10px 10px'] }}
                  >
                    {group.icon !== null && (
                      <GroupIcon svg={group.icon.svg} size="20px" />
                    )}
                    <Heading.H3
                      sx={{ ml: group.icon && group.icon.svg && '12px' }}
                    >
                      {group.title}
                    </Heading.H3>
                  </Flex>
                  {group.faqs.map((faq, fIndex) => (
                    <Accordion
                      key={fIndex}
                      title={faq.question}
                      content={faq._rawAnswer}
                      isLast={fIndex === group.faqs.length - 1}
                    />
                  ))}
                </Box>
              );
            })}
          </Box>
        </Box>
      </MaxContainer>
    )
  );
};

export default FaqsComponent;
