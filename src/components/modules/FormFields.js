import React from 'react';
import { Box } from 'rebass';

// For Active Campaign
export const HiddenFormInputs = ({ formId, register }) => {
  return (
    <>
      <input
        type="hidden"
        name="u"
        value={formId}
        {...register('u', { required: true })}
      />
      <input
        type="hidden"
        name="f"
        value={formId}
        {...register('f', { required: true })}
      />
      <input type="hidden" name="s" {...register('s', { required: true })} />
      <input
        type="hidden"
        name="c"
        value="0"
        {...register('c', { required: true })}
      />
      <input
        type="hidden"
        name="m"
        value="0"
        {...register('m', { required: true })}
      />
      <input
        type="hidden"
        name="act"
        value="sub"
        {...register('act', { required: true })}
      />
      <input
        type="hidden"
        name="v"
        value="2"
        {...register('v', { required: true })}
      />
    </>
  );
};

export const FormInputItem = (props) => {
  // console.log('forminputitem props ', props);
  return (
    <Box
      sx={{
        position: 'relative',
        gridColumn: ['1 / -1', '', props.fullWidth ? 'span 2' : 'span 1'],
        textAlign: 'left',
        maxWidth: '100%',
        label: {
          fontSize: 0,
          textTransform: 'uppercase',
          fontFamily: 'bold',
          letterSpacing: '0.2px',
          display: ' inline-block',
        },
        input: {
          position: 'relative',
          color: 'navy',
          width: '100%',
          minHeight: '50px',
          borderStyle: 'solid',
          borderColor: 'navy20',
          borderWidth: '1px',
          backgroundColor: 'white',
          fontSize: [2, 3, 3],
          borderRadius: '4px',
          mt: ['8px'],
          p: '10px',
          '&::placeholder': {
            /* Chrome, Firefox, Opera, Safari 10.1+ */ color: 'navy80',
            opacity: 1 /* Firefox */,
          },

          '&:-ms-input-placeholder': {
            /* Internet Explorer 10-11 */ color: 'navy80',
          },
          '&:focus': {
            outlineColor: 'navy',
            outlineOffset: '0px',
            outlineWidth: '2px',
          },
          '&:-webkit-direct-focus': {
            outlineColor: 'navy',
            outlineOffset: '0px',
            outlineWidth: '2px',
          },
          '&.error': {
            borderColor: 'red',
            borderWidth: '2px',
            color: 'red',
          },
        },
        textarea: {
          resize: 'none',
          color: 'navy',
          width: '100%',
          minHeight: '50px',
          borderStyle: 'solid',
          borderColor: 'navy20',
          borderWidth: '1px',
          backgroundColor: 'white',
          fontSize: [2, 3, 3],
          borderRadius: '4px',
          mt: ['8px'],
          p: '10px',
          '&::placeholder': {
            /* Chrome, Firefox, Opera, Safari 10.1+ */ color: 'navy80',
            opacity: 1 /* Firefox */,
          },
          '&:-ms-input-placeholder': {
            /* Internet Explorer 10-11 */ color: 'navy80',
          },
          '&:focus': {
            outlineColor: 'navy',
            outlineOffset: '0px',
            outlineWidth: '2px',
          },
          '&:-webkit-direct-focus': {
            outlineColor: 'navy',
            outlineOffset: '0px',
            outlineWidth: '2px',
          },
          '&.error': {
            borderColor: 'red',
            borderWidth: '2px',
            color: 'red',
          },
        },
        select: {},
        p: {
          mb: 0,
        },
      }}
      {...props}
    />
  );
};

export const FormCheckboxItem = (props) => {
  return (
    <Box
      sx={{
        gridColumn: ['1 / -1'],
        textAlign: 'left',
        width: ['100%', '360px', '420px'],
        mx: 'auto',
        display: 'flex',
        position: 'relative',
        mt: '10px',
        a: {
          color: 'navy',
          '&:hover': {
            textDecoration: 'none',
          },
        },
        label: {
          fontSize: [2, 3, 4],
          letterSpacing: '0.2px',
          display: ' inline-block',
          maxWidth: ['300px', '360px', 'none'],
          pl: ['32px', '38px'],

          '&:before, &:after': {
            content: '""',
            position: 'absolute',
            pointerEvents: 'none',
            borderRadius: '4px',
            lineHeight: '1',
          },
          // 	Here is where you can style the radio border
          '&:before': {
            width: '24px',
            height: '24px',
            left: '0px',
            top: '-2px',
            display: 'inline-block',
            backgroundColor: 'white',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'navy',
          },
          //		Here is where you can style the selected radio inner
          '&:after': {
            width: '16px',
            height: '16px',
            left: '4px',
            top: '3px',
            display: 'none',
            backgroundImage: 'url("/svg/radio-check-navy.svg")',
            backgroundSize: '14px auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          },
        },
        input: {
          position: 'absolute',
          opacity: '0',
          cursor: 'pointer',
          pointerEvents: 'none',
          '&:checked + label:after': {
            display: 'inline-block',
          },
          '&:checked + label:before': {
            borderWidth: '2px',
          },
          '&:focus + label:before': {
            borderWidth: '3px',
          },
          '&:focus + label': {
            borderColor: 'brightBlue',
          },
          '&:checked + label': {
            borderColor: 'navy',
          },
        },

        p: {
          mb: 0,
        },
      }}
      {...props}
    />
  );
};

export const SelectWrapper = (props) => {
  return (
    <Box
      className={props.className}
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '50px',
        borderStyle: 'solid',
        borderColor: 'navy20',
        borderRadius: '4px',
        borderWidth: '1px',
        backgroundColor: 'transparent',
        maxWidth: '100%',
        mt: ['8px'],
        '&.error': {
          borderColor: 'red',
          borderWidth: '2px',
          color: 'red',
        },
        select: {
          color: 'navy',
          border: 'none',
          backgroundColor: 'white',
          borderRadius: '4px',
          width: '100%',
          height: '100%',
          minHeight: '50px',
          padding: '10px',
          fontSize: [2, 3, 3],
          appearance: 'none',
          '&:disabled': {
            opacity: '0.2',
            '+ svg': {
              color: 'warmGrey',
            },
          },
          '&:focus': {
            outlineColor: 'navy',
            outlineOffset: '0px',
            outlineWidth: '2px',
          },
          '&:-webkit-direct-focus': {
            outlineColor: 'navy',
            outlineOffset: '0px',
            outlineWidth: '2px',
          },
        },
        svg: {
          color: 'brightBlue',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '15px',
          width: '16px',
          height: 'auto',
          pointerEvents: 'none',
        },
        ...props.sx,
      }}
    >
      {props.children}
      <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
        <title>icon/chevron-down</title>
        <g
          id="icon/chevron-down"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <polygon
            id="Path-Copy"
            fill="currentColor"
            fillRule="nonzero"
            transform="translate(15.666667, 16.000000) rotate(-270.000000) translate(-15.666667, -16.000000) "
            points="9.06714628 1.29851685e-12 5 3.76888889 18.1990408 16 5 28.2311111 9.06714628 32 26.3333333 16"
          ></polygon>
        </g>
      </svg>
    </Box>
  );
};
