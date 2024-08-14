import React from 'react';
import { Box, Text } from 'rebass';
import { Label } from '@rebass/forms';
import { slugify } from '@util/helpers';
import { LogoMotorserve, LogoNameMyCar, PageInner } from './Global';

export const questionStyles = {
  fontFamily: 'black',
  fontSize: ['28px', '36px'],
  lineHeight: ['30px', '30px'],
  textTransform: 'uppercase',

  mt: 6,
  mb: [2, 3, 4],
  gridColumn: '1 / -1',
  span: {
    color: 'white',
  },
};

export const radioContainerStyles = {
  boxShadow: 'light',
  color: 'navy',
  fontSize: [4, '', 6],
  lineHeight: ['20px', '', '26px'],
  position: 'relative',
  display: 'flex',
  img: {
    justifySelf: 'flex-end',
    width: ['100px', '150px'],
    height: 'auto',
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
  },
};

export const radioInputStyles = {
  position: 'absolute',
  opacity: '0',
  cursor: 'pointer',
  '&:checked + label:after': {
    display: 'inline-block',
  },

  '&:focus + label:before': {
    borderWidth: '3px',
  },
  '&:focus + label': {
    borderColor: 'brightBlue',
  },
  '&:checked + label': {
    backgroundColor: 'navy',
    color: 'white',
    borderColor: 'navy',
  },
  '&:checked + label:before': {
    borderWidth: '1px',
  },
};

export const radioLabelStyles = {
  px: 3,
  pl: 7,
  pr: ['120px', '150px'],
  py: 3,
  backgroundColor: 'white',
  borderRadius: '5px',
  borderWidth: '2px',
  borderStyle: 'dashed',
  borderColor: 'white',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'regular',
  position: 'relative',
  minHeight: ['80px', '90px'],
  height: '100%',
  transition: 'all 0.15s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgb(244, 243, 246)',
    borderColor: 'rgb(244, 243, 246)',
    '&:before': {
      borderWidth: '3px',
    },
  },

  '&:active': {
    backgroundColor: 'navy',
    borderColor: 'navy',
    color: 'white',
    '&:before': {
      borderWidth: '1px',
    },
  },
  '&:before, &:after': {
    content: '""',
    position: 'absolute',
    pointerEvents: 'none',
    borderRadius: '50%',
    lineHeight: '1',
  },
  // 	Here is where you can style the radio border
  '&:before': {
    width: '22px',
    height: '22px',
    left: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'inline-block',
    backgroundColor: 'white',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'navy',
  },
  //		Here is where you can style the selected radio inner
  '&:after': {
    width: '14px',
    height: '14px',
    left: '19px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'none',
    backgroundImage: 'url("/svg/radio-check-navy.svg")',
    backgroundSize: '11px auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
};

export const radioColorInputStyles = {
  position: 'absolute',
  opacity: '0',
  cursor: 'pointer',
  '&:checked + label:after': {
    display: 'inline-block',
  },

  '&:focus + label:before': {
    borderWidth: '3px',
  },
  // Red
  '&:focus + label.red': {
    borderColor: '#CE0C0C',
  },
  '&:checked + label.red:before': {
    backgroundColor: 'navy',
  },
  // Black
  '&:focus + label.black': {
    borderColor: '#000',
  },
  '&:checked + label.black:before': {
    backgroundColor: 'white',
  },
  // Blue
  '&:focus + label.blue': {
    borderColor: 'brightBlue',
  },
  '&:checked + label.blue:before': {
    backgroundColor: 'navy',
  },
  // Silver
  '&:focus + label.silver': {
    borderColor: '#D1D1D1',
  },
  '&:checked + label.silver:before': {
    backgroundColor: 'navy',
  },
  // White
  '&:focus + label.white': {
    borderColor: 'white',
  },
  '&:checked + label.white:before': {
    backgroundColor: 'navy',
  },
  // White
  '&:focus + label.other': {
    borderColor: 'navy',
  },
  '&:checked + label.other:before': {
    backgroundColor: 'navy',
  },
  '&:checked + label:before': {
    borderWidth: '1px',
  },
};

