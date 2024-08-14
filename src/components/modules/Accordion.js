import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp } from '@styles/icons';
import styled from 'styled-components';
import { Box, Button, Flex, Text } from 'rebass';
import Heading from '../global/Heading';
import SimpleText from '../modules/SimpleText';
const AccordionWrapper = styled.div`
  border-bottom: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 16px;
`;

const AccordionHeader = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px;
  background-color: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
`;

const AccordionTitle = styled.h3`
  flex: 1;
  margin: 0;
  color: navy;
`;

const AccordionContent = styled.div`
  max-height: ${({ isOpen, contentHeight }) =>
    isOpen ? `${contentHeight}px` : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const Accordion = ({ title, content, index, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  // Calculate the content height dynamically
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <Box
      sx={{
        borderBottom: !isLast && '1px solid',
        borderColor: 'navy10',
        mb: 2,
      }}
      key={index}
    >
      <Button
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          padding: '12px',
          backgroundColor: 'transparent',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
          borderRadius: 0,
        }}
        onClick={toggleAccordion}
      >
        <Heading.H4
          sx={{
            flex: '1',
            margin: 0,
            color: 'navy',
            textTransform: 'none',
            fontSize: '16px',
            pb: '10px',
          }}
        >
          {title}
        </Heading.H4>
        <Box
          sx={{
            width: '20px',
            height: '20px',
            color: 'brightBlue',
            svg: { width: '100%', height: 'auto', color: 'brightBlue' },
          }}
        >
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </Box>
      </Button>
      <AccordionContent isOpen={isOpen} contentHeight={contentHeight}>
        <Box sx={{ p: '12px', pt: 0 }} ref={contentRef}>
          <SimpleText simpleText={content} />
        </Box>
      </AccordionContent>
    </Box>
  );
};

export default Accordion;