export const radioColorLabelStyles = {
  px: 3,
  pl: 7,
  pt: ['50%', '50%', '100px'],
  pb: ['15px'],
  backgroundColor: 'white',
  borderRadius: '5px',
  borderWidth: '2px',
  borderStyle: 'dashed',
  borderColor: 'white',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'regular',
  position: 'relative',
  minHeight: ['80px', '90px'],
  height: '100%',
  transition: 'all 0.15s ease-in-out',
  cursor: 'pointer',

  '&.red': {
    backgroundColor: '#CE0C0C',
    borderColor: '#CE0C0C',
    color: 'white',
    '&:after': {
      backgroundImage: 'url("/svg/radio-check-white.svg")',
    },
  },
  '&.black': {
    backgroundColor: '#000',
    borderColor: '#000',
    color: 'white',
    '&:after': {
      backgroundImage: 'url("/svg/radio-check-navy.svg")',
    },
  },
  '&.blue': {
    backgroundColor: 'brightBlue',
    borderColor: 'brightBlue',
    color: 'navy',
    '&:after': {
      backgroundImage: 'url("/svg/radio-check-white.svg")',
    },
  },

  '&.silver': {
    backgroundColor: '#D1D1D1',
    borderColor: '#D1D1D1',
    color: 'navy',
    '&:after': {
      backgroundImage: 'url("/svg/radio-check-white.svg")',
    },
  },
  '&.white': {
    backgroundColor: 'white',
    borderColor: 'white',
    color: 'navy',
    '&:after': {
      backgroundImage: 'url("/svg/radio-check-white.svg")',
    },
  },
  '&.other': {
    backgroundColor: 'transparent',
    borderColor: 'navy',
    borderStyle: 'solid',
    color: 'navy',
    '&:after': {
      backgroundImage: 'url("/svg/radio-check-white.svg")',
    },
  },
  '&:hover': {
    '&:before': {
      borderWidth: '3px',
    },
  },

  '&:active': {
    '&:before': {
      borderWidth: '1px',
    },
  },
  '&:before, &:after': {
    content: '""',
    position: 'absolute',
    pointerEvents: 'none',
    borderRadius: '50%',
    lineHeight: '1',
  },
  // 	Here is where you can style the radio border
  '&:before': {
    width: '22px',
    height: '22px',
    left: '15px',
    bottom: ['15px', '', '18px'],
    display: 'inline-block',
    backgroundColor: 'white',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'navy',
  },
  //		Here is where you can style the selected radio inner
  '&:after': {
    width: '14px',
    height: '14px',
    left: '19px',
    bottom: ['19px', '', '22px'],
    display: 'none',
    backgroundImage: 'url("/svg/radio-check-navy.svg")',
    backgroundSize: '11px auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
};

export const answerSetStyles = {
  mt: [2, '', '0px'],
  mb: 4,
  width: '100%',
  maxWidth: ['', '470px', '', '960px'],
  display: 'grid',
  gridGap: ['5px', '', '20px 20px'],
  gridTemplateColumns: ['', '', '', '1fr 1fr'],
  gridAutoRows: 'auto',
};

const transitionStyles = {
  '.fade-enter': {
    opacity: 0,
  },
  '.fade-exit': {
    opacity: 1,
  },
  '.fade-enter-active': {
    opacity: 1,
  },
  '.fade-exit-active': {
    opacity: 0,
  },
  '.fade-enter-active, .fade-exit-active': {
    transition: 'opacity 300ms',
  },
};

const QuestionPanel = (props) => {
  return (
    <PageInner>
      <Box sx={{ ...transitionStyles, py: [4, '', 6], px: [0], mb: 8 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            mb: ['30px', '', '30px'],
          }}
        >
          <Box
            sx={{
              width: ['150px', '', '290px', '290px'],
              svg: {
                width: '100%',
              },
            }}
          >
            <LogoMotorserve />
          </Box>
          <Box
            sx={{
              width: ['125px', '', '182px', '232px'],
              svg: {
                width: '100%',
              },
            }}
          >
            <LogoNameMyCar />
          </Box>
        </Box>
        <ProgressBar currentQuestion={props.currentQuestion} />
        <ProgressCounter currentQuestion={props.currentQuestion} />
        <Box
          sx={{
            maxWidth: ['', '', '960px'],
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
          }}
          {...props}
        >
          {props.children}
        </Box>
      </Box>
    </PageInner>
  );
};

export const ProgressBar = ({ currentQuestion }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '4px',
        backgroundColor: 'white50',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: 'navy',
          height: '100%',
          transition: 'width 200ms ease-in-out',
        }}
        width={`calc((100% / 5) * (${currentQuestion.id} + 1))`}
      ></Box>
    </Box>
  );
};
export const ProgressCounter = ({ currentQuestion }) => {
  return (
    <Text
      sx={{
        fontSize: [2, 3],
        textAlign: 'right',
        alignSelf: 'flex-end',
        color: 'white',
        mt: [2, '', 3],
      }}
    >
      Question {currentQuestion.id + 1}/5
    </Text>
  );
};

export const AnswerSet = (props) => {
  return <Box sx={{ ...answerSetStyles }} {...props} />;
};
export const AnswerColorSet = (props) => {
  return (
    <Box
      sx={{ ...answerSetStyles, gridTemplateColumns: ['1fr 1fr'] }}
      {...props}
    />
  );
};

export const RadioContainer = ({ qID, answer, children }) => {
  return (
    <Box className="radio" sx={{ ...radioContainerStyles }}>
      {children[0]}
      <Label
        htmlFor={`question-${qID}-${slugify(answer)}`}
        sx={{ ...radioLabelStyles }}
      >
        {answer}
      </Label>
      {children[1]}
    </Box>
  );
};

export const RadioColorContainer = ({ qID, answer, children }) => {
  return (
    <Box className="radio" sx={{ ...radioContainerStyles }}>
      {children}
      <Label
        htmlFor={`question-${qID}-${slugify(answer)}`}
        sx={{ ...radioColorLabelStyles }}
        className={slugify(answer)}
      >
        {answer}
      </Label>
    </Box>
  );
};

export default QuestionPanel;
